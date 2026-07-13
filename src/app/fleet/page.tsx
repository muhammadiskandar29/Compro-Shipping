"use client";

import React, { useState } from 'react';
import { VesselCard, Vessel } from '@/components/VesselCard';

export default function FleetPage() {
  const [filter, setFilter] = useState<'all' | 'tugboat' | 'barge' | 'bulk'>('all');

  const vessels: Vessel[] = [
    {
      id: 'sr-titan',
      name: 'TB. Samudera Rizqi Titan',
      type: 'tugboat',
      typeName: 'Tugboat (Kapal Tunda)',
      capacity: '3200 HP Pull Force',
      length: '32.00 m',
      breadth: '9.00 m',
      engine: 'Yanmar 2x 1600 HP Dual Screw',
      year: '2022',
      class: 'BKI (Biro Klasifikasi Indonesia)',
      img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sr-barge3001',
      name: 'BG. Rizqi Samudera 3001',
      type: 'barge',
      typeName: 'Deck Cargo Barge (Tongkang)',
      capacity: '8,000 Metric Tons',
      length: '91.44 m (300 Ft)',
      breadth: '24.38 m',
      engine: 'N/A',
      year: '2020',
      class: 'BKI + RINA Kelas A',
      img: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sr-barge3301',
      name: 'BG. Rizqi Samudera 3301',
      type: 'barge',
      typeName: 'Deck Cargo Barge (Tongkang)',
      capacity: '10,500 Metric Tons',
      length: '100.58 m (330 Ft)',
      breadth: '27.43 m',
      engine: 'N/A',
      year: '2023',
      class: 'BKI Kelas Utama',
      img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sr-atlas',
      name: 'TB. Samudera Rizqi Atlas',
      type: 'tugboat',
      typeName: 'Tugboat (Kapal Tunda)',
      capacity: '2400 HP Pull Force',
      length: '29.50 m',
      breadth: '8.60 m',
      engine: 'Caterpillar 2x 1200 HP',
      year: '2019',
      class: 'BKI Registered',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sr-carrier1',
      name: 'MV. Samudera Rizqi Perkasa',
      type: 'bulk',
      typeName: 'Bulk Carrier (Kapal Curah)',
      capacity: '12,500 DWT Cargo Capacity',
      length: '128.00 m',
      breadth: '19.60 m',
      engine: 'Mitsui-MAN B&W 4200 HP',
      year: '2018',
      class: 'Nippon Kaiji Kyokai (ClassNK)',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'sr-barge2701',
      name: 'BG. Rizqi Samudera 2701',
      type: 'barge',
      typeName: 'Deck Cargo Barge (Tongkang)',
      capacity: '6,200 Metric Tons',
      length: '82.30 m (270 Ft)',
      breadth: '21.90 m',
      engine: 'N/A',
      year: '2017',
      class: 'BKI Registered',
      img: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredVessels = filter === 'all' 
    ? vessels 
    : vessels.filter(v => v.type === filter);

  return (
    <div className="fleet-root animate-fade-in">
      {/* 1. Header */}
      <section className="fleet-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="fleet-header-overlay" />
        <div className="container header-container">
          <span className="badge badge-accent">Registrasi & Armada</span>
          <h1>Armada Kapal Modern Kami</h1>
          <p>Mendedikasikan armada tangguh bersertifikat internasional untuk memobilisasi kargo energi nasional secara aman.</p>
        </div>
      </section>

      {/* 2. Interactive Navigation Filters */}
      <section className="fleet-catalog-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Semua Armada
            </button>
            <button 
              type="button"
              className={`filter-btn ${filter === 'tugboat' ? 'active' : ''}`}
              onClick={() => setFilter('tugboat')}
            >
              Kapal Tunda (Tugboat)
            </button>
            <button 
              type="button"
              className={`filter-btn ${filter === 'barge' ? 'active' : ''}`}
              onClick={() => setFilter('barge')}
            >
              Tongkang (Barge)
            </button>
            <button 
              type="button"
              className={`filter-btn ${filter === 'bulk' ? 'active' : ''}`}
              onClick={() => setFilter('bulk')}
            >
              Kapal Curah (Bulk Carrier)
            </button>
          </div>

          {/* Grid Layout of Reusable 3D Cards */}
          <div className="fleet-grid">
            {filteredVessels.map((vessel) => (
              <VesselCard key={vessel.id} vessel={vessel} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .fleet-root {
          padding-bottom: 4rem;
        }

        /* Header Style */
        .fleet-header {
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 8rem 0 5rem 0;
          text-align: center;
        }

        .fleet-header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(3, 8, 18, 0.8) 0%, var(--color-bg-dark) 100%);
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

        /* Filter Tab Styles */
        .fleet-catalog-section {
          padding: 5rem 0;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          border: 1px solid var(--color-border);
          background: rgba(255, 255, 255, 0.01);
          transition: var(--transition-smooth);
        }

        .filter-btn:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.03);
        }

        .filter-btn.active {
          color: #ffffff;
          border-color: var(--color-primary);
          background: var(--color-primary);
          box-shadow: 0 4px 15px rgba(0, 132, 255, 0.3);
        }

        /* 3D Card Grid */
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        @media (max-width: 991px) {
          .fleet-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 767px) {
          .fleet-grid {
            grid-template-columns: 1fr;
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
