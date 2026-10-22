"use client";

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whatsappLink =
    "https://wa.me/221776913230?text=" +
    encodeURIComponent(
      "Bonjour Secret Beauty & Spa, je souhaite réserver une prestation ou obtenir des informations."
    );

  const navigationLinks = [
    { name: "À propos", href: "#about" },
    { name: "Nos prestations", href: "#services" },
    { name: "Nos tarifs", href: "#tarifs" },
    { name: "Avis clients", href: "#avis" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    
    {
      label: "Instagram",
  href: "https://www.instagram.com/secret_beauty__spa_?srtk=MWcwNzZwMG9sdzVocg==",
  icon: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
    },
   
  ];

  return (
    <footer className="luxury-footer" id="footer">
      <div className="footer-decoration" aria-hidden="true" />

      <div className="footer-container">
        {/* Bandeau supérieur */}
        <div className="footer-top">
          <div className="footer-top-text">
            <span className="footer-eyebrow">
              VOTRE INSTANT DE BIEN-ÊTRE
            </span>

            <h2>
              Prenez soin de vous.
              <br />
              <span>Vous le méritez.</span>
            </h2>

            <p>
              Une parenthèse de douceur, de beauté et de sérénité,
              imaginée spécialement pour vous.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-reservation"
          >
            <span>Réserver votre moment</span>

            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="footer-separator">
          <span />
        </div>

        {/* Colonnes principales */}
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="/"
              className="footer-logo"
              aria-label="Secret Beauty & Spa - Accueil"
            >
              <img
                src="/logoss.jpeg"
                alt="Secret Beauty & Spa"
                className="footer-logo-img"
              />
            </a>

            <div className="footer-brand-title">
              SECRET BEAUTY <span>&</span> SPA
            </div>

            <p className="footer-description">
              L’art de prendre soin de soi. Découvrez un univers où
              beauté, relaxation et bien-être se rencontrent pour
              vous offrir une expérience unique.
            </p>

            <div
              className="footer-social-list"
              aria-label="Nos réseaux sociaux"
            >
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

          <div className="footer-column">
            <h3>Navigation</h3>
            <span className="footer-heading-line" />

            <nav
              className="footer-nav"
              aria-label="Navigation de pied de page"
            >
              {navigationLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contactez-nous</h3>
            <span className="footer-heading-line" />

            <a href="tel:+221776913230" className="footer-contact-item">
  <span className="footer-contact-icon">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a15 15 0 0 1-8-8l3-2-2-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  <span className="footer-contact-content">
    <small>Téléphone / WhatsApp</small>
    <strong>+221 77 691 32 30</strong>
  </span>
</a>

<a href="tel:+221338210404" className="footer-contact-item">
  <span className="footer-contact-icon">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a15 15 0 0 1-8-8l3-2-2-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>

  <span className="footer-contact-content">
    <small>Téléphone fixe</small>
    <strong>+221 33 821 04 04</strong>
  </span>
</a>

            <a
              href="mailto:secretbeautyspa136@gmail.com"
              className="footer-contact-item"
            >
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="m4 7 8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="footer-contact-content">
                <small>Adresse e-mail</small>
                <strong>secretbeautyspa136@gmail.com</strong>
              </span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-link"
            >
              <span className="footer-status-dot" />
              Disponible pour vos réservations
            </a>
          </div>
        </div>

        {/* Bas de page */}
        <div className="footer-bottom">
          <p>
            © {currentYear} <strong>Secret Beauty & Spa</strong>.
            Tous droits réservés.
          </p>

          <a
            href="/politique-confidentialite"
            className="footer-privacy"
          >
            Politique de confidentialité
          </a>

          <a href="#top" className="footer-back-top">
            Retour en haut <span>↑</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .luxury-footer {
          --footer-bg: #ead5ca;
          --footer-text: #35231d;
          --footer-muted: #715b50;
          --footer-gold: #956b4f;
          --footer-border: rgba(53, 35, 29, 0.18);

          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          padding: 0 24px;
          background: var(--footer-bg);
          color: var(--footer-text);
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .luxury-footer *,
        .luxury-footer *::before,
        .luxury-footer *::after {
          box-sizing: border-box;
        }

        /* Décoration discrète */
        .footer-decoration {
          position: absolute;
          top: -180px;
          right: -140px;
          z-index: -1;
          width: 430px;
          height: 430px;
          border: 1px solid rgba(149, 107, 79, 0.17);
          border-radius: 50%;
          pointer-events: none;
        }

        .footer-decoration::before,
        .footer-decoration::after {
          position: absolute;
          content: "";
          border: 1px solid rgba(149, 107, 79, 0.13);
          border-radius: 50%;
          inset: 25px;
        }

        .footer-decoration::after {
          inset: 55px;
        }

        .footer-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Bandeau supérieur */
        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          padding: 66px 0 54px;
        }

        .footer-eyebrow {
          display: inline-block;
          margin-bottom: 17px;
          color: var(--footer-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .footer-top h2 {
          margin: 0;
          color: var(--footer-text);
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(30px, 4vw, 43px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.8px;
        }

        .footer-top h2 span {
          color: var(--footer-gold);
          font-style: italic;
        }

        .footer-top-text > p {
          max-width: 480px;
          margin: 15px 0 0;
          color: var(--footer-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        /* Bouton de réservation */
        .footer-reservation {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          min-height: 54px;
          padding: 0 23px;
          border: 1px solid var(--footer-text);
          background: var(--footer-text);
          color: var(--footer-bg);
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .footer-reservation svg {
          width: 18px;
          height: 18px;
          transition: transform 0.25s ease;
        }

        .footer-reservation:hover {
          transform: translateY(-3px);
          border-color: var(--footer-gold);
          background: var(--footer-gold);
          color: #ffffff;
        }

        .footer-reservation:hover svg {
          transform: translateX(4px);
        }

        .footer-separator {
          position: relative;
          height: 1px;
          background: var(--footer-border);
        }

        .footer-separator span {
          position: absolute;
          top: -3px;
          left: 0;
          width: 46px;
          height: 5px;
          background: var(--footer-gold);
        }

        /* Grille principale */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.72fr 1.15fr;
          gap: 72px;
          padding: 54px 0 55px;
        }

        .footer-brand {
          min-width: 0;
          max-width: 390px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .footer-logo-img {
          display: block;
          width: auto;
          max-width: 190px;
          height: 65px;
          object-fit: contain;
          object-position: left center;
        }

        .footer-brand-title {
          margin-top: 15px;
          color: var(--footer-text);
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .footer-brand-title span {
          color: var(--footer-gold);
          font-style: italic;
        }

        .footer-description {
          max-width: 340px;
          margin: 16px 0 25px;
          color: var(--footer-muted);
          font-size: 12px;
          line-height: 2;
        }

        /* Réseaux sociaux */
        .footer-social-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 39px;
          height: 39px;
          border: 1px solid rgba(53, 35, 29, 0.25);
          border-radius: 50%;
          color: var(--footer-text);
          text-decoration: none;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .footer-social-icon svg {
          width: 17px;
          height: 17px;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .footer-social-icon:hover {
          transform: translateY(-3px);
          border-color: var(--footer-text);
          background: var(--footer-text);
          color: var(--footer-bg);
        }

        /* Navigation et titres */
        .footer-column {
          min-width: 0;
          padding-top: 9px;
        }

        .footer-column h3 {
          margin: 0;
          color: var(--footer-text);
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 20px;
          font-weight: 500;
        }

        .footer-heading-line {
          display: block;
          width: 33px;
          height: 2px;
          margin: 16px 0 24px;
          background: var(--footer-gold);
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .footer-nav a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--footer-muted);
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .footer-nav-arrow {
          color: var(--footer-gold);
          font-size: 13px;
          transition: transform 0.2s ease;
        }

        .footer-nav a:hover {
          transform: translateX(3px);
          color: var(--footer-text);
        }

        .footer-nav a:hover .footer-nav-arrow {
          transform: translate(2px, -2px);
        }

        /* Coordonnées */
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 21px;
          color: var(--footer-text);
          text-decoration: none;
        }

        .footer-contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 43px;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(53, 35, 29, 0.22);
          border-radius: 50%;
          color: var(--footer-gold);
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .footer-contact-icon svg {
          width: 18px;
          height: 18px;
        }

        .footer-contact-item:hover .footer-contact-icon {
          background: var(--footer-gold);
          color: #ffffff;
        }

        .footer-contact-content {
          display: block;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .footer-contact-content small {
          display: block;
          margin-bottom: 6px;
          color: var(--footer-muted);
          font-size: 10px;
        }

        .footer-contact-content strong {
          display: block;
          color: var(--footer-text);
          font-size: 12px;
          font-weight: 500;
          line-height: 1.7;
        }

        .footer-whatsapp-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 1px;
          color: var(--footer-muted);
          font-size: 10px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-whatsapp-link:hover {
          color: var(--footer-text);
        }

        .footer-status-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #638a60;
          box-shadow: 0 0 0 4px rgba(99, 138, 96, 0.1);
        }

        /* Bas de page */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px 25px;
          padding: 23px 0;
          border-top: 1px solid var(--footer-border);
          color: var(--footer-muted);
          font-size: 10px;
        }

        .footer-bottom p {
          margin: 0;
          line-height: 1.8;
        }

        .footer-bottom strong {
          color: var(--footer-text);
          font-weight: 600;
        }

        .footer-privacy,
        .footer-back-top {
          color: var(--footer-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-privacy:hover,
        .footer-back-top:hover {
          color: var(--footer-gold);
        }

        .footer-back-top {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          white-space: nowrap;
        }

        .footer-back-top span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          border: 1px solid rgba(53, 35, 29, 0.22);
          border-radius: 50%;
          color: var(--footer-gold);
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .footer-back-top:hover span {
          background: var(--footer-gold);
          color: #ffffff;
        }

        .luxury-footer a:focus-visible {
          outline: 2px solid var(--footer-gold);
          outline-offset: 4px;
        }

        /* Tablettes */
        @media (max-width: 950px) {
          .footer-grid {
            grid-template-columns: 1.1fr 0.8fr;
            gap: 48px 45px;
          }

          .footer-contact {
            grid-column: 1 / -1;
          }

          .footer-contact-item {
            max-width: 390px;
          }
        }

        /* Mobiles */
        @media (max-width: 600px) {
          .luxury-footer {
            padding: 0 21px;
          }

          .footer-decoration {
            top: -100px;
            right: -280px;
          }

          .footer-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 27px;
            padding: 45px 0 36px;
          }

          .footer-eyebrow {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .footer-top h2 {
            font-size: 32px;
          }

          .footer-top-text > p {
            font-size: 12px;
          }

          .footer-reservation {
            width: 100%;
            min-height: 52px;
            justify-content: space-between;
          }

          .footer-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 37px;
            padding: 38px 0;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-logo-img {
            height: 58px;
            max-width: 180px;
          }

          .footer-description {
            max-width: 100%;
          }

          .footer-column {
            padding-top: 0;
          }

          .footer-column h3 {
            font-size: 21px;
          }

          .footer-heading-line {
            margin: 13px 0 20px;
          }

          .footer-contact {
            grid-column: auto;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
            padding: 22px 0;
          }
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          .luxury-footer *,
          .luxury-footer *::before,
          .luxury-footer *::after {
            scroll-behavior: auto !important;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;