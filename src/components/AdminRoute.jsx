import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#0e0abf] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not logged in → sign in
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Logged in but not admin → redirect to normal user dashboard
  if (user.role !== "admin") {
    return <Navigate to="/admindashboard" replace />; 
  }

  // Admin → allow access
  return <Outlet />;
};

export default AdminRoute;
