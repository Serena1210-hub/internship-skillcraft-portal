import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

/* Layout */
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

/* Public Pages */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EligibilityPage from "./pages/EligibilityPage";
import Application from "./pages/Application";
import ApplicationFormPage from "./pages/ApplicationFormPage";

/* Auth Pages */
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

/* User Pages */
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import ResourcesPage from "./pages/ResourcesPage";
import Assessment from "./pages/Assessment";

/* Admin Pages */
import AdminDashboard from "./pages/AdminDashboard";

/* Loading Spinner */
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-[#0e0abf] border-t-transparent rounded-full animate-spin" />
  </div>
);

/* Public Route (blocks auth pages if logged in) */
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to="/dashboard" replace />;

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* ===== PUBLIC ===== */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/application" element={<Application />} />

          {/* ===== AUTH ===== */}
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />

          {/* ===== USER PROTECTED ===== */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/applicationformpage" element={<ApplicationFormPage />} />
          </Route>

          {/* ===== ADMIN ONLY ===== */}
          <Route element={<AdminRoute />}>
            <Route path="/admindashboard" element={<AdminDashboard />} />
          </Route>

          {/* ===== FALLBACK ===== */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
