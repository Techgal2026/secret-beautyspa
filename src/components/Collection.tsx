
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Service {
  image: string;
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

const ServicesSection: React.FC = () => {
  const cards: Service[] = [
    {
      image: "/s6.jpeg",
      number: "01",
      category: "Détente & Relaxation",
      title: "Hammam & Massages",
      description:
        "Offrez-vous une parenthèse de sérénité avec nos massages relaxants, gommages au savon noir et rituels de bien-être.",
      href: "/soins/hammam-massages",
    },
    {
      image: "/s8.jpeg",
      number: "02",
      category: "Beauté & Soin du corps",
      title: "Épilation & Laser",
      description:
        "Prenez soin de votre peau grâce à nos prestations d'épilation à la cire et à nos solutions adaptées à vos besoins.",
      href: "/soins/epilation-laser",
    },
    {
      image: "/s7.jpeg",
      number: "03",
      category: "Regard & Mise en beauté",
      title: "Regard & Maquillage",
      description:
        "Sublimez votre regard avec nos prestations dédiées aux cils et aux sourcils, ainsi que nos services de maquillage.",
      href: "/soins/regard-maquillage",
    },
  ];

  return (
    <>
      <style>{`
        .services-section {
          width: 100%;
          padding: 80px 24px 90px;
          box-sizing: border-box;
          background: #ffffff;
          color: #2b2b2b;
          font-family: Arial, Helvetica, sans-serif;
        }

        .services-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* En-tête */
        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #7d6b63;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .services-eyebrow-line {
          display: inline-block;
          width: 3px;
          height: 14px;
          background-color: #ead5ca;
          border-radius: 1px;
        }

        .services-heading {
          margin: 0;
          color: #1a1a1a;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 600;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .services-intro {
          max-width: 600px;
          margin: 16px auto 0;
          color: #666666;
          font-size: 14px;
          line-height: 1.7;
        }

        /* Grille des cartes */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
        }

        /* Carte */
        .service-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        /* Image */
        .service-image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
          background-color: #f5f5f5;
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.04);
        }

        /* Numéro */
        .service-number {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.85);
          color: #555555;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 8px;
          letter-spacing: 1px;
          backdrop-filter: blur(4px);
        }

        /* Bloc flottant */
        .service-info-overlay {
          position: relative;
          margin-top: -70px;
          margin-left: 0;
          margin-right: 25px;
          background: #ffffff;
          padding: 20px 22px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          border-right: 4px solid #ead5ca;
        }

        .service-info-content {
          flex: 1;
          padding-right: 10px;
        }

        .service-title {
          margin: 0 0 4px;
          color: #1a1a1a;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.25;
        }

        .service-category {
          margin: 0;
          color: #8c7b73;
          font-size: 13px;
          font-style: italic;
          font-family: Georgia, serif;
        }

        /* Description et bouton */
        .service-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
          background: #ffffff;
        }

        .service-description {
          color: #666666;
          font-size: 13px;
          line-height: 1.7;
          margin: 0 0 20px;
          flex: 1;
        }

        /* Bouton Découvrir */
        .service-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 12px 18px;
          box-sizing: border-box;
          background-color: #ead5ca;
          color: #4a3b34;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.25s ease;
          border-radius: 2px;
        }

        .service-button:hover {
          background-color: #dfc3b5;
          color: #2c201b;
        }

        .service-button svg {
          transition: transform 0.25s ease;
        }

        .service-button:hover svg {
          transform: translate(2px, -2px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 25px;
          }

          .service-image-wrapper {
            height: 320px;
          }
        }

        @media (max-width: 640px) {
          .services-section {
            padding: 50px 16px 60px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .service-image-wrapper {
            height: 300px;
          }

          .service-info-overlay {
            margin-right: 15px;
            padding: 16px 18px;
          }

          .service-title {
            font-size: 18px;
          }
        }
      `}</style>

      <section className="services-section" id="services">
        <div className="services-inner">

          {/* En-tête */}
          <header className="services-header">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              <span>Nos Prestations</span>
            </div>

            <h2 className="services-heading">
              Secret Beauty & Spa
            </h2>

            <p className="services-intro">
              Découvrez nos soins d'exception conçus pour sublimer votre
              beauté naturelle et vous offrir une expérience d'évasion unique.
            </p>
          </header>

          {/* Grille des cartes */}
          <div className="services-grid">
            {cards.map((card) => (
              <article className="service-card" key={card.number}>

                {/* Image */}
                <div className="service-image-wrapper">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="service-image"
                    loading="lazy"
                  />

                  <span className="service-number">
                    {card.number}
                  </span>
                </div>

                {/* Informations */}
                <div className="service-info-overlay">
                  <div className="service-info-content">
                    <h3 className="service-title">
                      {card.title}
                    </h3>

                    <p className="service-category">
                      {card.category}
                    </p>
                  </div>
                </div>

                {/* Description et navigation */}
                <div className="service-body">
                  <p className="service-description">
                    {card.description}
                  </p>

                  <Link
                    href={card.href}
                    className="service-button"
                    aria-label={`Découvrir ${card.title}`}
                  >
                    <span>Découvrir</span>
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesSection;
