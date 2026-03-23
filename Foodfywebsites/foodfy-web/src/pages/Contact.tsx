import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirigir de inmediato a "empezar con Sideckick" (que es el /post-landing)
        navigate('/post-landing', { replace: true });
    }, [navigate]);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Opcional: un pequeño texto o spinner mientras hace la redirección (suele ser instantáneo) */}
            <p style={{ color: 'var(--text-secondary)' }}>Redirigiendo a Sideckick...</p>
        </div>
    );
};

export default Contact;

