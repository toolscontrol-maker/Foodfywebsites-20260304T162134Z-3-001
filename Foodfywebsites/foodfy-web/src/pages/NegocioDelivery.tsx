import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

import './LandingPage.css';

const steps = [
    { icon: '🏪', title: 'Tu local, tu marca', desc: 'Crea tu tienda online con tu imagen, no la de una plataforma. Los clientes piden directamente a ti.' },
    { icon: '📦', title: 'Gestiona envíos sin dolores de cabeza', desc: 'Conecta con repartidores, define zonas de reparto y automatiza las rutas con inteligencia artificial.' },
    { icon: '🤖', title: 'IA que trabaja por ti', desc: 'Desde la atención al cliente hasta la optimización del menú para delivery, el agente IA de Foodfy lo gestiona todo.' },
    { icon: '💰', title: 'Más margen, sin plataformas', desc: 'Sin comisiones del 30%. Tú decides el precio del reparto y te quedas con todos los ingresos.' },
];

const faq = [
    { q: '¿Necesito tener experiencia en delivery?', a: 'Para nada. Foodfy está diseñado para que locales físicos empieces desde cero sin complicaciones técnicas.' },
    { q: '¿Cuánto tarda en ponerse en marcha?', a: 'En 24-48 horas tienes tu tienda online activa y lista para aceptar pedidos a domicilio.' },
    { q: '¿Tengo que dejar mi local físico?', a: 'No. Foodfy complementa tu negocio físico. Puedes mantener tu restaurante y añadir el delivery como nuevo canal.' },
];

const NegocioDelivery: React.FC = () => {
    return (
        <div className="lp-root">
            {/* Hero */}
            <section className="lp-hero lp-hero--orange">
                <div className="lp-hero-inner">
                    <div className="lp-eyebrow">Para negocios locales que quieren crecer</div>
                    <h1 className="lp-h1">
                        Tu restaurante merece<br />
                        <span className="lp-highlight lp-highlight--orange">repartir a domicilio</span>
                    </h1>
                    <p className="lp-lead">
                        Añade el canal de delivery a tu negocio sin montar una estructura nueva. Foodfy gestiona los pedidos, los repartidores y los pagos por ti.
                    </p>
                    <div className="lp-ctas">
                        <a href="/contacto" className="lp-btn-primary lp-btn-orange">Empezar mi delivery <ArrowRight size={18} /></a>
                        <a href="/precios" className="lp-btn-ghost">Explorar planes</a>
                    </div>
                    <p className="lp-small">Sin inversión inicial · Configura en 24h</p>
                </div>
                <div className="lp-hero-graphic">
                    <div className="lp-stat-card lp-stat-card--orange">
                        <span className="lp-stat-number">+40%</span>
                        <span className="lp-stat-label">de ingresos de media al activar el delivery</span>
                    </div>
                    <div className="lp-stat-card lp-stat-card--offset">
                        <span className="lp-stat-number">0€</span>
                        <span className="lp-stat-label">de comisión por pedido con Foodfy</span>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="lp-section">
                <div className="lp-container">
                    <h2 className="lp-h2">Así funciona para tu local</h2>
                    <div className="lp-steps-grid">
                        {steps.map((s, i) => (
                            <div key={i} className="lp-step-card">
                                <div className="lp-step-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="lp-section lp-section--dark">
                <div className="lp-container" style={{ maxWidth: '720px' }}>
                    <h2 className="lp-h2">Preguntas frecuentes</h2>
                    <div className="lp-faq-list">
                        {faq.map((f, i) => (
                            <div key={i} className="lp-faq-item">
                                <h3>{f.q}</h3>
                                <p>{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lp-section lp-cta-section">
                <div className="lp-container lp-cta-inner">
                    <h2 className="lp-h2">Tu local puede llegar más lejos</h2>
                    <p className="lp-lead" style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
                        Activa el canal de delivery de tu negocio hoy mismo. Más clientes, más ingresos, sin complicaciones.
                    </p>
                    <a href="/contacto" className="lp-btn-primary lp-btn-orange lp-btn-large">
                        Activar mi delivery ahora <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default NegocioDelivery;
