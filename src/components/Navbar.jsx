import { NavLink } from "react-router-dom";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export default function Navbar() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  const navLinkClass =
    "relative hover:text-yellow-300 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="bg-blue-500 text-white px-4 py-2 flex items-center justify-between shadow-md">
      {/* Liens de navigation avec espacement et animation */}
      <div className="flex items-center space-x-6 text-lg font-medium">
        <NavLink to="/" className={navLinkClass}>
          Accueil
        </NavLink>
        <NavLink to="/meteo" className={navLinkClass}>
          Météo
        </NavLink>

        {isAuthenticated && (
          <>
            <NavLink to="/agenda" className={navLinkClass}>
              Agenda
            </NavLink>
            <NavLink to="/climatisation" className={navLinkClass}>
              Climatisation
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </>
        )}
      </div>

      {/* Bouton de connexion/déconnexion */}
      <div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
          >
            Se déconnecter
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Se connecter
          </button>
        )}
      </div>
    </nav>
  );
}