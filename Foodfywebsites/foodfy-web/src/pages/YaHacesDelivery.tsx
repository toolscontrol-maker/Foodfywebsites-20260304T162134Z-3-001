import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

import './LandingPage.css';

const problems = [
    { icon: '😤', title: 'Comisiones del 30%', desc: 'Las plataformas se quedan con tu margen. Con Foodfy, tú controlas tu negocio y tus ingresos.' },
    { icon: '🔒', title: 'Dependencia total', desc: 'Si Glovo cambia sus reglas, tu negocio sufre. Foodfy te da tu propio canal de ventas directo.' },
    { icon: '📉', title: 'Cero datos de tus clientes', desc: 'Empiezas de cero todos los días. Foodfy te da el historial completo de cada cliente.' },
    { icon: '🐌', title: 'Software que frena tu negocio', desc: 'Integraciones rotas, TPV que no funciona, soporte que tarda días. Foodfy lo resuelve todo.' },
];

const comparison = [
    { feature: 'Comisión por pedido', other: '25-30%', foodfy: '0%' },
    { feature: 'App propia de marca', other: '✗', foodfy: '✓' },
    { feature: 'Datos de clientes propios', other: '✗', foodfy: '✓' },
    { feature: 'IA integrada', other: '✗', foodfy: '✓' },
    { feature: 'Panel unificado', other: '✗', foodfy: '✓' },
];

const YaHacesDelivery: React.FC = () => {
    return (
        <div className="lp-root">
            {/* Hero */}
            <section className="lp-hero lp-hero--purple">
                <div className="lp-hero-inner">
                    <div className="lp-eyebrow">Para negocios que ya reparten</div>
                    <h1 className="lp-h1">
                        Llevas un tiempo con el delivery.<br />
                        <span className="lp-highlight lp-highlight--purple">¿Estás ganando lo que deberías?</span>
                    </h1>
                    <p className="lp-lead">
                        Si dependes de plataformas de terceros, estás regalando entre un 25% y un 30% de cada pedido. Foodfy te da el control total de tu negocio de reparto.
                    </p>
                    <div className="lp-ctas">
                        <a href="/contacto" className="lp-btn-primary lp-btn-purple">Cambiarme a Foodfy <ArrowRight size={18} /></a>
                        <a href="/precios" className="lp-btn-ghost">Ver planes</a>
                    </div>
                    <p className="lp-small">Migración asistida en menos de 48 horas</p>
                </div>
                <div className="lp-hero-graphic">
                    <div className="lp-saving-card">
                        <span className="lp-saving-label">Ahorra de media al mes</span>
                        <span className="lp-saving-amount">+1.200€</span>
                        <span className="lp-saving-sub">al eliminar comisiones de plataformas</span>
                    </div>
                </div>
            </section>

            {/* Problems */}
            <section className="lp-section">
                <div className="lp-container">
                    <h2 className="lp-h2">Los problemas que ya conoces</h2>
                    <p className="lp-lead" style={{ marginBottom: '3rem' }}>
                        Si usas Glovo, Uber Eats o Just Eat, estas situaciones te suenan.
                    </p>
                    <div className="lp-steps-grid">
                        {problems.map((p, i) => (
                            <div key={i} className="lp-step-card lp-step-card--problem">
                                <div className="lp-step-icon">{p.icon}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="lp-section lp-section--dark">
                <div className="lp-container">
                    <h2 className="lp-h2">Foodfy vs tu sistema actual</h2>
                    <div className="lp-table-wrapper">
                        <table className="lp-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tu situación actual</th>
                                    <th className="lp-table-foodfy">Foodfy</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((c, i) => (
                                    <tr key={i}>
                                        <td>{c.feature}</td>
                                        <td className="lp-table-bad">{c.other}</td>
                                        <td className="lp-table-good">{c.foodfy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lp-section lp-cta-section">
                <div className="lp-container lp-cta-inner">
                    <h2 className="lp-h2">El cambio es más fácil de lo que crees</h2>
                    <p className="lp-lead" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
                        Nuestro equipo migra toda tu configuración, menús y datos de clientes en menos de 48 horas, sin perder un solo pedido.
                    </p>
                    <a href="/contacto" className="lp-btn-primary lp-btn-purple lp-btn-large">
                        Quiero cambiarme ahora <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default YaHacesDelivery;
