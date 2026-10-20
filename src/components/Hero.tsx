"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  const heroBackgroundImage = "/hero.png";
  const phoneNumber = "776913230";

  const whatsappUrl = `https://wa.me/221${phoneNumber}?text=${encodeURIComponent(
    "Bonjour Secret Beauty & Spa, je souhaite réserver un soin."
  )}`;

  return (
    <>
      <style>{`
        /* Conteneur principal : dimensions originales conservées */
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          background-color: #2a2421;
          isolation: isolate;
        }

        /* Image de fond : dimensions et comportement originaux */
        .hero-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        /* Dégradé élégant pour la lisibilité */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(28, 19, 16, 0.82) 0%,
              rgba(28, 19, 16, 0.63) 42%,
              rgba(28, 19, 16, 0.27) 75%,
              rgba(28, 19, 16, 0.12) 100%
            ),
            linear-gradient(
              0deg,
              rgba(28, 19, 16, 0.25),
              transparent 45%
            );
          z-index: -1;
        }

        /* Conteneur du contenu */
        .hero-content-wrapper {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 60px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-text-block {
          max-width: 600px;
          color: #ffffff;
          animation: hero-entrance 0.8s ease-out both;
        }

        /* Signature de marque */
        .hero-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: #e8b99f;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.6;
          text-transform: uppercase;
          font-family: system-ui, -apple-system, sans-serif;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
        }

        .hero-subtitle::before {
          content: "";
          display: inline-block;
          width: 32px;
          height: 1px;
          background: #e8b99f;
        }

        /* Titre principal */
        .hero-title {
          margin: 0;
          color: #fffaf5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 58px;
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: -1.2px;
          text-wrap: balance;
          text-shadow: 0 3px 14px rgba(0, 0, 0, 0.25);
        }

        .hero-title em {
          color: #e8b99f;
          font-weight: 400;
        }

        /* Description */
        .hero-description {
          max-width: 490px;
          margin: 24px 0 32px;
          color: rgba(255, 250, 245, 0.9);
          font-size: 15px;
          line-height: 1.9;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Zone d'action */
        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
        }

        /* Bouton de réservation */
        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          min-height: 58px;
          padding: 0 25px;
          border: 1px solid #e8b99f;
          background: #e8b99f;
          color: #30231f;
          font-size: 11px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: 1.4px;
          font-family: system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
          transition:
            background-color 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .hero-button:hover {
          background: transparent;
          border-color: #f4d9c9;
          color: #fffaf5;
          transform: translateY(-2px);
        }

        .hero-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .hero-button:hover .hero-arrow {
          transform: translateX(4px);
        }

        /* Message secondaire */
        .hero-note {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 250, 245, 0.9);
          font-size: 12px;
          line-height: 1.6;
        }

        .hero-note-icon {
          color: #e8b99f;
          flex-shrink: 0;
        }

        /* Animation légère */
        @keyframes hero-entrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablettes : hauteur originale conservée */
        @media (max-width: 1024px) {
          .hero-container {
            min-height: 75vh;
          }

          .hero-content-wrapper {
            padding: 0 40px;
          }

          .hero-title {
            font-size: 46px;
          }

          .hero-text-block {
            max-width: 550px;
          }
        }

        /* Mobiles : hauteur originale conservée */
        @media (max-width: 768px) {
          .hero-container {
            min-height: 60vh;
          }

          .hero-content-wrapper {
            padding: 0 24px;
          }

          .hero-title {
            font-size: 36px;
            line-height: 1.17;
            letter-spacing: -0.6px;
          }

          .hero-subtitle {
            margin-bottom: 18px;
            font-size: 11px;
            letter-spacing: 2px;
          }

          .hero-description {
            margin: 20px 0 26px;
            font-size: 14px;
            line-height: 1.8;
          }

          .hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
          }

          .hero-button {
            width: 100%;
            min-height: 54px;
            padding: 0 20px;
          }
        }

        /* Petits mobiles : hauteur originale conservée */
        @media (max-width: 480px) {
          .hero-container {
            min-height: 55vh;
          }

          .hero-content-wrapper {
            padding: 0 20px;
          }

          .hero-title {
            font-size: 28px;
            line-height: 1.2;
          }

          .hero-subtitle {
            margin-bottom: 13px;
            font-size: 10px;
            letter-spacing: 1.8px;
          }

          .hero-subtitle::before {
            width: 24px;
          }

          .hero-description {
            margin: 17px 0 22px;
            font-size: 13px;
            line-height: 1.75;
          }

          .hero-button {
            font-size: 10px;
          }

          .hero-note {
            font-size: 11px;
          }
        }

        @media (max-width: 768px) {
  .hero-description {
    display: none;
  }
}

        /* Respect des préférences d'accessibilité */
        @media (prefers-reduced-motion: reduce) {
          .hero-text-block {
            animation: none;
          }

          .hero-button,
          .hero-arrow {
            transition: none;
          }
        }

        .hero-button:focus-visible {
          outline: 2px solid #fffaf5;
          outline-offset: 4px;
        }

      `}</style>

      <section className="hero-container">
        {/* Image de fond originale */}
        <img
          src={heroBackgroundImage}
          alt="Secret Beauty & Spa - Institut de beauté à Dakar"
          className="hero-bg-img"
          fetchPriority="high"
        />

        {/* Voile de contraste */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Contenu principal */}
        <div className="hero-content-wrapper">
          <div className="hero-text-block">
            <span className="hero-subtitle">
              Secret Beauty &amp; Spa
            </span>

            <h1 className="hero-title">
              Évadez-vous du quotidien et{" "}
              <em>retrouvez votre équilibre.</em>
            </h1>

            <p className="hero-description">
              Offrez-vous une parenthèse de douceur avec nos massages
              relaxants et nos soins dédiés à votre beauté. Prenez du
              temps pour vous, nous prenons soin de vous.
            </p>

            <div className="hero-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button"
                aria-label="Réserver un soin sur WhatsApp"
              >
                <span>RÉSERVER UN SOIN</span>

                <span className="hero-arrow" aria-hidden="true">
                  <ArrowRight size={19} />
                </span>
              </a>

              <span className="hero-note">
                <Sparkles
                  size={16}
                  className="hero-note-icon"
                  aria-hidden="true"
                />
                Votre bien-être, notre priorité
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;