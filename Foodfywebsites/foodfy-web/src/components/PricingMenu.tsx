import React from 'react';
import './PricingMenu.css';
import { User, TrendingUp, Settings, PlusCircle } from 'lucide-react';

const PricingMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('annual');
    
    const plans = [
        {
            name: 'Basic',
            Icon: User,
            price: billingCycle === 'annual' ? '22' : '29',
            desc: 'Para emprendedores independientes',
            features: [
                'Recupera el 1% de las ventas mediante Foodfy Créditos',
                'Acepta Klarna y las tarjetas principales',
                'Carteras digitales y criptomonedas',
                'Tarifas de tarjetas a partir de 2,1% + 0,30 € EUR online',
                'Descuento en envío de hasta 77%',
                'Ayuda por chat 24/7'
            ],
            color: '#10b981',
            offer: '1 € al mes los primeros 3 meses'
        },
        {
            name: 'Grow',
            Icon: TrendingUp,
            price: billingCycle === 'annual' ? '60' : '78',
            desc: 'Para equipos en crecimiento',
            features: [
                'Todo lo de Basic, más:',
                '10 sucursales incluidas',
                'Ayuda por chat 24/7 mejorada',
                'Tiendas online locales por mercado',
                '5 cuentas para empleados',
                'Venta en persona con teléfono o dispositivo POS'
            ],
            color: '#10b981',
            popular: true,
            offer: '1 € al mes los primeros 3 meses'
        },
        {
            name: 'Advanced',
            Icon: Settings,
            price: billingCycle === 'annual' ? '217' : '272',
            desc: 'Para operar con las mejores condiciones',
            features: [
                'Todo lo de Grow, más:',
                'Descuento en envío de hasta 88 %, incluyendo seguro',
                'Seguro y tarifas calculadas por servicios externos',
                '15 cuentas para empleados',
                'Tiendas online locales por mercado ilimitadas',
                'Venta en persona con teléfono o dispositivo POS'
            ],
            color: '#10b981',
            offer: '1 € al mes los primeros 3 meses'
        }
    ];

    return (
        <div className={`pricing-menu-overlay ${isOpen ? 'open' : ''}`} onMouseLeave={onClose}>
            <div className="pricing-menu-content">
                <div className="pricing-header">
                    <span className="pricing-label">PLANES Y PRECIOS</span>
                    <h2>Comienza gratis y, luego, disfruta de <br /> 6 meses por 1 € al mes</h2>
                    <p className="pricing-subtitle">Además, gana hasta 8000 € en créditos con tus ventas.</p>
                </div>

                <div className="billing-toggle-container">
                    <div className="billing-toggle">
                        <button 
                            className={billingCycle === 'monthly' ? 'active' : ''} 
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Pago mensual
                        </button>
                        <button 
                            className={billingCycle === 'annual' ? 'active' : ''} 
                            onClick={() => setBillingCycle('annual')}
                        >
                            Pago anual <span className="discount-tag">(ahorra un 25 %)</span>
                        </button>
                    </div>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                            <div className="plan-offer-banner">
                                {plan.offer}
                            </div>
                            <div className="pricing-card-body">
                                <div className="card-header-flex">
                                    <div className="plan-title-with-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {plan.Icon && <plan.Icon size={24} style={{ color: plan.name === 'Grow' ? '#a855f7' : (plan.name === 'Advanced' ? '#f97316' : '#3b82f6') }} />}
                                        <h3 style={{ margin: 0 }}>{plan.name}</h3>
                                    </div>
                                    {plan.popular && <span className="popular-badge">Más popular</span>}
                                </div>
                                <p className="plan-desc">{plan.desc}</p>
                                <div className="plan-price">
                                    <span className="amount">{plan.price} €</span>
                                    <div className="price-details">
                                        <span className="currency-code">EUR/mes</span>
                                        <span className="billing-info">factura {billingCycle === 'annual' ? 'anual' : 'mensual'}</span>
                                    </div>
                                </div>
                                
                                <button className="btn-choose-plan">ESCOGER PLAN</button>

                                <div className="features-section">
                                    <h4>Funciones destacadas</h4>
                                    <ul className="plan-features">
                                        {plan.features.map((f, i) => (
                                            <li key={i}>
                                                <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="pricing-card plus-card">
                        <div className="plan-offer-banner plus-banner">
                            Disponible en periodos de 1 a 3 años
                        </div>
                        <div className="pricing-card-body">
                            <div className="plan-title-with-icon" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <PlusCircle size={24} style={{ color: '#14b8a6' }} />
                                <h3 style={{ margin: 0 }}>Plus</h3>
                            </div>
                            <p className="plan-desc">Para negocios complejos</p>
                            <div className="plan-price">
                                <span className="amount">2100 €</span>
                                <div className="price-details">
                                    <span className="currency-code">EUR/mes</span>
                                    <span className="billing-info">en un periodo de tres años</span>
                                </div>
                            </div>
                            
                            <button className="btn-choose-plan plus-btn">ESCOGER PLAN</button>

                            <div className="features-section">
                                <h4>Funciones destacadas</h4>
                                <ul className="plan-features">
                                    <li><svg className="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Descuento en envío de hasta 88 %</li>
                                    <li><svg className="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>200 sucursales</li>
                                    <li><svg className="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Atención telefónica prioritaria 24/7</li>
                                    <li><svg className="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Tiendas online locales por mercado</li>
                                </ul>
                            </div>
                            <div className="plus-footer">
                                <a href="/contacto" className="contact-link">Contáctanos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingMenu;
