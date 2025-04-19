import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Meteo from './pages/Meteo';
import Climatisation from './pages/Climatisation';
import Services from './pages/Services';
import AccessDenied from './pages/AccessDenied';
import PrivateRoute from './components/PrivateRoute';

import LoginButton from "./components/LoginButton";
import AuthenticationRedirectHandler from "./components/AuthenticationRedirectHandler";


function App() {
  return (
    <div>
      <AuthenticationRedirectHandler />
      <LoginButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/agenda" element={
          <PrivateRoute>
            <Agenda />
          </PrivateRoute>
        } />
        <Route path="/climatisation" element={
          <PrivateRoute>
            <Climatisation />
          </PrivateRoute>
        } />
        <Route path="/services" element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        } />
        <Route path="/access-denied" element={<AccessDenied />} />
      </Routes>
    </div>
  );
}

export default App;
