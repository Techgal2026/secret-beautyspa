"use client";

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "À propos", href: "#about" },
    { name: "Nos prestations", href: "#services" },
    { name: "Nos tarifs", href: "#tarifs" },
    { name: "Avis clients", href: "#avis" },
    { name: "Contact", href: "#contact" },
  ];

  const whatsappLink =
    "https://wa.me/221776913230?text=" +
    encodeURIComponent(
      "Bonjour Secret Beauty & Spa, je souhaite obtenir des informations sur vos prestations."
    );

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer-section">
      <div className="footer-overlay" />

      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="Secret Beauty & Spa, accueil">
              Secret Beauty
              <span>& Spa</span>
            </a>

            <div className="footer-tagline">
              L&apos;art de prendre soin de soi.
            </div>

            <p className="footer-description">
              Offrez à votre corps et à votre esprit un moment de détente,
              de beauté et de bien-être dans un cadre pensé pour vous.
            </p>

            <a
              className="footer-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.74 1.46h.01C18.66 23.81 24 18.47 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98.99-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.88 1.23 3.08c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
              </svg>
              <span>Prendre rendez-vous</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>
            <nav className="footer-nav" aria-label="Navigation de pied de page">
              {footerLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  <span className="footer-link-arrow">↗</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column footer-contact">
            <h3>Restons en contact</h3>

            <a href="tel:+221776913230" className="footer-contact-item">
              <span className="footer-contact-icon">☎</span>
              <span>
                <small>Téléphone / WhatsApp</small>
                +221 77 691 32 30
              </span>
            </a>

            <a
              href="mailto:secretbeautyspa136@gmail.com"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">✉</span>
              <span>
                <small>Adresse e-mail</small>
                secretbeautyspa136@gmail.com
              </span>
            </a>

            <div className="footer-socials">
              <span className="footer-social-label">Suivez-nous</span>
              <div className="footer-social-list">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="footer-social-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>Secret Beauty & Spa</strong>. Tous droits
            réservés.
          </p>

          <div className="footer-legal">
            <a href="/politique-confidentialite">
              Politique de confidentialité
            </a>
          </div>

          <a href="#top" className="footer-back-top">
            Retour en haut ↑
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          padding: 76px 24px 24px;
          box-sizing: border-box;
          color: #fffaf6;
          background-color: #211815;
          background-image: url("/footer.png");
          background-position: center;
          background-size: cover;
          font-family: Arial, Helvetica, sans-serif;
        }

        .footer-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            110deg,
            rgba(28, 19, 16, 0.97),
            rgba(40, 27, 22, 0.92) 55%,
            rgba(28, 19, 16, 0.96)
          );
        }

        .footer-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.4fr 0.75fr 1fr;
          gap: 64px;
          padding-bottom: 54px;
        }

        .footer-brand {
          max-width: 390px;
        }

        .footer-logo {
          display: inline-block;
          color: #fffaf6;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 400;
          letter-spacing: -0.8px;
          line-height: 1.2;
          text-decoration: none;
        }

        .footer-logo span {
          display: block;
          margin-top: 3px;
          color: #c8a18e;
          font-size: 0.72em;
          font-style: italic;
          letter-spacing: 2px;
        }

        .footer-tagline {
          margin-top: 22px;
          color: #d8b9a8;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 18px;
          font-style: italic;
        }

        .footer-description {
          margin: 15px 0 25px;
          max-width: 350px;
          color: rgba(255, 250, 246, 0.7);
          font-size: 14px;
          line-height: 1.9;
        }

        .footer-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 20px;
          border: 1px solid #b88e7d;
          border-radius: 3px;
          background: #b88e7d;
          color: #241814;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-whatsapp svg {
          width: 19px;
          height: 19px;
          flex-shrink: 0;
        }

        .footer-whatsapp:hover {
          transform: translateY(-2px);
          background: transparent;
          color: #f0d5c6;
        }

        .footer-column h3 {
          margin: 7px 0 25px;
          color: #e3c3b1;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 400;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .footer-nav a {
          display: flex;
          align-items: center;
          gap: 9px;
          width: fit-content;
          color: rgba(255, 250, 246, 0.76);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link-arrow {
          color: #b88e7d;
          font-size: 13px;
          transition: transform 0.2s ease;
        }

        .footer-nav a:hover,
        .footer-legal a:hover,
        .footer-back-top:hover {
          color: #e5bfa9;
        }

        .footer-nav a:hover .footer-link-arrow {
          transform: translate(2px, -2px);
        }

        .footer-contact {
          min-width: 0;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 20px;
          color: #fffaf6;
          font-size: 13px;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          border: 1px solid rgba(200, 161, 142, 0.4);
          border-radius: 50%;
          color: #d5ad99;
          font-size: 17px;
        }

        .footer-contact-item small {
          display: block;
          margin-bottom: 6px;
          color: rgba(255, 250, 246, 0.55);
          font-size: 11px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 25px;
        }

        .footer-social-label {
          color: rgba(255, 250, 246, 0.7);
          font-size: 12px;
        }

        .footer-social-list {
          display: flex;
          gap: 10px;
        }

        .footer-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 250, 246, 0.22);
          border-radius: 50%;
          color: #fffaf6;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
        }

        .footer-social-icon svg {
          width: 17px;
          height: 17px;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .footer-social-icon:hover {
          border-color: #c8a18e;
          background: #c8a18e;
          color: #241814;
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 250, 246, 0.15);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 23px;
          color: rgba(255, 250, 246, 0.57);
          font-size: 12px;
        }

        .footer-bottom p {
          margin: 0;
          line-height: 1.7;
        }

        .footer-bottom strong {
          color: rgba(255, 250, 246, 0.85);
          font-weight: 500;
        }

        .footer-legal a,
        .footer-back-top {
          color: rgba(255, 250, 246, 0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-back-top {
          white-space: nowrap;
        }

        @media (max-width: 950px) {
          .footer-main {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 45px 55px;
          }

          .footer-contact {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 600px) {
          .footer-section {
            padding: 48px 20px 22px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 38px;
            padding-bottom: 35px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-description {
            max-width: 100%;
          }

          .footer-column h3 {
            margin-bottom: 19px;
          }

          .footer-nav {
            gap: 15px;
          }

          .footer-contact {
            grid-column: auto;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            padding-top: 20px;
          }

          .footer-legal {
            order: 2;
          }

          .footer-back-top {
            order: 3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-section *,
          .footer-section *::before,
          .footer-section *::after {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
