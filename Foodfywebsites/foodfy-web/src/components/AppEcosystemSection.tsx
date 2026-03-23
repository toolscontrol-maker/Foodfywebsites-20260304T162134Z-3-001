import React from 'react';
import './AppEcosystemSection.css';

const CAROUSELS = [
    {
        theme: 'general',
        bg: 'rgba(255, 255, 255, 0.02)',
        direction: 'normal',
        features: [
            { emoji: '🤖', label: 'Agente IA 24/7', color: '#ede7f6', accent: '#6200ea' },
            { emoji: '📲', label: 'App de pedidos', color: '#e3f2fd', accent: '#0277bd' },
            { emoji: '📊', label: 'Analytics en tiempo real', color: '#e0f7fa', accent: '#00695c' },
            { emoji: '🌐', label: 'Tienda online propia', color: '#e3f2fd', accent: '#01579b' },
            { emoji: '🔐', label: 'Control de accesos', color: '#efebe9', accent: '#4e342e' },
            { emoji: '🛡️', label: 'Seguridad bancaria', color: '#eceff1', accent: '#455a64' },
            { emoji: '☁️', label: '100% en la nube', color: '#f5f5f5', accent: '#616161' },
            { emoji: '📈', label: 'Predicción de ventas', color: '#e8f5e9', accent: '#2e7d32' }
        ]
    },
    {
        theme: 'facturacion',
        bg: 'rgba(166, 94, 254, 0.05)',
        direction: 'reverse',
        features: [
            { emoji: '🧾', label: 'Facturación automática', color: '#e8f5e9', accent: '#2e7d32' },
            { emoji: '🏛️', label: 'Declaración de impuestos', color: '#fff3e0', accent: '#e65100' },
            { emoji: '🌍', label: 'Múltiples monedas', color: '#e0f7fa', accent: '#00695c' },
            { emoji: '🔗', label: 'Enlaces de pago', color: '#ede7f6', accent: '#6200ea' },
            { emoji: '🏦', label: 'Conciliación bancaria', color: '#e3f2fd', accent: '#0277bd' },
            { emoji: '🔄', label: 'Cobros recurrentes', color: '#f3e5f5', accent: '#6a1b9a' },
            { emoji: '⚡', label: 'Transferencias 24h', color: '#fff8e1', accent: '#f57f17' },
            { emoji: '📉', label: 'Control de gastos', color: '#fce4ec', accent: '#c62828' }
        ]
    },
    {
        theme: 'restaurante',
        bg: 'rgba(255, 255, 255, 0.01)',
        direction: 'normal',
        features: [
            { emoji: '💳', label: 'TPV multidispositivo', color: '#fff8e1', accent: '#f57f17' },
            { emoji: '🧑‍🍳', label: 'KDS para cocina', color: '#fce4ec', accent: '#c62828' },
            { emoji: '⏱️', label: 'Sincronización a tiempo real', color: '#e8f5e9', accent: '#2e7d32' },
            { emoji: '📱', label: 'Pedidos QR', color: '#e3f2fd', accent: '#01579b' },
            { emoji: '⚖️', label: 'Control de escandallos', color: '#fff3e0', accent: '#e65100' },
            { emoji: '📦', label: 'Gestión de inventario', color: '#fff3e0', accent: '#e65100' },
            { emoji: '🕒', label: 'Gestión de turnos', color: '#efebe9', accent: '#4e342e' },
            { emoji: '🔔', label: 'Avisadores de sala', color: '#ede7f6', accent: '#6200ea' }
        ]
    },
    {
        theme: 'drivers',
        bg: 'rgba(126, 34, 206, 0.08)',
        direction: 'reverse',
        features: [
            { emoji: '🚗', label: 'Integración con drivers', color: '#f3e5f5', accent: '#6a1b9a' },
            { emoji: '📍', label: 'Conexión a tiempo real', color: '#e0f7fa', accent: '#00695c' },
            { emoji: '🗺️', label: 'Rutas optimizadas', color: '#e8f5e9', accent: '#1b5e20' },
            { emoji: '⏱️', label: 'Tiempos de entrega exactos', color: '#fff8e1', accent: '#f57f17' },
            { emoji: '🎯', label: 'Asignación automática', color: '#e3f2fd', accent: '#0277bd' },
            { emoji: '📡', label: 'Seguimiento GPS', color: '#eceff1', accent: '#455a64' },
            { emoji: '💵', label: 'Propinas para drivers', color: '#e8f5e9', accent: '#2e7d32' },
            { emoji: '🛵', label: 'Flota propia o externa', color: '#fff3e0', accent: '#e65100' }
        ]
    },
    {
        theme: 'marketing',
        bg: 'rgba(255, 255, 255, 0.02)',
        direction: 'normal',
        features: [
            { emoji: '💬', label: 'WhatsApp automático', color: '#e8f5e9', accent: '#1b5e20' },
            { emoji: '🛒', label: 'Recuperación de carritos', color: '#fce4ec', accent: '#c62828' },
            { emoji: '📢', label: 'Campañas automáticas', color: '#ede7f6', accent: '#6200ea' },
            { emoji: '⭐', label: 'Programa de puntos', color: '#fffde7', accent: '#f9a825' },
            { emoji: '🎟️', label: 'Códigos de descuento', color: '#fff8e1', accent: '#f57f17' },
            { emoji: '🧠', label: 'Segmentación IA', color: '#e3f2fd', accent: '#0277bd' },
            { emoji: '📝', label: 'Reseñas automáticas', color: '#fff3e0', accent: '#e65100' },
            { emoji: '🎁', label: 'Regalos por fidelidad', color: '#f3e5f5', accent: '#6a1b9a' }
        ]
    }
];

