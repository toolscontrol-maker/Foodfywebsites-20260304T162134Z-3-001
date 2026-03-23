import React from 'react';
import './BenefitsSection.css';

const BENEFITS = [
    {
        title: 'Trabajadores que no fallan, nunca.',
        desc: 'Atiende WhatsApp y llamadas sin perder un solo pedido ni cliente.',
        video: '/whatsapp-video.mp4',
        badge: 'MÁS EFICIENCIA'
    },
    {
        title: 'Crea una tienda espectacular en segundos',
        desc: 'Los diseños predefinidos te permiten lanzar tu marca de forma rápida y sencilla.',
        image: 'https://placehold.co/800x600/f8fafc/334155?text=Web+Maker',
        badge: 'TEMAS PERSONALIZABLES'
    },
    {
        title: 'Conviértete en el más espabilado!',
        desc: 'Estadísticas, inventario y finanzas centralizados en un único panel.',
        image: 'https://placehold.co/800x600/f8fafc/334155?text=Dashboard',
        badge: 'TODO BAJO CONTROL'
    },
    {
        title: '¡Foodfy no tiene límites!',
        desc: 'Foodfy está pensado para crecer contigo, que te sientas cómodo, y vayas hasta el infinito y más allá!',
        image: 'https://placehold.co/800x600/f8fafc/334155?text=TPV+y+Cobros',
        badge: 'CONSIGUE RECOMPENSAS'
    },
    {
        title: 'Tu negocio en el bolsillo del cliente',
        desc: 'Aplicación nativa para que tus clientes pidan directamente, sin intermediarios ni comisiones.',
        image: 'https://placehold.co/800x600/f8fafc/334155?text=App+Nativa',
        badge: 'APP PROPIA'
    },
    {
        title: 'Marketing que vende por ti',
        desc: 'IA que analiza el comportamiento y envía promociones automáticas para fidelizar a cada cliente.',
        image: 'https://placehold.co/800x600/f8fafc/334155?text=Marketing+IA',
        badge: 'INTELIGENCIA DE VENTAS'
    }
];


const BenefitsSection: React.FC = () => {

    return (
        <>
        <section className="section" id="razones" style={{ 
            background: 'linear-gradient(180deg, #141414 0%, #0B0A11 40%, #090614 100%)', 
            padding: '5rem 0 8rem 0', 
            borderTop: '1px solid var(--border-color)',
            position: 'relative'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="brutalist-badge" style={{ marginBottom: '1.5rem', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-secondary)', fontWeight: 500, padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', display: 'inline-block', fontSize: '0.85rem' }}>
                        Foodfy es tu mayor aliado
                    </div>
                    <h2 style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                        con Foodfy llega donde NADIE llega
                    </h2>
                </div>

                <div className="benefits-cards-grid">
                    {BENEFITS.map((benefit, idx) => (
                        <div className="benefit-card" key={idx}>
                            <div className="benefit-img-box">
                                <span className="benefit-badge">{benefit.badge}</span>
                                {benefit.video ? (
                                    <video 
                                        src={benefit.video} 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="benefit-img" 
                                        style={{ 
                                            mixBlendMode: 'screen', 
                                            pointerEvents: 'none', 
                                            objectFit: 'cover', 
                                            width: '100%', 
                                            height: '100%', 
                                            position: 'absolute', 
                                            top: 0, 
                                            left: 0,
                                            zIndex: 1 
                                        }} 
                                    />
                                ) : (
                                    <img src={benefit.image} alt={benefit.title} className="benefit-img" />
                                )}
                            </div>
                            <div className="benefit-content">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
        </>
    );
};

export default BenefitsSection;

