import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import './ComparisonSection.css';
import TrueFocus from './TrueFocus';

const ComparisonSection: React.FC = () => {
    const bannerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <section className="section" id="pricing" style={{ background: '#0B0A11', padding: '5rem 0' }}>
            <div className="container">

                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                        Por qué Foodfy
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, lineHeight: 1.6 }}>
                        Hasta un 70% de ahorro anual frente a soluciones independientes.
                    </p>
                </div>

                <div className="comparison-container">

                    {/* Traditional Stack */}
                    <div className="comp-card traditional">
                        <div className="comp-banner">Herramientas separadas</div>
                        <div className="comp-content">
                            <div className="comp-header">
                                <h3 className="comp-title">Lo que pagas sin darte cuenta</h3>
                            </div>
                            <p className="comp-subtitle">Fragmentado, caro y fuera de control</p>
                            
                            <div className="comp-price-box">
                                <span className="comp-strike">Costes fragmentados</span>
                                <div className="comp-main-price">
                                    <div className="comp-amount">&gt;2000€</div>
                                    <div className="comp-context">
                                        <span>EUR/mes</span>
                                        <span>estimado</span>
                                    </div>
                                </div>
                            </div>

                            <p className="comp-desc">
                                100 herramientas, 100 facturas, pero 0 control
                            </p>

                            <div className="comp-features-group">
                                <h4 className="comp-features-title">Problemas actuales</h4>
                                <ul className="comp-list">
                                    <li><X className="text-red icon" size={18} /> <span>Desarrollos a medida (Agencias/Freelancers)</span></li>
                                    <li><X className="text-red icon" size={18} /> <span>Suscripciones web (Hostinger, Shopify, etc)</span></li>
                                    <li><X className="text-red icon" size={18} /> <span>Software de Facturación (Holded, Anfix)</span></li>
                                    <li><X className="text-red icon" size={18} /> <span>CRMs y Email Marketing separados</span></li>
                                    <li><X className="text-red icon" size={18} /> <span style={{ color: '#ef4444', fontWeight: 600 }}>Caos operativo y datos desconectados</span></li>
                                </ul>
                            </div>

                            <button className="comp-btn">Mantener caos</button>
                        </div>
                    </div>

                    <div className="brutalist-comparison-vs">VS</div>

                    {/* Foodfy Stack */}
                    <div className="comp-card foodify">
                        <div className="comp-banner">1 € al mes los primeros 3 meses</div>
                        <div className="comp-content">
                            <div className="comp-header">
                                <h3 className="comp-title">
                                    <TrueFocus 
                                        sentence="Una sola plataforma. Miles de euros ahorrados cada año."
                                        manualMode={false}
                                        blurAmount={4}
                                        borderColor="#a65efe"
                                        animationDuration={0.6}
                                        pauseBetweenAnimations={1.5}
                                    />
                                </h3>
                                <span className="comp-badge">LA SOLUCIÓN DEFINITIVA</span>
                            </div>
                            <p className="comp-subtitle">Todo lo que necesitas, más barato.</p>

                            <div className="comp-price-box">
                                <span className="comp-strike">&gt;2000 € /mes</span>
                                <div className="comp-main-price">
                                    <div className="comp-amount">1 €</div>
                                    <div className="comp-context">
                                        <span>EUR/mes</span>
                                        <span>Primeros 3 meses</span>
                                    </div>
                                </div>
                            </div>

                            <p className="comp-desc">
                                Reemplaza todo eso por solo 1€
                            </p>

                            <div className="comp-features-group">
                                <h4 className="comp-features-title">Funciones destacadas</h4>
                                <ul className="comp-list">
                                    <li><Check className="text-green icon" size={18} /> <span className="text-dark">IA 24/7 (Ventas y Atención)</span></li>
                                    <li><Check className="text-green icon" size={18} /> <span className="text-dark">Web Corporativa + Pedidos Propios</span></li>
                                    <li><Check className="text-green icon" size={18} /> <span className="text-dark">Facturación Automática Incluida</span></li>
                                    <li><Check className="text-green icon" size={18} /> <span className="text-dark">App Completa (Dashboard, CRM, KDS)*</span></li>
                                    <li><Check className="text-green icon" size={18} /> <span className="text-green" style={{ fontWeight: 600 }}>Todo centralizado en 1 solo lugar</span></li>
                                </ul>
                            </div>

                            <a href="/contacto" className="comp-btn">Prueba gratis</a>
                        </div>
                    </div>

                </div>

                <div
                    ref={bannerRef}
                    className={`brutalist-savings-banner ${isVisible ? 'visible' : ''}`}
                    style={{ marginTop: '3rem' }}
                >
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <h3 className="savings-title" style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 800, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                            La tecnología que usan los grandes, al precio que merecen todos
                        </h3>
                        <p style={{ fontSize: '1.05rem', color: '#e4e4e7', fontWeight: 500, maxWidth: '650px', margin: '0 auto', lineHeight: 1.6, textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>
                            Ahorra miles de euros con un sistema que hace todo por ti y mejora mes a mes.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ComparisonSection;

