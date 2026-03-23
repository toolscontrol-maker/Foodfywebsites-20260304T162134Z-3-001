import React, { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import ProductsMenu from './ProductsMenu';
import './Navbar.css';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isPricingPage = location.pathname === '/precios';
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isWhyFoodfyOpen, setIsWhyFoodfyOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Auto-hide header on mobile when scrolling down
            if (window.innerWidth <= 1024) {
                if (currentScrollY > lastScrollY && currentScrollY > 80) {
                    setHidden(true); // Scrolling down
                } else {
                    setHidden(false); // Scrolling up
                }
            } else {
                setHidden(false); // Always show on desktop
            }

            setScrolled(currentScrollY > 20);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll lock removed to prevent layout shift (jitter) when hovering over menus
    // Scrollbar-gutter: stable in index.css handles the rest

    const closeAllMenus = () => {
        setIsWhyFoodfyOpen(false);
        setIsProductsOpen(false);
    };

    return (
        <nav 
            className={`navbar-container ${isPricingPage ? 'is-light-theme' : ''} ${scrolled ? 'scrolled' : ''} ${isWhyFoodfyOpen || isProductsOpen ? 'menu-open' : ''} ${hidden && !mobileMenuOpen ? 'navbar-hidden' : ''}`}
            onMouseLeave={closeAllMenus}
        >
            <div className="navbar-inner">
                {/* Logo */}
                <a 
                    href="/" 
                    className="navbar-logo"
                    onMouseEnter={closeAllMenus}
                >
                    <span className="navbar-logo-text">FOODFY</span>
                </a>

                {/* Nav Links - Shopify Style */}
                <div className="navbar-links">
                    <div 
                        className="nav-item-wrapper"
                        onMouseEnter={() => {
                            setIsWhyFoodfyOpen(true);
                        }}
                    >
                        <a 
                            href="#" 
                            className="nav-link-item"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsWhyFoodfyOpen(!isWhyFoodfyOpen);
                                setIsProductsOpen(false);
                            }}
                        >
                            Por qué Foodfy <ChevronDown size={14} className={isWhyFoodfyOpen ? 'rotate-180' : ''} />
                        </a>
                    </div>
                    <div 
                        className="nav-item-wrapper"
                        onMouseEnter={() => {
                            setIsWhyFoodfyOpen(false);
                            setIsProductsOpen(true);
                        }}
                    >
                        <a 
                            href="#" 
                            className="nav-link-item"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsProductsOpen(!isProductsOpen);
                                setIsWhyFoodfyOpen(false);
                            }}
                        >
                            Productos <ChevronDown size={14} className={isProductsOpen ? 'rotate-180' : ''} />
                        </a>
                    </div>
                    <div className="nav-item-wrapper">
                        <a 
                            href="/precios" 
                            className="nav-link-item"
                            onMouseEnter={closeAllMenus}
                        >
                            Precios
                        </a>
                    </div>
                    <a 
                        href="/nosotros" 
                        className="nav-link-item"
                        onMouseEnter={closeAllMenus}
                    >
                        Enterprise
                    </a>
                </div>

                {/* Actions */}
                <div className="navbar-actions">
                    <a 
                        href="/login?mode=login" 
                        className="nav-action-text"
                        onMouseEnter={closeAllMenus}
                    >
                        Iniciar sesión
                    </a>
                    <a href="/login?mode=signup" className="nav-action-btn">
                        Comenzar gratis
                    </a>
                    
                    {/* Mobile Menu Toggle */}
                    <button 
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Background Overlay (Shopify Style) */}
            <div 
                className={`menu-overlay ${isWhyFoodfyOpen || isProductsOpen ? 'active' : ''}`}
                onMouseEnter={closeAllMenus}
            />

            {/* MegaMenus placed here to align perfectly with navbar bottom */}
            <MegaMenu isOpen={isWhyFoodfyOpen} />
            <ProductsMenu isOpen={isProductsOpen} />

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" style={{
                    position: 'fixed',
                    top: '72px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: '#0B0A11',
                    zIndex: 999,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <a href="#" className="nav-link-item" style={{ fontSize: '1.2rem' }}>Por qué Foodfy</a>
                    <a href="/ecosistema" className="nav-link-item" style={{ fontSize: '1.2rem' }}>Productos</a>
                    <a href="/login?mode=signup" className="nav-link-item" style={{ fontSize: '1.2rem' }}>Comenzar gratis</a>
                    <a href="/login?mode=login" className="nav-link-item" style={{ fontSize: '1.2rem' }}>Iniciar sesión</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

