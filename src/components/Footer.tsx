
"use client";

import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const whatsappLink =
    "https://wa.me/221776913230?text=" +
    encodeURIComponent(
      "Bonjour Secret Beauty & Spa, je souhaite obtenir des informations sur vos prestations."
    );

  const navigation = [
    { name: "Accueil", href: "#top" },
    { name: "À propos", href: "#about" },
    { name: "Nos prestations", href: "#services" },
    { name: "Nos tarifs", href: "#tarifs" },
    { name: "Avis clients", href: "#avis" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="spa-footer" id="footer">
      <div className="footer-inner">

        {/* BRAND ET INFORMATIONS */}
        <div className="footer-main">

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img src="/logoss.jpeg" alt="Secret Beauty & Spa" />
            </a>

            <div className="brand-name">
              SECRET BEAUTY <span>&</span> SPA
            </div>

            <div className="brand-line" />

            <p>
              Un univers dédié à votre beauté, votre
              bien-être et votre épanouissement.
              Prenez le temps de vous retrouver
              dans un cadre pensé pour votre détente.
            </p>

            <a
              href="https://www.instagram.com/secret_beauty__spa_?srtk=MWcwNzZwMG9sdzVocg=="
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <span>Suivez-nous sur Instagram</span>
            </a>
          </div>

          {/* NAVIGATION */}
          <div className="footer-column">
            <h3>Explorer</h3>
            <span className="column-line" />

            <nav>
              {navigation.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                  <span>↗</span>
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div className="footer-column">
            <h3>Nos coordonnées</h3>
            <span className="column-line" />

            <div className="contact-list">

              <a href="tel:+221776913230" className="contact-item">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a15 15 0 0 1-8-8l3-2-2-5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <small>WhatsApp / Téléphone</small>
                  <strong>+221 77 691 32 30</strong>
                </span>
              </a>

              <a href="tel:+221338210404" className="contact-item">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 3a15 15 0 0 1-8-8l3-2-2-5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <small>Téléphone fixe</small>
                  <strong>+221 33 821 04 04</strong>
                </span>
              </a>

              <a
                href="mailto:secretbeautyspa136@gmail.com"
                className="contact-item"
              >
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>
                  <small>Adresse e-mail</small>
                  <strong>secretbeautyspa136@gmail.com</strong>
                </span>
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-availability"
            >
              <span />
              Nous contacter pour une réservation
            </a>
          </div>
        </div>

        {/* SIGNATURE */}
        <div className="footer-signature">
          <span>BEAUTÉ · SÉRÉNITÉ · ÉLÉGANCE</span>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            © {year} <strong>Secret Beauty & Spa</strong>.
            Tous droits réservés.
          </p>

          <a href="/politique-confidentialite">
            Politique de confidentialité
          </a>

          <a href="#top" className="back-top">
            Retour en haut ↑
          </a>
        </div>
      </div>

      <style jsx>{`
        .spa-footer {
          --bg: #211713;
          --surface: #2b201b;
          --champagne: #c7a47f;
          --text: #f0e6dc;
          --muted: #ad9a8c;
          --border: rgba(215, 188, 160, 0.17);

          width: 100%;
          position: relative;
          overflow: hidden;
          background: var(--bg);
          color: var(--text);
          padding: 0 6%;
          font-family: Arial, Helvetica, sans-serif;
          isolation: isolate;
        }

        .spa-footer::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -250px;
          top: -300px;
          border: 1px solid rgba(199, 164, 127, 0.12);
          border-radius: 50%;
          box-shadow:
            0 0 0 35px rgba(199, 164, 127, 0.025),
            0 0 0 70px rgba(199, 164, 127, 0.02);
          pointer-events: none;
          z-index: -1;
        }

        .footer-inner {
          max-width: 1320px;
          margin: auto;
        }

        /* MAIN */

        .footer-main {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr 1.1fr;
          gap: 85px;
          padding: 78px 0 65px;
        }

        /* BRAND */

        .footer-brand {
          max-width: 390px;
          min-width: 0;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
        }

        .footer-logo img {
          width: auto;
          max-width: 190px;
          height: 75px;
          object-fit: contain;
          filter: brightness(1.08);
        }

        .brand-name {
          margin-top: 20px;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 3px;
        }

        .brand-name span {
          color: var(--champagne);
          font-style: italic;
        }

        .brand-line {
          width: 42px;
          height: 2px;
          margin: 19px 0;
          background: var(--champagne);
        }

        .footer-brand p {
          max-width: 340px;
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 2;
        }

        /* INSTAGRAM */

        .instagram-link {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-top: 26px;
          color: var(--champagne);
          font-size: 11px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .instagram-link svg {
          width: 19px;
          height: 19px;
        }

        .instagram-link:hover {
          color: white;
          transform: translateX(4px);
        }

        /* COLUMNS */

        .footer-column {
          min-width: 0;
          padding-top: 12px;
        }

        .footer-column h3 {
          margin: 0;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 23px;
          font-weight: 400;
          color: var(--text);
        }

        .column-line {
          display: block;
          width: 35px;
          height: 2px;
          margin: 20px 0 28px;
          background: var(--champagne);
        }

        .footer-column nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 19px;
        }

        .footer-column nav a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 190px;
          color: var(--muted);
          font-size: 12px;
          text-decoration: none;
          transition: 0.25s ease;
        }

        .footer-column nav a span {
          color: var(--champagne);
          opacity: 0;
          transform: translate(-5px, 5px);
          transition: 0.25s ease;
        }

        .footer-column nav a:hover {
          color: var(--text);
          padding-left: 5px;
        }

        .footer-column nav a:hover span {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* CONTACT */

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 23px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--text);
          text-decoration: none;
          min-width: 0;
        }

        .contact-icon {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border: 1px solid var(--border);
          border-radius: 50%;
          color: var(--champagne);
          background: var(--surface);
          transition: 0.3s ease;
        }

        .contact-icon svg {
          width: 18px;
          height: 18px;
        }

        .contact-item:hover .contact-icon {
          background: var(--champagne);
          color: var(--bg);
          border-color: var(--champagne);
        }

        .contact-item > span:last-child {
          min-width: 0;
        }

        .contact-item small {
          display: block;
          margin-bottom: 6px;
          color: var(--muted);
          font-size: 10px;
        }

        .contact-item strong {
          display: block;
          color: var(--text);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .contact-availability {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          color: var(--champagne);
          font-size: 10px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .contact-availability:hover {
          color: white;
        }

        .contact-availability span {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #91a879;
          box-shadow: 0 0 0 4px rgba(145, 168, 121, 0.1);
        }

        /* SIGNATURE */

        .footer-signature {
          padding: 23px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          text-align: center;
        }

        .footer-signature span {
          color: var(--champagne);
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 11px;
          letter-spacing: 5px;
        }

        /* BOTTOM */

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          padding: 25px 0;
          color: var(--muted);
          font-size: 10px;
        }

        .footer-bottom p {
          margin: 0;
          line-height: 1.8;
        }

        .footer-bottom strong {
          color: var(--text);
          font-weight: 500;
        }

        .footer-bottom a {
          color: var(--muted);
          text-decoration: none;
          transition: 0.25s ease;
        }

        .footer-bottom a:hover {
          color: var(--champagne);
        }

        .back-top {
          white-space: nowrap;
        }

        /* TABLET */

        @media (max-width: 950px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 55px 45px;
          }

          .footer-column:last-child {
            grid-column: 1 / -1;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .spa-footer {
            padding: 0 23px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 43px;
            padding: 55px 0 45px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-brand p {
            max-width: 100%;
          }

          .footer-column {
            padding-top: 0;
          }

          .footer-column:last-child {
            grid-column: auto;
          }

          .footer-column h3 {
            font-size: 22px;
          }

          .footer-column nav a {
            max-width: 100%;
          }

          .footer-signature span {
            font-size: 9px;
            letter-spacing: 3px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 17px;
            padding: 24px 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .spa-footer *,
          .spa-footer *::before,
          .spa-footer *::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
