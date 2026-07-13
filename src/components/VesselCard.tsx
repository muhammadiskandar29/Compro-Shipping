"use client";

import React, { useState, useRef } from 'react';

export interface Vessel {
  id: string;
  name: string;
  type: 'tugboat' | 'barge' | 'bulk';
  typeName: string;
  capacity: string;
  length: string;
  breadth: string;
  engine: string;
  year: string;
  class: string;
  img: string;
}

interface VesselCardProps {
  vessel: Vessel;
}

export const VesselCard: React.FC<VesselCardProps> = ({ vessel }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    // Calculate rotation angles based on cursor offset from card center (max tilt 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      boxShadow: `0 20px 40px rgba(0, 132, 255, 0.15), 0 15px 30px rgba(0,0,0,0.4)`,
      transition: 'transform 0.05s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      boxShadow: `var(--shadow-premium)`,
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <div 
      ref={cardRef}
      className="vessel-card glass-panel"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
    >
      <div className="vessel-img-panel" style={{ backgroundImage: `url('${vessel.img}')` }}>
        <div className="vessel-type-label">{vessel.typeName}</div>
      </div>
      
      <div className="vessel-body">
        <h3 className="vessel-name">{vessel.name}</h3>
        
        {/* Technical spec sheets */}
        <div className="vessel-spec-grid">
          <div className="spec-row">
            <span className="spec-lbl">Capacity/DWT:</span>
            <span className="spec-val">{vessel.capacity}</span>
          </div>
          <div className="spec-row">
            <span className="spec-lbl">Dimension LOA:</span>
            <span className="spec-val">{vessel.length} x {vessel.breadth}</span>
          </div>
          {vessel.engine !== 'N/A' && (
            <div className="spec-row">
              <span className="spec-lbl">Main Engine:</span>
              <span className="spec-val">{vessel.engine}</span>
            </div>
          )}
          <div className="spec-row">
            <span className="spec-lbl">Build Year:</span>
            <span className="spec-val">{vessel.year}</span>
          </div>
          <div className="spec-row">
            <span className="spec-lbl">Class Registry:</span>
            <span className="spec-val text-primary-color">{vessel.class}</span>
          </div>
        </div>
      </div>
      
      {/* Schematic overlay blueprint element */}
      <div className="blueprint-overlay">
        <svg width="100%" height="80" viewBox="0 0 100 40" fill="none">
          <path d="M5 25 L45 25 L55 35 L15 35 Z" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          <line x1="20" y1="10" x2="20" y2="35" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="40" y1="10" x2="40" y2="35" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </svg>
      </div>

      <style>{`
        /* Custom Vessel Card styles */
        .vessel-card {
          position: relative;
          overflow: hidden;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
          transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
        }

        .vessel-img-panel {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .vessel-type-label {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(3, 8, 18, 0.85);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .vessel-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transform: translateZ(20px); /* 3D layer depth */
        }

        .vessel-name {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .vessel-spec-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-top: 1px solid var(--color-border);
          padding-top: 0.8rem;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .spec-lbl {
          color: var(--color-text-muted);
        }

        .spec-val {
          font-weight: 600;
          color: #ffffff;
        }

        .text-primary-color {
          color: var(--color-primary);
        }

        /* Blueprint schematic overlay */
        .blueprint-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80px;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};
