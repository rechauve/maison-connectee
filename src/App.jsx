import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Agenda from './pages/Agenda'
import Tasks from './pages/Tasks'
import Climatiseurs from './pages/Climatiseurs'
import Services from './pages/Services'
import Settings from './pages/Settings'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/climatiseurs" element={<Climatiseurs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
