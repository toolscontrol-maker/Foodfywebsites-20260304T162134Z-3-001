import React, { useEffect } from 'react';

const TerminosServicio: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '8rem 1rem 4rem', minHeight: '80vh', background: 'var(--bg-surface)' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: 'var(--fs-h1)', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Términos de Servicio
                </h1>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Última actualización: {new Date().toLocaleDateString()}
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Bienvenido a Foodfy. Al acceder o utilizar nuestro sitio web y nuestros servicios, usted acepta estar sujeto a los siguientes términos y condiciones ("Términos de Servicio"). Por favor, léalos cuidadosamente antes de utilizar nuestra plataforma.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        1. Uso del Servicio
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Usted se compromete a utilizar el servicio de Foodfy únicamente para fines legales y de acuerdo con estos Términos. No debe utilizar la plataforma de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar nuestros servidores o redes.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        2. Cuentas de Usuario
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Para acceder a ciertas funcionalidades, es posible que deba registrarse para obtener una cuenta. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        3. Pagos y Suscripciones
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Al adquirir uno de nuestros planes, usted acepta pagar las tarifas recurrentes especificadas en el momento de la compra. Las cancelaciones deben realizarse de acuerdo con nuestra política de cancelación para evitar el cobro del próximo ciclo de facturación.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        4. Modificaciones del Servicio
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Nos reservamos el derecho de modificar o discontinuar, temporal o permanentemente, el servicio (o cualquier parte de este) con o sin previo aviso.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TerminosServicio;

