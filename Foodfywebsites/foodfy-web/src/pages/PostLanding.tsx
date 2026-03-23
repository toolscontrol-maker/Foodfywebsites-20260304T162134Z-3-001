import React from 'react';
import { Check, Bot, Calendar, Sparkles, Users, Shield, ArrowRight } from 'lucide-react';
import './PostLanding.css';

const PostLanding: React.FC = () => {

    const handleSubscribe = () => {
        alert("Redirigiendo al Dashboard...");
    };

    return (
        <div className="post-landing-page">
            <div className="container">

                {/* Header simple */}
                <header className="pl-header text-center">
                    <h1 className="pl-main-title">Último paso para revolucionar tu local</h1>
                    <p className="pl-main-subtitle text-secondary">Tu cuenta está casi lista. Activa tus herramientas ahora.</p>
                </header>

                <div className="pl-grid">

                    {/* Left Column: Flow & Value */}
                    <div className="pl-value-col">

                        <section className="pl-section glass-card">
                            <div className="badge ai-badge" style={{ marginBottom: '1rem' }}>
                                <Bot size={16} /> FOCO INICIAL
                            </div>
                            <h2 className="pl-section-title">Empezamos por los Agentes IA</h2>
                            <p className="pl-desc">
                                Empieza HOY: Tus agentes tendrán capacidad para atender más de 50 pedidos por teléfono y WhatsApp simultáneamente, sin perder clientes ni equivocarse.
                            </p>

                            <ul className="pl-benefits-list">
                                <li><Check size={18} className="text-green" /> <strong>+1000€ ahorro/mes</strong> en personal rotativo o extra en hora punta</li>
                                <li><Check size={18} className="text-green" /> <strong>24/7 sin límites</strong>: Ni descansan, ni se estresan, ni pierden el hilo</li>
                                <li><Check size={18} className="text-green" /> <strong>Historial Unificado</strong>: Cada cliente es identificado y tratado por su nombre</li>
                            </ul>
                        </section>

                        <section className="pl-section glass-card">
                            <div className="badge" style={{ marginBottom: '1rem', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                <Calendar size={16} /> ROAD MAP
                            </div>
                            <h2 className="pl-section-title">Creceremos juntos mes a mes</h2>
                            <div className="roadmap-timeline">
                                <div className="timeline-item active">
                                    <div className="dot"></div>
                                    <div className="text"><strong>Marzo:</strong> Agentes IA WhatsApp y Llamadas <span>(Disponible Hoy)</span></div>
                                </div>
                                <div className="timeline-item">
                                    <div className="dot"></div>
                                    <div className="text"><strong>Abril:</strong> Web Maker Automatizada</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="dot"></div>
                                    <div className="text"><strong>Mayo:</strong> Dashboard + TPV Físico</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="dot"></div>
                                    <div className="text"><strong>Junio:</strong> Facturación y Análisis <Sparkles size={14} className="inline-icon text-primary" /></div>
                                </div>
                            </div>
                        </section>

                        <section className="pl-section glass-card text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2 className="pl-section-title" style={{ marginBottom: '1rem' }}>"IA + Soporte humano = Fácil día 1"</h2>
                            <div className="founder-photo-placeholder">
                                <Users size={48} color="rgba(255,255,255,0.2)" />
                            </div>
                            <p className="text-secondary mt-4">Estamos aquí para acompañarte paso a paso. Youssef & Tonet.</p>
                        </section>

                    </div>

                    {/* Right Column: Pricing */}
                    <div className="pl-pricing-col">

                        <div className="pricing-card main-pricing glass-card">
                            <div className="badge ai-badge" style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)' }}>
                                OFERTA LANZAMIENTO
                            </div>

                            <h3 className="plan-name">Plan BÁSICO</h3>
                            <div className="plan-price-box">
                                <div className="price-huge">1€<span style={{ fontSize: '1.25rem' }}>/mes</span></div>
                                <p className="price-sub">Los primeros 3 meses. (Luego 29€/m)</p>
                            </div>

                            <div className="plan-includes">
                                <p>Qué incluye hoy:</p>
                                <ul>
                                    <li><Bot size={16} className="text-primary" /> Agentes IA WhatsApp y Llamadas</li>
                                    <li><Shield size={16} className="text-primary" /> Acceso Full App Foodify</li>
                                </ul>
                            </div>

                            <button className="btn btn-primary cta-full btn-large subscribe-btn" onClick={handleSubscribe}>
                                Suscribir y Entrar al Dashboard <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Disabled future plans */}
                        <div className="pricing-card disabled-plan glass-card">
                            <div className="plan-overlay">
                                Próximamente
                            </div>
                            <h3 className="plan-name">PRO</h3>
                            <div className="price-huge">1€/3m <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>(Luego 59€/m)</span></div>
                            <ul className="plan-includes disabled-list" style={{ marginTop: 10, paddingLeft: 20 }}>
                                <li>Full Ecosistema POS/Live</li>
                            </ul>
                        </div>

                        <div className="pricing-card disabled-plan glass-card">
                            <div className="plan-overlay">
                                Próximamente
                            </div>
                            <h3 className="plan-name">PREMIUM</h3>
                            <div className="price-huge">1€/3m <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>(Luego 99€/m)</span></div>
                            <ul className="plan-includes disabled-list" style={{ marginTop: 10, paddingLeft: 20 }}>
                                <li>POS/Live + Capacidad 20 llamadas/s</li>
                                <li>Comisiones super-reducidas</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostLanding;

