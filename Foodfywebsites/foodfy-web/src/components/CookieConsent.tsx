import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('foodfy-cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('foodfy-cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-card brutalist-card">
                <div className="cookie-header">
                    <div className="cookie-icon-wrapper">
                        <Cookie size={24} />
                    </div>
                    <button className="close-cookies" onClick={() => setIsVisible(false)}>
                        <X size={20} />
                    </button>
                </div>

                <div className="cookie-content">
                    <h3>¿UNA COOKIE?</h3>
                    <p>
                        Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Al hacer clic en "Aceptar", consientes su uso.
                    </p>
                </div>

                <div className="cookie-actions">
                    <button className="btn btn-outline btn-small" onClick={() => setIsVisible(false)}>
                        Configurar
                    </button>
                    <button className="btn btn-primary btn-small" onClick={handleAccept}>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

