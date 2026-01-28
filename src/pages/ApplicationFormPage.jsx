import React, { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    school: "",
    leadershipEssay: "",
    motivation: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!cvFile) {
        alert("Please upload a CV before submitting.");
        setLoading(false);
        return;
      }

      // 1️⃣ Upload CV to Firebase Storage
      const cvRef = ref(
        storage,
        `applications/${Date.now()}_${cvFile.name}`
      );
      await uploadBytes(cvRef, cvFile);
      const cvURL = await getDownloadURL(cvRef);

      // 2️⃣ Save application to Firestore
      await addDoc(collection(db, "application"), {
        ...formData,
        cv: cvURL,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      alert("Application submitted successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-black via-[#0e0abf] to-black p-12">
        <div className="h-full flex flex-col justify-center text-white">
          <h3 className="text-4xl font-bold mb-6 text-[#ffc916]">
            SkillCraft Internship Application
          </h3>

          <p className="text-lg text-white/80 mb-10 max-w-md">
            Build real-world skills, leadership experience, and a strong tech foundation.
          </p>

          <div className="space-y-4">
            {[
              "100% sponsored internship program",
              "Hands-on training & mentorship",
              "Real-world projects & assessments",
              "Career growth opportunities",
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <Check className="w-6 h-6 mr-3 text-[#ffc916]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full">
          <h2 className="text-3xl font-bold text-black mb-2">
            Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <select
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            >
              <option value="">Select Institution</option>
              <option>University of Buea</option>
              <option>University of Bamenda</option>
              <option>University of Yaounde I</option>
              <option>Other</option>
            </select>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setCvFile(e.target.files[0])}
              required
            />

            <textarea
              name="leadershipEssay"
              placeholder="Leadership experience"
              value={formData.leadershipEssay}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <textarea
              name="motivation"
              placeholder="Why should we select you?"
              value={formData.motivation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#ffc916] font-semibold rounded-lg"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
