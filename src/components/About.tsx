"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock,
} from "lucide-react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? "is-visible" : ""}`}
      id="about"
    >
      <style>{`
        .about-section {
          position: relative;
          overflow: hidden;
          padding: 105px 24px;
          background: #ead5ca;
          color: #40342F;
          font-family: Arial, Helvetica, sans-serif;
        }

        .about-section * {
          box-sizing: border-box;
        }

        .about-container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 90px;
        }

        /* PHOTOS ET VISUELS EN CHEVAUCHEMENT */

        .about-visual {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1 / 1;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease, transform .8s ease;
        }

        .is-visible .about-visual {
          opacity: 1;
          transform: translateY(0);
        }

        /* Image 1 : Arrière-plan (Haut Gauche) - HAUTEUR AUGMENTÉE À 85% */
        .about-image-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 70%;
          height: 85%; /* Augmenté de 70% à 85% pour plus de hauteur */
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(64, 52, 47, 0.08);
          border-radius: 4px;
          z-index: 1;
        }

        /* Image 2 : Avant-plan (Bas Droite - Chevauchement) */
        .about-image-front {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 70%;
          height: 70%;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(64, 52, 47, 0.15);
          border-radius: 4px;
          border: 6px solid #ead5ca;
          z-index: 2;
        }

        .about-image-back img,
        .about-image-front img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .7s ease;
        }

        .about-image-back:hover img,
        .about-image-front:hover img {
          transform: scale(1.05);
        }

        /* CONTENU TEXTE */

        .about-content {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease .15s,
                      transform .8s ease .15s;
        }

        .is-visible .about-content {
          opacity: 1;
          transform: translateY(0);
        }

        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          color: #7A5C4D;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .about-eyebrow::before {
          content: "";
          width: 35px;
          height: 1px;
          background: #7A5C4D;
        }

        .about-heading {
          margin: 0;
          max-width: 520px;
          color: #40342F;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(36px, 4vw, 50px);
          font-weight: 400;
          line-height: 1.18;
          letter-spacing: -1px;
        }

        .about-subheading {
          margin: 18px 0 20px;
          color: #634C40;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 400;
        }

        .about-description {
          margin: 0 0 30px;
          color: #5D4D45;
          font-size: 14px;
          line-height: 1.9;
        }

        /* HORAIRES D'OUVERTURE */

        .about-schedule {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 35px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.65);
          border-left: 3px solid #7A5C4D;
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(64, 52, 47, 0.04);
        }

        .about-schedule-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #40342F;
          font-size: 13px;
          font-weight: 600;
        }

        .about-schedule-item svg {
          color: #7A5C4D;
        }

        /* BOUTON D'ACTION */

        .about-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-height: 53px;
          padding: 0 28px;
          border: 1px solid #40342F;
          border-radius: 40px;
          background: #40342F;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-decoration: none;
          transition: background .25s ease,
                      color .25s ease,
                      transform .25s ease;
        }

        .about-cta:hover {
          background: transparent;
          color: #40342F;
          transform: translateY(-2px);
        }

        .about-cta svg {
          transition: transform .25s ease;
        }

        .about-cta:hover svg {
          transform: translateX(4px);
        }

        /* TABLETTES ET MOBILES */

        @media (max-width: 950px) {
          .about-section {
            padding: 80px 28px;
          }

          .about-container {
            gap: 55px;
          }

          .about-heading {
            font-size: 40px;
          }
        }

        @media (max-width: 680px) {
          .about-section {
            padding: 65px 22px;
          }

          .about-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-visual {
            max-width: 360px;
          }

          .about-heading {
            max-width: 440px;
            font-size: clamp(32px, 8vw, 40px);
          }

          .about-cta {
            width: 100%;
            padding: 0 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-visual,
          .about-content,
          .about-image-back img,
          .about-image-front img,
          .about-cta,
          .about-cta svg {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="about-container">
        {/* COLONNE VISUELLE : CHEVAUCHEMENT DES IMAGES */}
        <div className="about-visual">
          <div className="about-image-back">
            <img
              src="/about.jpeg"
              alt="Décor et accessoires de spa - Secret Beauty & Spa"
              loading="lazy"
            />
          </div>

          <div className="about-image-front">
            <img
              src="/about2.jpeg"
              alt="Soin du visage et bien-être - Secret Beauty & Spa"
              loading="lazy"
            />
          </div>
        </div>

        {/* COLONNE TEXTE EN FRANÇAIS */}
        <div className="about-content">
          <div className="about-eyebrow">
            Bienvenue chez Secret Beauty &amp; Spa
          </div>

          <h2 className="about-heading">
            Découvrez l'esprit d'harmonie
          </h2>

          <p className="about-subheading">
            Une expérience unique dédiée à votre bien-être et au soin de votre beauté au quotidien.
          </p>

          <p className="about-description">
            Laissez-vous voyager à travers un univers de sérénité où chaque rituel est pensé pour revitaliser votre corps et apaiser votre esprit.
          </p>

          {/* PLAGES HORAIRES */}
          <div className="about-schedule">
            <div className="about-schedule-item">
              <Clock size={16} />
              <span>Lun - Ven : 09h00 – 22h00</span>
            </div>
            <div className="about-schedule-item">
              <Clock size={16} />
              <span>Samedi : 09h00 – 20h00</span>
            </div>
          </div>

          <a
            href="#about"
            className="about-cta"
          >
            <span>À PROPOS DE NOUS</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;