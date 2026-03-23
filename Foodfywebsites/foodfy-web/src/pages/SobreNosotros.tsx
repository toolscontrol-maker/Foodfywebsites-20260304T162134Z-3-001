import React, { useEffect } from 'react';

const SobreNosotros: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '8rem 1rem 4rem', minHeight: '80vh', background: 'var(--bg-surface)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: 'var(--fs-h1)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Sobre Nosotros
                </h1>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        En Foodfy, creemos que la tecnología no debe ser un obstáculo para los restaurantes, sino el motor que impulsa su crecimiento. Nacimos con la visión de democratizar el acceso a herramientas digitales avanzadas para negocios de hostelería de todos los tamaños.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Nuestro equipo está formado por expertos en tecnología, inteligencia artificial y hostelería que entienden los retos diarios de gestionar un local, un dark kitchen o una red de delivery.
                    </p>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem' }}>
                        Nuestra Misión
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Automatizar lo repetitivo para que tú puedas centrarte en lo que realmente importa: ofrecer la mejor experiencia gastronómica a tus clientes. Construimos un ecosistema donde todo fluye sin fricciones.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SobreNosotros;

