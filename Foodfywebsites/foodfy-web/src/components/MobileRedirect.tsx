import React from 'react';
import { Monitor } from 'lucide-react';
import './MobileRedirect.css';

const MobileRedirect: React.FC = () => {
    React.useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 767) {
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100dvh';
            } else {
                document.body.style.overflow = '';
                document.body.style.height = '';
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
            document.body.style.overflow = '';
            document.body.style.height = '';
        };
    }, []);

    return (
        <div className="mobile-redirect-overlay">
            <div className="mobile-redirect-bg"></div>
            <div className="mobile-redirect-inner container">
                <div className="mobile-redirect-header">
                    <div className="brutalist-badge mini-badge">FOODFY ECOSISTEMA</div>
                </div>

                <div className="mobile-redirect-main">
                    <h1 className="shopify-style-title">
                        ¿Tienes un <br />
                        <span className="accent-text">delivery?</span> <br />
                        ¿Llevas años <br />
                        en uno?
                    </h1>

                    <p className="shopify-style-subtitle">
                        ¿O sueñas con abrir esa tienda online que tanto deseas?
                    </p>
                </div>

                <div className="mobile-redirect-action">
                    <p className="instruction-text">
                        Para vivir la experiencia completa, abre este enlace tranquilamente en un <strong>escritorio</strong>.
                    </p>
                    <div className="device-hint">
                        <Monitor size={48} strokeWidth={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileRedirect;

