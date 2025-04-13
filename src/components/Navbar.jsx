import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Accueil</Link>
      <Link to="/agenda" style={{ marginRight: "1rem" }}>Agenda</Link>
      <Link to="/meteo" style={{ marginRight: "1rem" }}>Météo</Link>
      <Link to="/climatisation" style={{ marginRight: "1rem" }}>Climatisation</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
};

export default Navbar;