const AppEcosystemSection: React.FC = () => {
    return (
        <section className="section" id="ecosystem" style={{ 
            background: '#090614', // Starts from dark and flows into dark FAQ
            padding: '5rem 0 0 0', 
            position: 'relative'
        }}>
            {/* Stacked 5-Carousel ticker area */}
            <div className="features-stack-container" style={{ 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 95%)',
                maskImage: 'linear-gradient(to bottom, black 30%, transparent 95%)',
            }}>
                {CAROUSELS.map((carousel, cIdx) => (
                    <div
                        key={cIdx}
                        className="features-ticker-wrapper"
                    >
                        <div className={`features-ticker-track ${carousel.direction === 'reverse' ? 'reverse' : ''}`}>
                            {Array(10).fill(carousel.features).flat().map((feat, i) => (
                                <div
                                    key={`${cIdx}-${i}`}
                                    className="features-ticker-card"
                                    style={{ 
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        boxShadow: `0 0 25px ${feat.accent}20, inset 0 0 15px ${feat.accent}15`
                                    }}
                                >
                                    <div className="features-ticker-card-icon">{feat.emoji}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Ambient Base Glow - Bridging the gap to FAQ */}
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '50%',
                transform: 'translate(-50%, 0)',
                width: '100vw',
                height: '500px',
                background: 'radial-gradient(ellipse at center, rgba(166, 94, 254, 0.25) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Teaser text floating in the dark abyss below masks */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginTop: '-1rem', padding: '0 1rem 6rem 1rem' }}>
                <p style={{
                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                    fontWeight: 800,
                    color: '#fff',
                    margin: 0,
                    letterSpacing: '-0.04em',
                    lineHeight: 1.1,
                    textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                }}>
                    Aplicaciones, funcionalidades, <br className="hide-desktop" />
                    y secciones <span className="highlight-gradient">para todo lo demás!</span>
                </p>
                <p style={{ marginTop: '1.5rem', color: '#cbd5e1', fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', fontWeight: 500, opacity: 0.9 }}>
                    Un ecosistema infinito de potentes herramientas conectadas.
                </p>
            </div>
        </section>
    );
};

export default AppEcosystemSection;
