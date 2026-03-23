import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
    const [mode, setMode] = React.useState<'login' | 'signup'>(initialMode);

    const isLogin = mode === 'login';

    return (
        <div className="shopify-login-page">
            <div className="shopify-login-header">
                <div className="shopify-logo-container" onClick={() => navigate('/')}>
                    <img src="/logo.png" alt="Foodfy Logo" className="shopify-foodfy-icon" />
                    <span className="shopify-foodfy-text">FOODFY</span>
                </div>
            </div>

            <main className="shopify-login-main">
                {!isLogin && (
                    <>
                        <h1 className="shopify-login-title">Empieza a trabajar con Foodfy</h1>
                        <p className="shopify-login-subtitle">El ecosistema definitivo para tu negocio</p>
                    </>
                )}

                <div className="shopify-login-card">
                    {isLogin && (
                        <div className="shopify-login-card-header">
                            <h1 className="shopify-login-title-card">Inicia sesión</h1>
                            <p className="shopify-login-subtitle-card">Continuar a Foodfy</p>
                        </div>
                    )}

                    <div className="shopify-form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" className="shopify-input" placeholder="" />
                    </div>

                    <button className="shopify-btn-primary">
                        Continuar con correo electrónico
                    </button>

                    <div className="shopify-divider">
                        <span>o</span>
                    </div>

                    <div className="shopify-social-buttons">
                        <button className="shopify-social-btn">
                            <svg viewBox="0 0 384 512" width="18" height="18"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-57.3-114.3-1.7-142.7zm-42.2-132.5c28.7-34.5 24.5-81.8 21.6-96.1-41.1 5.9-80 34.1-80 81.2 0 11.2 1.4 22.1 4.3 32.2 41.5-1.5 66-50.6 54.1-17.3z"/></svg>
                            <span>Continuar con Apple</span>
                        </button>
                        <button className="shopify-social-btn">
                            <svg viewBox="0 0 512 512" width="18" height="18" fill="#1877F2"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.38 19.12-40.38 38.73V256h68.75l-11 71.69h-57.75V501C413.31 482.38 504 379.78 504 256z"/></svg>
                            <span>Continuar con Facebook</span>
                        </button>
                        <button className="shopify-social-btn">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                            <span>Continuar con Google</span>
                        </button>
                    </div>

                    <p className="shopify-footer-text">
                        {isLogin ? (
                            <>¿Primera vez en Foodfy? <a href="#" onClick={(e) => { e.preventDefault(); setMode('signup'); }}>Empezar <span className="arrow">→</span></a></>
                        ) : (
                            <>¿Ya tienes una cuenta de Foodfy? <a href="#" onClick={(e) => { e.preventDefault(); setMode('login'); }}>Iniciar sesión</a></>
                        )}
                    </p>
                </div>

                <div className="shopify-country-selector">
                    <button className="shopify-country-btn">
                        España <span className="chevron-down">▼</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
