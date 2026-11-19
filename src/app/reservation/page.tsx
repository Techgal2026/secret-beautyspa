"use client";

import React, { useState, useRef, useEffect } from "react";
import Nav from "@/components/Navbar";

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

const WHATSAPP_NUMBERS = ["221776913230", "221786346377"] as const;

const serviceGroups: { title: string; services: ServiceItem[] }[] = [
  {
    title: "Épilation à la cire chaude",
    services: [
      { name: "Épilation aisselles", price: "5 000 FCFA" },
      { name: "Épilation maillot simple", price: "7 000 FCFA" },
      { name: "Épilation Brésilien", price: "10 000 FCFA" },
      { name: "Épilation ventre", price: "5 000 FCFA" },
      { name: "Épilation bas du dos", price: "5 000 FCFA" },
      { name: "Épilation dos complet", price: "10 000 FCFA" },
    ],
  },
  {
    title: "Épilation définitive au laser",
    services: [
      { name: "Laser menton", price: "25 000 FCFA" },
      { name: "Laser joues", price: "20 000 FCFA" },
      { name: "Laser visage complet", price: "60 000 FCFA" },
      { name: "Laser aisselles", price: "25 000 FCFA" },
      { name: "Laser maillot simple", price: "40 000 FCFA" },
      { name: "Laser maillot Brésilien", price: "55 000 FCFA" },
      { name: "Laser intégral", price: "70 000 FCFA" },
      { name: "Laser demi-jambe", price: "75 000 FCFA" },
      { name: "Laser jambe complète", price: "120 000 FCFA" },
      { name: "Laser cuisses", price: "70 000 FCFA" },
      { name: "Laser demi-bras", price: "50 000 FCFA" },
      { name: "Laser bras entier", price: "70 000 FCFA" },
      { name: "Laser ventre", price: "40 000 FCFA" },
      { name: "Laser bas du dos", price: "40 000 FCFA" },
      { name: "Laser dos complet", price: "70 000 FCFA" },
    ],
  },
  {
    title: "Forfaits Laser",
    services: [
      {
        name: "Laser Forfait 1",
        price: "195 000 FCFA",
        description: "Aisselles + maillot intégral + jambe complète",
      },
      {
        name: "Laser Forfait 2",
        price: "120 000 FCFA",
        description: "Aisselles + maillot simple + demi-jambe",
      },
      {
        name: "Laser Forfait 3",
        price: "200 000 FCFA",
        description: "Aisselles + maillot Brésilien + demi-bras",
      },
      {
        name: "Laser Forfait 4",
        price: "200 000 FCFA",
        description: "Aisselles + maillot intégral + demi-jambe + bras entier",
      },
      {
        name: "Laser Forfait 5",
        price: "230 000 FCFA",
        description: "Aisselles + maillot intégral + bras entier + jambe entière",
      },
    ],
  },
  {
    title: "Tatouage permanent & Maquillage",
    services: [
      { name: "Microblading", price: "100 000 FCFA" },
      { name: "Maquillage du jour", price: "35 000 FCFA" },
      { name: "Maquillage soirée", price: "40 000 FCFA" },
      { name: "Maquillage Mariée", price: "120 000 FCFA" },
      { name: "Maquillage à domicile / hôtel", price: "170 000 FCFA" },
    ],
  },
  {
    title: "Embellir le regard",
    services: [
      { name: "Faux cils", price: "10 000 FCFA" },
      { name: "Extensions cils", price: "30 000 FCFA" },
      { name: "Volume russe", price: "50 000 FCFA" },
      { name: "Dépose cils", price: "10 000 FCFA" },
      { name: "Teinture cils", price: "8 000 FCFA" },
      { name: "Teinture sourcils", price: "8 000 FCFA" },
      { name: "Henné brow + épilation", price: "20 000 FCFA" },
      { name: "Rehaussement cils", price: "35 000 FCFA" },
    ],
  },
  {
    title: "Hammam Solo",
    services: [
      { name: "Hammam classic + savonnage", price: "30 000 FCFA" },
      { name: "Hammam + enveloppement", price: "55 000 FCFA" },
      { name: "Hammam + massage 1h", price: "60 000 FCFA" },
    ],
  },
  {
    title: "Forfaits Hammam Solo",
    services: [
      {
        name: "Hammam Forfait Solo 1",
        price: "85 000 FCFA",
        description: "Hammam + enveloppement + massage 1h",
      },
      {
        name: "Hammam Forfait Solo 2",
        price: "80 000 FCFA",
        description: "Hammam + pédicure/manucure + soin du visage",
      },
      {
        name: "Hammam Forfait Solo 3",
        price: "70 000 FCFA",
        description: "Gommage corps + massage 1h + enveloppement",
      },
      {
        name: "Hammam Forfait Solo 4",
        price: "35 000 FCFA",
        description: "Massage 30 min + pédicure/manucure",
      },
      {
        name: "Hammam Forfait Solo 5",
        price: "130 000 FCFA",
        description:
          "Hammam + enveloppement + soin du visage + massage + pédicure/manucure",
      },
    ],
  },
  {
    title: "Hammam Duo",
    services: [
      { name: "Hammam + enveloppement Duo", price: "110 000 FCFA" },
      { name: "Hammam + massage 1h Duo", price: "120 000 FCFA" },
      {
        name: "Hammam + pédicure/manucure + massage 1h Duo",
        price: "160 000 FCFA",
      },
      {
        name: "Hammam + enveloppement + massage 1h Duo",
        price: "170 000 FCFA",
      },
      { name: "Gommage corps + massage Duo", price: "100 000 FCFA" },
      {
        name: "Hammam + massage 1h + soin du visage + enveloppement Duo",
        price: "230 000 FCFA",
      },
      {
        name: "Gommage corps + massage 1h + enveloppement + soin du visage Duo",
        price: "210 000 FCFA",
      },
    ],
  },
  {
    title: "Soin intime",
    services: [
      { name: "Soin aisselles", price: "20 000 FCFA" },
      { name: "Soin aisselles + épilation", price: "25 000 FCFA" },
    ],
  },
];

