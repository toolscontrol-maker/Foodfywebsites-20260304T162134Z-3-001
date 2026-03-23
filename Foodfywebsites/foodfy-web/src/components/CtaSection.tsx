import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import GlitchText from './GlitchText';
import './CtaSection.css';

const CTA_STEPS = [
    {
        number: '01',
        title: 'Añade tu primer producto/servicio',
        desc: 'Configura tus primeras herramientas en minutos.'
    },
    {
        number: '02',
        title: 'Personaliza tu ecosistema',
        desc: 'Adapta Foodfy a la identidad de tu negocio.'
    },
    {
        number: '03',
        title: 'Configura los pagos y empieza',
        desc: 'Recibe pagos de forma segura y automática.'
    }
];

const CtaSection: React.FC = () => {
    return (
        <section className="section cta-section-modern" id="registro">
            <div className="container">
                <div className="cta-header-glitch">
                    <GlitchText
                        speed={0.6}
                        enableShadows={false}
                        enableOnHover={false}
                    >
                        A QUE ESPERAS?
                    </GlitchText>
                </div>

                <div className="cta-modern-grid">
                    {/* Left Side: Images (Shopify Style) */}
                    <div className="cta-images-container">
                        <div className="cta-image-card main-img">
                            <img src="/cta-app.png" alt="Foodfy App" loading="lazy" />
                        </div>
                        <div className="cta-image-card glass-img">
                            <img src="/cta-chef.png" alt="Chef using Foodfy" loading="lazy" />
                        </div>
                    </div>

                    {/* Right Side: Content and Steps */}
                    <div className="cta-content-column">
                        <h2 className="cta-modern-title">
                            Empieza a transformar <br /> tu negocio hoy
                        </h2>
                        
                        <div className="cta-steps-list">
                            {CTA_STEPS.map((step, idx) => (
                                <div key={idx} className="cta-step-item">
                                    <span className="cta-step-number">{step.number}</span>
                                    <div className="cta-step-info">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                        <div className="cta-step-divider"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cta-action-box">
                            <a href="/contacto" className="btn btn-primary btn-large cta-main-btn">
                                Comienza ya <ArrowRight size={22} strokeWidth={2.5} />
                            </a>
                            <p className="cta-subtext">
                                <CheckCircle2 size={18} /> Prueba los agentes IA gratis durante 7 días
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;

