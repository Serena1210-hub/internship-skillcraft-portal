import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // your firebase config
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    track: "",
    portfolio: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "applications"), {
        ...formData,
        status: "pending", // for admin review
        createdAt: serverTimestamp(),
      });

      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        university: "",
        track: "",
        portfolio: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PublicHeader />

      <section className="py-20">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-[#0e0abf] mb-8 text-center">
            Internship Application
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
            />

            <input
              type="text"
              name="university"
              placeholder="University / Institution"
              required
              value={formData.university}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
            />

            <select
              name="track"
              required
              value={formData.track}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
            >
              <option value="">Select Track</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>

            <input
              type="url"
              name="portfolio"
              placeholder="Portfolio / GitHub Link"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full border p-4 rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-[#0e0abf] transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationForm;
