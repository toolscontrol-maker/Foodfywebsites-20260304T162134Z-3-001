import React, { useState } from 'react';
import { Home, User, BarChart3, Settings, ChevronRight, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    href: string;
}

const menuItems: MenuItem[] = [
    { id: 'inicio', label: 'Inicio', icon: <Home size={18} />, href: '/dashboard' },
    { id: 'agente', label: 'Sideckick Foodfy', icon: <User size={18} />, href: '/dashboard/agente' },
    { id: 'informes', label: 'Informes y estadísticas', icon: <BarChart3 size={18} />, href: '/dashboard/informes' },
    { id: 'configuracion', label: 'Configuración', icon: <Settings size={18} />, href: '/dashboard/configuracion' },
];

const DashboardSidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const getActiveSection = () => {
        const path = location.pathname;
        if (path.includes('/agente')) return 'agente';
        if (path.includes('/informes')) return 'informes';
        if (path.includes('/configuracion')) return 'configuracion';
        return 'inicio';
    };
    
    const [active, setActive] = useState(getActiveSection());

    const handleNavigate = (id: string, href: string) => {
        setActive(id);
        navigate(href);
    };

    return (
        <aside className="dashboard-sidebar" style={{
            position: 'fixed',
            left: 0,
            top: '72px',
            bottom: 0,
            width: '240px',
            background: '#e2e4e9',
            borderRight: '1px solid rgba(0,0,0,0.06)',
            padding: '1.25rem 0',
            zIndex: 900,
            overflowY: 'auto',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
        }}>
            <nav style={{ padding: '0 0.75rem' }}>
                {menuItems.map((item, index) => {
                    const isActive = active === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNavigate(item.id, item.href)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.7rem 0.875rem',
                                marginBottom: '2px',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                color: isActive ? '#0f0f0f' : '#6b7280',
                                background: isActive 
                                    ? 'rgba(255,255,255,0.75)' 
                                    : 'transparent',
                                backdropFilter: isActive ? 'blur(12px)' : 'none',
                                WebkitBackdropFilter: isActive ? 'blur(12px)' : 'none',
                                boxShadow: isActive 
                                    ? '0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)' 
                                    : 'none',
                                fontSize: '0.9rem',
                                fontWeight: isActive ? 600 : 500,
                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                width: '100%',
                                border: isActive ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
                                textAlign: 'left',
                                letterSpacing: '-0.01em',
                                animationDelay: `${index * 0.05}s`
                            }}
                            className="sidebar-item"
                        >
                            <span style={{
                                color: isActive ? '#0f0f0f' : '#9ca3af',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'color 0.2s'
                            }}>
                                {item.icon}
                            </span>
                            <span style={{ flex: 1 }}>{item.label}</span>
                            {isActive && (
                                <ChevronRight size={14} style={{ opacity: 0.4 }} />
                            )}
                        </button>
                    );
                })}
            </nav>

            <div style={{
                height: '1px',
                background: 'rgba(0,0,0,0.08)',
                margin: '1.25rem 1rem'
            }} />

            <div style={{
                padding: '1rem',
                margin: '0 0.75rem',
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Zap size={14} color="#1a1a1a" />
                    <p style={{
                        color: '#9ca3af',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        fontWeight: 600
                    }}>
                        Plan actual
                    </p>
                </div>
                <p style={{
                    color: '#0f0f0f',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em'
                }}>
                    Agente Pro
                </p>
                <p style={{
                    color: '#9ca3af',
                    fontSize: '0.8rem'
                }}>
                    2,450 llamadas/mes
                </p>
                <div style={{
                    marginTop: '0.75rem',
                    height: '4px',
                    background: 'rgba(0,0,0,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: '68%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #1a1a1a, #444)',
                        borderRadius: '2px',
                        transition: 'width 0.5s ease'
                    }} />
                </div>
                <p style={{
                    color: '#9ca3af',
                    fontSize: '0.7rem',
                    marginTop: '0.5rem'
                }}>
                    1,666 utilizadas
                </p>
            </div>
        </aside>
    );
};

export default DashboardSidebar;

