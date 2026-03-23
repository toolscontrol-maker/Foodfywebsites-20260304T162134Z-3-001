import React, { useEffect, useRef, useMemo, useState } from 'react';

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string; // Replcement for Vue `class`
  maxOpacity?: number;
}

const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(0, 0, 0)",
  maxOpacity = 0.3,
  width,
  height,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const computedColor = useMemo(() => {
    const hex = color.replace(/^#/, "");
    const bigint = Number.parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
  }, [color]);

  const gridParams = useRef<{
    cols: number;
    rows: number;
    squares: Float32Array;
    dpr: number;
  } | null>(null);

  const setupCanvas = (
    canvas: HTMLCanvasElement,
    w: number,
    h: number
  ) => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const cols = Math.floor(w / (squareSize + gridGap));
    const rows = Math.floor(h / (squareSize + gridGap));

    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
        squares[i] = Math.random() * maxOpacity;
    }

    return { cols, rows, squares, dpr };
  };

  const updateSquares = (squares: Float32Array, deltaTime: number) => {
    for (let i = 0; i < squares.length; i++) {
        if (Math.random() < flickerChance * deltaTime) {
            squares[i] = Math.random() * maxOpacity;
        }
    }
  };

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    cols: number,
    rows: number,
    squares: Float32Array,
    dpr: number
  ) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = computedColor;
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const opacity = squares[i * rows + j];
            ctx.globalAlpha = opacity;
            ctx.fillRect(
                i * (squareSize + gridGap) * dpr,
                j * (squareSize + gridGap) * dpr,
                squareSize * dpr,
                squareSize * dpr
            );
        }
    }
  };

  const updateCanvasSize = () => {
    if (!containerRef.current || !canvasRef.current) return;
    const newWidth = width || containerRef.current.clientWidth;
    const newHeight = height || containerRef.current.clientHeight;

    setCanvasSize({ width: newWidth, height: newHeight });
    gridParams.current = setupCanvas(canvasRef.current, newWidth, newHeight);
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    updateCanvasSize();

    const resizeObserver = new ResizeObserver(() => {
        updateCanvasSize();
    });
    
    const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
            setIsInView(entry.isIntersecting);
        },
        { threshold: 0 }
    );

    resizeObserver.observe(container);
    intersectionObserver.observe(canvas);

    let animationFrameId: number;
    let lastTime = performance.now();
    const frameInterval = 1000 / 30; // 30 FPS throttle

    const animate = (time: number) => {
        const deltaTime = (time - lastTime) / 1000;
        
        if (isInView && gridParams.current && canvasRef.current && (time - lastTime >= frameInterval)) {
            lastTime = time;

            updateSquares(gridParams.current.squares, deltaTime);
            drawGrid(
                ctx,
                canvasRef.current.width,
                canvasRef.current.height,
                gridParams.current.cols,
                gridParams.current.rows,
                gridParams.current.squares,
                gridParams.current.dpr
            );
        } else if (!isInView) {
            lastTime = time;
        }
        animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
        cancelAnimationFrame(animationFrameId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
    };
  }, [width, height, squareSize, gridGap, maxOpacity, flickerChance, computedColor, isInView]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className}`}
      style={{
          maskImage: 'radial-gradient(450px circle at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(450px circle at center, white, transparent)' // Cross-browser support
      }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        width={canvasSize.width}
        height={canvasSize.height}
        style={{
            display: 'block',
            width: canvasSize.width,
            height: canvasSize.height
        }}
      />
    </div>
  );
};

export default FlickeringGrid;

