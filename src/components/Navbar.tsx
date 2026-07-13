"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Armada', path: '/fleet' },
    { name: 'Hubungi Kami', path: '/contact' }
  ];

  return (
    <nav className={`navbar-root ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Elegant Custom SVG Logo */}
        <Link href="/" className="navbar-logo">
          <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            {/* Ocean Waves */}
            <path d="M10 80C30 80 40 75 60 75C80 75 90 80 110 80" stroke="#0084ff" strokeWidth="4" strokeLinecap="round" />
            <path d="M-10 87C10 87 20 82 40 82C60 82 70 87 90 87C110 87 120 82 140 82" stroke="#0056b3" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
            
            {/* Premium Stylized Vessel Hull */}
            <path d="M25 45L40 25H75L85 45H25Z" fill="url(#logo-grad-1)" />
            <path d="M15 50L25 68H78L88 50H15Z" fill="url(#logo-grad-2)" />
            <path d="M78 68L86 50M25 68L15 50" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
            
            {/* Anchor Symbol */}
            <circle cx="50" cy="48" r="8" stroke="#ff6b35" strokeWidth="2" />
            <path d="M50 56V64M45 60H55" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />

            <defs>
              <linearGradient id="logo-grad-1" x1="25" y1="25" x2="85" y2="45" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="15" y1="50" x2="88" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0084ff" />
                <stop offset="100%" stopColor="#003b80" />
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-text">
            <span className="brand-name">SAMUDERA RIZQI</span>
            <span className="brand-sub">PT. PELAYARAN SAMUDERA RIZQI</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="navbar-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                {link.name}
                {isActive && <span className="active-dot" />}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="navbar-action">
          <Link href="/contact?quote=true" className="btn-quote">
            Minta Penawaran
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact?quote=true" className="mobile-btn-quote">
            Minta Penawaran
          </Link>
        </div>
      </div>

      {/* Component Level CSS Inline style blocks to keep navbar styling isolated and modular */}
      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
          border-bottom: 1px solid transparent;
          background: transparent;
        }

        .navbar-root.scrolled {
          padding: 0.8rem 0;
          background: rgba(3, 8, 18, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--color-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .logo-svg {
          filter: drop-shadow(0 2px 8px rgba(0, 132, 255, 0.3));
          transition: var(--transition-bounce);
        }

        .navbar-logo:hover .logo-svg {
          transform: scale(1.08) rotate(-3deg);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          color: #ffffff;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--color-primary);
          font-weight: 600;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }

        @media (max-width: 991px) {
          .navbar-links, .navbar-action {
            display: none;
          }
        }

        .nav-item {
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-muted);
          padding: 0.5rem 0;
        }

        .nav-item:hover {
          color: #ffffff;
        }

        .nav-item.active {
          color: #ffffff;
          font-weight: 600;
        }

        .active-dot {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background-color: var(--color-primary);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--color-primary);
        }

        .navbar-action {
          display: flex;
          align-items: center;
        }

        .btn-quote {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 132, 255, 0.1);
          border: 1.5px solid var(--color-primary);
          color: #ffffff;
          padding: 0.6rem 1.4rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(0, 132, 255, 0.1);
          transition: var(--transition-smooth);
        }

        .btn-quote svg {
          transition: var(--transition-smooth);
        }

        .btn-quote:hover {
          background: var(--color-primary);
          box-shadow: 0 0 25px rgba(0, 132, 255, 0.4);
          transform: translateY(-1px);
        }

        .btn-quote:hover svg {
          transform: translateX(3px);
        }

        /* Mobile menu toggle */
        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          z-index: 1001;
        }

        @media (max-width: 991px) {
          .mobile-menu-toggle {
            display: flex;
          }
        }

        .mobile-menu-toggle span {
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          border-radius: 3px;
          transition: var(--transition-smooth);
        }

        .mobile-menu-toggle.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .mobile-menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile menu overlay */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(3, 8, 18, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999;
        }

        .mobile-nav-overlay.open {
          transform: translateY(0);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 80%;
          max-width: 400px;
        }

        .mobile-nav-item {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-muted);
          opacity: 0;
          transform: translateY(20px);
          transition: var(--transition-smooth);
        }

        .mobile-nav-overlay.open .mobile-nav-item {
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUpMobile 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mobile-nav-item.active {
          color: var(--color-primary);
        }

        .mobile-btn-quote {
          margin-top: 1rem;
          width: 100%;
          text-align: center;
          background: var(--color-primary);
          color: #ffffff;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0, 132, 255, 0.3);
        }

        @keyframes fadeInUpMobile {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};
