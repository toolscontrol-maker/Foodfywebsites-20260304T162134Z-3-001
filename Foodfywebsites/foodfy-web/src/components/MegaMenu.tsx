import React from 'react';
import { ArrowRight } from 'lucide-react';
import './MegaMenu.css';

const MegaMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <div className={`megamenu-overlay ${isOpen ? 'open' : ''}`}>
            <div className="megamenu-scroll">
                <div className="megamenu-content">
                    <div className="megamenu-grid">
                        {/* Left Section: Cards */}
                        <div className="megamenu-cards">
                            <a href="/empezar" className="megamenu-card">
                                <div className="megamenu-card-img">
                                    <img src="/empiezaconfoodfyheader.jpg" alt="Empieza rápido" />
                                </div>
                                <div className="megamenu-card-info">
                                    <h3>Empieza rapido <ArrowRight size={16} className="card-arrow" /></h3>
                                    <p>empieza rápido con Foodfy</p>
                                </div>
                            </a>
                            <a href="/cambiar" className="megamenu-card">
                                <div className="megamenu-card-img">
                                    <img src="/cambiar-a-foodfy.jpg" alt="Cambiar a Foodfy" />
                                </div>
                                <div className="megamenu-card-info">
                                    <h3>Cambiar a foodfy <ArrowRight size={16} className="card-arrow" /></h3>
                                    <p>Consigue más clientes, haz crecer tus ventas</p>
                                </div>
                            </a>
                            <a href="/clientes" className="megamenu-card">
                                <div className="megamenu-card-img">
                                    <img src="/lideres-foodfy.png" alt="Lideres" />
                                </div>
                                <div className="megamenu-card-info">
                                    <h3>Los lideres ya deberían confiar en nosotros <ArrowRight size={16} className="card-arrow" /></h3>
                                    <p>explora por qué Foodfy es tu mayor aliado</p>
                                </div>
                            </a>
                        </div>

                        {/* Right Section: Featured */}
                        <div className="megamenu-featured">
                            <div className="featured-label">TODO LO QUE INCLUYE FOODFY</div>
                            
                            <a href="/dashboard" className="featured-card">
                                <div className="featured-card-img dark-gradient">
                                    <img src="/control-total.png" alt="Dashboard" className="sidekick-icon-large" />
                                </div>
                                <div className="featured-card-text">
                                    <h4>Dashboard completo</h4>
                                    <p>Gestiona todo tu negocio desde un solo lugar.</p>
                                </div>
                            </a>

                            <a href="/tienda" className="featured-card">
                                <div className="featured-card-img dark-gradient">
                                    <img src="/made-in-foodfy-v1.png" alt="Tienda Online" className="sidekick-icon-large" />
                                </div>
                                <div className="featured-card-text">
                                    <h4>Tienda online</h4>
                                    <p>Crea una experiencia de compra única para tus clientes.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
