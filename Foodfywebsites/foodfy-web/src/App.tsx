
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import PostLanding from './pages/PostLanding';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import './App.css';

import SobreNosotros from './pages/SobreNosotros';
import TerminosServicio from './pages/TerminosServicio';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import Login from './pages/Login';
import EmpezarDelivery from './pages/EmpezarDelivery';
import Empezar from './pages/Empezar';
import YaHacesDelivery from './pages/YaHacesDelivery';
import NegocioDelivery from './pages/NegocioDelivery';
import Precios from './pages/Precios';
import OnboardingSidekick from './pages/OnboardingSidekick';

// Componente que maneja el layout condicional
function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === '/contacto' || location.pathname === '/login' || location.pathname === '/onboarding';

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post-landing" element={<PostLanding />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/terminos" element={<TerminosServicio />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/login" element={<Login />} />
        <Route path="/empezar" element={<Empezar />} />
        <Route path="/migrar" element={<YaHacesDelivery />} />
        <Route path="/clientes" element={<NegocioDelivery />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/onboarding" element={<OnboardingSidekick />} />
      </Routes>
      {!hideLayout && <Footer />}
      {!hideLayout && <CookieConsent />}
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;

