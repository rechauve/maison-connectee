// src/components/PrivateRoute.jsx
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const allowedUsers = import.meta.env.VITE_ALLOWED_USERS;

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || accounts.length === 0) {
      setLoading(false);
      return;
    }

    const account = accounts[0];
    const userEmail =
      account.username ||
      account.idTokenClaims?.emails?.[0] ||
      account.idTokenClaims?.email ||
      account.idTokenClaims?.preferred_username;

      if (!userEmail) {
        console.warn("Impossible de récupérer l'e-mail de l'utilisateur.");
        console.log("Account complet :", account);
        console.log("Claims :", account.idTokenClaims);
      } else {
        console.log("Connected user:", userEmail);
      }

    if (allowedUsers.includes(userEmail)) {
      setAuthorized(true);
    }

    setLoading(false);
  }, [isAuthenticated, accounts]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!isAuthenticated || !authorized) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};

export default PrivateRoute;
