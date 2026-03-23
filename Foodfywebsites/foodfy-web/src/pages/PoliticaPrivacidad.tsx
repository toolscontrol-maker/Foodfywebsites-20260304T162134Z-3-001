import React, { useEffect } from 'react';

const PoliticaPrivacidad: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '8rem 1rem 4rem', minHeight: '80vh', background: 'var(--bg-surface)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: 'var(--fs-h1)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Política de Privacidad
                </h1>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        En Foodfy, priorizamos la protección de sus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información de nuestros usuarios y visitantes.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. Información que recopilamos
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Podemos recopilar información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, detalles del restaurante y datos de pago, cuando se registra en nuestra plataforma o nos contacta.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. Uso de la Información
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones, enviar avisos técnicos y de soporte, y comunicarnos con usted acerca de productos y servicios.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. Compartir Información
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        No vendemos, intercambiamos ni transferimos su información personal a terceros no involucrados en la prestación directa del servicio, excepto cuando lo exija la ley o para proteger nuestros derechos.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        4. Seguridad de los Datos
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Implementamos diversas medidas de seguridad para mantener la seguridad de su información personal. Utilizamos encriptación de última generación para proteger datos sensibles transmitidos en línea.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PoliticaPrivacidad;

