"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Flower2,
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

  const values = [
    {
      icon: Sparkles,
      title: "Soins sur-mesure",
      text: "Des rituels et des produits adaptés aux besoins uniques de votre peau.",
    },
    {
      icon: Heart,
      title: "Praticiennes expert(e)s",
      text: "Une équipe attentive dédiée à votre confort et votre sérénité.",
    },
    {
      icon: Flower2,
      title: "Un havre de paix",
      text: "Un cadre élégant, intime et apaisant au cœur de Dakar.",
    },
  ];

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
          background: #F8F5F0;
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

        /* PHOTOS ET VISUELS */

        .about-visual {
          position: relative;
          min-width: 0;
          padding: 0 32px 45px 0;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease, transform .8s ease;
        }

        .is-visible .about-visual {
          opacity: 1;
          transform: translateY(0);
        }

        /* 1. Photo Principale : Ambiance & Décor du Spa */
        .about-main-image {
          position: relative;
          height: 590px;
          overflow: hidden;
          border-radius: 180px 180px 8px 8px;
          background: #E7DDD2;
          box-shadow: 0 20px 40px rgba(48, 32, 25, 0.08);
        }

        .about-main-image img,
        .about-small-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .7s ease;
        }

        .about-main-image:hover img,
        .about-small-image:hover img {
          transform: scale(1.04);
        }

        /* 2. Photo Secondaire : Soin & Expertise en action */
        .about-small-image {
          position: absolute;
          width: 52%;
          height: 230px;
          bottom: 0;
          right: 0;
          padding: 8px;
          background: #F8F5F0;
          border-radius: 8px;
          overflow: hidden;
          z-index: 2;
          box-shadow: 0 12px 30px rgba(48, 32, 25, 0.12);
        }

        .about-small-image img {
          border-radius: 5px;
        }

        .about-photo-caption {
          position: absolute;
          top: 32px;
          left: -25px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 17px;
          background: #FFFFFF;
          color: #54433D;
          border-radius: 4px;
          box-shadow: 0 8px 28px rgba(64, 52, 47, .12);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .about-photo-caption svg {
          color: #B69A79;
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
          color: #9A7B61;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .about-eyebrow::before {
          content: "";
          width: 35px;
          height: 1px;
          background: #B69A79;
        }

        .about-heading {
          margin: 0;
          max-width: 520px;
          color: #40342F;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(38px, 4vw, 54px);
          font-weight: 400;
          line-height: 1.16;
          letter-spacing: -1.5px;
        }

        .about-heading em {
          color: #A17F65;
          font-weight: 400;
          font-style: italic;
        }

        .about-decoration {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 25px 0;
          color: #B69A79;
        }

        .about-decoration span {
          width: 43px;
          height: 1px;
          background: #D9C8B6;
        }

        .about-description {
          margin: 0 0 18px;
          color: #766A62;
          font-size: 14px;
          line-height: 2;
        }

        .about-quote {
          margin: 27px 0 30px;
          padding: 2px 0 2px 20px;
          border-left: 2px solid #B69A79;
          color: #5D4A40;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 18px;
          font-style: italic;
          line-height: 1.8;
        }

        /* VALEURS */

        .about-values {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 30px 0 35px;
        }

        .about-value {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .about-value-icon {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid #E1D4C6;
          border-radius: 50%;
          color: #9A7B61;
          background: #FFFFFF;
        }

        .about-value-title {
          margin: 1px 0 4px;
          color: #493A33;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 16px;
          font-weight: 600;
        }

        .about-value-text {
          margin: 0;
          color: #82756C;
          font-size: 13px;
          line-height: 1.7;
        }

        /* BOUTON D'ACTION */

        .about-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-height: 53px;
          padding: 0 28px;
          border: 1px solid #54433D;
          border-radius: 40px;
          background: #54433D;
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
          color: #54433D;
          transform: translateY(-2px);
        }

        .about-cta svg {
          transition: transform .25s ease;
        }

        .about-cta:hover svg {
          transform: translateX(4px);
        }

        .about-note {
          margin-top: 15px;
          color: #95867C;
          font-size: 11px;
          letter-spacing: 0.5px;
        }

        /* TABLETTES */

        @media (max-width: 950px) {
          .about-section {
            padding: 80px 28px;
          }

          .about-container {
            gap: 48px;
          }

          .about-main-image {
            height: 500px;
          }

          .about-small-image {
            height: 180px;
          }

          .about-heading {
            font-size: 42px;
          }
        }

        /* MOBILES */

        @media (max-width: 680px) {
          .about-section {
            padding: 65px 22px;
          }

          .about-container {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-visual {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
            padding: 0 20px 35px 0;
          }

          .about-main-image {
            height: 440px;
            border-radius: 140px 140px 8px 8px;
          }

          .about-small-image {
            width: 55%;
            height: 160px;
            right: 0;
            bottom: 0;
          }

          .about-photo-caption {
            top: 25px;
            left: -8px;
            padding: 10px 14px;
            font-size: 9px;
            letter-spacing: 1px;
          }

          .about-heading {
            max-width: 440px;
            font-size: clamp(34px, 8vw, 42px);
            letter-spacing: -1px;
          }

          .about-description {
            font-size: 13px;
          }

          .about-quote {
            font-size: 16px;
          }

          .about-cta {
            width: 100%;
            padding: 0 16px;
          }
        }

        @media (max-width: 380px) {
          .about-section {
            padding: 50px 17px;
          }

          .about-main-image {
            height: 360px;
          }

          .about-small-image {
            height: 135px;
          }

          .about-heading {
            font-size: 32px;
          }

          .about-photo-caption {
            left: -5px;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-visual,
          .about-content,
          .about-main-image img,
          .about-small-image img,
          .about-cta,
          .about-cta svg {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="about-container">
        {/* COLONNE PHOTOS (CADRE + EXPERTISE) */}
        <div className="about-visual">
          {/* Photo principale : Ambiance et Décor */}
          <div className="about-main-image">
            <img
              src="/abb.jpg"
              alt="Cadre chaleureux et apaisant - Secret Beauty & Spa Dakar"
              loading="lazy"
            />
          </div>

          {/* Badge élégant */}
          <div className="about-photo-caption">
            <Flower2 size={16} />
            <span>Sérénité &amp; Élégance</span>
          </div>

          {/* Photo secondaire : Soin personnalisé */}
          <div className="about-small-image">
            <img
              src="/ab4.jpg"
              alt="Soin personnalisé et massage de bien-être"
              loading="lazy"
            />
          </div>
        </div>

        {/* COLONNE PRÉSENTATION & TEXTE */}
        <div className="about-content">
          <div className="about-eyebrow">
            L'esprit Secret Beauty &amp; Spa
          </div>

          <h2 className="about-heading">
            Révélez votre beauté,
            <br />
            <em>cultivez votre bien-être.</em>
          </h2>

          <div className="about-decoration" aria-hidden="true">
            <span />
            <Flower2 size={20} />
            <span />
          </div>

          <p className="about-description">
            Niché au cœur de Dakar, <strong>Secret Beauty &amp; Spa</strong> est bien
            plus qu'un institut : c'est un havre de sérénité pensé pour vous offrir
            une parenthèse hors du temps. 
          </p>

          <blockquote className="about-quote">
            « Accordez-vous une pause, retrouvez votre équilibre
            et laissez votre beauté s'épanouir en toute confiance. »
          </blockquote>

          <p className="about-description">
            Que ce soit pour un soin du visage revitalisant, un massage relaxant
            ou une prestation esthétique minutieuse, nous combinons savoir-faire
            professionnel et produits de qualité pour sublimer votre bien-être au quotidien.
          </p>

          <div className="about-values">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div className="about-value" key={value.title}>
                  <div className="about-value-icon">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="about-value-title">
                      {value.title}
                    </h3>

                    <p className="about-value-text">
                      {value.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="https://wa.me/221776913230?text=Bonjour%20Secret%20Beauty%20%26%20Spa%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20soins%20et%20r%C3%A9server."
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta"
          >
            <span>RÉSERVER VOTRE PARENTHÈSE</span>
            <ArrowRight size={17} />
          </a>

          <p className="about-note">
            Prenez rendez-vous directement via WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;