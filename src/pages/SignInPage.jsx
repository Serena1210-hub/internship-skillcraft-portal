import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignInPage = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signIn(email, password);

      // ✅ Redirect logic
      // Option 1: Always go to dashboard
      // navigate('/dashboard');

      // Option 2: Go to home page
      navigate('/home');

      // Option 3: Go back to previous page
      // navigate(-1);

    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white">

      {/* LEFT SIDE - FORM */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md w-full">

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8">
            <img src="/kamlewa1.svg" alt="SkillCraft Logo" className="w-24 h-24" />
            <span className="text-xl font-bold text-[#ffc916]">SkillCraft</span>
          </div>

          <h2 className="text-3xl font-bold text-black mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-8">Sign in to access your student portal</p>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                           focus:ring-2 focus:ring-[#0e0abf]
                           focus:border-transparent outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold
                         bg-[#ffc916] text-black
                         hover:bg-[#e1b787]
                         disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-[#0e0abf] font-medium hover:underline"
            >
              Create one
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

      {/* RIGHT SIDE - INFO */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-black via-[#0e0abf] to-black p-12">
        <div className="h-full flex flex-col justify-center text-white">
          <h3 className="text-4xl font-bold mb-6 text-[#ffc916]">Student Portal Access</h3>
          <p className="text-lg text-white/80 mb-8">
            Access your dashboard to track applications, complete assessments, and explore resources.
          </p>
          <div className="space-y-4">
            {[
              'Track application status in real-time',
              'Access exclusive learning resources',
              'Connect with mentors and peers',
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-8 bg-[#ffc916] text-black rounded-lg flex items-center justify-center mr-3 font-bold">
                  ✓
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignInPage;
