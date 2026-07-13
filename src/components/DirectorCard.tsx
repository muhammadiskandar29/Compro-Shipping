import React from 'react';

interface DirectorCardProps {
  name: string;
  role: string;
  desc: string;
  img: string;
}

export const DirectorCard: React.FC<DirectorCardProps> = ({ name, role, desc, img }) => {
  return (
    <div className="director-card glass-panel">
      <div className="director-img-wrapper">
        <img src={img} alt={name} className="director-img" />
        <div className="director-img-overlay" />
      </div>
      <div className="director-info">
        <h4>{name}</h4>
        <span className="director-role">{role}</span>
        <p className="director-desc">{desc}</p>
      </div>

      <style>{`
        .director-card {
          overflow: hidden;
          transition: var(--transition-smooth);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .director-img-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
          background-color: var(--color-bg-light);
        }

        .director-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
          filter: grayscale(1) contrast(1.1);
        }

        .director-card:hover .director-img {
          transform: scale(1.05);
          filter: grayscale(0) contrast(1);
        }

        .director-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.15) 0%, transparent 60%);
        }

        .director-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1;
        }

        .director-info h4 {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .director-role {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .director-desc {
          margin-top: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.88rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};
