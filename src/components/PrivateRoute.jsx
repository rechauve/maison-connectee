// src/components/PrivateRoute.jsx
import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? children : <Navigate to="/access-denied" replace />;
};

export default PrivateRoute;
