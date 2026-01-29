import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';
import { useAuth } from '../context/AuthContext';
import PublicHeader from "../components/PublicHeader";
import Footer from "../components/Footer";

const ApplicationForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    graduationYear: "",
    track: "",
    portfolio: "",
    coverLetter: "",
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
      // Insert application into Supabase
      const { data, error } = await supabase
        .from('intern_applications')
        .insert([
          {
            user_id: user?.id || null,
            phone: formData.phone,
            university: formData.university,
            major: formData.major,
            graduation_year: parseInt(formData.graduationYear),
            cover_letter: formData.coverLetter,
            status: 'pending',
            // Store additional info in a JSON field if needed, or add columns
          }
        ]);

      if (error) throw error;

      // Create notification for the user
      if (user) {
        await supabase.from('notifications').insert([
          {
            user_id: user.id,
            title: 'Application Submitted',
            message: 'Your internship application has been submitted successfully. We will review it shortly.',
            type: 'success'
          }
        ]);
      }

      alert("Application submitted successfully!");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        university: "",
        major: "",
        graduationYear: "",
        track: "",
        portfolio: "",
        coverLetter: "",
      });

      // Navigate to dashboard if logged in
      if (user) {
        navigate('/dashboard');
      }

    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University / Institution *
              </label>
              <input
                type="text"
                name="university"
                placeholder="University / Institution"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Major / Field of Study *
              </label>
              <input
                type="text"
                name="major"
                placeholder="Major / Field of Study"
                required
                value={formData.major}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Graduation Year *
              </label>
              <input
                type="number"
                name="graduationYear"
                placeholder="2026"
                required
                min="2024"
                max="2030"
                value={formData.graduationYear}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Track *
              </label>
              <select
                name="track"
                required
                value={formData.track}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              >
                <option value="">Select Track</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio / GitHub Link (Optional)
              </label>
              <input
                type="url"
                name="portfolio"
                placeholder="https://github.com/yourusername or https://yourportfolio.com"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter / Statement of Purpose *
              </label>
              <textarea
                name="coverLetter"
                placeholder="Tell us why you're interested in this internship and what you hope to achieve..."
                required
                value={formData.coverLetter}
                onChange={handleChange}
                rows={6}
                className="w-full border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-[#0e0abf] focus:border-transparent outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-[#0e0abf] transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            By submitting this application, you agree to our terms and conditions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationForm;
