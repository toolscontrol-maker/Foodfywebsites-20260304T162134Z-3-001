import React, { useState, useEffect } from 'react';
import { Store, Utensils, Bike, ChevronRight, Rocket } from 'lucide-react';
import './UniversalService.css';

const LOCALS = [
    {
        icon: <Utensils size={32} />,
        title: 'RESTAURANTES',
        desc: 'SALA TRADICIONAL, DIGITALIZACIÓN DE CARTA Y COMANDAS EN UN SOLO ECOSISTEMA.'
    },
    {
        icon: <Store size={32} />,
        title: 'DARK KITCHENS',
        desc: 'GESTIÓN MULTIMARCA ULTRA-OPTIMIZADA DISEÑADA PARA VOLUMEN Y RAPIDEZ EXTREMA.'
    },
    {
        icon: <Bike size={32} />,
        title: 'LOCAL DELIVERY',
        desc: 'RUTAS AUTOMÁTICAS Y CONTROL DE DRIVERS SIN DEPENDER DE PLATAFORMAS EXTERNAS.'
    },
    {
        icon: <Rocket size={32} />,
        title: 'NUEVOS DELIVERYS',
        desc: 'PERSONAS QUE SUEÑAN CON UN DELIVERY LO TIENEN MÁS FÁCIL QUE NUNCA, EMPIEZA TU DELIVERY HOY MISMO.'
    }
];

const UniversalService: React.FC = () => {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage(prev => (prev + 1) % LOCALS.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="section universal-service-section" id="para-todos">
            <div className="container">
                <div className="universal-grid">
                    <div className="universal-content">
                        <h2 className="universal-title" style={{ textAlign: 'left', whiteSpace: 'normal' }}>
                            Tu tipo de local. <br/> <span className="highlight-gradient">Tu forma de operar.</span>
                        </h2>
                        <p style={{ textAlign: 'left', marginLeft: 0, fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', fontWeight: 400, marginTop: '1rem', lineHeight: 1.6 }}>
                            En pueblo o en ciudad. Con sala, delivery o una dark kitchen. Foodfy se adapta a tu operativa, no al revés.
                        </p>

                        <div className="locals-list" style={{ marginTop: '2.5rem' }}>
                            {LOCALS.map((local, idx) => (
                                <div 
                                    className={`shopify-local-card ${activeImage === idx ? 'active' : ''}`} 
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                >
                                    <div className="card-indicator"></div>
                                    <div className="card-main-content">
                                        <h3 className="card-title">
                                            {local.title} 
                                            {activeImage === idx && <span className="sparkle-icon">✦</span>}
                                        </h3>
                                        <p className="card-desc">{local.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <a href="#pricing" className="btn btn-primary btn-large">
                                Elige tu plan <ChevronRight size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="universal-visuals">
                        <div className="universal-mockup-container">
                            <div className="mockup-frame">
                                <img 
                                    src={activeImage % 2 === 0 ? "/servicio-creativo-1.png" : "/servicio-creativo-2.png"} 
                                    alt="Mockup Visual" 
                                    className="mockup-image"
                                />
                                <div className="mockup-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniversalService;

