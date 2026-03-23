import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingSidekick.css';

/* ============================================================
   STEP DATA
   ============================================================ */
const STEPS = [
    {
        id: 0,
        type: 'welcome',
        tag: null,
        title: 'Bienvenido al ecosistema Foodfy',
        description: 'Ahora vamos a hacer una visita guiada para que entiendas qué es realmente Foodfy.',
        highlights: null,
        accentColor: '#a65efe',
        btnLabel: 'Comenzar visita guiada →',
    },
    {
        id: 1,
        type: 'feature',
        tag: 'SIDEKICK · AGENTE DE LLAMADAS',
        title: 'Tu recepcionista IA que nunca para',
        description: 'Sidekick gestiona todas tus llamadas y mensajes de WhatsApp de forma autónoma, 24/7. Coge pedidos, responde dudas y recuerda a cada cliente por su nombre.',
        highlights: ['Atiende 50+ llamadas simultáneas', 'Integración con WhatsApp', 'Historial de cliente unificado'],
        accentColor: '#a65efe',
        btnLabel: 'Siguiente →',
    },
    {
        id: 2,
        type: 'feature',
        tag: 'APP DRIVERS · REPARTIDORES',
        title: 'Tus repartidores siempre coordinados',
        description: 'La app de Drivers da a tu equipo la ruta óptima, el estado de cada pedido en tiempo real y notificaciones instantáneas.',
        highlights: ['Rutas optimizadas en tiempo real', 'Estado del pedido en vivo', 'Notificaciones push instantáneas'],
        accentColor: '#10b981',
        btnLabel: 'Siguiente →',
    },
    {
        id: 3,
        type: 'feature',
        tag: 'APP COCINA · PANTALLA KDS',
        title: 'Cocina sin papel, sin errores',
        description: 'El Kitchen Display System digitaliza todos los tickets al momento. Prioridad automática y sincronización perfecta entre sala y cocina.',
        highlights: ['Tickets en tiempo real', 'Priorización automática', 'Alertas de demora'],
        accentColor: '#f97316',
        btnLabel: 'Siguiente →',
    },
    {
        id: 4,
        type: 'feature',
        tag: 'DASHBOARD · CENTRO DE MANDO',
        title: 'Todo tu negocio en una pantalla',
        description: 'Monitoriza ventas, pedidos, agentes activos y rendimiento de tu equipo desde un único dashboard.',
        highlights: ['Ventas y métricas en vivo', 'Gestión de agentes IA', 'Informes automáticos'],
        accentColor: '#38bdf8',
        btnLabel: 'Crear mi cuenta gratis →',
    },
];

/* ============================================================
   WELCOME VISUAL — Centered pill tags + icon
   ============================================================ */
