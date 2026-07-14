import React from 'react';

interface ValueCardProps {
  title: string;
  desc: string;
  type: 'safety' | 'timing' | 'fleet';
}

export const ValueCard: React.FC<ValueCardProps> = ({ title, desc, type }) => {
  const renderVisual = () => {
    switch (type) {
      case 'safety':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="value-svg">
            <circle cx="30" cy="30" r="25" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="30" cy="30" r="20" stroke="var(--color-text-dark)" strokeWidth="2" />
            <path d="M30 15L34 26L30 30L26 26L30 15Z" fill="var(--color-primary)" />
            <path d="M30 45L26 34L30 30L34 34L30 45Z" fill="var(--color-text-dark)" opacity="0.8" />
            <line x1="30" y1="10" x2="30" y2="50" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
            <line x1="10" y1="30" x2="50" y2="30" stroke="rgba(15,23,42,0.15)" strokeWidth="1" />
          </svg>
        );
      case 'timing':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="value-svg">
            <circle cx="30" cy="30" r="24" stroke="var(--color-text-dark)" strokeWidth="2" />
            <line x1="30" y1="30" x2="42" y2="20" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="30" x2="30" y2="15" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="30" cy="30" r="3" fill="var(--color-text-dark)" />
            <path d="M30 6 A 24 24 0 0 1 54 30" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.4" />
          </svg>
        );
      case 'fleet':
        return (
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="value-svg">
            <path d="M5 30 L45 30 L55 45 L15 45 Z" stroke="var(--color-text-dark)" strokeWidth="2" fill="rgba(220, 30, 36, 0.15)" />
            <rect x="25" y="18" width="15" height="12" stroke="var(--color-text-dark)" strokeWidth="1.5" />
            <line x1="35" y1="18" x2="35" y2="10" stroke="var(--color-primary)" strokeWidth="2" />
            <line x1="10" y1="10" x2="10" y2="50" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
            <line x1="20" y1="10" x2="20" y2="50" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
            <line x1="40" y1="10" x2="40" y2="50" stroke="rgba(15,23,42,0.08)" strokeWidth="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="value-card glass-panel animate-fade-in-up">
      <div className="value-visual">
        {renderVisual()}
      </div>
      <h3 className="value-title">{title}</h3>
      <p className="value-desc">{desc}</p>

      <style>{`
        .value-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          height: 100%;
        }

        .value-visual {
          width: 70px;
          height: 70px;
          background: rgba(220, 30, 36, 0.05);
          border: 1px solid rgba(220, 30, 36, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(15,23,42,0.05);
          transition: var(--transition-smooth);
        }

        .value-card:hover .value-visual {
          background: rgba(220, 30, 36, 0.12);
          border-color: var(--color-primary);
          transform: translateY(-3px) scale(1.03);
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-dark);
        }

        .value-desc {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
