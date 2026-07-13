import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  specs: string[];
  stepNumber: string;
  isReverse?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subtitle,
  desc,
  img,
  specs,
  stepNumber,
  isReverse = false
}) => {
  return (
    <div className={`service-detail-row ${isReverse ? 'reverse' : ''}`}>
      <div className="service-info-panel">
        <span className="service-step-num">{stepNumber}</span>
        <span className="service-badge-cat">{subtitle}</span>
        <h2 className="service-title-text">{title}</h2>
        <p className="service-desc-text">{desc}</p>
        
        <div className="service-specs-box">
          <h4>Spesifikasi Layanan:</h4>
          <ul className="service-specs-list">
            {specs.map((spec, sIdx) => (
              <li key={sIdx}>{spec}</li>
            ))}
          </ul>
        </div>

        <Link href={`/contact?service=${id}`} className="btn-primary">
          Konsultasikan Pengiriman
        </Link>
      </div>

      <div className="service-media-panel glass-panel">
        <div className="media-frame" style={{ backgroundImage: `url('${img}')` }}>
          <div className="media-glass-effect" />
        </div>
      </div>

      <style>{`
        .service-detail-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .service-detail-row.reverse {
          grid-template-columns: 0.9fr 1.1fr;
        }

        .service-detail-row.reverse .service-info-panel {
          grid-column: 2;
        }

        .service-detail-row.reverse .service-media-panel {
          grid-column: 1;
          grid-row: 1;
        }

        @media (max-width: 991px) {
          .service-detail-row, .service-detail-row.reverse {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
          }
          .service-info-panel, .service-media-panel {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }

        .service-info-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.2rem;
          position: relative;
        }

        .service-step-num {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(220, 30, 36, 0.1);
          line-height: 1;
          position: absolute;
          top: -2.5rem;
          left: 0;
        }

        .service-badge-cat {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .service-title-text {
          font-size: 1.8rem;
          line-height: 1.3;
          color: var(--color-text-dark);
        }

        .service-desc-text {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .service-specs-box {
          width: 100%;
          background: rgba(15, 23, 42, 0.02);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 1.2rem 1.5rem;
        }

        .service-specs-box h4 {
          font-size: 0.95rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-dark);
        }

        .service-specs-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .service-specs-list li {
          position: relative;
          padding-left: 1.2rem;
          color: var(--color-text-muted);
          font-size: 0.88rem;
        }

        .service-specs-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }

        .service-media-panel {
          padding: 1rem;
          border-radius: 12px;
          overflow: hidden;
        }

        .media-frame {
          height: 380px;
          border-radius: 8px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .media-glass-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(220, 30, 36, 0.1) 100%);
        }
      `}</style>
    </div>
  );
};
