import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-root">
      <div className="container footer-grid">
        {/* Info Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <img 
              src="/logo.png" 
              alt="PT. Pelayaran Samudera Rizqi Logo" 
              style={{ width: '35px', height: '35px', objectFit: 'contain' }} 
            />
            <span className="footer-brand-title">SAMUDERA RIZQI</span>
          </div>
          <p className="footer-desc">
            PT. Pelayaran Samudera Rizqi adalah perusahaan pelayaran dan logistik maritim terintegrasi yang melayani pengiriman kargo curah, sewa tongkang, agen pelayaran, dan manajemen rantai pasok di seluruh perairan Indonesia.
          </p>
          <div className="footer-certification">
            <div className="cert-badge">ISO 9001:2015</div>
            <div className="cert-badge">ISO 14001:2015</div>
            <div className="cert-badge">OHSAS 18001</div>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-col">
          <h4 className="footer-title">Tautan Cepat</h4>
          <ul className="footer-links">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/about">Tentang Kami</Link></li>
            <li><Link href="/services">Layanan Pelayaran</Link></li>
            <li><Link href="/fleet">Armada Kapal</Link></li>
            <li><Link href="/contact">Hubungi Kami</Link></li>
          </ul>
        </div>

        {/* Office Address Column */}
        <div className="footer-col">
          <h4 className="footer-title">Kantor Pusat (HQ)</h4>
          <div className="contact-item">
            {/* Custom SVG Location pin */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="office-name">Gedung Samudera Rizqi, Lt. 3-5</p>
              <p className="office-addr">Jl. Maritim Raya No. 42, Tanjung Priok, Jakarta Utara, DKI Jakarta 14310</p>
            </div>
          </div>
          <div className="contact-item">
            {/* Custom SVG Phone icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+62 (021) 4390-8888 / +62 (021) 4390-8889</span>
          </div>
          <div className="contact-item">
            {/* Custom SVG Mail icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>info@samuderarizqi.co.id</span>
          </div>
        </div>

        {/* Branch Offices Column */}
        <div className="footer-col">
          <h4 className="footer-title">Kantor Cabang</h4>
          <div className="branch-item">
            <span className="branch-city">SURABAYA</span>
            <p className="branch-addr">Kawasan Perkantoran Perak Jaya, Jl. Perak Timur No. 120, Surabaya, Jawa Timur 60164</p>
          </div>
          <div className="branch-item">
            <span className="branch-city">BATAM</span>
            <p className="branch-addr">Ruko Harbour Bay Blok B No. 9, Sei Jodoh, Batu Ampar, Batam, Kepulauan Riau 29432</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <div className="copyright-lorem">
            <p className="copyright-main">
              &copy; {new Date().getFullYear()} PT. Pelayaran Samudera Rizqi. Semua Hak Dilindungi.
            </p>
            <p className="copyright-lorem-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
          
          {/* Decorative maritime coordinate element */}
          <div className="footer-coordinates">
            <span>6° 06' 30.5" S | 106° 52' 50.2" E</span>
            <span className="port-code">PORT CODE: IDTPP (Tanjung Priok)</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: #f8fafc;
          border-top: 2px solid var(--color-primary);
          padding: 5rem 0 2rem 0;
          margin-top: auto;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 575px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .footer-brand-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 0.05em;
          color: var(--color-text-dark);
        }

        .footer-desc {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer-certification {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .cert-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.25rem 0.5rem;
          border: 1px solid rgba(15, 23, 42, 0.15);
          color: var(--color-text-muted);
          border-radius: 4px;
          background: rgba(15, 23, 42, 0.02);
        }

        .footer-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.05em;
          color: var(--color-text-dark);
          text-transform: uppercase;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--color-primary);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          transition: var(--transition-smooth);
        }

        .footer-links a:hover {
          color: var(--color-primary);
          transform: translateX(5px);
        }

        .contact-item {
          display: flex;
          gap: 0.8rem;
          align-items: flex-start;
          color: var(--color-text-muted);
          font-size: 0.88rem;
        }

        .contact-svg-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .office-name {
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .office-addr {
          line-height: 1.5;
        }

        .branch-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          border-left: 2px solid rgba(15, 23, 42, 0.1);
          padding-left: 0.8rem;
          transition: var(--transition-smooth);
        }

        .branch-item:hover {
          border-color: var(--color-primary);
        }

        .branch-city {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }

        .branch-addr {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .footer-bottom {
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          padding-top: 2rem;
          margin-top: 2rem;
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }

        @media (max-width: 767px) {
          .footer-bottom-container {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        .copyright-lorem {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 70%;
        }

        @media (max-width: 767px) {
          .copyright-lorem {
            max-width: 100%;
          }
        }

        .copyright-main {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .copyright-lorem-text {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          opacity: 0.8;
        }

        .footer-coordinates {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          font-family: monospace;
          text-align: right;
        }

        @media (max-width: 767px) {
          .footer-coordinates {
            align-items: flex-start;
            text-align: left;
          }
        }

        .port-code {
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: var(--color-primary);
          font-weight: 600;
        }
      `}</style>
    </footer>
  );
};
