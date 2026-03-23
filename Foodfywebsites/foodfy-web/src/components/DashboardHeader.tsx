import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Store, Command, HelpCircle, Calendar, User, BarChart3, Settings, Phone } from 'lucide-react';

const DashboardHeader: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [storeOpen, setStoreOpen] = useState(false);

    const searchResults = [
        { type: 'page', title: 'Reservas', path: '/dashboard', icon: <Calendar size={18} /> },
        { type: 'page', title: 'Sideckick', path: '/dashboard/agente', icon: <User size={18} /> },
        { type: 'page', title: 'Informes', path: '/dashboard/informes', icon: <BarChart3 size={18} /> },
        { type: 'action', title: 'Configurar horarios', path: '/dashboard/configuracion', icon: <Settings size={18} /> },
        { type: 'action', title: 'Ver llamadas recientes', path: '/dashboard/informes', icon: <Phone size={18} /> },
    ].filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const notifications = [
        { id: 1, text: 'Nueva reserva confirmada', time: '2 min', unread: true },
        { id: 2, text: 'Llamada perdida de cliente', time: '15 min', unread: true },
        { id: 3, text: 'Reporte semanal listo', time: '1 h', unread: false },
    ];

    return (
        <>
            <header className="dashboard-header" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '72px',
                background: 'linear-gradient(180deg, #1a1a1a 0%, #111 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 1.5rem',
                zIndex: 1000,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '200px' }}>
                    <a href="/dashboard" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src="/logo.png" alt="Foodfy" style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </div>

                <div style={{ flex: 1, maxWidth: '600px', margin: '0 2rem', position: 'relative' }}>
                    <div onClick={() => setSearchOpen(true)} style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        background: 'rgba(255,255,255,0.08)', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px', padding: '0.625rem 1rem', cursor: 'pointer',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                    }} className="search-trigger">
                        <Search size={17} color="rgba(255,255,255,0.5)" />
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', flex: 1, letterSpacing: '-0.01em' }}>Buscar en Foodfy</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.2rem 0.5rem', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <Command size={11} color="rgba(255,255,255,0.4)" />
                            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>K</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '0.625rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="header-btn">
                        <HelpCircle size={19} />
                    </button>

                    <div style={{ position: 'relative' }}>
                        <button onClick={() => { setNotificationsOpen(!notificationsOpen); setStoreOpen(false); }} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '0.625rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }} className="header-btn">
                            <Bell size={19} />
                            {notifications.some(n => n.unread) && <span style={{ position: 'absolute', top: '6px', right: '6px', width: '7px', height: '7px', background: '#ef4444', borderRadius: '50%', boxShadow: '0 0 6px rgba(239,68,68,0.5)' }} />}
                        </button>

                        {notificationsOpen && (
                            <div style={{ 
                                position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: '340px', 
                                background: 'rgba(255,255,255,0.92)', 
                                backdropFilter: 'blur(24px) saturate(180%)', 
                                WebkitBackdropFilter: 'blur(24px) saturate(180%)', 
                                borderRadius: '16px', 
                                boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)', 
                                border: '1px solid rgba(255,255,255,0.6)', 
                                zIndex: 1100,
                                animation: 'scaleIn 0.2s ease'
                            }}>
                                <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 700, color: '#0f0f0f', fontSize: '0.95rem', letterSpacing: '-0.02em' }}>Notificaciones</span>
                                    <button style={{ fontSize: '0.8rem', color: '#1a1a1a', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Marcar todo</button>
                                </div>
                                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                    {notifications.map(n => (
                                        <div key={n.id} style={{ padding: '0.875rem 1.25rem', borderBottom: '1px solid rgba(0,0,0,0.04)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', cursor: 'pointer', background: n.unread ? 'rgba(0,0,0,0.02)' : 'transparent' }} className="notification-item">
                                            <div style={{ width: '7px', height: '7px', background: n.unread ? '#1a1a1a' : 'transparent', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }} />
                                            <div style={{ flex: 1 }}>
                                                <p style={{ fontSize: '0.875rem', color: '#0f0f0f', marginBottom: '0.25rem', fontWeight: n.unread ? 600 : 400 }}>{n.text}</p>
                                                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{n.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ position: 'relative' }}>
                        <button onClick={() => { setStoreOpen(!storeOpen); setNotificationsOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0.5rem 0.875rem', borderRadius: '10px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.01em' }} className="store-selector">
                            <Store size={17} />
                            <span>Mi Tienda</span>
                            <ChevronDown size={15} style={{ transform: storeOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                        </button>

                        {storeOpen && (
                            <div style={{ 
                                position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: '230px', 
                                background: 'rgba(255,255,255,0.92)', 
                                backdropFilter: 'blur(24px) saturate(180%)', 
                                WebkitBackdropFilter: 'blur(24px) saturate(180%)', 
                                borderRadius: '14px', 
                                boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)', 
                                border: '1px solid rgba(255,255,255,0.6)', 
                                zIndex: 1100,
                                animation: 'scaleIn 0.2s ease'
                            }}>
                                <div style={{ padding: '0.5rem' }}>
                                    <button style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', border: 'none', background: 'rgba(0,0,0,0.04)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
                                        <Store size={17} color="#1a1a1a" />
                                        <div>
                                            <p style={{ fontWeight: 600, color: '#0f0f0f', fontSize: '0.875rem' }}>Mi Tienda</p>
                                            <p style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Plan Pro</p>
                                        </div>
                                    </button>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: '0.5rem' }}>
                                    <button style={{ width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '0.85rem', color: '#6b7280', textAlign: 'left' }} className="store-menu-item">+ Añadir tienda</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ 
                        width: '36px', height: '36px', borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #444 100%)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        color: '#fff', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', 
                        border: '2px solid rgba(255,255,255,0.15)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        letterSpacing: '-0.02em'
                    }}>AG</div>
                </div>
            </header>

            {searchOpen && (
                <div onClick={() => setSearchOpen(false)} style={{ 
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
                    background: 'rgba(0,0,0,0.4)', 
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '120px',
                    animation: 'fadeIn 0.15s ease'
                }}>
                    <div onClick={e => e.stopPropagation()} style={{ 
                        width: '100%', maxWidth: '640px', 
                        background: 'rgba(255,255,255,0.95)', 
                        backdropFilter: 'blur(30px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(30px) saturate(200%)',
                        borderRadius: '20px', 
                        boxShadow: '0 25px 60px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.08)', 
                        border: '1px solid rgba(255,255,255,0.6)',
                        overflow: 'hidden',
                        animation: 'scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.125rem 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                            <Search size={20} color="#9ca3af" />
                            <input type="text" placeholder="Buscar páginas, acciones..." autoFocus value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.05rem', color: '#0f0f0f', fontFamily: 'inherit', background: 'transparent', letterSpacing: '-0.01em' }} />
                            <button onClick={() => setSearchOpen(false)} style={{ background: 'rgba(0,0,0,0.06)', border: 'none', padding: '0.375rem 0.75rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600 }}>ESC</button>
                        </div>
                        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {searchQuery && searchResults.length === 0 ? (
                                <div style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}><p>No se encontraron resultados</p></div>
                            ) : (
                                <div style={{ padding: '0.5rem 0' }}>
                                    <p style={{ padding: '0.75rem 1.5rem 0.5rem', fontSize: '0.7rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{searchQuery ? 'Resultados' : 'Sugerencias'}</p>
                                    {(searchQuery ? searchResults : searchResults.slice(0, 5)).map((item, i) => (
                                        <a key={i} href={item.path} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1.5rem', textDecoration: 'none', color: '#0f0f0f' }} className="search-result" onClick={() => setSearchOpen(false)}>
                                            <div style={{ 
                                                width: '36px', height: '36px', borderRadius: '10px', 
                                                background: 'rgba(0,0,0,0.04)', 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#6b7280'
                                            }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.125rem', letterSpacing: '-0.01em' }}>{item.title}</p>
                                                <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{item.type === 'page' ? 'Página' : 'Acción'}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', padding: '0.75rem 1.5rem', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.72rem', color: '#9ca3af', fontWeight: 500 }}>
                            <span>↑↓ navegar</span><span>↵ seleccionar</span><span>esc cerrar</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DashboardHeader;

