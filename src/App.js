import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Meteo from './pages/Meteo';
import Climatisation from './pages/Climatisation';
import Services from './pages/Services';

import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div>
      <LoginButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/climatisation" element={<Climatisation />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
