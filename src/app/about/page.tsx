import React from 'react';
import { DirectorCard } from '@/components/DirectorCard';

export default function AboutPage() {
  const timelineEvents = [
    { year: '2011', title: 'Awal Pendirian', desc: 'PT. Pelayaran Samudera Rizqi didirikan di Jakarta dengan mengoperasikan 2 armada Tugboat & Barge kecil untuk kebutuhan logistik batu bara lokal.' },
    { year: '2015', title: 'Ekspansi Nasional', desc: 'Menambah jumlah armada menjadi 12 kapal tunda dan tongkang, memperluas cakupan layanan hingga ke Kalimantan Timur, Sulawesi, dan Sumatera.' },
    { year: '2019', title: 'Sertifikasi ISO & Kargo Khusus', desc: 'Mendapatkan pengakuan standar internasional ISO 9001, 14001, dan OHSAS 18001. Mulai melayani pengapalan nikel curah skala besar dan offshore supply.' },
    { year: '2023', title: 'Armada Pintar & Digitalisasi', desc: 'Mengintegrasikan GPS Satelit real-time dan sensor konsumsi bahan bakar pintar pada seluruh armada untuk optimalisasi pengiriman hijau ramah lingkungan.' },
    { year: '2026', title: 'Pemimpin Logistik Maritim', desc: 'Kini mengoperasikan 48 armada kapal aktif dengan reputasi keselamatan terbaik dan melayani puluhan pelanggan tambang dan korporasi multinasional.' }
  ];

  const leaders = [
    { name: 'Ir. Ahmad Rizqi, M.B.A.', role: 'Direktur Utama (CEO)', desc: 'Pengalaman lebih dari 20 tahun di industri pelayaran nasional. Membawa visi digitalisasi maritim dan perluasan armada strategis.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Hendrik Pratama, M.Sc.', role: 'Direktur Operasional', desc: 'Mantan nakhoda senior dengan keahlian navigasi tak tertandingi. Mengawasi standar ISM Code keselamatan kru dan manajemen pelabuhan.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Diana Fitriani, S.E., Ak.', role: 'Direktur Keuangan', desc: 'Mengelola efisiensi biaya logistik, kontrak asuransi kargo kapal, serta perencanaan investasi pembangunan galangan kapal baru.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div className="about-root animate-fade-in">
      {/* 1. Page Header */}
      <section className="about-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="about-header-overlay" />
        <div className="container header-container">
          <span className="badge badge-accent">Profil Perusahaan</span>
          <h1>Tentang Samudera Rizqi</h1>
          <p>Mendedikasikan layanan pelayaran berstandar keselamatan tinggi untuk memperkuat rantai pasok logistik Indonesia.</p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="overview-section">
        <div className="container overview-grid">
          <div className="overview-text">
            <span className="badge">Kilasan Bisnis</span>
            <h2>Menghubungkan Pelabuhan Nusantara, Mendorong Ekonomi Nasional</h2>
            <p>PT. Pelayaran Samudera Rizqi didirikan untuk menjawab tantangan logistik maritim Indonesia yang dinamis. Kami memahami bahwa pengiriman kargo yang aman, efisien, dan tepat waktu adalah kunci utama keberhasilan operasional mitra bisnis kami.</p>
            <p>Dengan mengoperasikan puluhan armada Tugboat dan Barge berkapasitas besar, kami melayani komoditas energi vital nasional seperti batu bara, nikel, dan bahan infrastruktur lainnya ke pembangkit listrik, pabrik peleburan (smelter), dan pelabuhan transshipment di seluruh tanah air.</p>
          </div>
          <div className="overview-graphic glass-panel">
            <div className="blueprint-map">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="blueprint-svg">
                {/* Radar Grid circles */}
                <circle cx="100" cy="100" r="80" stroke="rgba(0, 132, 255, 0.15)" strokeWidth="1" />
                <circle cx="100" cy="100" r="50" stroke="rgba(0, 132, 255, 0.15)" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(0, 132, 255, 0.1)" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(0, 132, 255, 0.1)" />
                
                {/* Ship Blueprint Top View */}
                <path d="M100 35 C115 60 120 120 115 155 L85 155 C80 120 85 60 100 35 Z" stroke="#ffffff" strokeWidth="2" fill="rgba(0, 132, 255, 0.05)" />
                <rect x="92" y="100" width="16" height="30" stroke="#ffffff" strokeWidth="1" />
                <rect x="95" y="60" width="10" height="25" stroke="var(--color-accent)" strokeWidth="1.5" />
                <circle cx="100" cy="140" r="4" fill="var(--color-primary)" />
              </svg>
              <div className="blueprint-tag">MODEL SPECIFICATION: SR-BARGE 300FT</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="vision-mission-section">
        <div className="container vision-mission-grid">
          <div className="vision-box glass-panel">
            <div className="box-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3>Visi Kami</h3>
            <p>Menjadi perusahaan pelayaran dan logistik maritim terkemuka di Asia Tenggara, yang dikenal karena keandalan operasional, teknologi keselamatan mutakhir, serta kontribusi aktif terhadap logistik hijau yang ramah lingkungan.</p>
          </div>

          <div className="mission-box glass-panel">
            <div className="box-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>Misi Kami</h3>
            <ul className="mission-list">
              <li>Menyediakan jasa transportasi maritim yang aman dan tepat waktu dengan integritas prima.</li>
              <li>Merawat dan memodernisasi armada kapal guna menjamin efisiensi energi.</li>
              <li>Meningkatkan kompetensi kru kapal serta menjamin kesejahteraan dan keselamatan kerja mereka.</li>
              <li>Membangun kemitraan strategis jangka panjang yang saling menguntungkan dengan pelanggan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Timeline (History) */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Jejak Langkah</span>
            <h2>Perjalanan Menuju Keandalan</h2>
            <p>Sejarah singkat pertumbuhan PT. Pelayaran Samudera Rizqi dalam melayani kebutuhan industri tanah air.</p>
          </div>

          <div className="timeline">
            {timelineEvents.map((evt, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card glass-panel">
                  <span className="timeline-year">{evt.year}</span>
                  <h4>{evt.title}</h4>
                  <p>{evt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Board of Directors */}
      <section className="directors-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-accent">Tata Kelola Utama</span>
            <h2>Dewan Direksi</h2>
            <p>Dipimpin oleh para profesional berpengalaman yang berdedikasi tinggi terhadap tata kelola perusahaan yang bersih dan akuntabel.</p>
          </div>

          <div className="directors-grid">
            {leaders.map((dir, index) => (
              <DirectorCard 
                key={index}
                name={dir.name}
                role={dir.role}
                desc={dir.desc}
                img={dir.img}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-root {
          padding-bottom: 4rem;
        }

        /* Header style */
        .about-header {
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 8rem 0 5rem 0;
          text-align: center;
        }

        .about-header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, var(--color-bg-dark) 100%);
          z-index: 1;
        }

        .header-container {
          position: relative;
          z-index: 2;
        }

        .header-container h1 {
          font-size: 3rem;
          margin: 1rem 0;
        }

        .header-container p {
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
        }

        /* Overview style */
        .overview-section {
          padding: 6rem 0;
        }

        .overview-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .overview-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .overview-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.2rem;
        }

        .overview-text h2 {
          font-size: 2.2rem;
          line-height: 1.3;
        }

        .overview-text p {
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        .overview-graphic {
          padding: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10, 25, 47, 0.4);
          position: relative;
        }

        .blueprint-map {
          width: 100%;
          text-align: center;
        }

        .blueprint-svg {
          width: 180px;
          height: 180px;
          filter: drop-shadow(0 0 15px rgba(0, 132, 255, 0.25));
        }

        .blueprint-tag {
          font-family: monospace;
          font-size: 0.7rem;
          color: var(--color-primary);
          margin-top: 1rem;
          letter-spacing: 0.05em;
        }

        /* Vision & Mission styling */
        .vision-mission-section {
          padding: 2rem 0;
        }

        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 767px) {
          .vision-mission-grid {
            grid-template-columns: 1fr;
          }
        }

        .vision-box, .mission-box {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .box-icon {
          color: var(--color-primary);
          background: rgba(0,132,255,0.05);
          width: 60px;
          height: 60px;
          border-radius: 8px;
          border: 1px solid rgba(0,132,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vision-box h3, .mission-box h3 {
          font-size: 1.5rem;
        }

        .vision-box p {
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        .mission-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .mission-list li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--color-text-muted);
          font-size: 0.95rem;
        }

        .mission-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--color-primary);
        }

        /* Timeline style */
        .history-section {
          padding: 6rem 0;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          width: 2px;
          background-color: var(--color-border);
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        @media (max-width: 767px) {
          .timeline::before {
            left: 31px;
          }
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 1rem 2.5rem;
          box-sizing: border-box;
        }

        .timeline-item.left {
          left: 0;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
          text-align: left;
        }

        @media (max-width: 767px) {
          .timeline-item {
            width: 100%;
            padding-left: 55px;
            padding-right: 0;
          }
          .timeline-item.left, .timeline-item.right {
            left: 0;
            text-align: left;
          }
        }

        .timeline-dot {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: var(--color-primary);
          border: 4px solid var(--color-bg-dark);
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          box-shadow: 0 0 10px var(--color-primary);
        }

        @media (max-width: 767px) {
          .timeline-dot {
            left: 31px;
          }
        }

        .timeline-card {
          padding: 1.8rem;
        }

        .timeline-year {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-accent);
          display: block;
          margin-bottom: 0.5rem;
        }

        .timeline-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .timeline-card p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Directors section styling */
        .directors-section {
          padding: 6rem 0;
        }

        .directors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 991px) {
          .directors-grid {
            grid-template-columns: 1fr;
            max-width: 450px;
            margin: 0 auto;
          }
        }

        .director-card {
          overflow: hidden;
          transition: var(--transition-smooth);
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
}
