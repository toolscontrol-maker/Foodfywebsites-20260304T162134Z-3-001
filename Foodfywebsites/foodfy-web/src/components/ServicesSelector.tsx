import React, { useState } from 'react';
import { Bot, Globe, LayoutDashboard, ChevronRight, Play, Sparkles } from 'lucide-react';
import './ServicesSelector.css';

const SERVICES = [
    {
        id: 'agentes',
        title: '1. Un empleado infalible',
        icon: <Bot size={24} />,
        status: 'Disponible ahora',
        description: 'El cerebro de tu negocio. Nuestro agente IA atiende llamadas y WhatsApp simultáneamente, tramitando pedidos directamente a tu sistema sin errores ni esperas.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        highlight: true,
        features: ['Atención 24/7', 'IA por teléfono', 'API de pedidos'],
        image: '/agente-chico.png'
    },
    {
        id: 'dashboard',
        title: '2. Dashboard completo, complejo y polivalente',
        icon: <img src="/elementos creativos de la web/837E5948-F371-43AA-A991-6995DAF5681C.png" alt="Dashboard" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />,
        description: 'Control total desde una sola pantalla. Visualiza ventas, rendimiento de agentes y métricas clave en tiempo real con una interfaz diseñada para la eficiencia.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        highlight: false,
        features: ['Métricas en vivo', 'Gestión de inventario', 'Reportes automáticos'],
        image: '/Foodfywebsites/Dynamic_Montage_Animation_From_Images.mp4'
    },
    {
        id: 'web-maker',
        title: '3. Tienda online personalizable',
        icon: <Globe size={24} />,
        description: 'Tu marca, tus reglas. Crea una experiencia de compra única con nuestro constructor visual. Totalmente integrado con tu inventario y sistema de pagos.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        highlight: false,
        features: ['Diseño Drag & Drop', 'Pagos integrados', 'SEO optimizado']
    },
    {
        id: 'integrations',
        title: '4. Aplicaciones que multiplican, y se multiplican',
        icon: <img src="/integraciones-icon.png" alt="Integraciones" style={{ width: '56px', height: '56px', objectFit: 'contain' }} />,
        description: 'Conectamos con las herramientas que ya usas. Desde sistemas de delivery hasta software contable, todo fluye sin fricciones en el ecosistema Foodfy.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        highlight: false,
        features: ['API Abierta', 'Webhooks en tiempo real', 'Sincronización total']
    },
];

const ServicesSelector: React.FC = () => {
    const [activeTab, setActiveTab] = useState(SERVICES[0].id);

    const activeService = SERVICES.find(s => s.id === activeTab);

    return (
        <section className="section" id="servicios-futuros" style={{ background: 'var(--bg-surface)', padding: '5rem 0' }}>
            <div className="container">

                <div className="services-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                        Ecosistema Foodfy
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                        Un mapa completo de herramientas que desbloquearemos mes a mes para revolucionar tu local.
                    </p>
                </div>

                <div className="services-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem', alignItems: 'start' }}>

                    {/* Tabs Sidebar */}
                    <div className="services-tabs hide-scrollbar" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {SERVICES.map((s) => (
                            <button
                                key={s.id}
                                className={`brutalist-tab ${activeTab === s.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(s.id)}
                            >
                                <div className={`tab-icon-wrapper ${s.id === 'agentes' ? 'ia-agent-thumb' : ''}`} style={{ overflow: s.id === 'agentes' ? 'visible' : 'hidden' }}>
                                    {s.image ? (
                                        s.image.endsWith('.mp4') ? (
                                            <video
                                                src={s.image}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src={s.image}
                                                alt=""
                                                style={s.id === 'agentes' ? {
                                                    width: '155%',
                                                    height: '155%',
                                                    objectFit: 'contain',
                                                    objectPosition: 'bottom center',
                                                    transform: 'translateY(12%)'
                                                } : {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        )
                                    ) : (
                                        s.icon
                                    )}
                                </div>
                                <div className="tab-info" style={{ textAlign: 'left' }}>
                                    <span style={{ display: 'block', fontWeight: 600, fontSize: '1.04rem', color: 'inherit' }}>{s.title}</span>
                                    {s.status && (
                                        <span className="tab-status-badge">
                                            {s.status}
                                        </span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="brutalist-card" style={{ position: 'relative' }}>
                        {activeService?.status && (
                            <div className="service-status-tag">
                                <Sparkles size={14} />
                                {activeService.status}
                            </div>
                        )}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                                {activeService?.title}
                            </h3>

                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 400, lineHeight: 1.6, maxWidth: '560px' }}>
                                {activeService?.description}
                            </p>

                            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                                {activeService?.id === 'agentes' && (
                                    <button className="hire-btn" style={{ position: 'relative', top: 'auto', right: 'auto' }}>
                                        Contratar
                                    </button>
                                )}

                                {activeService?.highlight && (
                                    <div className="brutalist-video-teaser" style={{ flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}>
                                        <div className="video-thumb">
                                            <Play size={16} fill="var(--text-primary)" />
                                        </div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Ver Demo</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="brutalist-mockup-wrapper">
                            <div className="brutalist-mockup-main">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                    {activeService?.icon}
                                    <span style={{ marginTop: '0.75rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Interfaz {activeService?.title}</span>
                                </div>
                            </div>

                            <div className="brutalist-mockup-side">
                                {activeService?.features?.map((f, i) => (
                                    <div key={i} className="brutalist-mini-photo">{f}</div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section within Tab Content */}
                        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                            {activeService?.highlight ? (
                                <a href="/contacto" className="btn btn-primary btn-large" style={{ width: '100%' }}>
                                    Empezar ahora por 1€/mes <ChevronRight size={18} />
                                </a>
                            ) : (
                                <div className="brutalist-newsletter">
                                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Apúntate a las novedades</h4>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <input type="email" placeholder="Tu email" className="brutalist-input" />
                                        <button className="btn btn-primary">Notificarme</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSelector;
