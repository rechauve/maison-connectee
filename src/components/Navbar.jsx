import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5', marginBottom: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>🏠 Accueil</Link>
      <Link to="/agenda" style={{ marginRight: '1rem' }}>📅 Agenda</Link>
      <Link to="/tasks" style={{ marginRight: '1rem' }}>✅ Tâches</Link>
      <Link to="/climatiseurs" style={{ marginRight: '1rem' }}>❄️ Clim</Link>
      <Link to="/services" style={{ marginRight: '1rem' }}>🔗 Services</Link>
      <Link to="/settings">⚙️ Paramètres</Link>
    </nav>
  )
}

export default Navbar
