"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DotGridProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  className?: string;
  animated?: boolean;
}

export function DotGrid({
  rows = 9,
  cols = 23,
  dotSize = 12,
  gap = 48,
  className = "",
  animated = true,
}: DotGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -1000, y: -1000 });
  };

  // Use fixed rows and cols from props, center the grid
  const totalWidth = (cols - 1) * gap;
  const totalHeight = (rows - 1) * gap;
  const offsetX = (dimensions.width - totalWidth) / 2;
  const offsetY = (dimensions.height - totalHeight) / 2;

  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = offsetX + col * gap;
      const y = offsetY + row * gap;
      const delayIndex = row * cols + col;
      
      // Calculate distance from mouse for hover effect
      const distance = Math.sqrt(
        Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
      );
      const maxDistance = 120;
      const scale = Math.max(0.8, Math.min(1.6, 1 + (maxDistance - distance) / maxDistance * 0.6));
      const opacity = Math.max(0.85, Math.min(1, 0.9 + (maxDistance - distance) / (maxDistance * 2)));

      dots.push(
        <motion.circle
          key={`${row}-${col}`}
          cx={x}
          cy={y}
          r={dotSize / 2}
          fill="white"
          initial={animated ? { opacity: 0, scale: 0 } : { opacity: 0.95, scale: 1 }}
          animate={{
            opacity: opacity,
            scale: scale,
          }}
          transition={{
            opacity: { duration: 0.15 },
            scale: { duration: 0.15 },
            delay: animated && distance > maxDistance ? delayIndex * 0.003 : 0,
          }}
        />
      );
    }
  }

  // Render placeholder on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div
        ref={containerRef}
        className={`absolute inset-0 overflow-hidden ${className}`}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        {dots}
      </svg>
    </div>
  );
}

export default DotGrid;
