"use client";

import React, { useState, useEffect } from "react";

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export const allAvailableServices: ServiceItem[] = [
  // --- ÉPILATION À LA CIRE CHAUDE ---
  { name: "Épilation aisselles", price: "5 000 FCFA" },
  { name: "Épilation maillot simple", price: "7 000 FCFA" },
  { name: "Épilation Brésilien", price: "10 000 FCFA" },
  { name: "Épilation ventre", price: "5 000 FCFA" },
  { name: "Épilation bas du dos", price: "5 000 FCFA" },
  { name: "Épilation dos complet", price: "10 000 FCFA" },

  // --- ÉPILATION DÉFINITIVE AU LASER ---
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

  // --- FORFAITS LASER ---
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

  // --- TATOUAGE PERMANENT & MAQUILLAGE ---
  { name: "Microblading", price: "100 000 FCFA" },
  { name: "Maquillage du jour", price: "35 000 FCFA" },
  { name: "Maquillage soirée", price: "40 000 FCFA" },
  { name: "Maquillage Mariée", price: "120 000 FCFA" },
  { name: "Maquillage à domicile / hôtel", price: "170 000 FCFA" },

  // --- EMBELLIR LE REGARD ---
  { name: "Faux cils", price: "10 000 FCFA" },
  { name: "Extensions cils", price: "30 000 FCFA" },
  { name: "Volume russe", price: "50 000 FCFA" },
  { name: "Dépose cils", price: "10 000 FCFA" },
  { name: "Teinture cils", price: "8 000 FCFA" },
  { name: "Teinture sourcils", price: "8 000 FCFA" },
  { name: "Henné brow + épilation", price: "20 000 FCFA" },
  { name: "Rehaussement cils", price: "35 000 FCFA" },

  // --- HAMMAM SOLO ---
  { name: "Hammam classic + savonnage", price: "30 000 FCFA" },
  { name: "Hammam + enveloppement", price: "55 000 FCFA" },
  { name: "Hammam + massage 1h", price: "60 000 FCFA" },

  // --- FORFAITS HAMMAM SOLO ---
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
    description: "Hammam + enveloppement + soin du visage + massage + pédicure/manucure",
  },

  // --- HAMMAM DUO ---
  { name: "Hammam + enveloppement Duo", price: "110 000 FCFA" },
  { name: "Hammam + massage 1h Duo", price: "120 000 FCFA" },
  { name: "Hammam + pédicure/manucure + massage 1h Duo", price: "160 000 FCFA" },
  { name: "Hammam + enveloppement + massage 1h Duo", price: "170 000 FCFA" },
  { name: "Gommage corps + massage Duo", price: "100 000 FCFA" },
  { name: "Hammam + massage 1h + soin du visage + enveloppement Duo", price: "230 000 FCFA" },
  { name: "Gommage corps + massage 1h + enveloppement + soin du visage Duo", price: "210 000 FCFA" },

  // --- SOIN INTIME ---
  { name: "Soin aisselles", price: "20 000 FCFA" },
  { name: "Soin aisselles + épilation", price: "25 000 FCFA" },
];

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedService?: ServiceItem | null;
}