const WelcomeVisual: React.FC = () => {
    const tags = [
        { icon: '🤖', label: 'IA de llamadas', color: '#a65efe' },
        { icon: '🛵', label: 'App Repartidores', color: '#10b981' },
        { icon: '🍳', label: 'Pantalla Cocina', color: '#f97316' },
        { icon: '📊', label: 'Dashboard', color: '#38bdf8' },
    ];
    return (
        <div className="ob-welcome-visual">
            <div className="ob-welcome-orb">
                <div className="ob-orb-ring ob-orb-ring--1" />
                <div className="ob-orb-ring ob-orb-ring--2" />
                <div className="ob-orb-ring ob-orb-ring--3" />
                <span className="ob-orb-icon">🍽️</span>
            </div>
            <div className="ob-welcome-tags">
                {tags.map((tag, i) => (
                    <span
                        key={tag.label}
                        className="ob-welcome-tag"
                        style={{
                            borderColor: `${tag.color}40`,
                            background: `${tag.color}12`,
                            color: tag.color,
                            animationDelay: `${i * 0.15}s`,
                        }}
                    >
                        {tag.icon} {tag.label}
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ============================================================
   SIDEKICK VISUAL
   ============================================================ */
const SidekickVisual: React.FC = () => {
    const [activeTime, setActiveTime] = useState('00:47');
    useEffect(() => {
        let s = 47;
        const t = setInterval(() => {
            s++;
            const min = Math.floor(s / 60).toString().padStart(2, '0');
            const sec = (s % 60).toString().padStart(2, '0');
            setActiveTime(`${min}:${sec}`);
        }, 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="ob-visual ob-visual--sidekick">
            {/* Floating order card */}
            <div className="ob-glass-card ob-glass-card--float ob-glass-card--topleft">
                <span className="ob-fc-icon">📞</span>
                <div>
                    <p className="ob-fc-title">Pedido #1042 confirmado</p>
                    <p className="ob-fc-sub">Margarita x2 · Entrega a domicilio</p>
                </div>
            </div>

            {/* Phone */}
            <div className="ob-phone" style={{ '--phone-glow': '#a65efe' } as React.CSSProperties}>
                <div className="ob-phone-screen">
                    <div className="ob-call-screen">
                        <div className="ob-avatar ob-avatar--purple">
                            <span>🤖</span>
                        </div>
                        <p className="ob-caller-name">Sidekick IA</p>
                        <p className="ob-caller-status">Llamada en curso · {activeTime}</p>

                        <div className="ob-waveform" aria-hidden>
                            {Array.from({ length: 22 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="ob-bar"
                                    style={{
                                        animationDelay: `${i * 0.06}s`,
                                        height: `${8 + Math.abs(Math.sin(i * 0.8)) * 20 + (i % 3) * 4}px`,
                                        background: '#a65efe',
                                    }}
                                />
                            ))}
                        </div>

                        <div className="ob-status-pills">
                            <span className="ob-pill">
                                <span className="ob-pill-dot" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                                3 llamadas activas
                            </span>
                            <span className="ob-pill">
                                <span className="ob-pill-dot" style={{ background: '#a65efe', boxShadow: '0 0 6px #a65efe' }} />
                                12 en cola WhatsApp
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ============================================================
   DRIVERS VISUAL
   ============================================================ */
const DriversVisual: React.FC = () => (
    <div className="ob-visual ob-visual--drivers">
        <div className="ob-glass-card ob-glass-card--float ob-glass-card--topright ob-glass-card--green">
            <span className="ob-fc-icon">⚡</span>
            <div>
                <p className="ob-fc-title">Ruta optimizada</p>
                <p className="ob-fc-sub">-6 min vs ruta anterior</p>
            </div>
        </div>

        <div className="ob-phone" style={{ '--phone-glow': '#10b981' } as React.CSSProperties}>
            <div className="ob-phone-screen">
                <div className="ob-map-screen">
                    <div className="ob-map-bg">
                        <div className="ob-map-grid" />
                        <svg className="ob-route-svg" viewBox="0 0 200 200" fill="none">
                            <path d="M 50 150 Q 80 100 120 80 T 165 50" stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
                        </svg>
                        <div className="ob-map-pin ob-map-pin--rider">🛵</div>
                        <div className="ob-map-pin ob-map-pin--dest">📍</div>
                    </div>
                    <div className="ob-driver-info-bar">
                        <span className="ob-badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>EN RUTA</span>
                        <div>
                            <p className="ob-di-name">Carlos · 8 min</p>
                            <p className="ob-di-addr">C/ Gran Vía 45 · #1087</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* ============================================================
   KITCHEN VISUAL
   ============================================================ */
const KitchenVisual: React.FC = () => {
    const tickets = [
        { id: '#1041', items: ['Burger x2', 'Fries x3'], timer: '12min', state: 'urgent' },
        { id: '#1042', items: ['Pizza Marg', 'Ensalada'], timer: '8min', state: 'active' },
        { id: '#1043', items: ['Pasta x2', 'Agua x2'], timer: '✓', state: 'done' },
    ];
    return (
        <div className="ob-visual ob-visual--kitchen">
            <div className="ob-kds">
                <div className="ob-kds-bar">
                    <span>🍳 Pantalla de Cocina</span>
                    <span className="ob-kds-clock">21:14</span>
                </div>
                <div className="ob-kds-tickets">
                    {tickets.map(t => (
                        <div key={t.id} className={`ob-ticket ob-ticket--${t.state}`}>
                            <div className="ob-ticket-top">
                                <span className="ob-ticket-id">{t.id}</span>
                                <span className="ob-ticket-timer">{t.timer}</span>
                            </div>
                            {t.items.map(i => <p key={i} className="ob-ticket-item">{i}</p>)}
                            <div className="ob-ticket-bar" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ============================================================
   DASHBOARD VISUAL
   ============================================================ */
const DashboardVisual: React.FC = () => {
    const bars = [40, 62, 51, 78, 69, 88, 55, 82, 91, 67];
    return (
        <div className="ob-visual ob-visual--dashboard">
            <div className="ob-dash">
                <div className="ob-dash-titlebar">
                    <span className="ob-dt-dot ob-dt-dot--r" />
                    <span className="ob-dt-dot ob-dt-dot--y" />
                    <span className="ob-dt-dot ob-dt-dot--g" />
                    <span className="ob-dt-name">Foodfy Dashboard</span>
                </div>
                <div className="ob-dash-metrics">
                    {[
                        { label: 'Ventas hoy', value: '€1,248', delta: '+18%', color: '#a65efe' },
                        { label: 'Pedidos', value: '87', delta: '+12', color: '#10b981' },
                        { label: 'Llamadas IA', value: '142', delta: 'activas', color: '#38bdf8' },
                    ].map(m => (
                        <div className="ob-dash-metric" key={m.label}>
                            <p className="ob-dm-label">{m.label}</p>
                            <p className="ob-dm-value" style={{ color: m.color }}>{m.value}</p>
                            <p className="ob-dm-delta">{m.delta}</p>
                        </div>
                    ))}
                </div>
                <div className="ob-dash-chart">
                    {bars.map((h, i) => (
                        <div
                            key={i}
                            className="ob-dash-bar"
                            style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
                        />
                    ))}
                </div>
                <div className="ob-dash-footer">
                    <span className="ob-da-pulse" />
                    <span>3 agentes IA activos</span>
                    <span className="ob-dash-activity">Pedido #1091 · hace 2 min</span>
                </div>
            </div>
        </div>
    );
};

/* ============================================================
   VISUALS MAP
   ============================================================ */
const VISUALS: Record<number, React.FC> = {
    0: WelcomeVisual,
    1: SidekickVisual,
    2: DriversVisual,
    3: KitchenVisual,
    4: DashboardVisual,
};

/* ============================================================
   MAIN PAGE
   ============================================================ */
const OnboardingSidekick: React.FC = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [phase, setPhase] = useState<'in' | 'out'>('in');

    const step = STEPS[current];
    const total = STEPS.length;
    const isLast = current === total - 1;
    const VisualComp = VISUALS[current];

    const transition = (next: number) => {
        setPhase('out');
        setTimeout(() => {
            setCurrent(next);
            setPhase('in');
        }, 320);
    };

    const handleNext = () => {
        if (isLast) navigate('/login?mode=signup');
        else transition(current + 1);
    };

    const handleBack = () => {
        if (current > 0) transition(current - 1);
    };

    return (
        <div
            className="ob-root"
            style={{ '--accent': step.accentColor } as React.CSSProperties}
        >
            {/* Nebula glows */}
            <div className="ob-nebula ob-nebula--tl" style={{ background: `radial-gradient(circle, ${step.accentColor}20 0%, transparent 65%)` }} />
            <div className="ob-nebula ob-nebula--br" style={{ background: `radial-gradient(circle, ${step.accentColor}10 0%, transparent 65%)` }} />

            {/* Particle dots */}
            <div className="ob-particles" aria-hidden>
                {Array.from({ length: 24 }).map((_, i) => (
                    <span
                        key={i}
                        className="ob-particle"
                        style={{
                            left: `${(i * 37 + 11) % 97}%`,
                            top: `${(i * 53 + 7) % 93}%`,
                            animationDelay: `${i * 0.4}s`,
                            animationDuration: `${5 + (i % 4)}s`,
                            width: `${2 + (i % 3)}px`,
                            height: `${2 + (i % 3)}px`,
                            background: step.accentColor,
                            opacity: 0.08 + (i % 5) * 0.02,
                        }}
                    />
                ))}
            </div>

            {/* Header */}
            <header className="ob-header">
                <a href="/" className="ob-logo" aria-label="Volver al inicio">
                    <img src="/logo.png" alt="Foodfy" className="ob-logo-img" />
                    <span className="ob-logo-text">FOODFY</span>
                </a>
                <button className="ob-skip" onClick={() => navigate('/login?mode=signup')}>
                    Saltar
                </button>
            </header>

            {/* Progress bar */}
            <div className="ob-progress-track" role="progressbar" aria-valuenow={current + 1} aria-valuemax={total}>
                <div className="ob-progress-fill" style={{ width: `${((current + 1) / total) * 100}%`, background: step.accentColor }} />
            </div>

            {/* WELCOME STEP — special centered layout */}
            {step.type === 'welcome' ? (
                <div className={`ob-welcome-layout ob-anim--${phase}`}>
                    <WelcomeVisual />
                    <h1 className="ob-welcome-title">{step.title}</h1>
                    <p className="ob-welcome-desc">{step.description}</p>
                    <button
                        className="ob-cta ob-cta--primary"
                        style={{ background: `linear-gradient(135deg, ${step.accentColor}, #7c3aed)`, boxShadow: `0 8px 32px ${step.accentColor}40` }}
                        onClick={handleNext}
                    >
                        {step.btnLabel}
                    </button>
                    <div className="ob-dots">
                        {STEPS.map((s, i) => (
                            <button
                                key={i}
                                className={`ob-dot ${i === current ? 'ob-dot--active' : ''}`}
                                style={i === current ? { background: step.accentColor, width: '24px' } : {}}
                                onClick={() => i !== current && transition(i)}
                                aria-label={`Paso ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                /* FEATURE STEPS — two-column layout */
                <main className={`ob-main ob-anim--${phase}`}>
                    <div className="ob-content-col">
                        <span
                            className="ob-tag"
                            style={{ color: step.accentColor, borderColor: `${step.accentColor}33`, background: `${step.accentColor}10` }}
                        >
                            {step.tag}
                        </span>
                        <h1 className="ob-title">{step.title}</h1>
                        <p className="ob-desc">{step.description}</p>

                        <ul className="ob-highlights">
                            {step.highlights!.map(h => (
                                <li key={h}>
                                    <span className="ob-check-icon" style={{ color: step.accentColor }}>✓</span>
                                    {h}
                                </li>
                            ))}
                        </ul>

                        <div className="ob-actions">
                            {current > 0 && (
                                <button className="ob-cta ob-cta--ghost" onClick={handleBack}>
                                    ← Atrás
                                </button>
                            )}
                            <button
                                className="ob-cta ob-cta--primary"
                                style={{ background: isLast ? `linear-gradient(135deg, ${step.accentColor}, #0284c7)` : step.accentColor, boxShadow: `0 6px 24px ${step.accentColor}40` }}
                                onClick={handleNext}
                            >
                                {step.btnLabel}
                            </button>
                        </div>

                        {isLast && (
                            <p className="ob-freemsg">7 días gratis · Sin tarjeta de crédito</p>
                        )}

                        <div className="ob-dots">
                            {STEPS.map((_, i) => (
                                <button
                                    key={i}
                                    className={`ob-dot ${i === current ? 'ob-dot--active' : ''}`}
                                    style={i === current ? { background: step.accentColor, width: '24px' } : {}}
                                    onClick={() => i !== current && transition(i)}
                                    aria-label={`Paso ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="ob-visual-col">
                        <VisualComp />
                    </div>
                </main>
            )}

            <div className="ob-counter" aria-hidden>
                {current + 1} / {total}
            </div>
        </div>
    );
};

export default OnboardingSidekick;
