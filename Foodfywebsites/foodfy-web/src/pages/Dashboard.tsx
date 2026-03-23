import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import { Mic, Calendar, Phone, Clock, CheckCircle, AlertCircle, ChevronRight, Download, RefreshCw, Filter, Play, Pause, Volume2, VolumeX, Bell, Settings, Star, Timer, PhoneCall } from 'lucide-react';
import './Dashboard.css';

const glassCard = {
    background: 'rgba(255,255,255,0.72)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.45)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
};

// ==================== PÁGINA INICIO ====================
const DashboardHome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="page-animate">
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f0f0f', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                    Bienvenido de nuevo
                </h1>
                <p style={{ color: '#9ca3af', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                    Aquí tienes un resumen de tu actividad de hoy
                </p>
            </div>

            <div className="stats-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
            }}>
                <StatCard title="Llamadas hoy" value="24" change="+12%" positive={true} icon={<PhoneCall size={22} />} onClick={() => navigate('/dashboard/agente')} />
                <StatCard title="Reservas confirmadas" value="18" change="+8%" positive={true} icon={<CheckCircle size={22} />} onClick={() => navigate('/dashboard/agente')} />
                <StatCard title="Tiempo medio" value="2:45" change="-15s" positive={true} icon={<Timer size={22} />} onClick={() => navigate('/dashboard/agente')} />
                <StatCard title="Satisfacción" value="4.8/5" change="+0.2" positive={true} icon={<Star size={22} />} onClick={() => navigate('/dashboard/agente')} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                        Rendimiento semanal
                    </h3>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: '0.75rem', padding: '0.5rem 0' }}>
                        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, i) => {
                            const heights = [60, 80, 45, 90, 75, 55, 30];
                            return (
                                <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                                    <div className="chart-bar" style={{
                                        width: '100%',
                                        maxWidth: '36px',
                                        height: `${heights[i]}px`,
                                        background: 'linear-gradient(180deg, #1a1a1a 0%, #444 100%)',
                                        borderRadius: '6px 6px 2px 2px',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        opacity: i === 3 ? 1 : 0.7
                                    }} />
                                    <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>{day}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                        Actividad reciente
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                        {[
                            { time: '10:45', text: 'Reserva confirmada - La Plaza' },
                            { time: '10:32', text: 'Consulta horarios - Bar El Rincón' },
                            { time: '10:15', text: 'Cancelación - Cafetería Central' },
                            { time: '09:58', text: 'Reserva modificada - Asador El Fuego' },
                        ].map((activity, i) => (
                            <div key={i} className="call-item" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.625rem 0.75rem', background: 'rgba(0,0,0,0.02)', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.03)' }}>
                                <span style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 600, minWidth: '38px', fontVariantNumeric: 'tabular-nums' }}>{activity.time}</span>
                                <span style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{activity.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn-primary-dark" onClick={() => navigate('/dashboard/informes')} style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>
                    Ver informes detallados
                </button>
                <button className="btn-glass" onClick={() => navigate('/dashboard/agente')} style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem', color: '#0f0f0f', fontWeight: 600 }}>
                    Configurar Sideckick
                </button>
            </div>
        </div>
    );
};

