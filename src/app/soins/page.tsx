"use client";

import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ReservationModal, { ServiceItem } from "../../components/ReservationModal";
import Link from "next/link";

interface ServiceCategory {
  id: string;
  title: string;
  items?: ServiceItem[];
  subsections?: {
    subtitle: string;
    items: ServiceItem[];
  }[];
}

const WHATSAPP_NUMBER = "221776913230";

const servicesData: ServiceCategory[] = [
  {
    id: "cire",
    title: "Épilations à la Cire Chaude",
    items: [
      { name: "Épilation aisselles", price: "5 000 FCFA" },
      { name: "Épilation maillot simple", price: "7 000 FCFA" },
      { name: "Épilation brésilien", price: "10 000 FCFA" },
      { name: "Épilation ventre", price: "5 000 FCFA" },
      { name: "Épilation bas du dos", price: "5 000 FCFA" },
      { name: "Épilation dos complet", price: "10 000 FCFA" },
    ],
  },
  {
    id: "laser",
    title: "Épilation Définitive au Laser",
    subsections: [
      {
        subtitle: "Soins Individuels",
        items: [
          { name: "Laser menton", price: "25 000 FCFA" },
          { name: "Laser joues", price: "20 000 FCFA" },
          { name: "Laser visage complet", price: "60 000 FCFA" },
          { name: "Laser aisselles", price: "25 000 FCFA" },
          { name: "Laser maillot simple", price: "40 000 FCFA" },
          { name: "Laser maillot brésilien", price: "55 000 FCFA" },
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
        subtitle: "Forfaits Laser",
        items: [
          { name: "Forfait 1 (Laser)", description: "Aisselles + Maillot intégral + Jambe complète", price: "195 000 FCFA" },
          { name: "Forfait 2 (Laser)", description: "Aisselles + Maillot simple + Demi-jambe", price: "120 000 FCFA" },
          { name: "Forfait 3 (Laser)", description: "Aisselles + Maillot brésilien + Demi-bras", price: "200 000 FCFA" },
          { name: "Forfait 4 (Laser)", description: "Aisselles + Maillot intégral + Demi-jambe + Bras entier", price: "200 000 FCFA" },
          { name: "Forfait 5 (Laser)", description: "Aisselles + Maillot intégral + Bras entier + Jambe entière", price: "230 000 FCFA" },
        ],
      },
    ],
  },
  {
    id: "hammam",
    title: "Hammam & Rituels",
    subsections: [
      {
        subtitle: "Formules Hammam",
        items: [
          { name: "Hammam classic + savonnage", price: "30 000 FCFA" },
          { name: "Hammam + enveloppement", price: "55 000 FCFA" },
          { name: "Hammam + massage (1h)", price: "60 000 FCFA" },
        ],
      },
      {
        subtitle: "Forfaits Hammam Solo",
        items: [
          { name: "Forfait 1 (Hammam Solo)", description: "Hammam + Enveloppement + Massage (1h)", price: "85 000 FCFA" },
          { name: "Forfait 2 (Hammam Solo)", description: "Hammam + Pédicure/Manucure + Soin du visage", price: "80 000 FCFA" },
          { name: "Forfait 3 (Hammam Solo)", description: "Gommage corps + Massage (1h) + Enveloppement", price: "70 000 FCFA" },
          { name: "Forfait 4 (Hammam Solo)", description: "Massage (30 min) + Pédicure/Manucure", price: "35 000 FCFA" },
          { name: "Forfait 5 (Hammam Solo)", description: "Hammam + Enveloppement + Soin du visage + Massage + Pédicure/Manucure", price: "130 000 FCFA" },
        ],
      },
    ],
  },
  {
    id: "hammam-duo",
    title: "Hammam en Duo",
    items: [
      { name: "Hammam + Enveloppement duo", price: "110 000 FCFA" },
      { name: "Hammam + Massage (1h) duo", price: "120 000 FCFA" },
      { name: "Hammam + Pédicure/Manucure + Massage (1h) duo", price: "160 000 FCFA" },
      { name: "Hammam + Enveloppement + Massage (1h) duo", price: "170 000 FCFA" },
      { name: "Gommage corps + Massage duo", price: "100 000 FCFA" },
      { name: "Hammam + Massage (1h) + Soin du visage + Enveloppement duo", price: "230 000 FCFA" },
      { name: "Gommage corps + Massage (1h) + Enveloppement + Soin du visage duo", price: "210 000 FCFA" },
    ],
  },
  {
    id: "soin-intime",
    title: "Soins Intimes",
    items: [
      { name: "Soin aisselles", price: "20 000 FCFA" },
      { name: "Soin aisselles + Épilation", price: "25 000 FCFA" },
    ],
  },
  {
    id: "regard",
    title: "Embellir le Regard",
    items: [
      { name: "Faux cils", price: "10 000 FCFA" },
      { name: "Extensions cils", price: "30 000 FCFA" },
      { name: "Volume russe", price: "50 000 FCFA" },
      { name: "Dépose cils", price: "10 000 FCFA" },
      { name: "Teinture cils", price: "8 000 FCFA" },
      { name: "Teinture sourcils", price: "8 000 FCFA" },
      { name: "Henna brown + Épilation", price: "20 000 FCFA" },
      { name: "Rehaussement cils", price: "35 000 FCFA" },
    ],
  },
  {
    id: "maquillage",
    title: "Tatouage Permanent & Maquillage",
    items: [
      { name: "Microblading", price: "100 000 FCFA" },
      { name: "Maquillage du jour", price: "35 000 FCFA" },
      { name: "Maquillage soirée", price: "40 000 FCFA" },
      { name: "Maquillage mariée", price: "120 000 FCFA" },
      { name: "Maquillage à domicile / hôtel", price: "170 000 FCFA" },
    ],
  },
];

function buildWhatsAppUrl(item: ServiceItem, categoryTitle: string): string {
  const details = item.description ? ` (${item.description})` : "";
  const message = `Bonjour Secret Beauty & Spa, je souhaite réserver le soin : ${item.name}${details} — Tarif : ${item.price} (${categoryTitle}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function SpaBeautyMenuPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  // États pour contrôler le modal global et le soin cliqué
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenModal = (item?: ServiceItem) => {
    setSelectedService(item ?? null);
    setIsModalOpen(true);
  };

  const filteredCategories = servicesData.filter(
    (cat) => activeTab === "all" || cat.id === activeTab
  );

  const renderServiceRows = (items: ServiceItem[], categoryTitle: string, keyPrefix: string) => (
    <div style={styles.itemList}>
      {items.map((item, idx) => (
        <div
          key={`${keyPrefix}-${idx}`}
          className="service-item-row"
          style={styles.itemRow}
        >
          <div style={styles.itemInfo}>
            <span style={styles.itemName}>{item.name}</span>
            {item.description && <span style={styles.itemDesc}>{item.description}</span>}
          </div>

          <div style={styles.itemRightGroup}>
            <span style={styles.itemPrice}>{item.price}</span>
            <a
              href={buildWhatsAppUrl(item, categoryTitle)}
              target="_blank"
              rel="noopener noreferrer"
              className="soin-wa-btn"
              style={styles.soinReserveBtn}
            >
              Réserver soin
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar  />

      <section style={styles.section}>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in-up-section { animation: fadeInUp 0.8s ease-out forwards; }
          .service-item-row { transition: background-color 0.2s ease, transform 0.2s ease; }
          .service-item-row:hover { background-color: rgba(74, 59, 50, 0.12) !important; transform: translateX(3px); }
          .soin-wa-btn { transition: background-color 0.25s ease, transform 0.2s ease; }
          .soin-wa-btn:hover { background-color: #d7beae !important; transform: scale(1.03); }
          .card-button { transition: background-color 0.3s ease; cursor: pointer; }
          .card-button:hover { background-color: #d7beae !important; }
          .tab-button { transition: all 0.3s ease; }
          .tab-button:hover { background-color: #ead5ca; color: #4A3B32; }

          .services-grid-pricing { align-items: stretch; }
          .service-card { min-width: 0; height: 560px; display: flex; flex-direction: column; }
          .service-card-content {
            flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden;
            scrollbar-width: thin; scrollbar-color: #b59887 #ead5ca;
          }
          .service-card-content::-webkit-scrollbar { width: 6px; }
          .service-card-content::-webkit-scrollbar-thumb { background: #b59887; border-radius: 10px; }
          .service-card-footer { flex-shrink: 0; padding: 0 18px 18px; background-color: #ead5ca; }

          @media (max-width: 1024px) {
            .services-grid-pricing { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 640px) {
            .services-grid-pricing { grid-template-columns: minmax(0, 1fr) !important; }
            .service-card { height: 480px; }
          }
        `}</style>

        <div className="fade-in-up-section">
          {/* En-tête */}
          <div style={styles.headerContainer}>
            <div style={styles.dividerWrapper}>
              <span style={styles.dividerLine} />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#795548" style={{ margin: "0 10px" }} aria-hidden="true">
                <path d="M12 2C12 2 7 8 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 8 12 2 12 2ZM12 22C12 22 17 16 17 12" />
              </svg>
              <span style={styles.dividerLine} />
            </div>

            <h2 style={styles.mainTitle}>Secret Beauty & Spa</h2>
            <p style={styles.subHeaderText}>
              Consultez l&apos;ensemble de nos tarifs et offrez-vous une parenthèse de bien-être sur-mesure.
            </p>

            <div style={{ marginTop: "20px" }}>
              <button
                type="button"
                onClick={() => handleOpenModal()}
                style={styles.globalBookingBtn}
              >
                Faire une réservation personnalisée
              </button>
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div style={styles.filterContainer}>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className="tab-button"
              style={{
                ...styles.tabButton,
                ...(activeTab === "all" ? styles.tabButtonActive : styles.tabButtonInactive),
              }}
            >
              Tous les soins
            </button>

            {servicesData.map((cat) => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="tab-button"
                style={{
                  ...styles.tabButton,
                  ...(activeTab === cat.id ? styles.tabButtonActive : styles.tabButtonInactive),
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Grille des cartes */}
          <div className="services-grid-pricing" style={styles.grid}>
            {filteredCategories.map((category) => (
              <div key={category.id} className="service-card" style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardCategoryTitle}>{category.title}</h3>
                </div>

                <div className="service-card-content" style={styles.cardContent}>
                  {category.items &&
                    renderServiceRows(category.items, category.title, `${category.id}-item`)}

                  {category.subsections && (
                    <div style={styles.subsectionsWrapper}>
                      {category.subsections.map((sub, sIdx) => (
                        <div key={`${category.id}-sub-${sIdx}`} style={styles.subsectionBlock}>
                          <h4 style={styles.subTitle}>{sub.subtitle}</h4>
                          {renderServiceRows(
                            sub.items,
                            category.title,
                            `${category.id}-${sIdx}-item`
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="service-card-footer">
                  <div style={styles.buttonWrapper}>
                    <Link
                      href={`/reservation?categorie=${encodeURIComponent(category.id)}`}
                      className="card-button"
                      style={styles.cardButton}
                    >
                      RÉSERVER SOIN
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSelectedService={selectedService}
      />
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "60px 15px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontFamily: "'Playfair Display', Georgia, serif",
    color: "#4A3B32",
    maxWidth: "1250px",
    margin: "0 auto",
    boxSizing: "border-box",
    width: "100%",
  },
  headerContainer: { maxWidth: "700px", margin: "0 auto 30px auto" },
  dividerWrapper: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "15px" },
  dividerLine: { width: "35px", height: "1px", backgroundColor: "#A89284" },
  mainTitle: { fontSize: "30px", fontWeight: "600", lineHeight: "1.25", color: "#5B4A3E", margin: "0 0 8px 0" },
  subHeaderText: { fontSize: "14px", lineHeight: "1.7", color: "#6D5A4D", fontFamily: "sans-serif", margin: 0 },
  globalBookingBtn: {
    backgroundColor: "#ead5ca",
    color: "#4A3B32",
    border: "1px solid #d2b6a6",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  filterContainer: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", marginBottom: "35px" },
  tabButton: {
    padding: "8px 14px",
    fontSize: "11px",
    letterSpacing: "0.5px",
    borderRadius: "18px",
    cursor: "pointer",
    fontFamily: "sans-serif",
    border: "1px solid #C8B5A6",
  },
  tabButtonActive: { backgroundColor: "#ead5ca", color: "#4A3B32", borderColor: "#d2b6a6", fontWeight: "600" },
  tabButtonInactive: { backgroundColor: "#ffffff", color: "#4A3B32" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px", marginBottom: "30px", textAlign: "left", width: "100%" },
  card: { display: "flex", flexDirection: "column", borderRadius: "4px", overflow: "hidden", boxShadow: "0 6px 15px rgba(0,0,0,0.06)", backgroundColor: "#ead5ca", border: "1px solid #dec3b4" },
  cardHeader: { flexShrink: 0, padding: "16px 18px 12px", borderBottom: "1px solid rgba(74, 59, 50, 0.14)", backgroundColor: "#ead5ca" },
  cardCategoryTitle: { fontSize: "18px", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: "600", margin: 0, color: "#4A3B32" },
  cardContent: { padding: "15px 18px", color: "#4A3B32", display: "flex", flexDirection: "column", gap: "15px", boxSizing: "border-box" },
  subsectionsWrapper: { display: "flex", flexDirection: "column", gap: "18px" },
  subsectionBlock: { display: "flex", flexDirection: "column", gap: "8px" },
  subTitle: { fontSize: "12px", letterSpacing: "0.8px", textTransform: "uppercase", color: "#5C473B", margin: "3px 0 0 0", borderBottom: "1px dashed rgba(74, 59, 50, 0.25)", paddingBottom: "6px" },
  itemList: { display: "flex", flexDirection: "column", gap: "8px", minWidth: 0 },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "9px 10px",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.45)",
  },
  itemInfo: { display: "flex", flexDirection: "column", gap: "3px", flex: "1 1 auto", minWidth: 0 },
  itemName: { fontSize: "13px", color: "#3E3028", fontWeight: "500", fontFamily: "sans-serif" },
  itemDesc: { fontSize: "11px", color: "#685347", fontFamily: "sans-serif" },
  itemRightGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "5px",
    flexShrink: 0,
  },
  itemPrice: { fontSize: "12px", fontWeight: "bold", color: "#3E3028", fontFamily: "sans-serif", whiteSpace: "nowrap" },
  soinReserveBtn: {
    backgroundColor: "#ead5ca",
    color: "#4A3B32",
    padding: "4px 9px",
    fontSize: "10px",
    fontWeight: 700,
    fontFamily: "sans-serif",
    borderRadius: "10px",
    border: "1px solid #c5a694",
    textDecoration: "none",
    whiteSpace: "nowrap",
    display: "inline-block",
  },
  buttonWrapper: { display: "flex", justifyContent: "flex-end", paddingTop: "12px", borderTop: "1px solid rgba(74, 59, 50, 0.14)" },
  cardButton: { backgroundColor: "#ead5ca", color: "#4A3B32", padding: "9px 18px", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", borderRadius: "15px", border: "1px solid #c5a694" },
};