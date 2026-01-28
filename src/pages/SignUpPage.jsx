import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Check } from 'lucide-react';


const SignUpPage = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signUp(formData.email, formData.password, formData.fullName);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create account. Please try again.');
      console.error(err);
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
            Start Your Journey
          </h3>

          <p className="text-lg text-white/80 mb-10">
            Create your account to apply for the SkillCraft Internship Scholarship Program.
          </p>

          <div className="space-y-4">
            {[
              'Access exclusive training resources',
              'Track application status in real-time',
              'Complete assessments online',
              'Connect with mentors and peers',
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
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md w-full">

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/kamlewa1.svg" alt="SkillCraft Logo" className="w-24 h-24" />
            <span className="text-xl font-bold text-[#ffc916]">
              SkillCraft
            </span>
          </div>

          <h2 className="text-3xl font-bold text-black mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-600 mb-8">
            Join the SkillCraft community
          </p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {[
              { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'John Doe' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'you@email.com' },
              { label: 'Password', name: 'password', type: 'password', placeholder: '••••••••' },
              { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: '••••••••' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                             focus:ring-2 focus:ring-[#0e0abf]
                             focus:border-transparent outline-none transition"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold
                         bg-[#ffc916] text-black
                         hover:bg-[#e1b787]
                         disabled:opacity-50 transition"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/signin')}
              className="text-[#0e0abf] font-medium hover:underline"
            >
              Sign in
            </button>
          </p>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-gray-500 hover:text-black"
            >
              ← Back to Home
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
