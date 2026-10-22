"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, HeartHandshake, Award } from "lucide-react";

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  value: number;
  suffix?: string;
  description: string;
}

// Composant pour l'animation d'incrémentation des chiffres
const Counter: React.FC<{ target: number; duration?: number }> = ({
  target,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <div ref={countRef}>{count}</div>;
};

const Why: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      icon: HeartHandshake,
      value: 98,
      suffix: "%",
      description:
        "De clients pleinement satisfaits par la qualité de nos prestations et notre accueil.",
    },
    {
      id: 2,
      icon: Award,
      value: 15,
      suffix: "+",
      description:
        "Années d'expertise consacrées à la beauté, aux soins du visage et au bien-être.",
    },
    {
      id: 3,
      icon: Sparkles,
      value: 30,
      suffix: "+",
      description:
        "Soins et rituels sur mesure conçus spécialement pour sublimer votre peau.",
    },
  ];

  return (
    <>
      <style>{`
        .why-section {
          width: 100%;
          background-color: #ead5ca;
          padding: 90px 24px;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .why-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .why-subtitle {
          color: #8c6245;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
        }

        .why-main-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 3.5vw, 42px);
          color: #2b2320;
          font-weight: 400;
          margin: 0;
        }

        .why-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .why-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .why-icon-wrapper {
          margin-bottom: 20px;
          color: #b58055;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .why-item:hover .why-icon-wrapper {
          transform: translateY(-4px);
        }

        .why-value-wrapper {
          display: flex;
          align-items: baseline;
          justify-content: center;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 60px;
          font-weight: 400;
          color: #2b2320;
          line-height: 1;
          margin-bottom: 18px;
        }

        .why-suffix {
          font-size: 38px;
          color: #8c6245;
          margin-left: 2px;
        }

        .why-description {
          font-size: 14px;
          line-height: 1.7;
          color: #5a4f4a;
          margin: 0;
          max-width: 290px;
        }

        /* Styles Responsive */
        @media (max-width: 768px) {
          .why-section {
            padding: 60px 20px;
          }

          .why-header {
            margin-bottom: 40px;
          }

          .why-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .why-value-wrapper {
            font-size: 50px;
          }

          .why-suffix {
            font-size: 32px;
          }

          .why-description {
            font-size: 13.5px;
          }
        }
      `}</style>

      <section className="why-section">
        <div className="why-header">
          <span className="why-subtitle">Pourquoi nous choisir</span>
          <h2 className="why-main-title">L'expérience Secret Beauty &amp; Spa</h2>
        </div>

        <div className="why-container">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="why-item">
                <div className="why-icon-wrapper">
                  <IconComponent size={44} strokeWidth={1.2} />
                </div>

                <div className="why-value-wrapper">
                  <Counter target={item.value} />
                  {item.suffix && <span className="why-suffix">{item.suffix}</span>}
                </div>

                <p className="why-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Why;