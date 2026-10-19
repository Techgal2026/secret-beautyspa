"use client";

import React from "react";

const Hero: React.FC = () => {
  const heroBackgroundImage = "/hero.png";
  const phoneNumber = "776913230";

  return (
    <>
      <style>{`
        /* Container principal */
        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          background-color: #2a2421;
        }

        /* Image de fond responsive */
        .hero-bg-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }

        /* Overlay léger pour assurer la lisibilité */
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 60%,
            rgba(0, 0, 0, 0.1) 100%
          );
          z-index: 2;
        }

        /* Conteneur du contenu textuel */
        .hero-content-wrapper {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 60px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Conteneur de texte */
        .hero-text-block {
          max-width: 550px;
          color: #ffffff;
        }

        /* Sous-titre */
        .hero-subtitle {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e2baa9;
          display: block;
          margin-bottom: 16px;
          font-family: system-ui, -apple-system, sans-serif;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        /* Titre principal */
        .hero-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 24px 0;
          color: #ffffff;
          letter-spacing: -0.5px;
          font-family: system-ui, -apple-system, sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* Bouton de réservation */
        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          background-color: #000000;
          color: #ffffff;
          padding: 16px 28px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 1px;
          gap: 15px;
          transition: background-color 0.2s ease, opacity 0.2s ease;
          font-family: system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .hero-button:hover {
          opacity: 0.9;
          background-color: #1a1a1a;
        }

        .hero-arrow {
          color: #e27b58;
          font-size: 18px;
          line-height: 1;
        }

        /* Responsive Media Queries */
        @media (max-width: 1024px) {
          .hero-container {
            min-height: 75vh; /* Hauteur réduite pour tablettes */
          }
          .hero-content-wrapper {
            padding: 0 40px;
          }
          .hero-title {
            font-size: 42px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            min-height: 60vh; /* Hauteur réduite pour mobiles */
          }
          .hero-content-wrapper {
            padding: 0 24px;
          }
          .hero-title {
            font-size: 32px;
            margin-bottom: 20px;
          }
          .hero-button {
            width: 100%;
            justify-content: space-between;
            padding: 14px 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            min-height: 55vh; /* Ajustement fin pour petits écrans */
          }
          .hero-title {
            font-size: 26px;
          }
          .hero-subtitle {
            font-size: 11px;
            margin-bottom: 10px;
          }
        }
      `}</style>

      <section className="hero-container">
        {/* Image principale */}
        <img
          src={heroBackgroundImage}
          alt="Secret Beauty & Spa - Institut de beauté à Dakar"
          className="hero-bg-img"
        />

        {/* Voile sombre léger pour la lisibilité */}
        <div className="hero-overlay" />

        {/* Contenu textuel */}
        <div className="hero-content-wrapper">
          <div className="hero-text-block">
            <span className="hero-subtitle">Secret Beauty &amp; Spa</span>

            <h1 className="hero-title">Révélez votre beauté naturelle.</h1>

            <a
              href={`https://wa.me/221${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button"
            >
              <span>RÉSERVER UN SOIN</span>
              <span className="hero-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;