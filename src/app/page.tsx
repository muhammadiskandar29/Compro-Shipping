"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ValueCard } from '@/components/ValueCard';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState<'cargo' | 'charter' | 'agency'>('cargo');
  const [activeLane, setActiveLane] = useState<string | null>(null);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats numbers counter simulator
  const [stats, setStats] = useState({ vessels: 0, ports: 0, tonnage: 0, experience: 0 });
  useEffect(() => {
    const duration = 2000; // ms
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        vessels: Math.floor((48 / steps) * step),
        ports: Math.floor((22 / steps) * step),
        tonnage: Math.floor((650000 / steps) * step),
        experience: Math.floor((15 / steps) * step),
      });

      if (step >= steps) {
        setStats({ vessels: 48, ports: 22, tonnage: 650000, experience: 15 });
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Shipping lanes for the interactive Indonesian map
  const shippingLanes = [
    { id: 'jkt-sby', from: 'Jakarta (Tanjung Priok)', to: 'Surabaya (Tanjung Perak)', distance: '380 Nautical Miles', route: 'M-150,150 L270,170', status: 'Optimal' },
    { id: 'jkt-btm', from: 'Jakarta (Tanjung Priok)', to: 'Batam (Harbour Bay)', distance: '510 Nautical Miles', route: 'M-150,150 L60,40', status: 'Optimal' },
    { id: 'sby-mks', from: 'Surabaya (Tanjung Perak)', to: 'Makassar (Soekarno-Hatta)', distance: '450 Nautical Miles', route: 'M-270,170 L420,130', status: 'Normal Schedule' },
    { id: 'jkt-blw', from: 'Jakarta (Tanjung Priok)', to: 'Belawan (Medan)', distance: '780 Nautical Miles', route: 'M-150,150 L-30,-20', status: 'Normal Schedule' },
    { id: 'sby-bpp', from: 'Surabaya (Tanjung Perak)', to: 'Balikpapan (Semayang)', distance: '490 Nautical Miles', route: 'M-270,170 L340,70', status: 'Optimal' },
  ];

  return (
    <div className="home-root">
      {/* 1. Hero Section with Custom Parallax */}
      <header className="hero-section">
        {/* Parallax background ship */}
        <div 
          className="hero-parallax-bg" 
          style={{ 
            transform: `translateY(${scrollY * 0.4}px)`,
            backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="hero-overlay" />
        
        {/* Floating grid design decoration */}
        <div className="hero-grid-decor" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        
        <div className="container hero-container">
          <div className="hero-content animate-fade-in-up">
            <span className="badge badge-accent">Maritime & Logistics Excellence</span>
            <h1 className="hero-title">
              Navigasi Terpercaya Untuk <br />
              <span className="text-glow">Logistik Global Anda</span>
            </h1>
            <p className="hero-subtitle">
              PT. Pelayaran Samudera Rizqi mengoperasikan armada modern untuk menghubungkan perdagangan Nusantara. Layanan transportasi laut dan manajemen kargo profesional dengan standar keselamatan tertinggi.
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="btn-primary">
                Layanan Kami
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Floating blueprint widget */}
          <div className="hero-widget glass-panel animate-float" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
            <div className="widget-header">
              <span className="widget-status-dot" />
              <span className="widget-title">Live Vessel Status</span>
            </div>
            <div className="widget-body">
              <div className="widget-row">
                <span className="widget-lbl">Active Voyage:</span>
                <span className="widget-val text-glow">SR-Vessel 24 (OTW Surabaya)</span>
              </div>
              <div className="widget-row">
                <span className="widget-lbl">Fleet Load Capacity:</span>
                <span className="widget-val">94.8% Active</span>
              </div>
              <div className="widget-row">
                <span className="widget-lbl">Safety Index:</span>
                <span className="widget-val color-green">99.98% LTIF</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Stats Section */}
      <section className="stats-section">
        <div className="container stats-container glass-panel">
          <div className="stat-card">
            <h3 className="stat-number">{stats.vessels}</h3>
            <p className="stat-label">Armada Kapal Aktif</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <h3 className="stat-number">{stats.ports}</h3>
            <p className="stat-label">Pelabuhan Terkoneksi</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <h3 className="stat-number">
              {stats.tonnage >= 650000 ? '650,000+' : stats.tonnage.toLocaleString()}
            </h3>
            <p className="stat-label">DWT Kapasitas Total</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <h3 className="stat-number">{stats.experience} Yrs</h3>
            <p className="stat-label">Pengalaman Logistik</p>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Professionals - No basic icons) */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Mengapa Memilih Kami</span>
            <h2>Integritas Operasional & Keandalan Maritim</h2>
            <p>Berkomitmen menjaga efisiensi rantai pasok Anda dengan meminimalkan risiko keterlambatan pengiriman.</p>
          </div>

          <div className="values-grid">
            <ValueCard 
              type="safety"
              title="Navigasi & Keselamatan"
              desc="Menerapkan standar International Safety Management Code (ISM Code) secara ketat demi menjamin keselamatan kru kapal, kargo, serta pelestarian lingkungan maritim."
            />
            <ValueCard 
              type="timing"
              title="Ketepatan Waktu (On-Time)"
              desc="Didukung oleh tim planner berpengalaman dan koordinasi kepelabuhanan yang matang guna meminimalkan hambatan bongkar muat (demurrage) di pelabuhan tujuan."
            />
            <ValueCard 
              type="fleet"
              title="Teknologi & Armada Modern"
              desc="Seluruh armada Tugboat, Barge, dan Bulk Carrier kami dilengkapi sistem komunikasi satelit, radar navigasi mutakhir, dan sensor efisiensi bahan bakar ramah lingkungan."
            />
          </div>
        </div>
      </section>

      {/* 4. Interactive Indonesian Shipping Lane Map */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-accent">Wilayah Operasional</span>
            <h2>Jaringan Rute Nusantara Terintegrasi</h2>
            <p>Kami menjangkau pelabuhan-pelabuhan strategis di seluruh Indonesia untuk menyalurkan logistik vital.</p>
          </div>

          <div className="map-wrapper glass-panel">
            <div className="map-sidebar">
              <h3>Jalur Pelayaran Aktif</h3>
              <p className="map-info-text">Pilih salah satu rute pelayaran di bawah untuk melihat rincian jarak dan estimasi status navigasi.</p>
              
              <div className="lanes-list">
                {shippingLanes.map((lane) => (
                  <button 
                    key={lane.id}
                    type="button"
                    className={`lane-btn ${activeLane === lane.id ? 'active' : ''}`}
                    onClick={() => setActiveLane(lane.id === activeLane ? null : lane.id)}
                  >
                    <div className="lane-btn-header">
                      <span className="lane-dot-indicator" />
                      <h4>{lane.from.split(' ')[0]} ➔ {lane.to.split(' ')[0]}</h4>
                    </div>
                    {activeLane === lane.id && (
                      <div className="lane-details">
                        <p><strong>Dari:</strong> {lane.from}</p>
                        <p><strong>Tujuan:</strong> {lane.to}</p>
                        <p><strong>Jarak:</strong> {lane.distance}</p>
                        <div className="lane-status-row">
                          <span>Status Jalur:</span>
                          <span className="status-badge">{lane.status}</span>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Custom SVG Indonesia Map */}
            <div className="map-canvas-container">
              <svg viewBox="0 0 500 250" className="indonesia-svg-map">
                {/* Background grids */}
                <defs>
                  <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(15, 23, 42, 0.03)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />

                {/* Abstract Stylized Landmasses (Sumatera, Jawa, Kalimantan, Sulawesi) */}
                {/* Sumatera */}
                <path d="M10,20 L80,90 L90,110 L150,150 L140,160 L70,110 L10,60 Z" fill="rgba(15, 23, 42, 0.05)" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1" />
                {/* Jawa */}
                <path d="M145,160 L180,165 L240,172 L280,175 L285,170 L230,160 L150,155 Z" fill="rgba(15, 23, 42, 0.05)" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1" />
                {/* Kalimantan */}
                <path d="M190,40 L260,35 L280,65 L270,110 L220,115 L180,90 Z" fill="rgba(15, 23, 42, 0.05)" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1" />
                {/* Sulawesi */}
                <path d="M300,60 L330,55 L350,85 L320,95 L310,130 L295,110 L315,90 Z" fill="rgba(15, 23, 42, 0.05)" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1" />

                {/* Main Ports Coordinate Nodes */}
                {/* Jakarta */}
                <g className="port-node" transform="translate(150, 150)">
                  <circle r="6" fill="var(--color-primary)" className="pulse-circle" />
                  <circle r="3" fill="#ffffff" />
                  <text x="8" y="4" fill="#ffffff" fontSize="7" fontWeight="bold">JAKARTA</text>
                </g>
                {/* Surabaya */}
                <g className="port-node" transform="translate(270, 170)">
                  <circle r="6" fill="var(--color-primary)" className="pulse-circle" />
                  <circle r="3" fill="#ffffff" />
                  <text x="8" y="4" fill="#ffffff" fontSize="7" fontWeight="bold">SURABAYA</text>
                </g>
                {/* Batam */}
                <g className="port-node" transform="translate(60, 40)">
                  <circle r="6" fill="var(--color-primary)" className="pulse-circle" />
                  <circle r="3" fill="#ffffff" />
                  <text x="-40" y="4" fill="#ffffff" fontSize="7" fontWeight="bold">BATAM</text>
                </g>
                {/* Belawan */}
                <g className="port-node" transform="translate(-30, -20)">
                  {/* Invisible container node off bounds */}
                </g>
                {/* Makassar */}
                <g className="port-node" transform="translate(420, 130)">
                  <circle r="6" fill="var(--color-primary)" className="pulse-circle" />
                  <circle r="3" fill="#ffffff" />
                  <text x="8" y="4" fill="#ffffff" fontSize="7" fontWeight="bold">MAKASSAR</text>
                </g>
                {/* Balikpapan */}
                <g className="port-node" transform="translate(340, 70)">
                  <circle r="6" fill="var(--color-primary)" className="pulse-circle" />
                  <circle r="3" fill="#ffffff" />
                  <text x="8" y="4" fill="#ffffff" fontSize="7" fontWeight="bold">BALIKPAPAN</text>
                </g>

                {/* Drawing Shipping Lane Connections */}
                {shippingLanes.map((lane) => {
                  const isActive = activeLane === lane.id;
                  return (
                    <g key={lane.id}>
                      {/* Interactive Lane Path */}
                      <path 
                        d={lane.route} 
                        fill="none" 
                        stroke={isActive ? 'var(--color-accent)' : 'rgba(0, 132, 255, 0.2)'} 
                        strokeWidth={isActive ? '3' : '1.5'}
                        strokeDasharray={isActive ? 'none' : '4 4'}
                        className="map-lane-path"
                        onClick={() => setActiveLane(lane.id === activeLane ? null : lane.id)}
                      />
                      {/* Animated ship icon on active lane */}
                      {isActive && (
                        <circle r="4" fill="var(--color-accent)">
                          <animateMotion dur="4s" repeatCount="indefinite" path={lane.route} />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Tabs Showcase */}
      <section className="services-teaser">
        <div className="container">
          <div className="section-header">
            <span className="badge">Layanan Utama</span>
            <h2>Solusi Logistik & Kargo Laut Komprehensif</h2>
            <p>Didukung oleh tim profesional dengan keahlian industri maritim bertaraf internasional.</p>
          </div>

          <div className="services-tab-wrapper glass-panel">
            <div className="tab-triggers">
              <button 
                type="button"
                className={`tab-trig ${activeTab === 'cargo' ? 'active' : ''}`}
                onClick={() => setActiveTab('cargo')}
              >
                Kargo Curah & Kontainer
              </button>
              <button 
                type="button"
                className={`tab-trig ${activeTab === 'charter' ? 'active' : ''}`}
                onClick={() => setActiveTab('charter')}
              >
                Vessel & Barge Charter
              </button>
              <button 
                type="button"
                className={`tab-trig ${activeTab === 'agency' ? 'active' : ''}`}
                onClick={() => setActiveTab('agency')}
              >
                Keagenan Kapal (Agency)
              </button>
            </div>

            <div className="tab-content-panel">
              {activeTab === 'cargo' && (
                <div className="tab-pane animate-fade-in">
                  <div className="pane-info">
                    <h3>Pengangkutan Kargo Curah Kering & Kontainer</h3>
                    <p>Menyediakan solusi logistik untuk pengiriman batubara, bijih nikel, pasir silika, pupuk, klinker semen, serta kargo umum dalam kontainer standar maupun flat rack.</p>
                    <ul className="pane-features">
                      <li>Kapasitas angkut fleksibel dari 5.000 ton hingga 12.000 ton</li>
                      <li>Jaminan perlindungan cargo terasuransi secara penuh</li>
                      <li>Dukungan kepabeanan pelabuhan (Customs Clearance) terpadu</li>
                    </ul>
                    <Link href="/services" className="btn-primary">Selengkapnya</Link>
                  </div>
                  <div className="pane-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80')` }} />
                </div>
              )}

              {activeTab === 'charter' && (
                <div className="tab-pane animate-fade-in">
                  <div className="pane-info">
                    <h3>Penyewaan Tongkang & Kapal Tunda</h3>
                    <p>Menyewakan armada Tugboat & Barge (Tongkang) ukuran 270 kaki, 300 kaki, hingga 330 kaki baik dengan skema Time Charter (TC) maupun Freight Charter (FC) untuk kebutuhan tambang dan infrastruktur.</p>
                    <ul className="pane-features">
                      <li>Skema kontrak charter fleksibel dan transparan</li>
                      <li>Seluruh armada bersertifikasi kelas Biro Klasifikasi Indonesia (BKI)</li>
                      <li>Pemantauan GPS satelit real-time 24/7</li>
                    </ul>
                    <Link href="/services" className="btn-primary">Selengkapnya</Link>
                  </div>
                  <div className="pane-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80')` }} />
                </div>
              )}

              {activeTab === 'agency' && (
                <div className="tab-pane animate-fade-in">
                  <div className="pane-info">
                    <h3>Jasa Keagenan & Kepelabuhanan</h3>
                    <p>Membantu pengurusan perizinan masuk kapal (port clearance), penyediaan air bersih (fresh water supply), bunker bahan bakar, kru kapal swap, serta pengurusan izin syahbandar di seluruh pelabuhan utama Indonesia.</p>
                    <ul className="pane-features">
                      <li>Penanganan clearance cepat guna menghindari waktu tunggu kapal</li>
                      <li>Jaringan supplier perbekalan pelabuhan terlengkap</li>
                      <li>Laporan status kapal (Daily Port Statement) harian</li>
                    </ul>
                    <Link href="/services" className="btn-primary">Selengkapnya</Link>
                  </div>
                  <div className="pane-media" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80')` }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action (CTA) */}
      <section className="cta-section">
        <div className="container cta-container glass-panel">
          <div className="cta-text">
            <h2>Butuh Solusi Transportasi Laut Skala Besar?</h2>
            <p>Hubungi tim logistik kami untuk mendiskusikan kebutuhan charter kapal atau kontrak pengapalan kargo jangka panjang dengan harga kompetitif.</p>
          </div>
          <div className="cta-btn-wrap">
            <Link href="/contact?quote=true" className="btn-accent">
              Ajukan Penawaran Sekarang
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .home-root {
          padding-bottom: 2rem;
        }

        /* Hero styling */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 650px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-parallax-bg {
          position: absolute;
          top: -10%;
          left: 0;
          width: 100%;
          height: 120%;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.8) 70%,
            var(--color-bg-dark) 100%
          );
          z-index: 2;
        }

        .hero-grid-decor {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(rgba(220, 30, 36, 0.04) 1px, transparent 1px),
            radial-gradient(rgba(15, 23, 42, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0, 20px 20px;
          z-index: 3;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-top: 4rem;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin: 1.5rem 0;
          font-weight: 800;
        }

        @media (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .text-glow {
          color: var(--color-primary);
          text-shadow: 0 0 20px rgba(220, 30, 36, 0.2);
          background: linear-gradient(to right, var(--color-primary), #ab1216);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Floating Widget */
        .hero-widget {
          width: 320px;
          padding: 1.5rem;
          border-left: 3px solid var(--color-primary);
          z-index: 11;
        }

        @media (max-width: 991px) {
          .hero-widget {
            display: none;
          }
        }

        .widget-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.5rem;
        }

        .widget-status-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse-glow 2.5s infinite;
        }

        .widget-title {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-text-dark);
        }

        .widget-body {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .widget-row {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .widget-lbl {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }

        .widget-val {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .color-green {
          color: #10b981;
        }

        /* Stats section */
        .stats-section {
          margin-top: -80px;
          position: relative;
          z-index: 20;
          padding-bottom: 4rem;
        }

        @media (max-width: 991px) {
          .stats-section {
            margin-top: -30px;
          }
        }

        .stats-container {
          display: grid;
          grid-template-columns: 1fr 1px 1fr 1px 1fr 1px 1fr;
          padding: 2.5rem 2rem;
          text-align: center;
          align-items: center;
        }

        @media (max-width: 767px) {
          .stats-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .stat-divider {
            display: none;
          }
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          background: linear-gradient(135deg, #ffffff 30%, var(--color-primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .stat-divider {
          height: 50px;
          background-color: var(--color-border);
          align-self: center;
        }

        /* Values Section */
        .values-section {
          padding: 6rem 0;
          position: relative;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 991px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        .value-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .value-visual {
          width: 70px;
          height: 70px;
          background: rgba(0, 132, 255, 0.05);
          border: 1px solid rgba(0, 132, 255, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          transition: var(--transition-smooth);
        }

        .value-card:hover .value-visual {
          background: rgba(0, 132, 255, 0.12);
          border-color: var(--color-primary);
          transform: translateY(-3px) scale(1.03);
        }

        .value-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .value-desc {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Map Section */
        .map-section {
          padding: 4rem 0;
        }

        .map-wrapper {
          display: grid;
          grid-template-columns: 1.5fr 2.5fr;
          min-height: 420px;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .map-wrapper {
            grid-template-columns: 1fr;
          }
        }

        .map-sidebar {
          padding: 2.5rem;
          background: rgba(15, 23, 42, 0.02);
          border-right: 1px solid var(--color-border);
        }

        @media (max-width: 991px) {
          .map-sidebar {
            border-right: none;
            border-bottom: 1px solid var(--color-border);
          }
        }

        .map-sidebar h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .map-info-text {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }

        .lanes-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .lane-btn {
          width: 100%;
          text-align: left;
          padding: 0.8rem 1rem;
          background: rgba(15, 23, 42, 0.02);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          color: var(--color-text-main);
          transition: var(--transition-smooth);
        }

        .lane-btn:hover, .lane-btn.active {
          background: rgba(220, 30, 36, 0.05);
          border-color: rgba(220, 30, 36, 0.3);
        }

        .lane-btn-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .lane-dot-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-primary);
        }

        .lane-btn.active .lane-dot-indicator {
          background-color: var(--color-primary);
          box-shadow: 0 0 8px var(--color-primary);
        }

        .lane-btn-header h4 {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .lane-details {
          margin-top: 0.6rem;
          padding-top: 0.6rem;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }

        .lane-details strong {
          color: var(--color-text-dark);
        }

        .lane-status-row {
          display: flex;
          justify-content: space-between;
          margin-top: 0.25rem;
        }

        .status-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.1rem 0.4rem;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 4px;
        }

        .map-canvas-container {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, rgba(220, 30, 36, 0.05) 0%, transparent 100%);
        }

        .indonesia-svg-map {
          width: 100%;
          max-width: 100%;
          height: auto;
          overflow: visible;
        }

        .port-node text {
          font-family: var(--font-display);
          pointer-events: none;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 1);
          fill: var(--color-text-dark);
        }

        .pulse-circle {
          animation: pulse-glow 2.5s infinite;
        }

        .map-lane-path {
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .map-lane-path:hover {
          stroke: var(--color-accent);
          stroke-width: 3;
        }

        /* Services teaser styling */
        .services-teaser {
          padding: 6rem 0;
        }

        .services-tab-wrapper {
          padding: 2.5rem;
        }

        .tab-triggers {
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 1rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 575px) {
          .tab-triggers {
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        .tab-trig {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
        }

        .tab-trig.active {
          color: #ffffff;
          background: rgba(0, 132, 255, 0.1);
          box-shadow: inset 0 0 10px rgba(0, 132, 255, 0.15);
          border: 1px solid rgba(0, 132, 255, 0.2);
        }

        .tab-trig:hover:not(.active) {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.02);
        }

        .tab-content-panel {
          min-height: 320px;
        }

        .tab-pane {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 767px) {
          .tab-pane {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .pane-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.2rem;
        }

        .pane-info h3 {
          font-size: 1.6rem;
          line-height: 1.3;
        }

        .pane-info p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .pane-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }

        .pane-features li {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
        }

        .pane-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }

        .pane-media {
          height: 320px;
          border-radius: 8px;
          background-size: cover;
          background-position: center;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-premium);
        }

        /* CTA styling */
        .cta-section {
          padding: 2rem 0 6rem 0;
        }

        .cta-container {
          padding: 3rem 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          background: linear-gradient(135deg, var(--color-bg-card) 0%, rgba(0, 132, 255, 0.05) 100%);
        }

        @media (max-width: 767px) {
          .cta-container {
            flex-direction: column;
            padding: 2.5rem 2rem;
            text-align: center;
          }
        }

        .cta-text {
          max-width: 60%;
        }

        @media (max-width: 767px) {
          .cta-text {
            max-width: 100%;
          }
        }

        .cta-text h2 {
          font-size: 1.8rem;
          margin-bottom: 0.6rem;
        }

        .cta-text p {
          color: var(--color-text-muted);
          font-size: 0.98rem;
        }
      `}</style>
    </div>
  );
}