export default function ReservationModal({
  isOpen,
  onClose,
  initialSelectedService,
}: ReservationModalProps) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);

  const MERCHANT_WHATSAPP_PHONE = "221776913230";
  const WAVE_MERCHANT_PHONE = "221786346377";

  useEffect(() => {
    if (isOpen) {
      setClientName("");
      setClientEmail("");
      setClientPhone("");
      setSelectedServices(
        initialSelectedService ? [initialSelectedService] : []
      );
    }
  }, [isOpen, initialSelectedService]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatPrice = (price: string) =>
    parseInt(price.replace(/[^0-9]/g, ""), 10) || 0;

  const calculateTotal = () =>
    selectedServices.reduce(
      (total, service) => total + formatPrice(service.price),
      0
    );

  const addServiceToSelection = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const serviceName = e.target.value;
    if (!serviceName) return;

    const found = allAvailableServices.find(
      (service) => service.name === serviceName
    );

    if (
      found &&
      !selectedServices.some((service) => service.name === found.name)
    ) {
      setSelectedServices((previous) => [...previous, found]);
    }

    e.target.value = "";
  };

  const removeService = (name: string) => {
    setSelectedServices((previous) =>
      previous.filter((service) => service.name !== name)
    );
  };

  const handleWhatsAppReservation = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!clientName.trim() || !clientPhone.trim()) {
      alert("Veuillez renseigner votre nom et votre numéro de téléphone.");
      return;
    }

    if (selectedServices.length === 0) {
      alert("Veuillez sélectionner au moins un soin.");
      return;
    }

    const emailInfo = clientEmail.trim()
      ? `\n📧 Email : ${clientEmail.trim()}`
      : "";

    const message = [
      "✨ *SECRET BEAUTY & SPA*",
      "",
      "Bonjour, je souhaite effectuer une réservation.",
      "",
      "👤 *MES INFORMATIONS*",
      `Nom : ${clientName.trim()}`,
      `Téléphone : ${clientPhone.trim()}${emailInfo}`,
      "",
      "💆 *MES SOINS*",
      ...selectedServices.map(
        (service, index) =>
          `${index + 1}. ${service.name} — ${formatPrice(
            service.price
          ).toLocaleString("fr-FR")} FCFA`
      ),
      "",
      `💰 *TOTAL ESTIMÉ : ${calculateTotal().toLocaleString(
        "fr-FR"
      )} FCFA*`,
      "",
      "Merci de me confirmer la disponibilité pour ma réservation.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${MERCHANT_WHATSAPP_PHONE}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleWavePayment = () => {
    if (!clientName.trim() || !clientPhone.trim()) {
      alert("Veuillez d'abord renseigner votre nom et votre numéro de téléphone.");
      return;
    }

    if (selectedServices.length === 0) {
      alert("Veuillez sélectionner au moins un soin avant de régler par Wave.");
      return;
    }

    const total = calculateTotal();
    const waveUrl = `https://wave.com/send?phone=${WAVE_MERCHANT_PHONE}&amount=${total}`;

    window.open(waveUrl, "_blank", "noopener,noreferrer");
  };

  const availableServices = allAvailableServices.filter(
    (service) =>
      !selectedServices.some((selected) => selected.name === service.name)
  );

  return (
    <div
      style={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
      >
        {/* En-tête */}
        <div style={styles.header}>
          <div style={styles.headerDecoration} />

          <button
            type="button"
            onClick={onClose}
            style={styles.closeButton}
            aria-label="Fermer la fenêtre"
          >
            ✕
          </button>

          <div style={styles.brandMark}>
            <span style={styles.brandIcon}>✧</span>
          </div>

          <p style={styles.eyebrow}>VOTRE INSTANT BIEN-ÊTRE</p>

          <h2 id="reservation-title" style={styles.title}>
            Réservez votre
            <br />
            <span style={styles.titleItalic}>moment de beauté</span>
          </h2>

          <p style={styles.headerDescription}>
            Prenez soin de vous. Nous nous occupons du reste.
          </p>

          <div style={styles.headerLine}>
            <span />
            <span style={styles.headerDiamond}>◆</span>
            <span />
          </div>
        </div>

        <form onSubmit={handleWhatsAppReservation} style={styles.form}>
          {/* Informations client */}
          <section style={styles.section}>
            <div style={styles.sectionHeading}>
              <span style={styles.stepNumber}>01</span>
              <div>
                <h3 style={styles.sectionTitle}>Vos coordonnées</h3>
                <p style={styles.sectionSubtitle}>
                  Pour mieux préparer votre accueil
                </p>
              </div>
            </div>

            <div style={styles.fieldsGrid}>
              <div style={styles.field}>
                <label htmlFor="client-name" style={styles.label}>
                  Nom complet <span style={styles.required}>*</span>
                </label>

                <div style={styles.inputWrapper}>
                  <span style={styles.fieldIcon}>♙</span>
                  <input
                    id="client-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex. : Fatou Diop"
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.field}>
                <label htmlFor="client-phone" style={styles.label}>
                  Téléphone / WhatsApp{" "}
                  <span style={styles.required}>*</span>
                </label>

                <div style={styles.inputWrapper}>
                  <span style={styles.fieldIcon}>☎</span>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+221 77 000 00 00"
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.field}>
                <label htmlFor="client-email" style={styles.label}>
                  Adresse e-mail{" "}
                  <span style={styles.optional}>(facultatif)</span>
                </label>

                <div style={styles.inputWrapper}>
                  <span style={styles.fieldIcon}>✉</span>
                  <input
                    id="client-email"
                    type="email"
                    autoComplete="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
          </section>

          <div style={styles.separator} />

          {/* Choix des soins */}
          <section style={styles.section}>
            <div style={styles.sectionHeading}>
              <span style={styles.stepNumber}>02</span>
              <div>
                <h3 style={styles.sectionTitle}>Votre rituel beauté</h3>
                <p style={styles.sectionSubtitle}>
                  Composez votre expérience personnalisée
                </p>
              </div>
            </div>

            <div style={styles.field}>
              <label htmlFor="service-select" style={styles.label}>
                Choisir une prestation
              </label>

              <div style={styles.selectWrapper}>
                <select
                  id="service-select"
                  onChange={addServiceToSelection}
                  defaultValue=""
                  style={styles.select}
                >
                  <option value="" disabled>
                    Sélectionnez un soin à ajouter...
                  </option>

                  {availableServices.map((service) => (
                    <option key={service.name} value={service.name}>
                      {service.name} — {service.price}
                    </option>
                  ))}
                </select>
                <span style={styles.selectArrow}>⌄</span>
              </div>
            </div>

            {selectedServices.length === 0 ? (
              <div style={styles.emptyState}>
                <span style={styles.emptyIcon}>✧</span>
                <p style={styles.emptyTitle}>Votre sélection commence ici</p>
                <p style={styles.emptyText}>
                  Choisissez vos soins dans la liste ci-dessus pour découvrir
                  votre rituel personnalisé.
                </p>
              </div>
            ) : (
              <div style={styles.serviceList}>
                <div style={styles.selectionHeader}>
                  <span style={styles.selectionLabel}>
                    VOTRE SÉLECTION
                  </span>
                  <span style={styles.serviceCount}>
                    {selectedServices.length} soin
                    {selectedServices.length > 1 ? "s" : ""}
                  </span>
                </div>

                {selectedServices.map((service) => (
                  <div key={service.name} style={styles.serviceCard}>
                    <div style={styles.serviceIcon}>✧</div>

                    <div style={styles.serviceInfo}>
                      <p style={styles.serviceName}>{service.name}</p>
                      {service.description && (
                        <p style={styles.serviceDescription}>
                          {service.description}
                        </p>
                      )}
                      <p style={styles.servicePrice}>
                        {formatPrice(service.price).toLocaleString(
                          "fr-FR"
                        )}{" "}
                        FCFA
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeService(service.name)}
                      style={styles.removeButton}
                      aria-label={`Retirer ${service.name}`}
                      title="Retirer ce soin"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Total */}
          <div style={styles.totalCard}>
            <div style={styles.totalTop}>
              <div>
                <p style={styles.totalLabel}>VOTRE EXPÉRIENCE</p>
                <p style={styles.totalSubtitle}>
                  {selectedServices.length} prestation
                  {selectedServices.length > 1 ? "s" : ""} sélectionnée
                  {selectedServices.length > 1 ? "s" : ""}
                </p>
              </div>

              <span style={styles.totalSparkle}>✧</span>
            </div>

            <div style={styles.totalDivider} />

            <div style={styles.totalBottom}>
              <span style={styles.totalText}>Total estimé</span>
              <div style={styles.totalAmountWrapper}>
                <strong style={styles.totalAmount}>
                  {calculateTotal().toLocaleString("fr-FR")}
                </strong>
                <span style={styles.currency}>FCFA</span>
              </div>
            </div>

            <p style={styles.totalNote}>
              Le montant définitif sera confirmé par notre équipe.
            </p>
          </div>

          {/* Boutons d'action */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* Bouton de réservation WhatsApp */}
            <button type="submit" style={styles.whatsappButton}>
              <span style={styles.whatsappIcon}>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.5-4.7A8.5 8.5 0 1 1 20.5 11.7Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.3 8.1c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.1.4 0 .6.5.8 1.2 1.5 2.1 2 .2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.7.5-1.1-.2-2.3-.8-3.5-1.8-1.4-1.2-2.3-2.7-2.5-3.7-.2-.8.1-1.5.6-1.9Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span style={styles.buttonText}>
                <strong style={styles.buttonTitle}>
                  Réserver sur WhatsApp
                </strong>
                <span style={styles.buttonSubtitle}>
                  Échangez avec notre équipe
                </span>
              </span>

              <span style={styles.buttonArrow}>↗</span>
            </button>

            {/* Bouton Payer avec Wave */}
            <button
              type="button"
              onClick={handleWavePayment}
              style={styles.waveButton}
            >
              <span style={styles.waveIcon}>🌊</span>

              <span style={styles.buttonText}>
                <strong style={styles.buttonTitle}>
                  Payer avec Wave
                </strong>
                <span style={styles.buttonSubtitle}>
                  Règlement direct (78 634 63 77)
                </span>
              </span>

              <span style={styles.buttonArrow}>↗</span>
            </button>
          </div>

          <div style={styles.trustNote}>
            <span style={styles.trustIcon}>♡</span>
            <p>
              Une question ? Notre équipe est à votre écoute pour vous
              accompagner.
            </p>
          </div>

          <p style={styles.footerBrand}>
            SECRET BEAUTY & SPA · VOTRE BEAUTÉ, NOTRE PASSION
          </p>
        </form>
      </div>

      <style>{`
        @keyframes reservationFadeIn {
          from { opacity: 0; transform: translateY(18px) scale(.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes reservationShine {
          0%, 100% { opacity: .55; }
          50% { opacity: 1; }
        }

        .reservation-whatsapp-hover:hover {
          filter: brightness(1.05);
        }

        @media (max-width: 520px) {
          .reservation-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    background: "rgba(37, 27, 23, 0.72)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    overflowY: "auto",
  },

  modal: {
    background: "#FFFCF9",
    width: "100%",
    maxWidth: "580px",
    maxHeight: "94vh",
    overflowY: "auto",
    borderRadius: "18px",
    boxShadow: "0 28px 90px rgba(25, 16, 12, 0.3)",
    animation: "reservationFadeIn .35s ease-out",
    scrollbarWidth: "thin",
    scrollbarColor: "#D8C2B2 transparent",
    color: "#45352D",
  },

  header: {
    position: "relative",
    overflow: "hidden",
    padding: "35px 28px 27px",
    textAlign: "center",
    background: "linear-gradient(145deg, #F5E8DC 0%, #FDF7F0 55%, #EBD7C5 100%)",
  },

  headerDecoration: {
    position: "absolute",
    width: "230px",
    height: "230px",
    border: "1px solid rgba(153, 111, 83, .13)",
    borderRadius: "50%",
    top: "-145px",
    left: "-90px",
    pointerEvents: "none",
  },

  closeButton: {
    position: "absolute",
    top: "14px",
    right: "15px",
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(104, 72, 56, .15)",
    borderRadius: "50%",
    background: "rgba(255,255,255,.55)",
    color: "#684838",
    fontSize: "16px",
    cursor: "pointer",
  },

  brandMark: {
    width: "43px",
    height: "43px",
    margin: "0 auto 13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #B58A68",
    borderRadius: "50%",
    color: "#916746",
  },

  brandIcon: {
    fontSize: "27px",
  },

  eyebrow: {
    margin: "0 0 12px",
    fontSize: "10px",
    letterSpacing: "3px",
    fontWeight: 700,
    color: "#96745D",
  },

  title: {
    margin: 0,
    fontSize: "clamp(27px, 5vw, 35px)",
    lineHeight: 1.25,
    letterSpacing: "-.7px",
    color: "#51392C",
    fontWeight: 500,
    fontFamily: "Georgia, 'Times New Roman', serif",
  },

  titleItalic: {
    fontStyle: "italic",
    color: "#9A7456",
  },

  headerDescription: {
    margin: "12px 0 0",
    fontSize: "12px",
    lineHeight: 1.6,
    color: "#806A5B",
  },

  headerLine: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    marginTop: "20px",
  },

  headerDiamond: {
    color: "#B18A68",
    fontSize: "8px",
  },

  form: {
    padding: "27px 28px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "17px",
  },

  sectionHeading: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  stepNumber: {
    flexShrink: 0,
    width: "39px",
    height: "39px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "#F1E5DA",
    border: "1px solid #E6D3C2",
    color: "#997558",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "1px",
  },

  sectionTitle: {
    margin: 0,
    fontSize: "17px",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 600,
    color: "#51392C",
  },

  sectionSubtitle: {
    margin: "4px 0 0",
    fontSize: "11px",
    color: "#9A8980",
  },

  fieldsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    minWidth: 0,
  },

  label: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: ".25px",
    color: "#6C5141",
  },

  required: {
    color: "#B16B50",
  },

  optional: {
    fontWeight: 400,
    color: "#A99A90",
  },

  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "0 13px",
    minHeight: "47px",
    background: "#FFFFFF",
    border: "1px solid #E9DED5",
    borderRadius: "9px",
    boxSizing: "border-box",
    transition: "border-color .2s",
  },

  fieldIcon: {
    flexShrink: 0,
    color: "#B08B6E",
    fontSize: "16px",
    width: "18px",
    textAlign: "center",
  },

  input: {
    flex: 1,
    width: "100%",
    minWidth: 0,
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#49372D",
    fontSize: "13px",
    padding: "13px 0",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  separator: {
    height: "1px",
    background: "linear-gradient(90deg, transparent, #E8D8CB, transparent)",
  },

  selectWrapper: {
    position: "relative",
  },

  select: {
    appearance: "none",
    WebkitAppearance: "none",
    width: "100%",
    minHeight: "48px",
    padding: "12px 40px 12px 14px",
    border: "1px solid #E5D6CA",
    borderRadius: "9px",
    background: "#FFFFFF",
    color: "#634A3A",
    fontSize: "12px",
    outline: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },

  selectArrow: {
    position: "absolute",
    right: "15px",
    top: "50%",
    transform: "translateY(-55%)",
    color: "#A68161",
    fontSize: "20px",
    pointerEvents: "none",
  },

  emptyState: {
    textAlign: "center",
    padding: "23px 17px",
    border: "1px dashed #DCC9B9",
    borderRadius: "11px",
    background: "#FBF7F2",
  },

  emptyIcon: {
    display: "block",
    fontSize: "25px",
    color: "#B28C6C",
    marginBottom: "7px",
  },

  emptyTitle: {
    margin: "0 0 6px",
    color: "#70513D",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: "15px",
  },

  emptyText: {
    margin: 0,
    color: "#A09186",
    fontSize: "11px",
    lineHeight: 1.7,
  },

  serviceList: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
  },

  selectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2px",
  },

  selectionLabel: {
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "1.5px",
    color: "#A18A78",
  },

  serviceCount: {
    padding: "4px 9px",
    borderRadius: "20px",
    background: "#F2E5DA",
    color: "#8A654A",
    fontSize: "10px",
    fontWeight: 600,
  },

  serviceCard: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    padding: "12px",
    border: "1px solid #EDE1D7",
    borderRadius: "10px",
    background: "#FFFFFF",
  },

  serviceIcon: {
    width: "34px",
    height: "34px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9px",
    background: "#F5EADF",
    color: "#A47C5B",
    fontSize: "20px",
  },

  serviceInfo: {
    flex: 1,
    minWidth: 0,
  },

  serviceName: {
    margin: 0,
    fontSize: "12px",
    lineHeight: 1.5,
    fontWeight: 600,
    color: "#5D4434",
  },

  serviceDescription: {
    margin: "3px 0",
    fontSize: "10px",
    lineHeight: 1.5,
    color: "#968276",
  },

  servicePrice: {
    margin: "4px 0 0",
    color: "#A07958",
    fontSize: "12px",
    fontWeight: 700,
  },

  removeButton: {
    width: "29px",
    height: "29px",
    flexShrink: 0,
    border: "1px solid #F0E1D8",
    borderRadius: "50%",
    background: "#FBF4EF",
    color: "#A16F57",
    fontSize: "20px",
    lineHeight: 1,
    cursor: "pointer",
  },

  totalCard: {
    padding: "19px",
    borderRadius: "12px",
    border: "1px solid #E5D1BE",
    background: "linear-gradient(135deg, #F8EDE2 0%, #FDF8F2 100%)",
  },

  totalTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    margin: 0,
    color: "#99775C",
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "1.6px",
  },

  totalSubtitle: {
    margin: "6px 0 0",
    color: "#9D8A7B",
    fontSize: "11px",
  },

  totalSparkle: {
    fontSize: "27px",
    color: "#B28B68",
  },

  totalDivider: {
    height: "1px",
    background: "#E8D8C8",
    margin: "16px 0",
  },

  totalBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },

  totalText: {
    fontSize: "13px",
    color: "#735947",
    fontWeight: 600,
  },

  totalAmountWrapper: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-end",
    gap: "5px",
    flexWrap: "wrap",
  },

  totalAmount: {
    color: "#644431",
    fontSize: "clamp(22px, 5vw, 29px)",
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 700,
    letterSpacing: "-.5px",
  },

  currency: {
    color: "#9A765A",
    fontSize: "10px",
    fontWeight: 700,
  },

  totalNote: {
    margin: "11px 0 0",
    color: "#9C897A",
    fontSize: "10px",
    lineHeight: 1.6,
  },

  whatsappButton: {
    width: "100%",
    minHeight: "55px",
    padding: "11px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #785541, #533B2E)",
    color: "#FFFFFF",
    cursor: "pointer",
    boxShadow: "0 7px 18px rgba(88, 59, 42, .2)",
    transition: "transform .2s, box-shadow .2s",
    fontFamily: "inherit",
  },

  waveButton: {
    width: "100%",
    minHeight: "55px",
    padding: "11px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #1DC8F3, #0083B0)",
    color: "#FFFFFF",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(29, 200, 243, 0.3)",
    transition: "transform .2s, box-shadow .2s",
    fontFamily: "inherit",
  },

  waveIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "20px",
  },

  whatsappIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  buttonText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
  },

  buttonTitle: {
    fontSize: "13px",
    letterSpacing: ".2px",
  },

  buttonSubtitle: {
    fontSize: "10px",
    color: "#E4D3C6",
  },

  buttonArrow: {
    marginLeft: "auto",
    fontSize: "19px",
    color: "#E8D3BE",
  },

  trustNote: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textAlign: "center",
  },

  trustIcon: {
    flexShrink: 0,
    color: "#B18A69",
    fontSize: "18px",
  },

  trustNoteText: {
    margin: 0,
  },

  footerBrand: {
    margin: "0",
    paddingTop: "15px",
    borderTop: "1px solid #EFE5DC",
    textAlign: "center",
    color: "#B09A89",
    fontSize: "8px",
    letterSpacing: "1.5px",
    lineHeight: 1.8,
  },
};