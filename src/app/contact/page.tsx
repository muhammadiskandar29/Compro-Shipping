"use client";

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || 'bulk-cargo';

  // State parameters
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    cargoType: preselectedService === 'bulk-cargo' ? 'coal' : 'general',
    originPort: 'jkt',
    destPort: 'sby',
    tonnage: '5000',
    notes: ''
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteResult, setQuoteResult] = useState<any | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Ports specifications mapping
  const portsInfo: { [key: string]: { name: string; coord: string } } = {
    jkt: { name: 'Tanjung Priok, Jakarta (IDTPP)', coord: '6.1° S, 106.9° E' },
    sby: { name: 'Tanjung Perak, Surabaya (IDSUB)', coord: '7.2° S, 112.7° E' },
    btm: { name: 'Harbour Bay, Batam (IDBTH)', coord: '1.1° N, 104.0° E' },
    bpp: { name: 'Semayang, Balikpapan (IDBPN)', coord: '1.2° S, 116.8° E' },
    mks: { name: 'Soekarno-Hatta, Makassar (IDUPG)', coord: '5.1° S, 119.4° E' }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSimulatedQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setQuoteResult(null);

    // Simulated network delay for professional calculating look
    setTimeout(() => {
      if (formData.originPort === formData.destPort) {
        alert('Pelabuhan asal dan pelabuhan tujuan tidak boleh sama.');
        setIsCalculating(false);
        return;
      }
      
      // Dynamic distance mock settings
      const distances: { [key: string]: number } = {
        'jkt-sby': 380, 'jkt-btm': 510, 'jkt-bpp': 680, 'jkt-mks': 790,
        'sby-jkt': 380, 'sby-btm': 820, 'sby-bpp': 490, 'sby-mks': 450,
        'btm-jkt': 510, 'btm-sby': 820, 'btm-bpp': 920, 'btm-mks': 1100,
        'bpp-jkt': 680, 'bpp-sby': 490, 'bpp-btm': 920, 'bpp-mks': 340,
        'mks-jkt': 790, 'mks-sby': 450, 'mks-btm': 1100, 'mks-bpp': 340
      };

      const key = `${formData.originPort}-${formData.destPort}`;
      const distance = distances[key] || 500;

      const tons = parseFloat(formData.tonnage) || 5000;
      const voyageDays = Math.ceil(distance / (10 * 24)); // assuming 10 knots average speed
      const baseFreightRate = 120000; // IDR per ton for 300nm
      const distanceMultiplier = distance / 300;
      const estimatedCost = Math.round(tons * baseFreightRate * distanceMultiplier);

      setQuoteResult({
        origin: portsInfo[formData.originPort].name,
        destination: portsInfo[formData.destPort].name,
        distance: `${distance} NM (Nautical Miles)`,
        duration: `Est. ${voyageDays} - ${voyageDays + 2} Hari Pelayaran`,
        costEstimate: `Rp ${estimatedCost.toLocaleString('id-ID')}`,
        validity: 'Est. Tarif berlaku s.d 14 Hari kedepan'
      });
      setIsCalculating(false);
    }, 1500);
  };

  const handleFinalSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setQuoteResult(null);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        cargoType: 'coal',
        originPort: 'jkt',
        destPort: 'sby',
        tonnage: '5000',
        notes: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-root">
      {/* 1. Page Header */}
      <section className="contact-header" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="contact-header-overlay" />
        <div className="container header-container">
          <span className="badge badge-accent">Kontak & RFQ</span>
          <h1>Hubungi Layanan Logistik Kami</h1>
          <p>Dapatkan bantuan perencanaan rute pengapalan dan estimasi tarif sewa kapal resmi dari spesialis maritim kami.</p>
        </div>
      </section>

      {/* 2. Office Detail & Interactive Form Container */}
      <section className="contact-content-section">
        <div className="container contact-grid">
          {/* Left panel: Info & Offices */}
          <div className="contact-info-panel">
            <span className="badge">Alamat & Kependudukan</span>
            <h2>Hubungi Kami Langsung</h2>
            <p className="contact-sub-info">Tim Customer Support kami siap membalas pesan Anda dalam kurun waktu 1x24 jam kerja.</p>

            <div className="hq-card glass-panel">
              <h4>Kantor Pusat (Jakarta HQ)</h4>
              <p>Gedung Samudera Rizqi, Lt. 3-5, Jl. Maritim Raya No. 42, Tanjung Priok, Jakarta Utara, DKI Jakarta 14310</p>
              <div className="hq-phone-email">
                <p><strong>Telp:</strong> +62 (021) 4390-8888</p>
                <p><strong>Email:</strong> support@samuderarizqi.co.id</p>
              </div>
            </div>

            {/* Custom structural layout map placeholder (professional blueprint feel) */}
            <div className="office-blueprint glass-panel">
              <div className="blueprint-title">SUPPORT CENTER COORDINATE GRID</div>
              <svg viewBox="0 0 200 100" fill="none" className="bp-grid-svg">
                <rect x="10" y="10" width="180" height="80" rx="4" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d="M20,50 Q60,20 100,50 T180,50" stroke="var(--color-primary)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
                <path d="M30,30 L170,70" stroke="var(--color-accent)" strokeWidth="0.8" opacity="0.4" />
                <circle cx="100" cy="50" r="4" fill="var(--color-accent)" />
                <circle cx="100" cy="50" r="10" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" className="pulse-circle" />
                <text x="115" y="53" fill="#ffffff" fontSize="6" fontFamily="monospace">OFFICE AXIS ACTIVE</text>
              </svg>
            </div>
          </div>

          {/* Right panel: Quote Request Simulator */}
          <div className="quote-form-panel glass-panel">
            {isSubmitted ? (
              <div className="submission-success-pane animate-fade-in">
                <div className="success-icon-wrap">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3>Permintaan RFQ Berhasil Dikirim!</h3>
                <p>Nomor Tiket Anda: <strong>#SR-RFQ-{Math.floor(1000 + Math.random() * 9000)}</strong></p>
                <p className="success-sub">Terima kasih. Tim komersial PT. Pelayaran Samudera Rizqi akan segera mengirimkan surat penawaran harga resmi (Surat Penawaran Freight Charter) ke email perusahaan Anda.</p>
                <button type="button" className="btn-primary" onClick={() => setIsSubmitted(false)}>Kirim Form Baru</button>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h3>Kalkulator Estimasi Pengapalan</h3>
                  <p>Isi formulir spesifikasi muatan di bawah untuk menghitung rute navigasi dan estimasi biaya freight.</p>
                </div>

                <form onSubmit={calculateSimulatedQuote} className="rfq-form">
                  <div className="form-row-double">
                    <div className="form-group">
                      <label htmlFor="companyName">Nama Perusahaan *</label>
                      <input 
                        type="text" 
                        id="companyName" 
                        name="companyName" 
                        placeholder="PT. Maju Tambang Nusantara" 
                        required 
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactName">Nama Kontak *</label>
                      <input 
                        type="text" 
                        id="contactName" 
                        name="contactName" 
                        placeholder="Bpk. Hendra Wijaya" 
                        required 
                        value={formData.contactName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-double">
                    <div className="form-group">
                      <label htmlFor="email">Email Bisnis *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="hendra@majutambang.co.id" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Nomor Telepon/WA *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="081234567890" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-three">
                    <div className="form-group">
                      <label htmlFor="cargoType">Jenis Kargo</label>
                      <select id="cargoType" name="cargoType" value={formData.cargoType} onChange={handleInputChange}>
                        <option value="coal">Batu Bara (Coal)</option>
                        <option value="nickel">Bijih Nikel (Nickel Ore)</option>
                        <option value="silica">Pasir Silika (Silica Sand)</option>
                        <option value="clinker">Klinker Semen (Clinker)</option>
                        <option value="general">Kargo Umum / Heavy Equipment</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="originPort">Asal (Loading Port)</label>
                      <select id="originPort" name="originPort" value={formData.originPort} onChange={handleInputChange}>
                        <option value="jkt">Tanjung Priok, Jakarta</option>
                        <option value="sby">Tanjung Perak, Surabaya</option>
                        <option value="btm">Batam Port</option>
                        <option value="bpp">Balikpapan Port</option>
                        <option value="mks">Makassar Port</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="destPort">Tujuan (Discharge Port)</label>
                      <select id="destPort" name="destPort" value={formData.destPort} onChange={handleInputChange}>
                        <option value="sby">Tanjung Perak, Surabaya</option>
                        <option value="jkt">Tanjung Priok, Jakarta</option>
                        <option value="btm">Batam Port</option>
                        <option value="bpp">Balikpapan Port</option>
                        <option value="mks">Makassar Port</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-double">
                    <div className="form-group">
                      <label htmlFor="tonnage">Volume Muatan (Metric Tons) *</label>
                      <input 
                        type="number" 
                        id="tonnage" 
                        name="tonnage" 
                        min="1000" 
                        max="20000"
                        required 
                        value={formData.tonnage}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="notes">Keterangan Khusus</label>
                      <input 
                        type="text" 
                        id="notes" 
                        name="notes" 
                        placeholder="Contoh: Skema Time Charter 3 bulan"
                        value={formData.notes}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-accent form-submit-btn" disabled={isCalculating}>
                    {isCalculating ? 'Menghitung Rute Navigasi...' : 'Hitung Estimasi Biaya'}
                  </button>
                </form>

                {/* Simulated quote calculator terminal results screen */}
                {quoteResult && (
                  <div className="quote-result-panel animate-fade-in-up">
                    <div className="result-header">
                      <span className="result-title">SIMULATED NAVIGATIONAL ROUTE BRIEF</span>
                      <span className="result-logo">SR L-SYSTEM v2.6</span>
                    </div>
                    <div className="result-body">
                      <div className="result-row">
                        <span>Rute Pelayaran:</span>
                        <strong className="text-glow">{quoteResult.origin} ➔ {quoteResult.destination}</strong>
                      </div>
                      <div className="result-row">
                        <span>Jarak Pelayaran:</span>
                        <span>{quoteResult.distance}</span>
                      </div>
                      <div className="result-row">
                        <span>Lama Perjalanan:</span>
                        <span>{quoteResult.duration}</span>
                      </div>
                      <div className="result-row total-row">
                        <span>Estimasi Tarif Freight:</span>
                        <span className="price-tag text-glow">{quoteResult.costEstimate}</span>
                      </div>
                      <p className="disclaimer">*Nilai di atas merupakan simulasi kalkulasi otomatis berdasarkan harga bahan bakar minyak (MFO/HSD) saat ini dan jarak laut. Hasil resmi dapat bervariasi.</p>
                      
                      <button type="button" className="btn-primary rfq-send-btn" onClick={handleFinalSubmit}>
                        Kirim Penawaran Resmi ke PT. Pelayaran Samudera Rizqi
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-root {
          padding-bottom: 4rem;
        }

        /* Header Style */
        .contact-header {
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 8rem 0 5rem 0;
          text-align: center;
        }

        .contact-header-overlay {
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

        /* Content Layout */
        .contact-content-section {
          padding: 6rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .contact-info-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.2rem;
        }

        .contact-info-panel h2 {
          font-size: 2.2rem;
        }

        .contact-sub-info {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .hq-card {
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          border-left: 3px solid var(--color-primary);
        }

        .hq-card h4 {
          font-size: 1.1rem;
          color: #ffffff;
        }

        .hq-card p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .hq-phone-email {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }

        .hq-phone-email strong {
          color: #ffffff;
        }

        .office-blueprint {
          width: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .blueprint-title {
          font-family: monospace;
          font-size: 0.7rem;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }

        .bp-grid-svg {
          width: 100%;
          max-height: 120px;
        }

        /* Form styling */
        .quote-form-panel {
          padding: 3rem;
        }

        @media (max-width: 575px) {
          .quote-form-panel {
            padding: 1.8rem;
          }
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-header h3 {
          font-size: 1.4rem;
          margin-bottom: 0.4rem;
        }

        .form-header p {
          color: var(--color-text-muted);
          font-size: 0.88rem;
        }

        .rfq-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-row-three {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (max-width: 575px) {
          .form-row-double, .form-row-three {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-text-main);
          letter-spacing: 0.02em;
        }

        .form-group input, .form-group select {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: #ffffff;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-group input:focus, .form-group select:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 10px rgba(0, 132, 255, 0.2);
        }

        .form-group select option {
          background-color: var(--color-bg-dark);
          color: #ffffff;
        }

        .form-submit-btn {
          margin-top: 0.5rem;
          width: 100%;
          justify-content: center;
          padding: 0.9rem;
          font-weight: 700;
        }

        /* Quote Result terminal styling */
        .quote-result-panel {
          margin-top: 2.5rem;
          border: 1px solid rgba(0, 132, 255, 0.3);
          background: rgba(2, 6, 12, 0.85);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 132, 255, 0.1);
        }

        .result-header {
          background: rgba(0, 132, 255, 0.08);
          padding: 0.8rem 1.2rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(0, 132, 255, 0.2);
        }

        .result-title {
          font-family: monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }

        .result-logo {
          font-family: monospace;
          font-size: 0.72rem;
          color: var(--color-text-muted);
        }

        .result-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .result-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
          padding-bottom: 0.5rem;
        }

        .result-row span {
          color: var(--color-text-muted);
        }

        .result-row strong {
          color: #ffffff;
        }

        .total-row {
          border-bottom: none;
          align-items: center;
          margin-top: 0.5rem;
          padding-bottom: 0;
        }

        .price-tag {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-accent) !important;
        }

        .disclaimer {
          font-size: 0.72rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-top: 0.5rem;
        }

        .rfq-send-btn {
          margin-top: 1rem;
          width: 100%;
          justify-content: center;
          padding: 0.9rem;
          font-weight: 700;
          box-shadow: 0 5px 20px rgba(0, 132, 255, 0.3);
        }

        /* Success Panel */
        .submission-success-pane {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4rem 1rem;
          gap: 1.2rem;
        }

        .success-icon-wrap {
          animation: float 3s ease-in-out infinite;
        }

        .submission-success-pane h3 {
          font-size: 1.6rem;
        }

        .submission-success-pane p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .success-sub {
          max-width: 450px;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container" style={{padding: '4rem', textAlign: 'center'}}>Memuat formulir...</div>}>
      <ContactForm />
    </Suspense>
  );
}
