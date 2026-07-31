import { Coffee } from "lucide-react";
import { cafe as img } from "./images";
import type { DemoLocale } from "@/lib/demo-i18n/LanguageContext";

export const cafeShared = {
  icon: Coffee,
  phone: "(514) 555-0155",
  email: "hello@cafe-demo.com",
  address: "512 Avenue du Mont-Royal E, Montreal, QC H2J 1W1",
};

export const cafeContent: Record<DemoLocale, ReturnType<typeof buildFr> | ReturnType<typeof buildEn>> = {
  fr: buildFr(),
  en: buildEn(),
};

function buildFr() {
  return {
    businessName: "Café",
    tagline: "Café de spécialité et pâtisseries maison dans une ambiance de quartier chaleureuse depuis 2018.",
    ctaLabel: "Venez nous visiter",
    navLinks: [
      { label: "Menu café", href: "#coffee-menu" },
      { label: "Boissons vedettes", href: "#featured" },
      { label: "Boulangerie", href: "#bakery" },
      { label: "À propos", href: "#about" },
      { label: "Galerie", href: "#gallery" },
      { label: "Avis", href: "#reviews" },
      { label: "Horaires", href: "#hours" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Café de quartier depuis 2018",
      title: "Les matins tranquilles commencent ici",
      subtitle: "Café torréfié localement, pâtisseries maison et un endroit chaleureux où prendre son temps.",
      imageId: img.heroWide,
      primaryCta: { label: "Voir notre menu", href: "#coffee-menu" },
      secondaryCta: { label: "Venez nous visiter", href: "#contact" },
    },
    coffeeMenuEyebrow: "Menu café",
    coffeeMenuTitle: "Préparé à la commande",
    coffeeMenuDescription: "Torréfié localement, préparé avec soin.",
    coffeeMenu: [
      {
        name: "Espresso",
        items: [
          { name: "Espresso", description: "Simple ou double", price: "3,25 $" },
          { name: "Americano", description: "Espresso, eau chaude", price: "3,75 $" },
          { name: "Cortado", description: "Parts égales d'espresso et de lait vapeur", price: "4,25 $" },
        ],
      },
      {
        name: "À base de lait",
        items: [
          { name: "Cappuccino", description: "Espresso, lait vapeur, mousse", price: "4,75 $" },
          { name: "Latte", description: "Espresso, lait vapeur, mousse légère", price: "5,00 $" },
          { name: "Moka", description: "Espresso, chocolat, lait vapeur", price: "5,50 $" },
        ],
      },
      {
        name: "Thé et plus",
        items: [
          { name: "Thé en feuilles", description: "Sélection saisonnière rotative", price: "3,75 $" },
          { name: "Chai latte", description: "Chai épicé maison, lait vapeur", price: "5,00 $" },
          { name: "Matcha latte", description: "Matcha de qualité cérémoniale", price: "5,50 $" },
        ],
      },
    ],
    featuredEyebrow: "Boissons vedettes",
    featuredTitle: "Les favorites de la saison",
    featuredDrinks: [
      {
        name: "Boissons vedettes",
        items: [
          { name: "Latte érable et avoine", description: "Sirop d'érable local, lait d'avoine", price: "6,00 $", imageId: img.latteArtCloseup },
          { name: "Cortado vanille glacé", description: "Vanille maison, espresso froid", price: "5,50 $", imageId: img.cappuccinoWood },
          { name: "Latte cannelle et cardamome", description: "Mélange d'épices chaudes, lait vapeur", price: "6,25 $", imageId: img.cappuccinoMug },
        ],
      },
    ],
    bakeryEyebrow: "Boulangerie",
    bakeryTitle: "Fraîchement sorti du four",
    bakery: [
      {
        name: "Cuit frais chaque jour",
        items: [
          { name: "Croissant au beurre", description: "Croissant français classique", price: "3,75 $", imageId: img.croissantLatte },
          { name: "Pâtisserie aux amandes", description: "Sésame et amande, recette maison", price: "4,25 $", imageId: img.pastrySesame },
          { name: "Pain aux bananes", description: "Grillé, avec beurre fermenté", price: "4,00 $", imageId: img.mugTable },
        ],
      },
    ],
    about: {
      eyebrow: "À propos de nous",
      title: "Un lieu de rassemblement de quartier",
      paragraphs: [
        "Notre café a ouvert ses portes en 2018 avec un objectif simple : servir un excellent café dans un espace qui donne l'impression d'être chez soi. Chaque grain est torréfié localement, chaque pâtisserie est préparée sur place chaque matin.",
        "Que vous preniez un espresso rapide ou que vous vous installiez avec votre ordinateur pour l'après-midi, nos portes — et nos bouilloires en cuivre — sont toujours chaudes.",
      ],
      imageId: img.baristaWork,
      stats: [
        { value: "2018", label: "Fondation" },
        { value: "100 %", label: "Torréfié localement" },
        { value: "7", label: "Jours par semaine" },
      ],
    },
    galleryEyebrow: "Galerie",
    galleryTitle: "Un aperçu de notre café",
    gallery: [
      { imageId: img.interiorPlant, category: "Intérieur", caption: "Notre salle principale" },
      { imageId: img.outdoorSeating, category: "Intérieur", caption: "Terrasse" },
      { imageId: img.hangingLamps, category: "Intérieur", caption: "Le coin salon" },
      { imageId: img.latteArtCloseup, category: "Boissons", caption: "Art latte" },
      { imageId: img.croissantLatte, category: "Boulangerie", caption: "Pâtisseries du matin" },
      { imageId: img.talking, category: "Communauté", caption: "Habitués qui jasent" },
    ],
    reviewsEyebrow: "Avis clients",
    reviewsTitle: "Ce que disent nos habitués",
    reviews: [
      { quote: "Sans aucun doute le meilleur latte au lait d'avoine du Plateau. Le personnel se souvient toujours de ma commande.", name: "Camille Beaulieu", role: "Avis Google", rating: 5 },
      { quote: "Confortable, assez calme pour travailler, et la pâtisserie aux amandes est incroyable. Mon endroit de tous les jours.", name: "Ryan Ouellette", role: "Avis Google", rating: 5 },
      { quote: "Belle ambiance et des baristas vraiment sympathiques. Jamais déçue.", name: "Sophie Marchand", role: "Avis Google", rating: 5 },
    ],
    hours: [
      { day: "Lundi – Vendredi", hours: "7 h – 18 h" },
      { day: "Samedi – Dimanche", hours: "8 h – 17 h" },
    ],
    contactEyebrow: "Nous trouver",
    contactTitle: "Venez nous dire bonjour",
  };
}

function buildEn() {
  return {
    businessName: "Café",
    tagline: "Specialty coffee and scratch-made pastries in a warm neighborhood setting since 2018.",
    ctaLabel: "Visit Us",
    navLinks: [
      { label: "Coffee Menu", href: "#coffee-menu" },
      { label: "Featured Drinks", href: "#featured" },
      { label: "Bakery", href: "#bakery" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#reviews" },
      { label: "Hours", href: "#hours" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Neighborhood Café Since 2018",
      title: "Slow mornings start here",
      subtitle: "Locally roasted coffee, scratch-made pastries, and a warm spot to linger a little longer.",
      imageId: img.heroWide,
      primaryCta: { label: "View Our Menu", href: "#coffee-menu" },
      secondaryCta: { label: "Visit Us", href: "#contact" },
    },
    coffeeMenuEyebrow: "Coffee Menu",
    coffeeMenuTitle: "Brewed to order",
    coffeeMenuDescription: "Locally roasted, expertly pulled.",
    coffeeMenu: [
      {
        name: "Espresso",
        items: [
          { name: "Espresso", description: "Single or double shot", price: "$3.25" },
          { name: "Americano", description: "Espresso, hot water", price: "$3.75" },
          { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "$4.25" },
        ],
      },
      {
        name: "Milk-Based",
        items: [
          { name: "Cappuccino", description: "Espresso, steamed milk, foam", price: "$4.75" },
          { name: "Latte", description: "Espresso, steamed milk, light foam", price: "$5.00" },
          { name: "Mocha", description: "Espresso, chocolate, steamed milk", price: "$5.50" },
        ],
      },
      {
        name: "Tea & More",
        items: [
          { name: "Loose Leaf Tea", description: "Rotating seasonal selection", price: "$3.75" },
          { name: "Chai Latte", description: "House-spiced chai, steamed milk", price: "$5.00" },
          { name: "Matcha Latte", description: "Ceremonial grade matcha", price: "$5.50" },
        ],
      },
    ],
    featuredEyebrow: "Featured Drinks",
    featuredTitle: "This season's favorites",
    featuredDrinks: [
      {
        name: "Featured Drinks",
        items: [
          { name: "Maple Oat Latte", description: "Local maple syrup, oat milk", price: "$6.00", imageId: img.latteArtCloseup },
          { name: "Iced Vanilla Cortado", description: "House vanilla, cold espresso", price: "$5.50", imageId: img.cappuccinoWood },
          { name: "Cinnamon Cardamom Latte", description: "Warm spice blend, steamed milk", price: "$6.25", imageId: img.cappuccinoMug },
        ],
      },
    ],
    bakeryEyebrow: "Bakery",
    bakeryTitle: "Fresh from our oven",
    bakery: [
      {
        name: "Fresh Baked Daily",
        items: [
          { name: "Butter Croissant", description: "Classic French croissant", price: "$3.75", imageId: img.croissantLatte },
          { name: "Almond Pastry", description: "Sesame & almond, house recipe", price: "$4.25", imageId: img.pastrySesame },
          { name: "Banana Bread", description: "Toasted, with cultured butter", price: "$4.00", imageId: img.mugTable },
        ],
      },
    ],
    about: {
      eyebrow: "About Us",
      title: "A neighborhood gathering place",
      paragraphs: [
        "Our café opened in 2018 with a simple goal: serve genuinely great coffee in a space that feels like home. Every bean is roasted locally, every pastry is baked in-house each morning.",
        "Whether you're grabbing a quick espresso or settling in with a laptop for the afternoon, our doors — and our copper kettles — are always warm.",
      ],
      imageId: img.baristaWork,
      stats: [
        { value: "2018", label: "Est." },
        { value: "100%", label: "Locally Roasted" },
        { value: "7", label: "Days a Week" },
      ],
    },
    galleryEyebrow: "Gallery",
    galleryTitle: "A look inside our café",
    gallery: [
      { imageId: img.interiorPlant, category: "Interior", caption: "Our Main Room" },
      { imageId: img.outdoorSeating, category: "Interior", caption: "Patio Seating" },
      { imageId: img.hangingLamps, category: "Interior", caption: "The Lounge Corner" },
      { imageId: img.latteArtCloseup, category: "Drinks", caption: "Latte Art" },
      { imageId: img.croissantLatte, category: "Bakery", caption: "Morning Pastries" },
      { imageId: img.talking, category: "Community", caption: "Regulars Catching Up" },
    ],
    reviewsEyebrow: "Customer Reviews",
    reviewsTitle: "What our regulars say",
    reviews: [
      { quote: "Hands down the best oat milk latte in the Plateau. The staff remembers my order every time.", name: "Camille Beaulieu", role: "Google Review", rating: 5 },
      { quote: "Cozy, quiet enough to work, and the almond pastry is unreal. My daily spot.", name: "Ryan Ouellette", role: "Google Review", rating: 5 },
      { quote: "Great atmosphere and genuinely friendly baristas. Never a bad visit.", name: "Sophie Marchand", role: "Google Review", rating: 5 },
    ],
    hours: [
      { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
      { day: "Saturday – Sunday", hours: "8:00 AM – 5:00 PM" },
    ],
    contactEyebrow: "Find Us",
    contactTitle: "Come say hello",
  };
}