export const allAvailableServices: ServiceItem[] =
  serviceGroups.flatMap((group) => group.services);

function formatAppointmentDate(value: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

function buildWhatsAppMessage(params: {
  fullName: string;
  phone: string;
  service: ServiceItem;
  appointment: string;
}): string {
  const formattedDate = formatAppointmentDate(params.appointment);
  const serviceDetails = params.service.description
    ? `\n• Détails : ${params.service.description}`
    : "";

  return [
    "Bonjour *Secret Beauty & Spa*, je souhaite effectuer une réservation :",
    "",
    `• *Nom complet :* ${params.fullName.trim()}`,
    `• *Téléphone :* ${params.phone.trim()}`,
    `• *Soin souhaité :* ${params.service.name} (${params.service.price})${serviceDetails}`,
    `• *Date et heure :* ${formattedDate}`,
  ].join("\n");
}

export default function ReservationPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [appointment, setAppointment] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [whatsappLinks, setWhatsappLinks] = useState<
    { phoneDisplay: string; url: string }[]
  >([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = allAvailableServices.find(
    (service) => service.name === selectedService
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selected) return;

    const message = buildWhatsAppMessage({
      fullName,
      phone,
      service: selected,
      appointment,
    });

    const encodedText = encodeURIComponent(message);
    const links = [
      {
        phoneDisplay: "+221 77 691 32 30",
        url: `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodedText}`,
      },
      {
        phoneDisplay: "+221 78 634 63 77",
        url: `https://wa.me/${WHATSAPP_NUMBERS[1]}?text=${encodedText}`,
      },
    ];

    setWhatsappLinks(links);

    // Ouvre le premier numéro immédiatement ; les navigateurs bloquent souvent
    // une seconde fenêtre pop-up automatique, d'où les deux boutons de secours ci-dessous.
    window.open(links[0].url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="reservation-page">
      <Nav />

      <div className="reservation-container">
        <div className="reservation-card">
          <div className="brand-label">SECRET BEAUTY & SPA</div>

          <div className="reservation-heading">
            <span className="eyebrow">VOTRE MOMENT DE BIEN-ÊTRE</span>

            <h1>Réservation de Soin</h1>

            <div className="heading-line" />

            <p>
              Planifiez votre moment de détente et de bien-être chez Secret
              Beauty & Spa. Votre demande sera transmise via WhatsApp.
            </p>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="fullname">Nom complet</label>
              <input
                id="fullname"
                type="text"
                placeholder="Ex : Fatou Ndiaye"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Numéro de téléphone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Ex : +221 77 000 00 00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="input-group service-group" ref={dropdownRef}>
              <label>Soin souhaité</label>

              <button
                type="button"
                className={`service-trigger ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                <span className={selected ? "selected-text" : "placeholder"}>
                  {selected
                    ? `${selected.name} — ${selected.price}`
                    : "Sélectionnez un soin..."}
                </span>

                <svg
                  className={`chevron ${isOpen ? "rotated" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {isOpen && (
                <div className="service-dropdown">
                  {serviceGroups.map((group) => (
                    <div className="service-category" key={group.title}>
                      <div className="category-title">{group.title}</div>

                      {group.services.map((service) => (
                        <button
                          type="button"
                          key={`${group.title}-${service.name}`}
                          className={`service-option ${
                            selectedService === service.name ? "chosen" : ""
                          }`}
                          onClick={() => {
                            setSelectedService(service.name);
                            setIsOpen(false);
                          }}
                        >
                          <span className="service-info">
                            <span className="service-name">
                              {service.name}
                            </span>

                            {service.description && (
                              <span className="service-description">
                                {service.description}
                              </span>
                            )}
                          </span>

                          <span className="service-price">{service.price}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <input type="hidden" name="service" value={selectedService} />

              {!selectedService && (
                <input
                  type="text"
                  className="validation-field"
                  tabIndex={-1}
                  autoComplete="off"
                  required
                  value=""
                  onChange={() => {}}
                  onInvalid={(e) => {
                    e.currentTarget.setCustomValidity(
                      "Veuillez sélectionner un soin."
                    );
                  }}
                  onInput={(e) => {
                    e.currentTarget.setCustomValidity("");
                  }}
                  aria-label="Sélection du soin obligatoire"
                />
              )}
            </div>

            <div className="input-group">
              <label htmlFor="appointment">Date et heure souhaitées</label>

              <input
                id="appointment"
                type="datetime-local"
                value={appointment}
                onChange={(e) => setAppointment(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              <span>Envoyer sur WhatsApp</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            {whatsappLinks.length > 0 && (
              <div className="whatsapp-actions">
                <p>
                  Cliquez sur chaque numéro pour ouvrir WhatsApp avec votre
                  message prêt à envoyer :
                </p>
                <div className="whatsapp-buttons">
                  {whatsappLinks.map((item) => (
                    <a
                      key={item.phoneDisplay}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-link-btn"
                    >
                      WhatsApp {item.phoneDisplay}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </form>

          <div className="reservation-footer">
            <span>✦</span>
            <p>Votre beauté, notre passion.</p>
            <span>✦</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .reservation-page {
          min-height: 100vh;
          background: #FAF7F5;
          color: #2A2421;
          padding-bottom: 50px;
        }

        .reservation-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 140px 20px 60px;
        }

        .reservation-card {
          background: #FFFFFF;
          border: 1px solid #EAE3DE;
          border-radius: 24px;
          padding: 45px;
          box-shadow: 0 12px 40px rgba(80, 55, 42, 0.06);
        }

        .brand-label {
          text-align: center;
          color: #A9856C;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          margin-bottom: 28px;
        }

        .reservation-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #B08D75;
          margin-bottom: 12px;
        }

        .reservation-heading h1 {
          font-family: "Playfair Display", "Times New Roman", serif;
          font-size: 32px;
          font-weight: 600;
          color: #2A2421;
          margin: 0 0 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .heading-line {
          width: 45px;
          height: 2px;
          background: #C9A58B;
          margin: 0 auto 16px;
        }

        .reservation-heading p {
          color: #8C776B;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        .reservation-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .input-group label {
          font-size: 11px;
          font-weight: 600;
          color: #514138;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .input-group input:not(.validation-field) {
          width: 100%;
          min-width: 0;
          height: 50px;
          padding: 0 16px;
          border-radius: 12px;
          border: 1px solid #EAE3DE;
          background: #FAF7F5;
          color: #2A2421;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: all 0.25s ease;
          accent-color: #98745B;
        }

        .input-group input::placeholder {
          color: #B4A79F;
        }

        .input-group input:focus {
          border-color: #C9A58B;
          background: #FFFFFF;
          box-shadow: 0 0 0 3px rgba(201, 165, 139, 0.13);
        }

        /* MENU PERSONNALISÉ */

        .service-group {
          position: relative;
        }

        .service-trigger {
          width: 100%;
          min-height: 52px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-radius: 12px;
          border: 1px solid #EAE3DE;
          background: #FAF7F5;
          color: #2A2421;
          font-family: inherit;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .service-trigger:hover,
        .service-trigger.active {
          border-color: #C9A58B;
          background: #FFFFFF;
        }

        .placeholder {
          color: #B4A79F;
        }

        .selected-text {
          color: #684838;
          font-weight: 500;
        }

        .chevron {
          flex-shrink: 0;
          color: #A9856C;
          transition: transform 0.25s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .service-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          z-index: 50;
          max-height: 340px;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 8px;
          background: #FFFFFF;
          border: 1px solid #EAE3DE;
          border-radius: 14px;
          box-shadow: 0 12px 35px rgba(80, 55, 42, 0.12);

          scrollbar-width: thin;
          scrollbar-color: #C9A58B #FAF7F5;
        }

        .service-dropdown::-webkit-scrollbar {
          width: 6px;
        }

        .service-dropdown::-webkit-scrollbar-track {
          background: #FAF7F5;
          border-radius: 10px;
        }

        .service-dropdown::-webkit-scrollbar-thumb {
          background: #C9A58B;
          border-radius: 10px;
        }

        .service-category {
          margin-bottom: 8px;
        }

        .category-title {
          position: sticky;
          top: -8px;
          z-index: 2;
          padding: 12px 10px 9px;
          background: #F5EEE9;
          color: #805E49;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 7px;
        }

        .service-option {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 10px;
          border: none;
          border-bottom: 1px solid #F3EEEA;
          background: #FFFFFF;
          color: #514138;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s ease;
        }

        .service-option:hover,
        .service-option:focus-visible {
          background: #F8F2ED;
          outline: none;
        }

        .service-option.chosen {
          background: #F3EAE3;
        }

        .service-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .service-name {
          font-size: 13px;
          font-weight: 500;
          color: #44352D;
        }

        .service-description {
          font-size: 11px;
          color: #9B887C;
          line-height: 1.4;
        }

        .service-price {
          flex-shrink: 0;
          color: #98745B;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .validation-field {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        /* BOUTON */

        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 54px;
          margin-top: 8px;
          padding: 14px 20px;
          border: none;
          border-radius: 30px;
          background: #684838;
          color: #FFFFFF;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: #513729;
          transform: translateY(-2px);
          box-shadow: 0 7px 18px rgba(104, 72, 56, 0.18);
        }

        .submit-button svg {
          transition: transform 0.3s ease;
        }

        .submit-button:hover svg {
          transform: translateX(4px);
        }

        .whatsapp-actions {
          padding: 16px;
          border-radius: 14px;
          background: #FAF7F5;
          border: 1px solid #EAE3DE;
          text-align: center;
        }

        .whatsapp-actions p {
          margin: 0 0 12px;
          font-size: 12px;
          color: #684838;
        }

        .whatsapp-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .whatsapp-link-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 20px;
          background: #25D366;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .whatsapp-link-btn:hover {
          opacity: 0.9;
        }

        /* PIED DE PAGE */

        .reservation-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
          color: #B08D75;
        }

        .reservation-footer span {
          font-size: 12px;
        }

        .reservation-footer p {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 13px;
          font-style: italic;
          margin: 0;
          color: #987D6C;
        }

        /* RESPONSIVE */

        @media (max-width: 600px) {
          .reservation-container {
            padding: 110px 14px 35px;
          }

          .reservation-card {
            padding: 28px 18px;
            border-radius: 19px;
          }

          .reservation-heading {
            margin-bottom: 28px;
          }

          .reservation-heading h1 {
            font-size: 25px;
          }

          .reservation-heading p {
            font-size: 12px;
          }

          .reservation-form {
            gap: 20px;
          }

          .service-dropdown {
            max-height: 300px;
          }

          .service-option {
            padding: 12px 8px;
          }

          .service-name {
            font-size: 12px;
          }

          .service-price {
            font-size: 10px;
          }

          .submit-button {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reservation-page *,
          .reservation-page *::before,
          .reservation-page *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}