import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  // If the user is not logged in, redirect them to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, show the page they requested
  return <Outlet />;
}