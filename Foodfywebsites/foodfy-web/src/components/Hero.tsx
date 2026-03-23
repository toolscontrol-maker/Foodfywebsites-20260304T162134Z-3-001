import React, { useState, useEffect, useRef } from 'react';
import Balatro from './Balatro';
import { animate, stagger } from 'animejs';
import VariableProximity from './VariableProximity';

const DYNAMIC_TEXTS = ["restaurante", "dark kitchen", "negocio"];

const Hero: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const wordRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLAnchorElement>(null);

    // Run anime animation every time textIndex changes
    useEffect(() => {
        if (!wordRef.current) return;
        const el = wordRef.current;
        const text = el.textContent || '';
        el.innerHTML = text
            .split('')
            .map(ch => ch === ' '
                ? `<span style="display:inline-block;white-space:pre"> </span>`
                : `<span style="display:inline-block">${ch}</span>`)
            .join('');
        const chars = Array.from(el.querySelectorAll('span'));
        animate(chars, {
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            rotate: { from: '-1turn', delay: 0 },
            delay: stagger(50),
            ease: 'inOutCirc',
        });
    }, [textIndex]);

    // Swap text every 3 s
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % DYNAMIC_TEXTS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            className="hero-section"
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video-bg"
            >
                <source src="/hero-background.webm" type="video/webm" />
                Tu navegador no soporta el formato de video.
            </video>

            {/* Gradient Overlay for Video */}
            <div className="hero-overlay"></div>
            <div className="container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>

                <div style={{ marginBottom: '2rem' }}>
                    <div className="hero-badge">
                        tu nuevo ecosistema favorito ha llegado
                    </div>
                </div>

                <h1 style={{
                    fontSize: 'clamp(3.5rem, 7vw + 1rem, 5.5rem)',
                    lineHeight: 1.1,
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    margin: '0 auto 1.25rem auto',
                    color: 'var(--text-primary)',
                    textAlign: 'center'
                }}>
                    El futuro de tu{' '}
                    <span style={{ display: 'inline-block', position: 'relative', overflow: 'visible', color: 'var(--primary)', textShadow: '0 0 20px rgba(166, 94, 254, 0.4)' }}>
                        {/* anime.js manipulates this span's children directly */}
                        <span
                            ref={wordRef}
                            style={{ display: 'inline-block' }}
                        >
                            {DYNAMIC_TEXTS[textIndex]}
                        </span>

                        {/* Balatro underline strip */}
                        <span style={{
                            position: 'absolute',
                            bottom: '-6px',
                            left: 0,
                            right: 0,
                            height: '3px',
                            borderRadius: '2px',
                            overflow: 'hidden',
                            pointerEvents: 'none'
                        }}>
                            <Balatro
                                color1="#A65EFE"
                                color2="#6200ea"
                                color3="#162325"
                                isRotate={true}
                                spinSpeed={2.5}
                                contrast={2.5}
                                mouseInteraction={false}
                            />
                        </span>
                    </span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    fontWeight: 400,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    maxWidth: '540px',
                    margin: '0 auto 2.5rem auto',
                    textAlign: 'center'
                }}>
                    Un ecosistema todo-en-uno que automatiza, vende y gestiona tu negocio de hostelería con inteligencia artificial.
                </p>

                <div className="hero-ctas" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a 
                        ref={containerRef}
                        href="/onboarding" 
                        className="btn btn-primary btn-large" 
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <VariableProximity
                            label="Empezar con Sidekick"
                            fromFontVariationSettings="'wght' 400"
                            toFontVariationSettings="'wght' 900"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                        />
                        <img
                            src="/app-button-icon-v4.png"
                            alt=""
                            style={{
                                width: '44px',
                                height: '44px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                                marginLeft: '4px',
                                flexShrink: 0
                            }}
                        />
                    </a>
                    <a href="/precios" className="btn btn-outline btn-large">
                        <span style={{ textDecoration: 'underline', textDecorationColor: '#6a1b9a', textUnderlineOffset: '3px' }}>Ver planes</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

