import { HardHat, Hammer, Ruler, ShieldCheck, Building2, Home } from "lucide-react";
import { construction as img } from "./images";
import type { DemoLocale } from "@/lib/demo-i18n/LanguageContext";

export const constructionShared = {
  icon: HardHat,
  phone: "(514) 555-0142",
  emergencyPhone: "(514) 555-0199",
  email: "info@construction-demo.com",
  address: "1420 Rue Notre-Dame O, Montreal, QC H3C 1K7",
};

export const constructionContent: Record<
  DemoLocale,
  {
    businessName: string;
    tagline: string;
    navLinks: { label: string; href: string }[];
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      imageId: string;
      primaryCta: { label: string; href: string };
      secondaryCta: { label: string; href: string };
    };
    ctaLabel: string;
    services: { icon: typeof HardHat; title: string; description: string }[];
    projects: { imageId: string; category: string; caption: string }[];
    beforeAfter: { beforeId: string; afterId: string; caption: string }[];
    testimonials: { quote: string; name: string; role: string; rating: number }[];
    team: { name: string; role: string; bio: string }[];
    quoteFields: Array<
      | { type: "text" | "tel" | "email"; name: string; label: string; placeholder?: string; required?: boolean; span: 1 | 2 }
      | { type: "select"; name: string; label: string; options: string[]; span: 1 | 2 }
      | { type: "textarea"; name: string; label: string; placeholder?: string; required?: boolean; span: 1 | 2 }
    >;
    quoteSideNote: { title: string; body: string };
    faq: { question: string; answer: string }[];
    hoursNote: string;
  }
