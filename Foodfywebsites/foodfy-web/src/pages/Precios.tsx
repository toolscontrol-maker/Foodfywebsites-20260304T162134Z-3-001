import React from 'react';
import './Precios.css';
import { Check, User, TrendingUp, Settings, PlusCircle } from 'lucide-react';

const Precios: React.FC = () => {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('annual');
    const [activeMobilePlan, setActiveMobilePlan] = React.useState('Plus');
    const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);
    // Initialize navVisible based on actual scroll position (handles back-nav restore)
    const [navVisible, setNavVisible] = React.useState(() => window.scrollY <= 80);
    const lastScrollYRef = React.useRef(window.scrollY);

    React.useEffect(() => {
        if (window.innerWidth > 768) return; // only mobile

        // Sync lastScrollY with the restored scroll position after mount
        lastScrollYRef.current = window.scrollY;
        setNavVisible(window.scrollY <= 80);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
                setNavVisible(false); // scrolling down — nav hides
            } else {
                setNavVisible(true);  // scrolling up — nav appears
            }
            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const plans = [
        {
            name: 'Basic',
            Icon: User,
            price: billingCycle === 'annual' ? '22' : '29',
            oldPrice: billingCycle === 'annual' ? '27' : '36',
            desc: 'Para emprendedores independientes',
            popular: false,
            features: [
                'Recupera el 1% de las ventas mediante Foodfy Créditos',
                'Consigue hasta 4000 € en créditos',
                {
                    group: 'Acepta pagos',
                    items: [
                        'Acepta pagos en efectivo y las tarjetas principales',
                        'Tarjetas digitales y criptomonedas',
                        'Tarifas de tarjetas a partir de 2,1% + 0,1 € EUR online',
                        'Tarifas de sidekick del 2,1% por pedido'
                    ]
                },
                {
                    group: 'Funciones destacadas',
                    items: [
                        '3 sucursales',
                        '5 cuentas para empleados',
                        'Ayuda por chat 24/7',
                        'Venta en persona con teléfono o dispositivo POS',
                        'Aplicación integrada para drivers'
                    ]
                }
            ],
            color: '#a855f7',
            offer: '1 € al mes durante los primeros 3 meses'
        },
        {
            name: 'Grow',
            Icon: TrendingUp,
            price: billingCycle === 'annual' ? '60' : '78',
            oldPrice: billingCycle === 'annual' ? '77' : '102',
            desc: 'Para equipos en crecimiento',
            popular: true,
            features: [
                'Recupera el 1% de las ventas mediante Foodfy Créditos',
                'Consigue hasta 6000 € en créditos',
                {
                    group: 'Acepta pagos',
                    items: [
                        'Acepta pagos en efectivo y las tarjetas principales',
                        'Tarjetas digitales y criptomonedas',
                        'Tarifas de tarjetas a partir de 1,7% + 0,05 € EUR online',
                        'Tarifas de sidekick del 2,0% por pedido'
                    ]
                },
                {
                    group: 'Funciones destacadas',
                    items: [
                        'Hasta 10 sucursales',
                        '50 cuentas para empleados',
                        'Ayuda por chat 24/7',
                        'Venta en persona con teléfono o dispositivo POS',
                        'Aplicación integrada para drivers'
                    ]
                }
            ],
            color: '#a855f7',
            offer: '1 € al mes durante los primeros 3 meses'
        },
        {
            name: 'Advanced',
            Icon: Settings,
            price: billingCycle === 'annual' ? '217' : '272',
            oldPrice: '', 
            prefix: 'A partir de',
            desc: 'Para operar con las mejores condiciones',
            features: [
                'Recupera el 1% de las ventas mediante Foodfy Créditos',
                'Consigue hasta 8000 € en créditos',
                {
                    group: 'Acepta pagos',
                    items: [
                        'Acepta pagos en efectivo y las tarjetas principales',
                        'Tarjetas digitales y criptomonedas',
                        'Tarifas de tarjetas a partir de 1,7% + 0,05 € EUR online',
                        'Tarifas de sidekick del 1,7% por pedido'
                    ]
                },
                {
                    group: 'Funciones destacadas',
                    items: [
                        'Más de 20 sucursales',
                        '500 cuentas para empleados',
                        'Ayuda por chat 24/7 prioritaria',
                        'Venta en persona con teléfono o dispositivo POS',
                        'Aplicación integrada para drivers'
                    ]
                }
            ],
            color: '#a855f7',
            offer: '1 € al mes durante los primeros 3 meses'
        },
        {
            name: 'Plus',
            Icon: PlusCircle,
            price: '2100',
            prefix: 'A partir de',
            desc: 'Para negocios complejos',
            isSpecial: true,
            features: [
                'en un periodo de tres años',
                {
                    group: 'Acepta pagos',
                    items: [
                        'Acepta pagos en efectivo y las tarjetas principales',
                        'Tarjetas digitales y criptomonedas',
                        'Las mejores tarifas para emprendedores de alto volumen'
                    ]
                },
                {
                    group: 'Funciones destacadas',
                    items: [
                        'Sucursales ilimitadas',
                        'Atención telefónica prioritaria 24/7',
                        'Cuentas para empleados ilimitadas',
                        'Pago totalmente personalizable',
                        'Soporte técnico dedicado',
                        'Vende al por mayor/B2B',
                        'Aplicación integrada para drivers'
                    ]
                }
            ],
            color: '#a855f7',
            offer: 'Disponible en periodos de 1 a 3 años'
        }
    ];

    return (
        <div className="precios-page">
            <div className="pricing-hero-header">
                {/* Background glow elements */}
                <div className="hero-glow shape-1"></div>
                <div className="hero-glow shape-2"></div>
                
                <div className="pricing-header">
                    <span className="pricing-label">PLANES Y PRECIOS</span>
                    <h1>Comienza gratis y, luego, disfruta de <span>3 meses por 1&nbsp;€&nbsp;al&nbsp;mes</span></h1>
                    <p className="pricing-subtitle">Además, gana hasta 8000 € en créditos con tus ventas.</p>
                    
                    <div className="pricing-email-signup">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="email-input-group">
                                <input 
                                    type="email" 
                                    placeholder="Introduce tu dirección de correo electrónico" 
                                    required 
                                />
                                <button type="submit" className="email-submit-btn desktop-only">
                                    Comenzar gratis
                                </button>
                            </div>
                            <button type="submit" className="email-submit-btn mobile-only">
                                Comenzar gratis
                            </button>
                            <p className="marketing-disclaimer">
                                Aceptas recibir correos electrónicos de marketing de Foodfy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <div className="pricing-content-wrapper">
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

                <div className="main-plans-section">
                    <div
                        className="mobile-sticky-group"
                        style={{ top: navVisible ? '64px' : '0px' }}
                    >
                        <div className="mobile-plan-selector-container">
                            <div className="mobile-plan-selector">
                                {plans.map((p) => (
                                    <button
                                        key={p.name}
                                        className={activeMobilePlan === p.name ? 'active' : ''}
                                        onClick={() => setActiveMobilePlan(p.name)}
                                    >
                                        {p.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mobile-plan-banner-wrapper">
                        <div className="mobile-sticky-offer-banner">
                            {plans.find(p => p.name === activeMobilePlan)?.offer}
                        </div>
                    </div>

                    <div className="pricing-grid">
                        {plans.map((plan) => (
                            <div 
                                key={plan.name} 
                                className={`pricing-card ${plan.popular ? 'popular' : ''} ${plan.isSpecial ? 'plus-card' : ''} ${activeMobilePlan === plan.name ? 'mobile-active' : 'mobile-hidden'}`}
                            >
                                <div className="plan-offer-banner">{plan.offer}</div>
                                <div className="pricing-card-body">
                                    <div className="card-header-flex">
                                        <div className="plan-title-with-icon">
                                            {plan.Icon && <plan.Icon className={`plan-icon icon-${plan.name.toLowerCase()}`} size={24} />}
                                            <h3>{plan.name}</h3>
                                        </div>
                                        {plan.popular && <span className="popular-badge">Más popular</span>}
                                    </div>
                                    <p className="plan-desc">{plan.desc}</p>
                                    
                                    <div className="plan-price">
                                        <div className="price-meta">
                                            {(plan as any).oldPrice && <span className="old-price">{(plan as any).oldPrice} €</span>}
                                            {(plan as any).prefix && <span className="price-prefix">{(plan as any).prefix}</span>}
                                        </div>
                                        <div className="price-main">
                                            <span className="amount">{plan.price}</span>
                                            <span className="symbol">€</span>
                                            <div className="price-context">
                                                <span className="currency">EUR/mes</span>
                                                {!plan.isSpecial && (
                                                    <span className="billing-term">
                                                        {billingCycle === 'annual' ? 'factura anual' : 'factura mensual'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {plan.isSpecial && <p className="special-term">{plan.features[0] as string}</p>}
                                    </div>

                                    <div className="card-features-container">
                                        {plan.features.slice(plan.isSpecial ? 1 : 0).map((feature: any, idx: number) => (
                                            typeof feature === 'string' ? (
                                                <p key={idx} className="feature-teaser"><strong>{feature}</strong></p>
                                            ) : (
                                                <div key={idx} className="features-group">
                                                    <h4>{feature.group}</h4>
                                                    <ul className="plan-features">
                                                        {feature.items.map((item: string, i: number) => (
                                                            <li key={i}>
                                                                <Check className="check-icon" size={14} />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                    
                                    <div className="card-footer">
                                        <button className="btn-choose-plan">
                                            {plan.isSpecial ? 'Comenzar' : 'Prueba gratis'}
                                        </button>
                                        {plan.isSpecial && (
                                            <a href="/contacto" className="contact-link">Contáctanos</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="extra-options-section">
                        <h2>Más opciones para tu negocio</h2>
                        <div className="extra-options-grid">
                            <div className="extra-card">
                                <div className="extra-offer-banner">
                                    1 € al mes los primeros 3 meses
                                </div>
                                <div className="extra-card-body">
                                    <h3>Starter</h3>
                                    <div className="extra-price">
                                        <span className="extra-currency">EUR</span>
                                        <span className="extra-amount">5 €</span>
                                        <span className="extra-period">al mes</span>
                                    </div>
                                    <p>Vende al instante por las redes sociales y aplicaciones de mensajería, o en una simple tienda online</p>
                                    <button className="btn-extra">Más información</button>
                                </div>
                            </div>

                            <div className="extra-card">
                                <div className="extra-offer-banner">
                                    Ahorra más de 2000 € EUR con el plan anual
                                </div>
                                <div className="extra-card-body">
                                    <h3>POS Pro</h3>
                                    <div className="extra-price">
                                        <span className="extra-currency">EUR</span>
                                        <span className="extra-amount">79 €</span>
                                        <span className="extra-period">al mes</span>
                                    </div>
                                    <p>Obtén funciones avanzadas de retail, como empleados de POS ilimitados, compra online y retiro en tienda, y más.</p>
                                    <button className="btn-extra">Más información</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="plans-summary-section">
                        <h2>Qué ofrece cada plan</h2>
                        
                        <div className="summary-grid">
                            <div className="summary-card">
                                <h3>La mejor experiencia de pago del mundo</h3>
                                <p>El proceso de pago en Foodfy convierte hasta un 15% más que otras plataformas tradicionales.</p>
                            </div>
                            <div className="summary-card">
                                <h3>Venta en persona</h3>
                                <p>Vende en local y mantén el stock sincronizado con tus pedidos online gracias a <a href="#pos">Foodfy POS</a>.</p>
                            </div>
                            <div className="summary-card">
                                <h3>Varios canales de venta</h3>
                                <p>Promociona y vende productos en WhatsApp, Instagram, TikTok, Google y más desde un solo lugar.</p>
                            </div>
                            <div className="summary-card">
                                <h3>Informes y estadísticas detallados</h3>
                                <p>Accede a informes detallados de ventas y rendimiento para identificar oportunidades de optimización.</p>
                            </div>
                            <div className="summary-card">
                                <h3>Aplicaciones y ecosistema</h3>
                                <p>Usa aplicaciones externas para todo, desde marketing hasta el abastecimiento y personalización.</p>
                            </div>
                        </div>

                        <div className="payments-banner">
                            <div className="payments-info">
                                <h3>Formas de pago locales y globales</h3>
                                <p>Permite que los clientes elijan la mejor forma de pago con Foodfy Pay.</p>
                            </div>
                            <div className="payment-icons">
                                <img src="/badge-visa.png" alt="Visa" />
                                <img src="/badge-mastercard.png" alt="Mastercard" />
                                <img src="/badge-applepay.png" alt="Apple Pay" />
                                <img src="/badge-googlepay.png" alt="Google Pay" />
                            </div>
                        </div>
                    </div>

                <div className="marketing-cta-section">
                    <div className="cta-content-container">
                        <h1>Todo lo que necesitas para vender online, en un solo lugar</h1>
                        <p>Ya sea que quieras crear un sitio web, gestionar inventario o responder a tus clientes, hazlo todo con Foodfy.</p>
                        
                        <div className="cta-form-container">
                            <div className="cta-input-wrapper">
                                <input type="email" placeholder="Introduce tu dirección de correo electrónico" className="cta-input" />
                                <button className="cta-button">Comenzar gratis</button>
                            </div>
                            <span className="cta-disclaimer">Aceptas recibir correos electrónicos de marketing de Foodfy.</span>
                        </div>
                    </div>
                </div>

                <div className="faq-section">
                    <div className="faq-container">
                        <h1 className="highlight-gradient" style={{ display: 'inline-block' }}>Preguntas frecuentes</h1>
                        <div className="faq-category">
                            <h2>Preguntas generales</h2>
                            
                            <div className={`faq-item ${openFaqIndex === 0 ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(0)}>
                                    <span>¿Qué es Foodfy y cómo funciona?</span>
                                    <div className={`faq-icon ${openFaqIndex === 0 ? 'open' : ''}`}>
                                        {openFaqIndex === 0 ? '-' : '+'}
                                    </div>
                                </button>
                                <div className={`faq-answer ${openFaqIndex === 0 ? 'show' : ''}`}>
                                    <p>Foodfy es una plataforma de comercio integral creada para propietarios de negocios independientes con el fin de ayudarlos a iniciar, gestionar y hacer crecer sus negocios online, físicos o de la forma que sean. Estas son algunas de las cosas que puedes hacer con Foodfy: - Crear y personalizar una tienda online - Vender en varios lugares, como internet, aplicaciones móviles, redes sociales y tiendas físicas - Gestionar productos, inventario, pagos y envíos - Crear, ejecutar y analizar campañas de marketing online</p>
                                </div>
                            </div>

                            <div className={`faq-item ${openFaqIndex === 1 ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(1)}>
                                    <span>¿Cuánto cuesta Foodfy?</span>
                                    <div className={`faq-icon ${openFaqIndex === 1 ? 'open' : ''}`}>
                                        {openFaqIndex === 1 ? '-' : '+'}
                                    </div>
                                </button>
                                <div className={`faq-answer ${openFaqIndex === 1 ? 'show' : ''}`}>
                                    <p>Prueba Foodfy gratis por 3 días, no se requiere tarjeta de crédito. Una vez terminada la prueba, elige el plan que mejor se adapte al tamaño y etapa de tu negocio.</p>
                                </div>
                            </div>

                            <div className={`faq-item ${openFaqIndex === 2 ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => toggleFaq(2)}>
                                    <span>¿Cuánto duran los contratos?</span>
                                    <div className={`faq-icon ${openFaqIndex === 2 ? 'open' : ''}`}>
                                        {openFaqIndex === 2 ? '-' : '+'}
                                    </div>
                                </button>
                                <div className={`faq-answer ${openFaqIndex === 2 ? 'show' : ''}`}>
                                    <p>Todos los planes de Foodfy son mes a mes a menos que te suscribas a un plan anual.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Precios;
