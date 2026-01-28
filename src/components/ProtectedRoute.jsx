import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // While checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-[#0e0abf] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not logged in → redirect to signin (remember where user came from)
  if (!user) {
    return (
      <Navigate
        to="/signin"
        replace
        state={{ from: location }}
      />

      
    );
  }

  // Logged in → allow access
  return <Outlet />;
};

export default ProtectedRoute;