// ==================== PÁGINA SIDECKICK ====================
const AgentePage: React.FC = () => {
    const [isActive, setIsActive] = useState(true);
    const [volume, setVolume] = useState(80);
    const [selectedVoice, setSelectedVoice] = useState('es-ES-Standard-A');
    const [isConnected, setIsConnected] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('+34 912 345 678');
    
    // Stats en tiempo real
    const [stats, setStats] = useState({
        activeCalls: 3,
        onlineTime: '6h 24m',
        todayReservations: 18,
        queueCount: 2
    });

    // Llamadas en tiempo real
    const [calls, setCalls] = useState([
        { id: 1, num: '+34 612 345 678', time: '2 min', status: 'Completada', duration: '3:45', type: 'Reserva' },
        { id: 2, num: '+34 623 456 789', time: '8 min', status: 'Completada', duration: '2:12', type: 'Consulta' },
        { id: 3, num: '+34 634 567 890', time: '15 min', status: 'Perdida', duration: '-', type: '-' },
        { id: 4, num: '+34 645 678 901', time: '32 min', status: 'Completada', duration: '4:30', type: 'Reserva' },
    ]);

    // Simulación de actualizaciones en tiempo real
    useEffect(() => {
        const interval = setInterval(() => {
            // Simular nueva llamada entrante aleatoriamente
            if (Math.random() > 0.7 && isActive) {
                const newCall = {
                    id: Date.now(),
                    num: `+34 ${Math.floor(Math.random() * 900000000 + 600000000)}`,
                    time: 'Ahora',
                    status: Math.random() > 0.3 ? 'Completada' : 'Perdida',
                    duration: Math.random() > 0.3 ? `${Math.floor(Math.random() * 5 + 1)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}` : '-',
                    type: Math.random() > 0.3 ? 'Reserva' : 'Consulta'
                };
                setCalls(prev => [newCall, ...prev].slice(0, 10));
                
                // Actualizar stats
                setStats(prev => ({
                    ...prev,
                    todayReservations: newCall.status === 'Completada' && newCall.type === 'Reserva' 
                        ? prev.todayReservations + 1 
                        : prev.todayReservations,
                    activeCalls: Math.max(0, prev.activeCalls + (Math.random() > 0.5 ? 1 : -1))
                }));
            }
        }, 5000); // Cada 5 segundos

        return () => clearInterval(interval);
    }, [isActive]);

    // Actualizar tiempo en línea
    useEffect(() => {
        let seconds = 6 * 3600 + 24 * 60; // 6h 24m en segundos
        const interval = setInterval(() => {
            if (isActive) {
                seconds++;
                const h = Math.floor(seconds / 3600);
                const m = Math.floor((seconds % 3600) / 60);
                setStats(prev => ({ ...prev, onlineTime: `${h}h ${m}m` }));
            }
        }, 60000); // Cada minuto

        return () => clearInterval(interval);
    }, [isActive]);

    const voices = [
        { id: 'es-ES-Standard-A', name: 'Español - Ana', accent: 'España' },
        { id: 'es-ES-Standard-B', name: 'Español - Carlos', accent: 'España' },
        { id: 'es-MX-Standard-A', name: 'Español - María', accent: 'México' },
        { id: 'es-AR-Standard-A', name: 'Español - Sofía', accent: 'Argentina' },
    ];

    const handleRefresh = () => {
        setStats(prev => ({
            ...prev,
            activeCalls: Math.floor(Math.random() * 5) + 1
        }));
    };

    const handleConnectNumber = () => {
        setIsConnected(!isConnected);
    };

    const handleTestCall = () => {
        alert(`Llamada de prueba iniciada al número ${phoneNumber}`);
    };

    return (
        <div className="page-animate">
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f0f0f', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                    Sideckick Foodfy
                </h1>
                <p style={{ color: '#9ca3af', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                    Configura y gestiona tu agente de llamadas inteligente
                </p>
            </div>

            {/* Conexión telefónica */}
            <div className="card-3d" style={{ ...glassCard, padding: '1.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                            Conexión telefónica
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                            Número conectado al Sideckick Foodfy
                        </p>
                    </div>
                    <span style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.4rem 0.875rem', borderRadius: '999px',
                        background: isConnected ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                        border: `1px solid ${isConnected ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'}`,
                        color: isConnected ? '#22c55e' : '#ef4444',
                        fontSize: '0.8rem', fontWeight: 600
                    }}>
                        <span style={{
                            width: '6px', height: '6px', borderRadius: '50%',
                            background: isConnected ? '#22c55e' : '#ef4444',
                            animation: isConnected ? 'pulse 2s infinite' : 'none'
                        }} />
                        {isConnected ? 'Conectado' : 'Desconectado'}
                    </span>
                </div>
                
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-end' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Número de teléfono
                        </label>
                        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                            style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.9rem', background: 'rgba(0,0,0,0.02)', fontVariantNumeric: 'tabular-nums' }}
                            placeholder="+34 912 345 678" />
                    </div>
                    <button onClick={handleConnectNumber} className="btn-primary-dark"
                        style={{ padding: '0.7rem 1.25rem', fontSize: '0.85rem', background: isConnected ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' : 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}>
                        {isConnected ? 'Desconectar' : 'Conectar'}
                    </button>
                    <button onClick={handleTestCall} disabled={!isConnected} className="btn-glass"
                        style={{ padding: '0.7rem 1.25rem', fontSize: '0.85rem', color: isConnected ? '#0f0f0f' : '#d1d5db', fontWeight: 600, cursor: isConnected ? 'pointer' : 'not-allowed', opacity: isConnected ? 1 : 0.5 }}>
                        Llamada de prueba
                    </button>
                </div>
            </div>

            {/* Estado del agente */}
            <div className="card-3d" style={{ ...glassCard, padding: '1.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
                            Estado del agente
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                            {isActive ? 'Sideckick está activo y recibiendo llamadas' : 'Sideckick está pausado'}
                        </p>
                    </div>
                    <button onClick={() => setIsActive(!isActive)} className="btn-primary-dark"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.7rem 1.25rem', fontSize: '0.85rem',
                            background: isActive ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
                        {isActive ? <Pause size={16} /> : <Play size={16} />}
                        {isActive ? 'Pausar Sideckick' : 'Activar Sideckick'}
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                    <StatusIndicator icon={<Phone size={18} />} label="Llamadas activas" value={stats.activeCalls.toString()} live={true} />
                    <StatusIndicator icon={<Clock size={18} />} label="Tiempo en línea" value={stats.onlineTime} />
                    <StatusIndicator icon={<CheckCircle size={18} />} label="Reservas hoy" value={stats.todayReservations.toString()} />
                    <StatusIndicator icon={<AlertCircle size={18} />} label="En cola" value={stats.queueCount.toString()} alert={stats.queueCount > 3} />
                </div>
            </div>

            {/* Configuración de voz */}
            <div className="card-3d" style={{ ...glassCard, padding: '1.5rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                    Configuración de voz
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Voz de Sideckick
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem' }}>
                        {voices.map(voice => (
                            <button key={voice.id} onClick={() => setSelectedVoice(voice.id)}
                                style={{
                                    padding: '0.875rem', borderRadius: '12px',
                                    border: `1.5px solid ${selectedVoice === voice.id ? '#1a1a1a' : 'rgba(0,0,0,0.06)'}`,
                                    background: selectedVoice === voice.id ? 'rgba(26,26,26,0.04)' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer', textAlign: 'left',
                                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: selectedVoice === voice.id ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
                                }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '10px',
                                        background: selectedVoice === voice.id ? 'linear-gradient(135deg, #1a1a1a 0%, #444 100%)' : 'rgba(0,0,0,0.04)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.25s'
                                    }}>
                                        <Mic size={16} color={selectedVoice === voice.id ? '#fff' : '#9ca3af'} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600, color: '#0f0f0f', fontSize: '0.85rem', letterSpacing: '-0.01em' }}>{voice.name}</p>
                                        <p style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{voice.accent}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Volumen
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button onClick={() => setVolume(volume === 0 ? 80 : 0)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex' }}>
                            {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                        <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(parseInt(e.target.value))}
                            style={{ flex: 1 }} />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280', minWidth: '40px', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{volume}%</span>
                    </div>
                </div>
            </div>

            {/* Llamadas recientes */}
            <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', letterSpacing: '-0.02em' }}>
                            Llamadas recientes
                        </h3>
                        <span style={{ padding: '0.2rem 0.625rem', background: 'rgba(0,0,0,0.04)', borderRadius: '999px', fontSize: '0.72rem', color: '#9ca3af', fontWeight: 600 }}>
                            {calls.length}
                        </span>
                    </div>
                    <button onClick={handleRefresh} className="btn-glass"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', color: '#6b7280', fontWeight: 600, padding: '0.4rem 0.75rem' }}>
                        <RefreshCw size={14} />
                        Actualizar
                    </button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {calls.map((call) => (
                        <div key={call.id} className="call-item" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.03)' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: call.status === 'Completada' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Phone size={16} color={call.status === 'Completada' ? '#22c55e' : '#ef4444'} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontWeight: 600, color: '#0f0f0f', fontSize: '0.85rem', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em' }}>{call.num}</p>
                                <p style={{ fontSize: '0.72rem', color: '#9ca3af' }}>{call.time} · {call.type}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ fontWeight: 600, color: '#0f0f0f', fontSize: '0.85rem', fontVariantNumeric: 'tabular-nums' }}>{call.duration}</p>
                                <span style={{
                                    fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '999px', fontWeight: 600,
                                    background: call.status === 'Completada' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.08)',
                                    color: call.status === 'Completada' ? '#22c55e' : '#ef4444'
                                }}>
                                    {call.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const StatusIndicator: React.FC<{ icon: React.ReactNode; label: string; value: string; live?: boolean; alert?: boolean }> = ({ icon, label, value, live, alert }) => (
    <div style={{ 
        textAlign: 'center', padding: '1rem', 
        background: alert ? 'rgba(239,68,68,0.06)' : 'rgba(0,0,0,0.02)', 
        borderRadius: '12px', 
        border: alert ? '1px solid rgba(239,68,68,0.15)' : '1px solid rgba(0,0,0,0.03)',
        transition: 'all 0.3s'
    }}>
        <div style={{ color: alert ? '#ef4444' : '#9ca3af', marginBottom: '0.5rem', position: 'relative', display: 'inline-block' }}>
            {icon}
            {live && (
                <span style={{
                    position: 'absolute', top: '-2px', right: '-6px',
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#22c55e', animation: 'pulse 2s infinite',
                    boxShadow: '0 0 6px rgba(34,197,94,0.4)'
                }} />
            )}
        </div>
        <p style={{ fontSize: '1.4rem', fontWeight: 800, color: alert ? '#ef4444' : '#0f0f0f', marginBottom: '0.25rem', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{value}</p>
        <p style={{ fontSize: '0.72rem', color: alert ? '#ef4444' : '#9ca3af', fontWeight: 500, letterSpacing: '0.02em' }}>{label}</p>
    </div>
);

// ==================== PÁGINA INFORMES Y ESTADÍSTICAS ====================
const InformesPage: React.FC = () => {
    const [dateRange, setDateRange] = useState('7d');

    const chartHeights = [65, 82, 48, 95, 72, 58, 88, 45, 78, 92, 55, 68, 85, 42, 75, 90, 52, 70, 88, 60, 82, 95, 48, 72, 65, 85, 55, 78, 90, 62];

    return (
        <div className="page-animate">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f0f0f', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                        Informes y estadísticas
                    </h1>
                    <p style={{ color: '#9ca3af', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                        Analiza el rendimiento de tu agente
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}
                        style={{ padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', fontWeight: 500, color: '#4b5563' }}>
                        <option value="24h">Últimas 24 horas</option>
                        <option value="7d">Últimos 7 días</option>
                        <option value="30d">Últimos 30 días</option>
                        <option value="90d">Últimos 3 meses</option>
                    </select>
                    <button className="btn-glass" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', padding: '0.5rem 1rem', fontSize: '0.85rem', color: '#4b5563', fontWeight: 600 }}>
                        <Download size={16} />
                        Exportar
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                <MetricCard title="Total llamadas" value="1,284" change="+12.5%" trend="up" />
                <MetricCard title="Reservas confirmadas" value="892" change="+8.3%" trend="up" />
                <MetricCard title="Tasa de conversión" value="69.5%" change="+2.1%" trend="up" />
                <MetricCard title="Tiempo medio" value="2:45" change="-15s" trend="up" />
            </div>

            <div className="card-3d" style={{ ...glassCard, padding: '1.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', letterSpacing: '-0.02em' }}>
                        Tendencia de llamadas
                    </h3>
                    <div style={{ display: 'flex', gap: '0.375rem' }}>
                        {['Llamadas', 'Reservas', 'Cancelaciones'].map((label, i) => (
                            <button key={label} style={{
                                display: 'flex', alignItems: 'center', gap: '0.375rem',
                                padding: '0.3rem 0.625rem', borderRadius: '8px', border: 'none',
                                background: i === 0 ? 'rgba(26,26,26,0.06)' : 'transparent',
                                fontSize: '0.75rem', cursor: 'pointer', color: i === 0 ? '#0f0f0f' : '#9ca3af', fontWeight: 600,
                                transition: 'all 0.2s'
                            }}>
                                <span style={{
                                    width: '6px', height: '6px', borderRadius: '50%',
                                    background: i === 0 ? '#1a1a1a' : i === 1 ? '#22c55e' : '#ef4444'
                                }} />
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ height: '280px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '3px', padding: '0.5rem 0' }}>
                    {chartHeights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                            <div className="chart-bar" style={{
                                width: '100%', height: `${h * 2.5}px`,
                                background: 'linear-gradient(180deg, #1a1a1a 0%, #555 100%)',
                                borderRadius: '4px 4px 1px 1px', opacity: h > 85 ? 1 : 0.6,
                                boxShadow: h > 85 ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
                            }} />
                            {i % 5 === 0 && <span style={{ fontSize: '0.6rem', color: '#d1d5db', fontWeight: 500 }}>{i + 1}</span>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', letterSpacing: '-0.02em' }}>
                        Detalle por día
                    </h3>
                    <button className="btn-glass" style={{ display: 'flex', alignItems: 'center', padding: '0.4rem 0.625rem', color: '#9ca3af' }}>
                        <Filter size={14} />
                    </button>
                </div>
                <div className="glass-table" style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                                {['Fecha', 'Llamadas', 'Reservas', 'Conversión', 'Tiempo medio'].map((h, i) => (
                                    <th key={h} style={{ textAlign: i === 0 ? 'left' : 'right', padding: '0.75rem', fontSize: '0.72rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { date: 'Hoy', calls: 24, reservations: 18, conversion: '75%', time: '2:45' },
                                { date: 'Ayer', calls: 31, reservations: 22, conversion: '71%', time: '2:38' },
                                { date: '2 Mar', calls: 28, reservations: 19, conversion: '68%', time: '2:52' },
                                { date: '1 Mar', calls: 35, reservations: 24, conversion: '69%', time: '2:41' },
                                { date: '28 Feb', calls: 29, reservations: 20, conversion: '69%', time: '2:44' },
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                                    <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#0f0f0f', fontWeight: 600 }}>{row.date}</td>
                                    <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#4b5563', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{row.calls}</td>
                                    <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#4b5563', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{row.reservations}</td>
                                    <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#22c55e', textAlign: 'right', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{row.conversion}</td>
                                    <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: '#9ca3af', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{row.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const MetricCard: React.FC<{ title: string; value: string; change: string; trend: string }> = ({ title, value, change, trend }) => (
    <div className="stat-card-hover" style={{ padding: '1.25rem' }}>
        <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem', fontWeight: 600, letterSpacing: '0.02em' }}>{title}</p>
        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f0f0f', marginBottom: '0.375rem', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{value}</p>
        <span style={{ fontSize: '0.75rem', color: trend === 'up' ? '#22c55e' : '#ef4444', fontWeight: 600, background: trend === 'up' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)', padding: '0.2rem 0.5rem', borderRadius: '999px' }}>
            {change}
        </span>
    </div>
);

// ==================== PÁGINA CONFIGURACIÓN ====================
const ConfiguracionPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [settings, setSettings] = useState({
        businessName: 'Mi Restaurante',
        phone: '+34 912 345 678',
        email: 'contacto@mirestaurante.es',
        openingHours: '09:00 - 23:00',
        maxCapacity: 50,
        autoConfirm: true,
        smsNotifications: true,
        emailNotifications: true,
    });

    const updateSetting = (key: string, value: any) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const tabs = [
        { id: 'general', label: 'General', icon: <Settings size={16} /> },
        { id: 'horarios', label: 'Horarios', icon: <Clock size={16} /> },
        { id: 'reservas', label: 'Reservas', icon: <Calendar size={16} /> },
        { id: 'notificaciones', label: 'Notificaciones', icon: <Bell size={16} /> },
    ];

    return (
        <div className="page-animate">
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f0f0f', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
                    Configuración
                </h1>
                <p style={{ color: '#9ca3af', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                    Gestiona la configuración de Sideckick y tu negocio
                </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '220px', flexShrink: 0 }}>
                    <div style={{ ...glassCard, overflow: 'hidden', padding: '0.5rem' }}>
                        {tabs.map(tab => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.625rem',
                                        width: '100%', padding: '0.7rem 0.875rem', border: 'none',
                                        borderRadius: '10px',
                                        background: isActive ? 'rgba(0,0,0,0.04)' : 'transparent',
                                        color: isActive ? '#0f0f0f' : '#6b7280',
                                        fontSize: '0.85rem', fontWeight: isActive ? 600 : 500, cursor: 'pointer',
                                        textAlign: 'left', marginBottom: '2px',
                                        transition: 'all 0.2s'
                                    }} className="sidebar-item">
                                    <span style={{ color: isActive ? '#0f0f0f' : '#9ca3af', display: 'flex' }}>{tab.icon}</span>
                                    {tab.label}
                                    {isActive && <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.4 }} />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    {activeTab === 'general' && (
                        <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                Información del negocio
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <FormField label="Nombre del negocio" value={settings.businessName} onChange={(v) => updateSetting('businessName', v)} />
                                <FormField label="Teléfono" value={settings.phone} onChange={(v) => updateSetting('phone', v)} />
                                <FormField label="Email" value={settings.email} onChange={(v) => updateSetting('email', v)} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'horarios' && (
                        <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                Horarios de atención
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day, i) => (
                                    <div key={day} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.625rem 0.75rem', background: 'rgba(0,0,0,0.02)', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.03)' }}>
                                        <input type="checkbox" defaultChecked={i < 6} style={{ width: '16px', height: '16px', accentColor: '#1a1a1a' }} />
                                        <span style={{ width: '90px', fontWeight: 600, color: '#0f0f0f', fontSize: '0.85rem' }}>{day}</span>
                                        <input type="time" defaultValue="09:00" style={{ padding: '0.4rem 0.625rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem', background: 'rgba(255,255,255,0.5)' }} />
                                        <span style={{ color: '#d1d5db', fontSize: '0.8rem' }}>-</span>
                                        <input type="time" defaultValue="23:00" style={{ padding: '0.4rem 0.625rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem', background: 'rgba(255,255,255,0.5)' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'reservas' && (
                        <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                Configuración de reservas
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Capacidad máxima (personas)
                                    </label>
                                    <input type="number" value={settings.maxCapacity}
                                        onChange={(e) => updateSetting('maxCapacity', parseInt(e.target.value))}
                                        style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.9rem', background: 'rgba(0,0,0,0.02)', fontVariantNumeric: 'tabular-nums' }} />
                                </div>
                                <ToggleSetting label="Confirmación automática"
                                    description="Las reservas se confirman automáticamente sin intervención manual"
                                    checked={settings.autoConfirm} onChange={(v) => updateSetting('autoConfirm', v)} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'notificaciones' && (
                        <div className="card-3d" style={{ ...glassCard, padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f0f0f', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                Preferencias de notificaciones
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <ToggleSetting label="Notificaciones SMS"
                                    description="Recibe alertas por SMS cuando haya nuevas reservas"
                                    checked={settings.smsNotifications} onChange={(v) => updateSetting('smsNotifications', v)} />
                                <ToggleSetting label="Notificaciones por email"
                                    description="Recibe resúmenes diarios y alertas por email"
                                    checked={settings.emailNotifications} onChange={(v) => updateSetting('emailNotifications', v)} />
                            </div>
                        </div>
                    )}

                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="btn-primary-dark" style={{ padding: '0.7rem 1.75rem', fontSize: '0.85rem' }}>
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FormField: React.FC<{ label: string; value: string; onChange: (value: string) => void }> = ({ label, value, onChange }) => (
    <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#9ca3af', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {label}
        </label>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)}
            style={{ width: '100%', padding: '0.7rem 1rem', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.9rem', background: 'rgba(0,0,0,0.02)', transition: 'all 0.2s' }} />
    </div>
);

const ToggleSetting: React.FC<{ label: string; description: string; checked: boolean; onChange: (checked: boolean) => void }> = ({ label, description, checked, onChange }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.03)' }}>
        <div>
            <p style={{ fontWeight: 600, color: '#0f0f0f', fontSize: '0.875rem', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>{label}</p>
            <p style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{description}</p>
        </div>
        <button className="toggle-btn" onClick={() => onChange(!checked)}
            style={{ width: '44px', height: '24px', borderRadius: '12px', border: 'none',
                background: checked ? 'linear-gradient(135deg, #1a1a1a 0%, #444 100%)' : 'rgba(0,0,0,0.12)',
                cursor: 'pointer', position: 'relative', flexShrink: 0 }}>
            <span style={{
                position: 'absolute', top: '2px', left: checked ? '22px' : '2px',
                width: '20px', height: '20px', borderRadius: '50%', background: '#fff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
            }} />
        </button>
    </div>
);

// ==================== COMPONENTE STAT CARD ====================
interface StatCardProps {
    title: string;
    value: string;
    change: string;
    positive: boolean;
    icon: React.ReactNode;
    onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, positive, icon, onClick }) => (
    <div onClick={onClick} className="stat-card-hover" style={{ padding: '1.25rem', cursor: onClick ? 'pointer' : 'default' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div style={{
                width: '40px', height: '40px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #444 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
                {icon}
            </div>
            <span style={{
                fontSize: '0.75rem', fontWeight: 700,
                color: positive ? '#22c55e' : '#ef4444',
                background: positive ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',
                padding: '0.2rem 0.625rem', borderRadius: '999px'
            }}>
                {change}
            </span>
        </div>
        <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f0f0f', marginBottom: '0.25rem', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>{value}</p>
        <p style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 500 }}>{title}</p>
    </div>
);

// ==================== DASHBOARD PRINCIPAL ====================
const Dashboard: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', background: '#eef0f4' }}>
            <DashboardHeader />
            <DashboardSidebar />
            <main style={{
                marginLeft: '240px', marginTop: '72px', padding: '2rem',
                minHeight: 'calc(100vh - 72px)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif'
            }}>
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/agente" element={<AgentePage />} />
                    <Route path="/informes" element={<InformesPage />} />
                    <Route path="/configuracion" element={<ConfiguracionPage />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;

