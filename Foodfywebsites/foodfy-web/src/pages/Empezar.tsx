import React from 'react';
import { ArrowRight, Play, Headphones, BookOpen, Users, MessageCircle, Sparkles, Zap, Globe, CreditCard } from 'lucide-react';
import './Empezar.css';

const Empezar: React.FC = () => {
    return (
        <div className="empezar-page">
            {/* Hero Section */}
            <section className="empezar-hero">
                <div className="empezar-container">
                    <div className="hero-content">
                        <span className="hero-badge">Comienza hoy</span>
                        <h1 className="hero-title">
                            Ponte en marcha y empieza a crecer
                        </h1>
                        <p className="hero-subtitle">Haz que vuelvan</p>
                        <p className="hero-stat">
                            Cada momento, un restaurante hace su primera venta con Foodfy.
                        </p>
                        <a href="/onboarding" className="hero-cta">
                            Comenzar a vender
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Sidekick Section */}
            <section className="empezar-sidekick">
                <div className="empezar-container">
                    <div className="sidekick-grid">
                        <div className="sidekick-content">
                            <div className="sidekick-icon">
                                <Sparkles size={32} className="sparkles-icon" />
                            </div>
                            <h2>Sidekick, tu asistente de IA integrado, puede ayudarte</h2>
                            <p>
                                Sidekick está integrado en todas las tiendas Foodfy. 
                                Configura tu negocio, optimiza tu menú y responde dudas de clientes automáticamente.
                            </p>
                            <a href="/sidekick" className="link-arrow">
                                Descubre Sidekick <ArrowRight size={16} />
                            </a>
                        </div>
                        <div className="sidekick-visual">
                            <img src="/sidekick-preview.png" alt="Sidekick AI Assistant" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Resources Section */}
            <section className="empezar-experts">
                <div className="empezar-container">
                    <h2 className="section-title">¿Necesitas el punto de vista de un experto?</h2>
                    <p className="section-subtitle">
                        Pódcasts, cursos, foros y blogs te enseñan lo que necesitas saber
                    </p>
                    
                    <div className="resources-grid">
                        <a href="#" className="resource-card">
                            <div className="resource-icon">
                                <Headphones size={24} />
                            </div>
                            <h3>Pódcasts</h3>
                            <p>Escucha historias de éxito y consejos de expertos</p>
                        </a>
                        <a href="#" className="resource-card">
                            <div className="resource-icon">
                                <BookOpen size={24} />
                            </div>
                            <h3>Cursos</h3>
                            <p>Aprende a tu ritmo con nuestros cursos gratuitos</p>
                        </a>
                        <a href="#" className="resource-card">
                            <div className="resource-icon">
                                <Users size={24} />
                            </div>
                            <h3>Foros</h3>
                            <p>Conecta con otros restauradores y comparte experiencias</p>
                        </a>
                        <a href="#" className="resource-card">
                            <div className="resource-icon">
                                <MessageCircle size={24} />
                            </div>
                            <h3>Blog</h3>
                            <p>Guías, consejos y las últimas novedades del sector</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Videos Section */}
            <section className="empezar-videos">
                <div className="empezar-container">
                    <h2 className="section-title">Míralo con tus propios ojos</h2>
                    <p className="section-subtitle">Mira lo fácil que es crecer</p>
                    
                    <div className="videos-grid">
                        <div className="video-card featured">
                            <div className="video-thumbnail">
                                <img src="/video-crear.png" alt="Cómo crear tu tienda" />
                                <div className="play-button">
                                    <Play size={32} fill="white" />
                                </div>
                                <span className="video-duration">1:31</span>
                            </div>
                            <h3>CÓMO crear tu tienda</h3>
                        </div>
                        <div className="video-card">
                            <div className="video-thumbnail">
                                <img src="/video-personalizar.png" alt="Cómo personalizar" />
                                <div className="play-button">
                                    <Play size={24} fill="white" />
                                </div>
                                <span className="video-duration">7:19</span>
                            </div>
                            <h3>CÓMO personalizarlo todo</h3>
                        </div>
                        <div className="video-card">
                            <div className="video-thumbnail">
                                <img src="/video-productos.png" alt="Cómo agregar productos" />
                                <div className="play-button">
                                    <Play size={24} fill="white" />
                                </div>
                                <span className="video-duration">13:39</span>
                            </div>
                            <h3>CÓMO agregar productos</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing/CTA Section */}
            <section className="empezar-pricing">
                <div className="empezar-container">
                    <h2 className="section-title">¿Todo listo para empezar a vender?</h2>
                    
                    <div className="pricing-cards">
                        <div className="pricing-card">
                            <div className="pricing-icon">
                                <Zap size={32} />
                            </div>
                            <h3>3 días gratis</h3>
                            <p>Prueba todas las funciones sin compromiso</p>
                        </div>
                        <div className="pricing-card featured">
                            <div className="pricing-icon">
                                <CreditCard size={32} />
                            </div>
                            <h3>Amplía tu prueba 1 €</h3>
                            <p>Después de los 3 días, continúa por solo 1 €</p>
                        </div>
                        <div className="pricing-card">
                            <div className="pricing-icon">
                                <Globe size={32} />
                            </div>
                            <h3>Gana hasta 8000 € en créditos</h3>
                            <p>Programa de recompensas para nuevos usuarios</p>
                        </div>
                    </div>

                    <div className="pricing-cta">
                        <a href="/onboarding" className="hero-cta large">
                            Comenzar ahora
                            <ArrowRight size={20} />
                        </a>
                        <p className="pricing-note">
                            Aceptas recibir correos electrónicos de marketing de Foodfy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Links Section */}
            <section className="empezar-links">
                <div className="empezar-container">
                    <div className="links-grid">
                        <div className="links-column">
                            <h4>Foodfy</h4>
                            <ul>
                                <li><a href="#">¿Qué es Foodfy?</a></li>
                                <li><a href="#">Foodfy Editions</a></li>
                                <li><a href="#">Inversores</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h4>Ecosistema</h4>
                            <ul>
                                <li><a href="#">Dev docs</a></li>
                                <li><a href="#">Theme Store</a></li>
                                <li><a href="#">App Store</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Afiliados</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h4>Recursos</h4>
                            <ul>
                                <li><a href="#">Comparar Foodfy</a></li>
                                <li><a href="#">Cursos</a></li>
                                <li><a href="#">Herramientas gratis</a></li>
                                <li><a href="#">Registro de cambios</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h4>Atención al cliente</h4>
                            <ul>
                                <li><a href="#">Centro de ayuda</a></li>
                                <li><a href="#">Foro de la comunidad</a></li>
                                <li><a href="#">Contratar un partner</a></li>
                                <li><a href="#">Estado del servicio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Empezar;
