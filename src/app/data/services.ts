
export const WHATSAPP_NUMBER = "221776913230"; // Remplace par le numéro WhatsApp

export type Service = {
  name: string;
  price: string;
  description?: string;
};

export type ServiceGroup = {
  title: string;
  services: Service[];
};

export const hammamGroups: ServiceGroup[] = [
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
      { name: "Hammam Forfait Solo 1", price: "85 000 FCFA", description: "Hammam + enveloppement + massage 1h" },
      { name: "Hammam Forfait Solo 2", price: "80 000 FCFA", description: "Hammam + pédicure/manucure + soin du visage" },
      { name: "Hammam Forfait Solo 3", price: "70 000 FCFA", description: "Gommage corps + massage 1h + enveloppement" },
      { name: "Hammam Forfait Solo 4", price: "35 000 FCFA", description: "Massage 30 min + pédicure/manucure" },
      { name: "Hammam Forfait Solo 5", price: "130 000 FCFA", description: "Hammam + enveloppement + soin du visage + massage + pédicure/manucure" },
    ],
  },
  {
    title: "Hammam Duo",
    services: [
      { name: "Hammam + enveloppement Duo", price: "110 000 FCFA" },
      { name: "Hammam + massage 1h Duo", price: "120 000 FCFA" },
      { name: "Hammam + pédicure/manucure + massage 1h Duo", price: "160 000 FCFA" },
      { name: "Hammam + enveloppement + massage 1h Duo", price: "170 000 FCFA" },
      { name: "Gommage corps + massage Duo", price: "100 000 FCFA" },
      { name: "Hammam + massage 1h + soin du visage + enveloppement Duo", price: "230 000 FCFA" },
      { name: "Gommage corps + massage 1h + enveloppement + soin du visage Duo", price: "210 000 FCFA" },
    ],
  },
];

export const epilationGroups: ServiceGroup[] = [
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
      { name: "Laser Forfait 1", price: "195 000 FCFA", description: "Aisselles + maillot intégral + jambe complète" },
      { name: "Laser Forfait 2", price: "120 000 FCFA", description: "Aisselles + maillot simple + demi-jambe" },
      { name: "Laser Forfait 3", price: "200 000 FCFA", description: "Aisselles + maillot Brésilien + demi-bras" },
      { name: "Laser Forfait 4", price: "200 000 FCFA", description: "Aisselles + maillot intégral + demi-jambe + bras entier" },
      { name: "Laser Forfait 5", price: "230 000 FCFA", description: "Aisselles + maillot intégral + bras entier + jambe entière" },
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

export const regardGroups: ServiceGroup[] = [
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
];
