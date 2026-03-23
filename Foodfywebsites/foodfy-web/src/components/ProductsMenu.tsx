import React from 'react';
import { 
    Globe, 
    Palette, 
    Search, 
    UserCircle, 
    Zap, 
    ShoppingCart, 
    Truck, 
    Settings, 
    Smartphone, 
    Share2, 
    Globe2, 
    Layout, 
    Mail, 
    BarChart3, 
    CreditCard, 
    ReceiptText, 
    Bot, 
    Sparkles,
    ChevronRight,
    Megaphone,
    TicketPercent,
    MonitorSmartphone,
    Cpu,
    Briefcase
} from 'lucide-react';
import './ProductsMenu.css';

const ProductsMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <div className={`products-menu-overlay ${isOpen ? 'open' : ''}`}>
            <div className="products-menu-container">
                {/* Top Fade Edge for Scroll Protection */}
                <div className="products-menu-blur-top"></div>
                {/* Scrollable Area */}
                <div className="products-menu-scroll">
                    <div className="products-menu-grid">
                        {/* Left Main Content */}
                        <div className="products-menu-main">
                            <div className="products-menu-columns">
                                {/* Column 1 */}
                                <div className="products-menu-column">
                                    <div className="products-menu-section">
                                        <h2 className="products-menu-section-title">CREA TU SITIO WEB</h2>
                                        <ul className="products-menu-list">
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Globe className="item-icon" size={18} />
                                                    <span>Creador de sitios web</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Palette className="item-icon" size={18} />
                                                    <span>Temas personalizados</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Search className="item-icon" size={18} />
                                                    <span>Dominios Foodfy</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <UserCircle className="item-icon" size={18} />
                                                    <span>Cuentas de cliente</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Sparkles className="item-icon" size={18} />
                                                    <span>Sidekick</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="products-menu-section mt-section">
                                        <h2 className="products-menu-section-title text-purple">DIRIGE A TU AGENTE</h2>
                                        <ul className="products-menu-list">
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Bot className="item-icon" size={18} />
                                                    <span>Configura a tu agente</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Briefcase className="item-icon" size={18} />
                                                    <span>Compra a tu agente</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="products-menu-section mt-section">
                                        <h2 className="products-menu-section-title text-purple">DIRIGE TU NEGOCIO</h2>
                                        <ul className="products-menu-list">
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <ShoppingCart className="item-icon" size={18} />
                                                    <span>Pedidos e inventario</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Truck className="item-icon" size={18} />
                                                    <span>Envíos</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Zap className="item-icon" size={18} />
                                                    <span>Automatización de flujos de trabajo</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="products-menu-column">
                                    <div className="products-menu-section">
                                        <h2 className="products-menu-section-title">VENDE DONDE QUIERAS</h2>
                                        <ul className="products-menu-list">
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Globe2 className="item-icon" size={18} />
                                                    <span>Online</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <MonitorSmartphone className="item-icon" size={18} />
                                                    <span>Point of Sale</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Smartphone className="item-icon" size={18} />
                                                    <span>Aplicación Shop</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Share2 className="item-icon" size={18} />
                                                    <span>Redes sociales y mercados</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Globe className="item-icon" size={18} />
                                                    <span>International</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Briefcase className="item-icon" size={18} />
                                                    <span>B2B</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Layout className="item-icon" size={18} />
                                                    <span>En todo Markets</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Column 3 */}
                                <div className="products-menu-column">
                                    <div className="products-menu-section">
                                        <h2 className="products-menu-section-title">MARKETING E INFORMES Y ESTADÍSTICAS</h2>
                                        <ul className="products-menu-list">
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Megaphone className="item-icon" size={18} />
                                                    <span>Publicidad y campañas</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Mail className="item-icon" size={18} />
                                                    <span>Correo electrónico y chat de clientes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <TicketPercent className="item-icon" size={18} />
                                                    <span>Descuentos</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <BarChart3 className="item-icon" size={18} />
                                                    <span>Informes y estadísticas</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="products-menu-section mt-section">
                                        <h2 className="products-menu-section-title">RECIBE PAGOS</h2>
                                        <ul className="products-menu-list">
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <Layout className="item-icon" size={18} />
                                                    <span>Pantalla de pago</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <CreditCard className="item-icon" size={18} />
                                                    <span>Pagos</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="products-menu-item">
                                                    <ReceiptText className="item-icon" size={18} />
                                                    <span>Impuestos</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Featured Panel */}
                        <div className="products-menu-right">
                            <div className="products-menu-featured">
                                <h2 className="products-menu-section-title text-purple">Todo lo último de Foodfy</h2>
                                
                                <div className="featured-promo-card">
                                    <div className="promo-image">
                                        <img src="/8167BD82-B450-4C30-B031-B0A97A383375.png" alt="Foodfy Editions" />
                                        <div className="promo-overlay">
                                            <span>EDITION '24</span>
                                        </div>
                                    </div>
                                    <div className="promo-content">
                                        <h3>New Foodfy</h3>
                                        <p>Más de 150 actualizaciones a Shopify, dos veces al año.</p>
                                    </div>
                                </div>

                                <div className="last-updates">
                                    <h2 className="products-menu-section-title">ÚLTIMAS ACTUALIZACIONES</h2>
                                    <ul className="updates-list">
                                        <li>
                                            <a href="#" className="update-item">
                                                <div className="update-dot"></div>
                                                <span>Sidekick Pulse</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="update-item">
                                                <div className="update-dot"></div>
                                                <span>Product Network</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="update-item">
                                                <div className="update-dot"></div>
                                                <span>Compatibilidad total con dev MCP</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="products-menu-footer">
                    <div className="footer-content">
                        {/* Column 1 - Title */}
                        <div className="footer-section-title">
                            <span className="footer-title-text">PERSONALIZAR Y EXTENDER FOODFY</span>
                        </div>
                        
                        {/* Column 2 - Commerce for agents with subtitle */}
                        <a href="#" className="footer-link-with-subtitle">
                            <span className="footer-link-main">Comercio para agentes</span>
                            <span className="footer-link-sub">Crea con nuestras herramientas para agentes</span>
                        </a>
                        
                        {/* Column 3 - App Store with subtitle */}
                        <a href="#" className="footer-link-with-subtitle">
                            <span className="footer-link-main">Foodfy App Store</span>
                            <span className="footer-link-sub">El ecosistema de comercio más grande</span>
                        </a>
                        
                        {/* Column 4 - Dev with subtitle */}
                        <a href="#" className="footer-link-with-subtitle">
                            <span className="footer-link-main">Foodfy.dev</span>
                            <span className="footer-link-sub">Documentación para desarrolladores, CLI y más</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsMenu;
