import React from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  children: React.ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({
  children,
  speed = 0.6,
  enableShadows = false,
  enableOnHover = false,
  className = '',
}) => {
  const text = typeof children === 'string' ? children : React.Children.toArray(children).join('');

  return (
    <div
      className={`glitch ${enableOnHover ? 'enable-on-hover' : ''} ${className}`}
      data-text={text}
      style={{
        '--after-duration': `${speed * 5}s`,
        '--before-duration': `${speed * 3}s`,
        '--after-shadow': enableShadows ? '-10px 0 red' : 'none',
        '--before-shadow': enableShadows ? '10px 0 cyan' : 'none',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default GlitchText;

