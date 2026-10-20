"use client";

import React from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";

interface ProgressItem {
  label: string;
  percentage: number;
}

const Why: React.FC = () => {
  const skills: ProgressItem[] = [
    { label: "Clients satisfaits", percentage: 98 },
    { label: "Qualité des soins", percentage: 100 },
    { label: "Soins sur mesure", percentage: 95 },
    { label: "Respect des rendez-vous", percentage: 96 },
  ];

  const bgImage = "/hero.png";

  return (
    <>
      <style>{`
        .why-section {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 600px;
          display: flex;
          align-items: center;
          padding: 90px 24px;
          box-sizing: border-box;
          overflow: hidden;
          background-color: #30231f;
          background-size: cover;
          background-position: center left;
          color: #fffaf5;
          font-family: Arial, Helvetica, sans-serif;
        }

        .why-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(
              90deg,
              rgba(35, 25, 21, 0.2) 0%,
              rgba(35, 25, 21, 0.7) 38%,
              rgba(35, 25, 21, 0.94) 100%
            );
        }

        .why-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          align-items: center;
          gap: 80px;
        }

        /* Bloc décoratif à gauche */
        .why-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 360px;
        }

        .why-emblem {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(232, 185, 159, 0.65);
          border-radius: 50%;
        }

        .why-emblem::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(232, 185, 159, 0.35);
          border-radius: 50%;
        }

        .why-emblem-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .why-emblem-icon {
          color: #e8b99f;
        }

        .why-emblem-text {
          max-width: 150px;
          color: #fffaf5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          line-height: 1.3;
        }

        .why-emblem-text em {
          color: #e8b99f;
          font-weight: normal;
        }

        /* Contenu principal */
        .why-content-column {
          width: 100%;
          max-width: 600px;
          margin-left: auto;
        }

        .why-subtitle {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          color: #e8b99f;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.8px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .why-subtitle::before {
          content: "";
          width: 30px;
          height: 1px;
          background: #e8b99f;
        }

        .why-title {
          margin: 0 0 22px;
          color: #fffaf5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 4vw, 51px);
          font-weight: 400;
          line-height: 1.16;
          letter-spacing: -0.8px;
          text-wrap: balance;
        }

        .why-title em {
          color: #e8b99f;
          font-weight: 400;
        }

        .why-description {
          max-width: 520px;
          margin: 0 0 38px;
          color: rgba(255, 250, 245, 0.8);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.9;
        }

        /* Indicateurs */
        .why-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(232, 185, 159, 0.38);
          border-left: 1px solid rgba(232, 185, 159, 0.22);
        }

        .why-stat {
          min-width: 0;
          padding: 23px 20px 20px;
          border-right: 1px solid rgba(232, 185, 159, 0.22);
          border-bottom: 1px solid rgba(232, 185, 159, 0.22);
          box-sizing: border-box;
          transition: background-color 0.25s ease;
        }

        .why-stat:hover {
          background: rgba(232, 185, 159, 0.07);
        }

        .why-stat-top {
          display: flex;
          align-items: baseline;
          gap: 3px;
          margin-bottom: 8px;
        }

        .why-stat-number {
          color: #e8b99f;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          line-height: 1;
          font-weight: 400;
        }

        .why-stat-percent {
          color: #e8b99f;
          font-size: 17px;
        }

        .why-stat-label {
          display: block;
          color: rgba(255, 250, 245, 0.9);
          font-size: 12px;
          line-height: 1.6;
        }

        .why-bottom-note {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 25px;
          color: #e8b99f;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .why-bottom-note svg {
          flex-shrink: 0;
        }

        /* Tablettes */
        @media (max-width: 1024px) {
          .why-section {
            min-height: 600px;
            padding: 75px 35px;
          }

          .why-container {
            grid-template-columns: 0.65fr 1.35fr;
            gap: 35px;
          }

          .why-emblem {
            width: 180px;
            height: 180px;
          }

          .why-emblem-text {
            font-size: 22px;
          }

          .why-title {
            font-size: 38px;
          }

          .why-stat {
            padding: 20px 15px;
          }
        }

        /* Mobiles */
        @media (max-width: 768px) {
          .why-section {
            min-height: auto;
            padding: 65px 22px;
            background-position: center;
          }

          .why-overlay {
            background: rgba(42, 30, 25, 0.88);
          }

          .why-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .why-visual {
            min-height: auto;
            justify-content: flex-start;
          }

          .why-emblem {
            width: 105px;
            height: 105px;
          }

          .why-emblem::before {
            inset: 6px;
          }

          .why-emblem-inner {
            gap: 5px;
          }

          .why-emblem-icon {
            width: 21px;
            height: 21px;
          }

          .why-emblem-text {
            max-width: 85px;
            font-size: 13px;
          }

          .why-content-column {
            max-width: 100%;
            margin-left: 0;
          }

          .why-subtitle {
            margin-bottom: 16px;
            font-size: 10px;
            letter-spacing: 2px;
          }

          .why-title {
            margin-bottom: 18px;
            font-size: 34px;
            line-height: 1.2;
          }

          .why-description {
            margin-bottom: 28px;
            font-size: 13px;
            line-height: 1.8;
          }

          .why-stat {
            padding: 20px 15px;
          }

          .why-stat-number {
            font-size: 33px;
          }

          .why-stat-label {
            font-size: 11px;
          }
        }

        /* Petits mobiles */
        @media (max-width: 480px) {
          .why-section {
            padding: 50px 18px;
          }

          .why-container {
            gap: 24px;
          }

          .why-title {
            font-size: 29px;
            letter-spacing: -0.4px;
          }

          .why-subtitle {
            font-size: 9px;
            letter-spacing: 1.7px;
          }

          .why-description {
            font-size: 12px;
          }

          .why-stat {
            padding: 17px 12px;
          }

          .why-stat-number {
            font-size: 30px;
          }

          .why-stat-percent {
            font-size: 14px;
          }

          .why-stat-label {
            font-size: 10px;
          }

          .why-bottom-note {
            font-size: 9px;
            letter-spacing: 0.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-stat {
            transition: none;
          }
        }
      `}</style>

      <section
        className="why-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="why-overlay" aria-hidden="true" />

        <div className="why-container">
          {/* Signature visuelle */}
          <div className="why-visual" aria-hidden="true">
            <div className="why-emblem">
              <div className="why-emblem-inner">
                <Sparkles
                  className="why-emblem-icon"
                  size={32}
                  strokeWidth={1.2}
                />

                <div className="why-emblem-text">
                  L'art du <em>bien-être</em>
                </div>
              </div>
            </div>
          </div>

          {/* Texte et indicateurs */}
          <div className="why-content-column">
            <span className="why-subtitle">
              Pourquoi nous choisir
            </span>

            <h2 className="why-title">
              L'excellence du soin,{" "}
              <em>l'art du bien-être.</em>
            </h2>

            <p className="why-description">
              Chez Secret Beauty &amp; Spa, chaque détail compte.
              Profitez d'une expérience dédiée à votre beauté et à votre
              sérénité, avec une attention particulière portée à votre
              confort et à vos besoins.
            </p>

            <div className="why-stats">
              {skills.map((item) => (
                <div className="why-stat" key={item.label}>
                  <div className="why-stat-top">
                    <span className="why-stat-number">
                      {item.percentage}
                    </span>
                    <span className="why-stat-percent">%</span>
                  </div>

                  <span className="why-stat-label">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="why-bottom-note">
              <ArrowDownRight size={17} strokeWidth={1.5} />
              <span>Votre bien-être est notre priorité</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;