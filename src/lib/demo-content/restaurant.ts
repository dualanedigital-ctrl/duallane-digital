import { UtensilsCrossed } from "lucide-react";
import { restaurant as img } from "./images";
import type { DemoLocale } from "@/lib/demo-i18n/LanguageContext";

export const restaurantShared = {
  icon: UtensilsCrossed,
  theme: { accent: "#dc2626", accent2: "#b45309" },
  phone: "(514) 555-0187",
  email: "reservations@restaurant-demo.com",
  address: "88 Rue Saint-Paul E, Montreal, QC H2Y 1G4",
};

export const restaurantContent: Record<DemoLocale, ReturnType<typeof buildFr> | ReturnType<typeof buildEn>> = {
  fr: buildFr(),
  en: buildEn(),
};

function buildFr() {
  return {
    businessName: "Restaurant",
    tagline: "Cuisine bistro française moderne au cœur du Vieux-Montréal, depuis 2015.",
    ctaLabel: "Réserver une table",
    navLinks: [
      { label: "Réservations", href: "#reservations" },
      { label: "Menu", href: "#menu" },
      { label: "Chef", href: "#chef" },
      { label: "Galerie", href: "#gallery" },
      { label: "Avis", href: "#reviews" },
      { label: "Événements", href: "#events" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Vieux-Montréal, depuis 2015",
      title: "Cuisine française moderne, atmosphère intemporelle",
      subtitle: "Menus dégustation saisonniers, carte des vins primée et une salle à manger pensée pour des soirées mémorables.",
      imageId: img.heroWide,
      primaryCta: { label: "Réserver une table", href: "#reservations" },
      secondaryCta: { label: "Voir le menu", href: "#menu" },
    },
    reservationFields: [
      { type: "text" as const, name: "name", label: "Nom complet", placeholder: "Votre nom", required: true, span: 1 as const },
      { type: "tel" as const, name: "phone", label: "Téléphone", placeholder: "(514) 000-0000", required: true, span: 1 as const },
      { type: "date" as const, name: "date", label: "Date", required: true, span: 1 as const },
      { type: "time" as const, name: "time", label: "Heure", required: true, span: 1 as const },
      { type: "select" as const, name: "partySize", label: "Nombre de convives", options: ["2 personnes", "3 personnes", "4 personnes", "5 personnes", "6 personnes et plus"], span: 2 as const },
    ],
    menu: [
      {
        name: "Entrées",
        items: [
          { name: "Soupe à l'oignon gratinée", description: "Croûton au gruyère, bouillon d'oignons caramélisés", price: "14 $" },
          { name: "Pétoncles poêlés", description: "Purée de chou-fleur, beurre noisette, câpres", price: "19 $" },
          { name: "Tartare de bœuf", description: "Dijon, cornichon, œuf de caille, brioche toastée", price: "18 $" },
        ],
      },
      {
        name: "Plats principaux",
        items: [
          { name: "Confit de canard", description: "Lentilles, légumes racines rôtis, jus au vin rouge", price: "34 $" },
          { name: "Steak frites", description: "Faux-filet 8oz, beurre café de Paris, pommes frites", price: "38 $" },
          { name: "Saumon poêlé", description: "Beurre blanc, asperges, pommes grenaille", price: "32 $" },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Crème brûlée", description: "Vanille de Madagascar", price: "12 $" },
          { name: "Fondant au chocolat", description: "Cœur coulant, glace à la vanille", price: "13 $" },
        ],
      },
      {
        name: "Vins et bar",
        items: [
          { name: "Rouge du sommelier", description: "Sélection rotative, au verre", price: "14 $" },
          { name: "Blanc du sommelier", description: "Sélection rotative, au verre", price: "13 $" },
          { name: "Cocktails classiques", description: "Demandez la carte du jour à votre serveur", price: "16 $" },
        ],
      },
    ],
    chef: {
      eyebrow: "Rencontrez le chef",
      name: "Chef Jean-Marc Lavoie",
      paragraphs: [
        "Formé à Lyon et fort de plus de 18 ans dans des cuisines étoilées en France et au Québec, le chef Jean-Marc propose une approche raffinée et sans prétention de la cuisine française moderne.",
        "Chaque menu est élaboré à partir des produits les plus frais du marché chaque matin — une philosophie qui a fidélisé notre clientèle depuis l'ouverture en 2015.",
      ],
      stats: [
        { value: "18+", label: "Années d'expérience" },
        { value: "3", label: "Cuisines étoilées" },
        { value: "2015", label: "Fondé à Montréal" },
      ],
    },
    galleryEyebrow: "Nourriture et ambiance",
    galleryTitle: "Un avant-goût de notre restaurant",
    gallery: [
      { imageId: img.dishSteak, category: "Plats principaux", caption: "Steak frites" },
      { imageId: img.dishFishVeg, category: "Plats principaux", caption: "Saumon poêlé" },
      { imageId: img.dishGnocchi, category: "Plats principaux", caption: "Gnocchis aux champignons sauvages" },
      { imageId: img.dishOyster, category: "Entrées", caption: "Sélection d'huîtres du chef" },
      { imageId: img.diningRoom, category: "Ambiance", caption: "Notre salle à manger principale" },
      { imageId: img.ambientLamps, category: "Ambiance", caption: "Le bar et le salon" },
    ],
    reviewsEyebrow: "Avis des clients",
    reviewsTitle: "Ce que disent nos clients",
    testimonials: [
      { quote: "Meilleur menu dégustation du Vieux-Montréal, sans hésitation. Le confit de canard vaut à lui seul le déplacement.", name: "Émilie Rousseau", role: "Avis Google", rating: 5 },
      { quote: "Service impeccable et les suggestions d'accords mets-vins étaient parfaites toute la soirée.", name: "Thomas Bergeron", role: "Avis Google", rating: 5 },
      { quote: "Notre souper d'anniversaire était parfait du début à la fin. Nous reviendrons certainement.", name: "Nadia Petrov", role: "Avis Google", rating: 5 },
    ],
    eventsEyebrow: "À venir",
    eventsTitle: "Événements et soirées spéciales",
    events: [
      { date: "Tous les jeudis", title: "Soirée accords mets-vins", description: "Un menu dégustation 5 services accompagné de vins sélectionnés par notre sommelier." },
      { date: "Premier dimanche du mois", title: "Brunch jazz", description: "Trio de jazz en direct avec notre menu brunch complet, de 10 h à 14 h." },
      { date: "24 et 31 décembre", title: "Menu des Fêtes", description: "Un menu dégustation saisonnier spécial — réservation requise bien à l'avance." },
    ],
    contactEyebrow: "Visitez-nous",
    contactTitle: "Réservations et demandes",
    contactDescription: "Sans réservation bienvenue, mais réservation recommandée les fins de semaine.",
    hoursNote: "Service du soir : mardi – dimanche, 17 h – 23 h",
  };
}

function buildEn() {
  return {
    businessName: "Restaurant",
    tagline: "Modern French bistro cuisine in the heart of Old Montreal, since 2015.",
    ctaLabel: "Reserve a Table",
    navLinks: [
      { label: "Reservations", href: "#reservations" },
      { label: "Menu", href: "#menu" },
      { label: "Chef", href: "#chef" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
      { label: "Events", href: "#events" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Old Montreal, Est. 2015",
      title: "Modern French cuisine, timeless atmosphere",
      subtitle: "Seasonal tasting menus, an award-winning wine list, and a dining room built for unforgettable evenings.",
      imageId: img.heroWide,
      primaryCta: { label: "Reserve a Table", href: "#reservations" },
      secondaryCta: { label: "View Menu", href: "#menu" },
    },
    reservationFields: [
      { type: "text" as const, name: "name", label: "Full Name", placeholder: "Your name", required: true, span: 1 as const },
      { type: "tel" as const, name: "phone", label: "Phone", placeholder: "(514) 000-0000", required: true, span: 1 as const },
      { type: "date" as const, name: "date", label: "Date", required: true, span: 1 as const },
      { type: "time" as const, name: "time", label: "Time", required: true, span: 1 as const },
      { type: "select" as const, name: "partySize", label: "Party Size", options: ["2 guests", "3 guests", "4 guests", "5 guests", "6+ guests"], span: 2 as const },
    ],
    menu: [
      {
        name: "Starters",
        items: [
          { name: "French Onion Soup", description: "Gruyère crouton, caramelized onion broth", price: "$14" },
          { name: "Seared Scallops", description: "Cauliflower purée, brown butter, capers", price: "$19" },
          { name: "Beef Tartare", description: "Dijon, cornichon, quail egg, brioche toast", price: "$18" },
        ],
      },
      {
        name: "Mains",
        items: [
          { name: "Duck Confit", description: "Lentils, roasted root vegetables, red wine jus", price: "$34" },
          { name: "Steak Frites", description: "8oz striploin, café de Paris butter, pommes frites", price: "$38" },
          { name: "Pan-Seared Salmon", description: "Beurre blanc, asparagus, fingerling potatoes", price: "$32" },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Madagascar vanilla bean", price: "$12" },
          { name: "Chocolate Fondant", description: "Molten center, vanilla bean ice cream", price: "$13" },
        ],
      },
      {
        name: "Wine & Bar",
        items: [
          { name: "Sommelier's Red", description: "Rotating selection, glass", price: "$14" },
          { name: "Sommelier's White", description: "Rotating selection, glass", price: "$13" },
          { name: "Classic Cocktails", description: "Ask your server for tonight's list", price: "$16" },
        ],
      },
    ],
    chef: {
      eyebrow: "Meet The Chef",
      name: "Chef Jean-Marc Lavoie",
      paragraphs: [
        "Trained in Lyon and with over 18 years across Michelin-starred kitchens in France and Quebec, Chef Jean-Marc brings a refined but unpretentious approach to modern French cooking.",
        "Every menu is built around what's freshest at the market that morning — a philosophy that's earned a loyal following since opening its doors in 2015.",
      ],
      stats: [
        { value: "18+", label: "Years Experience" },
        { value: "3", label: "Michelin Kitchens" },
        { value: "2015", label: "Est. in Montreal" },
      ],
    },
    galleryEyebrow: "Food & Ambiance",
    galleryTitle: "A taste of our restaurant",
    gallery: [
      { imageId: img.dishSteak, category: "Mains", caption: "Steak Frites" },
      { imageId: img.dishFishVeg, category: "Mains", caption: "Pan-Seared Salmon" },
      { imageId: img.dishGnocchi, category: "Mains", caption: "Wild Mushroom Gnocchi" },
      { imageId: img.dishOyster, category: "Starters", caption: "Chef's Oyster Selection" },
      { imageId: img.diningRoom, category: "Ambiance", caption: "Our Main Dining Room" },
      { imageId: img.ambientLamps, category: "Ambiance", caption: "The Bar & Lounge" },
    ],
    reviewsEyebrow: "Guest Reviews",
    reviewsTitle: "What our guests say",
    testimonials: [
      { quote: "Best tasting menu in Old Montreal, hands down. The duck confit is worth the trip alone.", name: "Émilie Rousseau", role: "Google Review", rating: 5 },
      { quote: "Impeccable service and the wine pairing suggestions were spot on all night.", name: "Thomas Bergeron", role: "Google Review", rating: 5 },
      { quote: "Our anniversary dinner was perfect from start to finish. We'll be back for sure.", name: "Nadia Petrov", role: "Google Review", rating: 5 },
    ],
    eventsEyebrow: "Upcoming",
    eventsTitle: "Events & special evenings",
    events: [
      { date: "Every Thursday", title: "Wine Pairing Night", description: "A 5-course tasting menu paired with hand-selected wines from our sommelier." },
      { date: "First Sunday of the Month", title: "Jazz Brunch", description: "Live jazz trio with our full brunch menu, 10 AM – 2 PM." },
      { date: "December 24 & 31", title: "Holiday Prix Fixe", description: "A special seasonal tasting menu — reservations required well in advance." },
    ],
    contactEyebrow: "Visit Us",
    contactTitle: "Reservations & inquiries",
    contactDescription: "Walk-ins welcome, but reservations are recommended on weekends.",
    hoursNote: "Dinner service: Tuesday – Sunday, 5:00 PM – 11:00 PM",
  };
}
