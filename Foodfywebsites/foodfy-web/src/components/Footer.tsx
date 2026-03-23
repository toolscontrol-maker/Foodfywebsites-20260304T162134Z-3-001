import React from 'react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

interface FooterProps {
    isLight?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLight }) => {
    return (
        <footer className={`footer ${isLight ? 'is-light' : ''}`}>
            <div className="container">
                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="/" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0.75rem' }}>
                            <img src={isLight ? "/logo-negro.png" : "/logo.png"} alt="Foodfy" style={{
                                height: '56px',
                                width: 'auto'
                            }} />
                            <span style={{
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                fontWeight: 900,
                                fontSize: '1.8rem',
                                letterSpacing: '-0.06em',
                                color: '#fff',
                                textTransform: 'uppercase'
                            }}>FOODFY</span>
                        </a>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            El ecosistema definitivo para restaurantes y dark kitchens. Centralizamos, automatizamos y optimizamos.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-links-col">
                        <h4 className="footer-title">Producto</h4>
                        <ul className="footer-links">
                            <li><a href="#servicios-futuros">Agentes IA</a></li>
                            <li><a href="#servicios-futuros">Web Maker</a></li>
                            <li><a href="#servicios-futuros">Dashboard</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-title">Compañía</h4>
                        <ul className="footer-links">
                            <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                            <li><a href="/terminos">Términos de Servicio</a></li>
                            <li><a href="/privacidad">Política de Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4 className="footer-title">Suscríbete a novedades</h4>
                        <p className="text-secondary" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            Recibe consejos y actualizaciones sobre las nuevas herramientas que lanzamos cada mes.
                        </p>
                        <div className="newsletter-input-group">
                            <div className="input-with-icon">
                                <Mail size={18} className="input-icon" />
                                <input type="email" placeholder="Tu email..." className="dark-input pl-10" />
                            </div>
                            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Unirse</button>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Foodfy. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

