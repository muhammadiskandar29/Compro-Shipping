import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'bulk-cargo',
      title: 'Transportasi Kargo Curah Kering (Bulk Cargo)',
      subtitle: 'Pengiriman Komoditas Energi & Tambang Skala Besar',
      desc: 'Kami melayani transportasi laut komoditas curah kering seperti batu bara, bijih nikel, bauksit, semen, dan pasir silika. Menjamin stabilitas pasokan energi untuk smelter, PLTU, dan industri manufaktur di seluruh Indonesia.',
      img: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Kapasitas Angkutan: 5,000 MT s.d 12,000 MT per voyage',
        'Wilayah Operasi: Selat Makassar, Laut Jawa, Perairan Sulawesi, Laut Banda',
        'Asuransi Cargo: Jaminan Marine Cargo Insurance penuh',
        'Standar Keselamatan: ISM Code & Klasifikasi BKI'
      ]
    },
    {
      id: 'charter-vessels',
      title: 'Sewa Tongkang & Kapal Tunda (Tug & Barge Chartering)',
      subtitle: 'Skema Kontrak Time Charter (TC) & Freight Charter (FC)',
      desc: 'Menyediakan armada kapal tunda (Tugboat) bertenaga 1.600 HP hingga 3.200 HP yang dipadukan dengan tongkang (Barge) ukuran 270 kaki, 300 kaki, dan 330 kaki. Tersedia untuk kontrak jangka panjang maupun trip charter.',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Armada Tugboat: Mesin Caterpillar / Yanmar Dual Screw',
        'Armada Barge: Konstruksi baja diperkuat untuk kargo alat berat',
        'Pelacakan GPS: Integrasi satelit Orbit GPS realtime tracker',
        'Kru Kapal: Nakhoda bersertifikasi ANT IV / V'
      ]
    },
    {
      id: 'ship-agency',
      title: 'Jasa Keagenan Kapal (Vessel Agency Services)',
      subtitle: 'Clearance Pelabuhan Cepat & Efisien',
      desc: 'Melayani keagenan untuk kapal domestik maupun asing yang berlabuh di Tanjung Priok, Tanjung Perak, Batam, dan pelabuhan utama lainnya. Mengurus seluruh kebutuhan administrasi kepelabuhanan secara legal dan profesional.',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Izin Masuk: Port Clearance Syahbandar, Bea Cukai, Imigrasi, Karantina',
        'Suplai Kapal: Bahan bakar (Bunker), Air Bersih, Perbekalan makanan kru',
        'Awak Kapal: Penanganan kru lepas-masuk (Crew Change)',
        'Laporan Harian: Daily Statement of Facts 24 jam'
      ]
    },
    {
      id: 'integrated-logistics',
      title: 'Logistik Maritim Terintegrasi (Supply Chain)',
      subtitle: 'Dari Lokasi Tambang Hingga Pelabuhan Tujuan',
      desc: 'Mengintegrasikan transportasi laut dengan logistik darat dan manajemen pergudangan. Kami mengatur pemuatan kargo langsung dari jetty tambang (loading port) hingga pengiriman akhir ke pabrik tujuan (end-receiver).',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      specs: [
        'Transshipment: Layanan bongkar muat kargo dari tongkang ke Mother Vessel',
        'Darat: Koordinasi truk angkutan dump-truck pelabuhan',
        'Gudang Transit: Layanan penyimpanan sementara kargo aman',
        'Surveyor: Kemitraan dengan surveyor independen (Sucofindo/SGS)'
      ]
    }
  ];

  return (
    <div className="services-root animate-fade-in">
      {/* 1. Page Header */}
      <section className="services-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="services-header-overlay" />
        <div className="container header-container">
          <span className="badge badge-accent">Layanan Korporasi</span>
          <h1>Solusi Maritim Terpadu</h1>
          <p>Layanan logistik laut profesional yang dirancang khusus untuk mendukung industri pertambangan, energi, dan infrastruktur Indonesia.</p>
        </div>
      </section>

      {/* 2. Detail Services List */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-list-container">
            {serviceList.map((srv, index) => {
              const isEven = index % 2 === 0;
              return (
                <ServiceCard 
                  key={srv.id}
                  id={srv.id}
                  title={srv.title}
                  subtitle={srv.subtitle}
                  desc={srv.desc}
                  img={srv.img}
                  specs={srv.specs}
                  stepNumber={`0${index + 1}`}
                  isReverse={!isEven}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Safety Standard Section */}
      <section className="safety-section">
        <div className="container safety-box glass-panel">
          <div className="safety-content">
            <span className="badge">Standar Operasional Prosedur</span>
            <h2>Keselamatan Maritim & Zero Accident Policy</h2>
            <p>PT. Pelayaran Samudera Rizqi menempatkan keselamatan di atas segalanya. Kami menerapkan prosedur K3LH (Kesehatan, Keselamatan Kerja, dan Lingkungan Hidup) yang ketat pada setiap armada kapal yang berlayar.</p>
            
            <div className="safety-grid">
              <div className="safety-item">
                <div className="safety-node">✔</div>
                <div>
                  <h4>Inspeksi Rutin Vetting</h4>
                  <p>Seluruh kapal diperiksa secara berkala sebelum berlayar guna mencegah terjadinya malfungsi mekanis di tengah laut.</p>
                </div>
              </div>
              <div className="safety-item">
                <div className="safety-node">✔</div>
                <div>
                  <h4>Kru Tersertifikasi ISM</h4>
                  <p>Setiap nakhoda dan awak kapal memegang sertifikasi kompetensi resmi sesuai regulasi Ditjen Perhubungan Laut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-root {
          padding-bottom: 4rem;
        }

        /* Header Style */
        .services-header {
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 8rem 0 5rem 0;
          text-align: center;
        }

        .services-header-overlay {
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

        /* Detail List */
        .services-detail-section {
          padding: 6rem 0;
        }

        .services-list-container {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

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
          color: rgba(0, 132, 255, 0.15);
          line-height: 1;
          position: absolute;
          top: -2.5rem;
          left: 0;
        }

        .service-badge-cat {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-accent);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .service-title-text {
          font-size: 1.8rem;
          line-height: 1.3;
        }

        .service-desc-text {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .service-specs-box {
          width: 100%;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 1.2rem 1.5rem;
        }

        .service-specs-box h4 {
          font-size: 0.95rem;
          margin-bottom: 0.6rem;
          color: #ffffff;
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
          background: linear-gradient(135deg, rgba(3, 8, 18, 0.2) 0%, rgba(0, 132, 255, 0.15) 100%);
        }

        /* Safety section */
        .safety-section {
          padding: 4rem 0;
        }

        .safety-box {
          padding: 4rem;
          background: linear-gradient(135deg, var(--color-bg-card) 0%, rgba(255, 107, 53, 0.05) 100%);
          border-left: 4px solid var(--color-accent);
        }

        @media (max-width: 767px) {
          .safety-box {
            padding: 2.5rem 1.8rem;
          }
        }

        .safety-content {
          max-width: 800px;
        }

        .safety-content h2 {
          font-size: 2.2rem;
          margin: 1rem 0;
        }

        .safety-content p {
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .safety-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 575px) {
          .safety-grid {
            grid-template-columns: 1fr;
          }
        }

        .safety-item {
          display: flex;
          gap: 1rem;
        }

        .safety-node {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--color-accent);
          color: #ffffff;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .safety-item h4 {
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }

        .safety-item p {
          font-size: 0.85rem;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
