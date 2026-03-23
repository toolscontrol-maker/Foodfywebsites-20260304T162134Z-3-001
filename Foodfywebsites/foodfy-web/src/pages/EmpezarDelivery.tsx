import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

import './LandingPage.css';

const steps = [
    { icon: '🧠', title: 'Tu negocio con IA desde el día 1', desc: 'Crea tu menú inteligente, gestiona pedidos y automatiza respuestas sin saber de tecnología.' },
    { icon: '🚀', title: 'Lanza en menos de 24h', desc: 'Configura tu tienda online, conecta con plataformas de reparto y empieza a recibir pedidos hoy mismo.' },
    { icon: '📊', title: 'Datos que te enseñan a crecer', desc: 'Estadísticas en tiempo real de qué platos se venden más, cuándo y por qué.' },
    { icon: '💳', title: 'Cobra sin complicaciones', desc: 'Foodfy Pay integra los pagos para que el dinero llegue directo a tu cuenta.' },
];

const benefits = [
    'Sin comisiones ocultas por pedido',
    'App propia de tu marca',
    'Agente de IA para atención al cliente',
    'Integración con Glovo, Uber Eats y Just Eat',
    'Soporte 24/7 desde el día 1',
    'Dashboard todo-en-uno',
];

const EmpezarDelivery: React.FC = () => {
    return (
        <div className="lp-root">
            {/* Hero */}
            <section className="lp-hero lp-hero--green">
                <div className="lp-hero-inner">
                    <div className="lp-eyebrow">Para nuevos emprendedores</div>
                    <h1 className="lp-h1">
                        Tu primer negocio de<br />
                        <span className="lp-highlight">delivery empieza aquí</span>
                    </h1>
                    <p className="lp-lead">
                        Foodfy te da todo lo que necesitas para montar una dark kitchen o negocio de reparto rentable desde cero. Sin experiencia técnica, sin costes escondidos.
                    </p>
                    <div className="lp-ctas">
                        <a href="/contacto" className="lp-btn-primary">Empezar gratis <ArrowRight size={18} /></a>
                        <a href="/precios" className="lp-btn-ghost">Ver precios</a>
                    </div>
                    <p className="lp-small">Sin tarjeta de crédito · Prueba gratuita 14 días</p>
                </div>
                <div className="lp-hero-graphic">
                    <div className="lp-stat-card">
                        <span className="lp-stat-number">+2.400</span>
                        <span className="lp-stat-label">negocios lanzados con Foodfy</span>
                    </div>
                    <div className="lp-stat-card lp-stat-card--offset">
                        <span className="lp-stat-number">24h</span>
                        <span className="lp-stat-label">de media para recibir el primer pedido</span>
                    </div>
                </div>
            </section>

            {/* Steps */}
            <section className="lp-section">
                <div className="lp-container">
                    <h2 className="lp-h2">Cómo funciona Foodfy para ti</h2>
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

            {/* Benefits strip */}
            <section className="lp-section lp-section--dark">
                <div className="lp-container">
                    <h2 className="lp-h2">Todo lo que necesitas incluido</h2>
                    <div className="lp-benefits-grid">
                        {benefits.map((b, i) => (
                            <div key={i} className="lp-benefit-item">
                                <CheckCircle size={20} className="lp-check" />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="lp-section lp-cta-section">
                <div className="lp-container lp-cta-inner">
                    <h2 className="lp-h2">¿A qué esperas para lanzarte?</h2>
                    <p className="lp-lead" style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
                        Cada día que pasa es un día sin pedidos. Lanza hoy con Foodfy y empieza a generar ingresos.
                    </p>
                    <a href="/contacto" className="lp-btn-primary lp-btn-large">
                        Crear mi cuenta gratuita <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default EmpezarDelivery;
