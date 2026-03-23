import React from 'react';
import { ShoppingBag, CreditCard, ChevronRight, CheckCircle2, TrendingUp } from 'lucide-react';
import './CheckoutSection.css';

const CheckoutSection: React.FC = () => {
    return (
        <section className="section checkout-section" id="checkout">
            {/* Deep background glow and floating bubbles */}
            <div className="checkout-bg-glow"></div>
            
            <div className="bubble bubble-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')" }}></div>
            <div className="bubble bubble-2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80')" }}></div>
            <div className="bubble bubble-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80')" }}></div>
            <div className="bubble bubble-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80')" }}></div>
            <div className="bubble bubble-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80')" }}></div>

            <div className="container checkout-container">
                <div className="checkout-top-header">
                    <h2>La mejor opción para <br/> hacerlo bien</h2>
                </div>

                <div className="checkout-content">
                    <div className="checkout-left">
                        <h3 className="checkout-subtitle">La solución de pago con el mejor índice de conversión del mundo</h3>
                        
                        <div className="checkout-metrics">
                            <div className="metric">
                                <span className="metric-label"><TrendingUp size={14} /> MÁS CONVERSIÓN</span>
                                <span className="metric-value">15%</span>
                            </div>
                            <div className="metric">
                                <span className="metric-label"><CheckCircle2 size={14} /> COMPRADORES CON ALTA INTENCIÓN DE COMPRA</span>
                                <span className="metric-value">150M<span className="plus">+</span></span>
                            </div>
                        </div>

                        <div className="checkout-text-block">
                            <p className="checkout-desc">
                                Foodfy Checkout convierte un 15% más de media que otras plataformas de comercio y expone tu marca a 150 millones de compradores listos para comprar.
                            </p>
                            <p className="checkout-disclaimer">
                                Según un estudio externo con una de las tres grandes empresas de consultoría a escala mundial en abril de 2023.
                            </p>
                        </div>
                    </div>

                    <div className="checkout-right">
                        {/* Pure CSS Interactive Mockup */}
                        <div className="checkout-mockup">
                            <div className="mockup-sidebar">
                                <div className="cart-item">
                                    <div className="cart-img" style={{background: '#f1f5f9'}}>
                                        <span className="cart-badge">1</span>
                                    </div>
                                    <div className="cart-details">
                                        <div className="cart-name">Suéter tejido básico</div>
                                        <div className="cart-variant">Mediana / Bosque</div>
                                    </div>
                                    <div className="cart-price">125,00€</div>
                                </div>
                                <div className="cart-item">
                                    <div className="cart-img" style={{background: '#e2e8f0'}}>
                                        <span className="cart-badge">1</span>
                                    </div>
                                    <div className="cart-details">
                                        <div className="cart-name">Cuello redondo trenzado</div>
                                        <div className="cart-variant">Mediana / Lavanda</div>
                                    </div>
                                    <div className="cart-price">125,00€</div>
                                </div>
                                <div className="cart-divider"></div>
                                <div className="cart-discount">
                                    <input type="text" placeholder="Código de descuento o tarjeta" />
                                    <button>Aplicar</button>
                                </div>
                                <div className="cart-divider"></div>
                                <div className="cart-totals">
                                    <div className="summary-row"><span>Subtotal</span><span>250,00€</span></div>
                                    <div className="summary-row"><span>Envío</span><span>GRATIS</span></div>
                                    <div className="summary-row"><span>Impuestos estimados</span><span>17,50€</span></div>
                                    <div className="summary-row total"><span>Total</span><span>267,50€</span></div>
                                </div>
                            </div>
                            
                            <div className="mockup-main">
                                <div className="mockup-header">
                                    <div className="mockup-logo">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                    <ShoppingBag size={20} className="mockup-bag" />
                                </div>

                                <div className="mockup-express">
                                    <p>Opciones de pago exprés</p>
                                    <div className="express-buttons">
                                        <button className="btn-foodfy">Foodfy<span style={{background: '#fff', color: '#a65efe', padding: '0 4px', borderRadius: '4px', marginLeft: '4px', fontWeight: 'bold'}}>Pay</span></button>
                                        <button className="btn-paypal">PayPal</button>
                                        <button className="btn-apple">Pay</button>
                                    </div>
                                    <div className="express-divider"><span>O continuar abajo</span></div>
                                </div>
                                
                                <div className="mockup-form">
                                    <div className="form-section-head">
                                        <h4>Contacto</h4>
                                        <span>¿Tienes una cuenta? Iniciar sesión</span>
                                    </div>
                                    <input type="text" className="mockup-input" placeholder="Dirección de correo electrónico o número de teléfono" />
                                    <label className="mockup-checkbox">
                                        <input type="checkbox" />
                                        <span>Quiero recibir novedades y ofertas por correo electrónico</span>
                                    </label>
                                    
                                    <h4 style={{marginTop: '1.5rem'}}>Entrega</h4>
                                    <select className="mockup-select"><option>País/región - España</option></select>
                                    <div className="form-row">
                                        <input type="text" className="mockup-input" placeholder="Nombre (opcional)" />
                                        <input type="text" className="mockup-input" placeholder="Apellidos" />
                                    </div>
                                    <input type="text" className="mockup-input" placeholder="Dirección" />
                                </div>
                            </div>

                        </div>
                        
                        {/* Floating CTA over mockup */}
                        <div className="floating-pay-button">
                            <span>Foodfy</span><span className="pay-badge">Pay</span>
                        </div>
                        <div className="floating-video-badge">
                            <div className="play-icon"><ChevronRight size={14} /></div>
                            <span>Por qué creamos<br/>Foodfy Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutSection;
