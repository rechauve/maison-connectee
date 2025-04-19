import { NavLink } from "react-router-dom";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig"; // <-- Vérifie que ce fichier existe bien

export default function Navbar() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <nav className="bg-blue-500 text-white px-4 py-2 flex gap-4 items-center justify-between">
      <div className="flex gap-4">
        <NavLink to="/" className="hover:underline">
          Accueil
        </NavLink>
        <NavLink to="/tasks" className="hover:underline">
          Tâches
        </NavLink>
        <NavLink to="/settings" className="hover:underline">
          Paramètres
        </NavLink>

        {isAuthenticated && (
          <>
            <NavLink to="/agenda" className="hover:underline">
              Agenda
            </NavLink>
            <NavLink to="/climatiseurs" className="hover:underline">
              Climatisation
            </NavLink>
            <NavLink to="/services" className="hover:underline">
              Services
            </NavLink>
          </>
        )}
      </div>

      <div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
          >
            Se déconnecter
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
          >
            Se connecter
          </button>
        )}
      </div>
    </nav>
  );
}

