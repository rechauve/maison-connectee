import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const account = accounts[0];
        const tokenResponse = await instance.acquireTokenSilent({
          scopes: ["openid", "profile"],
          account
        });

        const res = await axios.get("/api/check-access", {
          headers: {
            Authorization: `Bearer ${tokenResponse.accessToken}`
          }
        });

        if (res.data.access) {
          setAuthorized(true);
        }
      } catch (error) {
        console.error("Access check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      checkAccess();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, instance, accounts]);

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
