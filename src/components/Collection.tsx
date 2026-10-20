"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Service {
  image: string;
  number: string;
  category: string;
  title: string;
  description: string;
  message: string;
}

const ServicesSection: React.FC = () => {
  const phoneNumber = "221776913230";

  const cards: Service[] = [
    {
      image: "/c3.jpg",
      number: "01",
      category: "DÉTENTE & RELAXATION",
      title: "Hammam & Massages",
      description:
        "Offrez-vous une parenthèse de sérénité avec nos massages relaxants, gommages au savon noir et rituels de bien-être.",
      message:
        "Bonjour Secret Beauty & Spa, je souhaite réserver un hammam ou un massage.",
    },
    {
      image: "/c44.jpg",
      number: "02",
      category: "BEAUTÉ & SOIN DU CORPS",
      title: "Épilation & Laser",
      description:
        "Prenez soin de votre peau grâce à nos prestations d'épilation à la cire et à nos solutions adaptées à vos besoins.",
      message:
        "Bonjour Secret Beauty & Spa, je souhaite avoir des informations sur vos prestations d'épilation et de laser.",
    },
    {
      image: "/c5.jpg",
      number: "03",
      category: "REGARD & MISE EN BEAUTÉ",
      title: "Regard & Maquillage",
      description:
        "Sublimez votre regard avec nos prestations dédiées aux cils et aux sourcils, ainsi que nos services de maquillage.",
      message:
        "Bonjour Secret Beauty & Spa, je souhaite réserver une prestation regard ou maquillage.",
    },
  ];

  const getWhatsAppUrl = (message: string) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style>{`
        .services-section {
          width: 100%;
          padding: 95px 24px 75px;
          box-sizing: border-box;
          background: #fcf9f6;
          color: #352720;
          font-family: Arial, Helvetica, sans-serif;
        }

        .services-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* En-tête */
        .services-header {
          max-width: 760px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 19px;
          color: #a77965;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.6px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .services-eyebrow svg {
          color: #bd927d;
        }

        .services-heading {
          margin: 0;
          color: #48352c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 49px);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.8px;
          text-wrap: balance;
        }

        .services-heading em {
          color: #ae806b;
          font-weight: 400;
        }

        .services-intro {
          max-width: 580px;
          margin: 19px auto 0;
          color: #817168;
          font-size: 14px;
          line-height: 1.9;
        }

        .services-heading-line {
          width: 48px;
          height: 2px;
          margin: 24px auto 0;
          background: #c49b85;
        }

        /* Grille */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
          gap: 27px;
        }

        /* Carte */
        .service-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #eee4dd;
          border-radius: 5px;
          box-shadow: 0 8px 28px rgba(63, 43, 32, 0.055);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
          animation: service-fade-in 0.65s ease both;
        }

        .service-card:nth-child(2) {
          animation-delay: 0.12s;
        }

        .service-card:nth-child(3) {
          animation-delay: 0.24s;
        }

        .service-card:hover {
          transform: translateY(-7px);
          border-color: #ddc2b2;
          box-shadow: 0 18px 38px rgba(63, 43, 32, 0.12);
        }

        /* Image */
        .service-image-wrapper {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: #e8ddd5;
        }

        .service-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.65s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.055);
        }

        .service-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(29, 20, 16, 0.02) 40%,
            rgba(29, 20, 16, 0.48) 100%
          );
          pointer-events: none;
        }

        .service-number {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 40px;
          height: 36px;
          padding: 0 8px;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(48, 35, 31, 0.58);
          color: #fffaf5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          backdrop-filter: blur(8px);
        }

        .service-image-caption {
          position: absolute;
          right: 18px;
          bottom: 17px;
          left: 18px;
          color: #fffaf5;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        /* Contenu */
        .service-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: stretch;
          padding: 26px 23px 23px;
          box-sizing: border-box;
        }

        .service-title {
          margin: 0 0 13px;
          color: #48352c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.25;
        }

        .service-description {
          flex: 1;
          margin: 0 0 25px;
          color: #81746b;
          font-size: 12px;
          line-height: 1.9;
        }

        /* Bouton */
        .service-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          width: 100%;
          min-height: 49px;
          padding: 0 17px;
          box-sizing: border-box;
          border: 1px solid #684838;
          background: #684838;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-decoration: none;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .service-button svg {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .service-button:hover {
          background: #f5ece6;
          border-color: #c8a18c;
          color: #684838;
        }

        .service-button:hover svg {
          transform: translate(3px, -3px);
        }

        .service-button:focus-visible {
          outline: 2px solid #a77965;
          outline-offset: 4px;
        }

        /* Pied de section */
        .services-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 37px;
          color: #82736a;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        .services-footer a {
          color: #8e6551;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .services-footer a:hover {
          text-decoration: underline;
        }

        .services-footer-dot {
          color: #bd927d;
        }

        @keyframes service-fade-in {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablettes */
        @media (max-width: 1024px) {
          .services-section {
            padding: 75px 25px 60px;
          }

          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .service-image-wrapper {
            height: 245px;
          }

          .service-content {
            padding: 23px 20px 21px;
          }
        }

        /* Mobiles */
        @media (max-width: 600px) {
          .services-section {
            padding: 60px 18px 48px;
          }

          .services-header {
            margin-bottom: 34px;
          }

          .services-eyebrow {
            margin-bottom: 15px;
            font-size: 9px;
            letter-spacing: 1.9px;
          }

          .services-heading {
            font-size: 32px;
            line-height: 1.23;
          }

          .services-intro {
            margin-top: 15px;
            font-size: 12px;
            line-height: 1.8;
          }

          .services-heading-line {
            margin-top: 20px;
          }

          .services-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
            max-width: 430px;
            margin: 0 auto;
          }

          .service-image-wrapper {
            height: 255px;
          }

          .service-content {
            padding: 23px 21px 21px;
          }

          .service-title {
            font-size: 24px;
          }

          .service-description {
            margin-bottom: 22px;
            font-size: 12px;
          }

          .services-footer {
            flex-direction: column;
            gap: 5px;
            margin-top: 28px;
            font-size: 10px;
          }

          .services-footer-dot {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card {
            animation: none;
            transition: none;
          }

          .service-image,
          .service-button,
          .service-button svg {
            transition: none;
          }
        }
      `}</style>

      <section className="services-section" id="services">
        <div className="services-inner">
          {/* En-tête */}
          <header className="services-header">
            <div className="services-eyebrow">
              <Sparkles size={15} strokeWidth={1.5} />
              <span>Nos univers de beauté</span>
              <Sparkles size={15} strokeWidth={1.5} />
            </div>

            <h2 className="services-heading">
              Laissez-vous séduire par{" "}
              <em>l'art du bien-être.</em>
            </h2>

            <p className="services-intro">
              Découvrez nos prestations pensées pour prendre soin de
              vous, révéler votre beauté et vous offrir un véritable
              moment d'évasion.
            </p>

            <div className="services-heading-line" />
          </header>

          {/* Cartes des services */}
          <div className="services-grid">
            {cards.map((card) => (
              <article className="service-card" key={card.number}>
                <div className="service-image-wrapper">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="service-image"
                    loading="lazy"
                  />

                  <div
                    className="service-image-overlay"
                    aria-hidden="true"
                  />

                  <span className="service-number">
                    {card.number}
                  </span>

                  <span className="service-image-caption">
                    {card.category}
                  </span>
                </div>

                <div className="service-content">
                  <h3 className="service-title">
                    {card.title}
                  </h3>

                  <p className="service-description">
                    {card.description}
                  </p>

                  <a
                    href={getWhatsAppUrl(card.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-button"
                    aria-label={`Réserver : ${card.title} sur WhatsApp`}
                  >
                    <span>RÉSERVER CETTE PRESTATION</span>
                    <ArrowUpRight size={18} strokeWidth={1.7} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Informations de contact */}
          <footer className="services-footer">
            <span>Prestations sur rendez-vous</span>
            <span className="services-footer-dot">•</span>
            <a href="mailto:secretbeautyspa136@gmail.com">
              secretbeautyspa136@gmail.com
            </a>
          </footer>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;