> = {
  fr: {
    businessName: "Construction",
    tagline: "Entrepreneur général complet pour projets résidentiels et commerciaux dans le Grand Montréal.",
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Projets", href: "#projects" },
      { label: "Avant/Après", href: "#before-after" },
      { label: "Avis", href: "#reviews" },
      { label: "Équipe", href: "#team" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Entrepreneur général licencié et assuré",
      title: "Des espaces construits pour durer",
      subtitle:
        "De la construction de maisons sur mesure aux rénovations commerciales complètes, nous livrons un travail précis, à temps et selon le budget.",
      imageId: img.heroWide,
      primaryCta: { label: "Obtenir une soumission gratuite", href: "#quote" },
      secondaryCta: { label: "Voir nos réalisations", href: "#projects" },
    },
    ctaLabel: "Obtenir une soumission gratuite",
    services: [
      { icon: Home, title: "Construction de maisons sur mesure", description: "Construction résidentielle de A à Z, adaptée à votre vision, de la fondation à la finition." },
      { icon: Building2, title: "Rénovation commerciale", description: "Aménagement de bureaux, commerces et rénovations commerciales complètes avec un minimum d'interruption." },
      { icon: Hammer, title: "Rénovation cuisine et salle de bain", description: "Des rénovations haut de gamme qui maximisent l'espace, la fonctionnalité et la valeur de revente." },
      { icon: Ruler, title: "Agrandissements et extensions", description: "Agrandissez votre maison avec des extensions qui s'harmonisent parfaitement à la structure existante." },
      { icon: ShieldCheck, title: "Toiture et structure", description: "Réparations structurelles, remplacement de toiture et renforcement, garantis sur la main-d'œuvre." },
      { icon: HardHat, title: "Gestion de projet", description: "Un seul point de contact des permis jusqu'à l'inspection finale — nous gérons chaque corps de métier." },
    ],
    projects: [
      { imageId: img.crew, category: "Commercial", caption: "Aménagement de bureaux au centre-ville — 12 000 pi²" },
      { imageId: img.frame, category: "Résidentiel", caption: "Maison sur mesure à Westmount — de la charpente à la finition" },
      { imageId: img.cranes, category: "Commercial", caption: "Développement à usage mixte — phase structurelle" },
      { imageId: img.stairs, category: "Résidentiel", caption: "Rénovation d'un triplex du Plateau" },
      { imageId: img.worker, category: "Résidentiel", caption: "Agrandissement résidentiel à Laval — 800 pi²" },
      { imageId: img.groupSite, category: "Commercial", caption: "Réaménagement d'un entrepôt industriel" },
    ],
    beforeAfter: [
      { beforeId: img.cement, afterId: img.frame, caption: "De la fondation à la structure charpentée — 6 semaines" },
      { beforeId: img.hardHat, afterId: img.crew, caption: "De la préparation du site à l'emménagement" },
    ],
    testimonials: [
      { quote: "L'équipe a terminé la rénovation de nos bureaux deux semaines avant l'échéance, sans aucune surprise de coûts. Communication exceptionnelle.", name: "Marc Tremblay", role: "Propriétaire, Tremblay & Associés", rating: 5 },
      { quote: "La rénovation de notre cuisine a dépassé toutes nos attentes. L'équipe était professionnelle, propre et fière de son travail.", name: "Isabelle Roy", role: "Propriétaire, Westmount", rating: 5 },
      { quote: "Nous les avons utilisés pour trois aménagements commerciaux maintenant. Qualité constante et toujours joignables.", name: "David Chen", role: "Directeur des installations", rating: 5 },
    ],
    team: [
      { name: "Philippe Gagnon", role: "Fondateur et entrepreneur général", bio: "25 ans d'expérience en construction commerciale et résidentielle au Québec." },
      { name: "Sarah Bouchard", role: "Chargée de projet", bio: "Veille à ce que chaque chantier respecte l'échéancier et que chaque client soit informé." },
      { name: "Marc-André Fortin", role: "Surintendant de chantier principal", bio: "Supervise les opérations quotidiennes et le contrôle de la qualité sur chaque chantier." },
    ],
    quoteFields: [
      { type: "text", name: "name", label: "Nom complet", placeholder: "Votre nom", required: true, span: 1 },
      { type: "tel", name: "phone", label: "Téléphone", placeholder: "(514) 000-0000", required: true, span: 1 },
      { type: "email", name: "email", label: "Courriel", placeholder: "vous@courriel.com", required: true, span: 2 },
      {
        type: "select",
        name: "projectType",
        label: "Type de projet",
        options: ["Maison sur mesure", "Rénovation commerciale", "Cuisine et salle de bain", "Agrandissement/Extension", "Toiture/Structure", "Autre"],
        span: 2,
      },
      { type: "textarea", name: "message", label: "Parlez-nous de votre projet", placeholder: "Portée, échéancier et budget approximatif...", required: true, span: 2 },
    ],
    quoteSideNote: {
      title: "Pourquoi nous choisir",
      body: "Licencié, assuré et détenu localement depuis 2008. Chaque soumission inclut une description détaillée des travaux, un échéancier et un prix fixe — sans surprise.",
    },
    faq: [
      { question: "Combien de temps dure une rénovation typique?", answer: "La plupart des rénovations de cuisine et salle de bain prennent 4 à 8 semaines. Les agrandissements complets prennent généralement 3 à 5 mois selon l'ampleur et les permis requis. Un échéancier détaillé est fourni avant la signature de tout contrat." },
      { question: "Êtes-vous licenciés et assurés?", answer: "Oui — nous détenons une licence RBQ complète et une assurance responsabilité civile complète pour chaque projet, résidentiel ou commercial." },
      { question: "Gérez-vous les permis?", answer: "Oui, nous gérons l'ensemble du processus de permis auprès de la ville en votre nom, inclus dans chaque soumission." },
      { question: "Quelle est votre politique de garantie?", answer: "Toute la structure et la main-d'œuvre sont garanties 5 ans. Les garanties du fabricant sur les matériaux s'appliquent séparément." },
      { question: "Puis-je rester chez moi pendant les travaux?", answer: "Dans la plupart des cas, oui. Nous délimitons les zones de travail et maintenons un accès propre et sécuritaire au reste de votre maison." },
    ],
    hoursNote: "Heures de bureau : lundi – vendredi, 7 h – 17 h",
  },
  en: {
    businessName: "Construction",
    tagline: "Full-service general contracting for residential and commercial projects across Greater Montreal.",
    navLinks: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Before & After", href: "#before-after" },
      { label: "Reviews", href: "#reviews" },
      { label: "Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Licensed & Insured General Contractor",
      title: "Building spaces that last a lifetime",
      subtitle:
        "From custom home builds to full commercial renovations, we deliver precision craftsmanship, on time and on budget.",
      imageId: img.heroWide,
      primaryCta: { label: "Get a Free Quote", href: "#quote" },
      secondaryCta: { label: "View Our Work", href: "#projects" },
    },
    ctaLabel: "Get a Free Quote",
    services: [
      { icon: Home, title: "Custom Home Building", description: "Ground-up residential construction tailored to your vision, from foundation to final finish." },
      { icon: Building2, title: "Commercial Renovation", description: "Office fit-outs, retail buildouts, and full commercial remodels with minimal downtime." },
      { icon: Hammer, title: "Kitchen & Bath Remodels", description: "High-end renovations that maximize space, function, and resale value." },
      { icon: Ruler, title: "Additions & Extensions", description: "Seamlessly extend your home's footprint with additions that match your existing structure." },
      { icon: ShieldCheck, title: "Roofing & Structural Work", description: "Structural repairs, roof replacements, and reinforcement backed by a full workmanship warranty." },
      { icon: HardHat, title: "Project Management", description: "One point of contact from permits to final walkthrough — we handle every trade and timeline." },
    ],
    projects: [
      { imageId: img.crew, category: "Commercial", caption: "Downtown Office Buildout — 12,000 sq ft" },
      { imageId: img.frame, category: "Residential", caption: "Westmount Custom Home — Framing to Finish" },
      { imageId: img.cranes, category: "Commercial", caption: "Mixed-Use Development — Structural Phase" },
      { imageId: img.stairs, category: "Residential", caption: "Plateau Triplex Renovation" },
      { imageId: img.worker, category: "Residential", caption: "Laval Home Addition — 800 sq ft" },
      { imageId: img.groupSite, category: "Commercial", caption: "Industrial Warehouse Retrofit" },
    ],
    beforeAfter: [
      { beforeId: img.cement, afterId: img.frame, caption: "Foundation to Framed Structure — 6 Weeks" },
      { beforeId: img.hardHat, afterId: img.crew, caption: "Site Prep to Move-In Ready" },
    ],
    testimonials: [
      { quote: "The team finished our office renovation two weeks ahead of schedule without a single change order surprise. Exceptional communication throughout.", name: "Marc Tremblay", role: "Owner, Tremblay & Associates", rating: 5 },
      { quote: "Our kitchen remodel exceeded every expectation. The crew was professional, clean, and clearly took pride in the work.", name: "Isabelle Roy", role: "Homeowner, Westmount", rating: 5 },
      { quote: "We've used them for three commercial buildouts now. Consistent quality and they always answer the phone.", name: "David Chen", role: "Facilities Director", rating: 5 },
    ],
    team: [
      { name: "Philippe Gagnon", role: "Founder & General Contractor", bio: "25 years in commercial and residential construction across Quebec." },
      { name: "Sarah Bouchard", role: "Project Manager", bio: "Keeps every job on schedule and every client in the loop." },
      { name: "Marc-Andre Fortin", role: "Lead Site Supervisor", bio: "Oversees daily operations and quality control on every site." },
    ],
    quoteFields: [
      { type: "text", name: "name", label: "Full Name", placeholder: "Your name", required: true, span: 1 },
      { type: "tel", name: "phone", label: "Phone", placeholder: "(514) 000-0000", required: true, span: 1 },
      { type: "email", name: "email", label: "Email", placeholder: "you@email.com", required: true, span: 2 },
      {
        type: "select",
        name: "projectType",
        label: "Project Type",
        options: ["Custom Home", "Commercial Renovation", "Kitchen & Bath", "Addition/Extension", "Roofing/Structural", "Other"],
        span: 2,
      },
      { type: "textarea", name: "message", label: "Tell us about your project", placeholder: "Scope, timeline, and budget range...", required: true, span: 2 },
    ],
    quoteSideNote: {
      title: "Why Choose Us",
      body: "Licensed, insured, and locally owned since 2008. Every quote includes a detailed scope of work, timeline, and fixed pricing — no surprises.",
    },
    faq: [
      { question: "How long does a typical renovation take?", answer: "Most kitchen and bath remodels take 4-8 weeks. Full home additions typically run 3-5 months depending on scope and permitting. We provide a detailed timeline before any contract is signed." },
      { question: "Are you licensed and insured?", answer: "Yes — we carry full RBQ licensing and comprehensive liability insurance on every project, residential and commercial." },
      { question: "Do you handle permits?", answer: "Yes, we manage the entire permitting process with the city on your behalf, included in every quote." },
      { question: "What is your warranty policy?", answer: "All structural and workmanship is backed by a 5-year warranty. Manufacturer warranties on materials apply separately." },
      { question: "Can I stay in my home during a renovation?", answer: "In most cases, yes. We section off work zones and maintain clean, safe access to the rest of your home throughout the project." },
    ],
    hoursNote: "Office hours: Monday – Friday, 7:00 AM – 5:00 PM",
  },
};
