import { Dumbbell } from "lucide-react";
import { gym as img, headshots } from "./images";
import type { DemoLocale } from "@/lib/demo-i18n/LanguageContext";

export const gymShared = {
  icon: Dumbbell,
  theme: { accent: "#22c55e", accent2: "#06b6d4" },
  phone: "(514) 555-0174",
  email: "join@gym-demo.com",
  address: "980 Rue Wellington, Montreal, QC H3C 1T4",
};

export const gymContent: Record<DemoLocale, ReturnType<typeof buildFr> | ReturnType<typeof buildEn>> = {
  fr: buildFr(),
  en: buildEn(),
};

function buildFr() {
  return {
    businessName: "Gym",
    tagline: "Gym de musculation et de conditionnement premium avec un encadrement expert et une communauté qui vous pousse plus loin.",
    ctaLabel: "Essai gratuit",
    navLinks: [
      { label: "Abonnements", href: "#membership" },
      { label: "Entraîneurs", href: "#trainers" },
      { label: "Horaire", href: "#schedule" },
      { label: "Transformations", href: "#transformations" },
      { label: "Témoignages", href: "#stories" },
      { label: "Calculateur d'IMC", href: "#bmi" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Ouvert 24/7 · Tous les niveaux bienvenus",
      title: "Entraînez-vous plus fort. Récupérez plus intelligemment.",
      subtitle: "Équipement haut de gamme, encadrement expert et une communauté qui vous tient responsable, chaque jour.",
      imageId: img.heroWide,
      primaryCta: { label: "Essai gratuit", href: "#membership" },
      secondaryCta: { label: "Voir l'horaire", href: "#schedule" },
    },
    membershipEyebrow: "Plans d'abonnement",
    membershipTitle: "Trouvez votre formule",
    membershipDescription: "Aucun contrat à long terme — annulez ou changez de plan en tout temps.",
    membership: [
      { name: "De base", price: "39 $", period: "/mois", features: ["Accès au gym 24/7", "Équipement standard", "Accès au vestiaire"], ctaLabel: "Choisir De base" },
      { name: "Pro", price: "69 $", period: "/mois", features: ["Tout du plan De base", "Cours de groupe illimités", "1 séance d'entraînement privée/mois", "Laissez-passer invités"], highlighted: true, ctaLabel: "Choisir Pro" },
      { name: "Élite", price: "119 $", period: "/mois", features: ["Tout du plan Pro", "4 séances d'entraînement privées/mois", "Coaching nutritionnel", "Accès à la zone de récupération"], ctaLabel: "Choisir Élite" },
    ],
    trainersEyebrow: "Nos entraîneurs",
    trainersTitle: "Entraînez-vous avec les meilleurs",
    trainers: [
      { imageId: headshots.womanBlonde2, name: "Jade Lachance", role: "Entraîneuse-chef en force", bio: "Certifiée CSCS avec 10 ans d'expérience auprès d'athlètes de compétition." },
      { imageId: headshots.manVNeck, name: "Marcus Reid", role: "Entraîneur personnel", bio: "Spécialisé en perte de gras et programmes de force fonctionnelle." },
      { imageId: headshots.womanCloseup, name: "Priya Nair", role: "Entraîneuse personnelle", bio: "Certifiée en entraînement pré/post-natal et en mobilité." },
    ],
    scheduleEyebrow: "Horaire des cours",
    scheduleTitle: "Les cours de la semaine",
    scheduleDescription: "Présentez-vous quand vous voulez — tous les cours sont inclus avec les plans Pro et Élite.",
    schedule: [
      { day: "Lundi", classes: [{ name: "Circuit HIIT", time: "6 h", trainer: "Jade L." }, { name: "Force 101", time: "18 h", trainer: "Marcus R." }] },
      { day: "Mardi", classes: [{ name: "Spin", time: "7 h", trainer: "Priya N." }, { name: "Powerlifting", time: "17 h 30", trainer: "Jade L." }] },
      { day: "Mercredi", classes: [{ name: "Circuit HIIT", time: "6 h", trainer: "Marcus R." }, { name: "Yoga Flow", time: "18 h 30", trainer: "Priya N." }] },
      { day: "Jeudi", classes: [{ name: "Force 101", time: "18 h", trainer: "Jade L." }] },
      { day: "Vendredi", classes: [{ name: "Spin", time: "7 h", trainer: "Priya N." }, { name: "Défi gym libre", time: "17 h", trainer: "Marcus R." }] },
    ],
    transformationsEyebrow: "Résultats concrets",
    transformationsTitle: "Transformations de nos membres",
    transformationsDescription: "Glissez pour voir la différence qu'un entraînement constant peut faire.",
    transformations: [
      { beforeId: img.grayscaleWorkout, afterId: img.barbellLift, caption: "Programme de force de 12 semaines" },
      { beforeId: img.dumbbellsGear, afterId: img.weightSession, caption: "Recomposition corporelle de 16 semaines" },
    ],
    storiesEyebrow: "Témoignages",
    storiesTitle: "Ce que disent nos membres",
    stories: [
      { quote: "J'ai perdu 30 lb et gagné plus de force que je ne l'aurais cru possible. Les entraîneurs se soucient vraiment de nous.", name: "Vanessa Cloutier", role: "Membre depuis 2023", avatarId: headshots.womanBlonde, rating: 5 },
      { quote: "La meilleure communauté de gym en ville. J'ai maintenant hâte à mes séances de 6 h du matin.", name: "Derek Osei", role: "Membre depuis 2022", avatarId: headshots.manGreyJacket, rating: 5 },
      { quote: "Le plan Élite avec le coaching nutritionnel a complètement changé mon approche du conditionnement physique.", name: "Mei Lin", role: "Membre depuis 2024", avatarId: headshots.womanGlasses, rating: 5 },
    ],
    bmiEyebrow: "Outil gratuit",
    bmiTitle: "Calculez votre IMC",
    bmiDescription: "Un moyen rapide de connaître votre point de départ au début de votre parcours fitness.",
    contactEyebrow: "Visitez le centre",
    contactTitle: "Venez le voir par vous-même",
    contactDescription: "Visitez nos installations et essayez un cours gratuitement.",
    hoursNote: "Heures avec personnel : 6 h – 22 h tous les jours · Accès membre 24/7",
  };
}

function buildEn() {
  return {
    businessName: "Gym",
    tagline: "Premium strength & conditioning gym with expert coaching and a community that pushes you further.",
    ctaLabel: "Start Free Trial",
    navLinks: [
      { label: "Membership", href: "#membership" },
      { label: "Trainers", href: "#trainers" },
      { label: "Schedule", href: "#schedule" },
      { label: "Transformations", href: "#transformations" },
      { label: "Success Stories", href: "#stories" },
      { label: "BMI Calculator", href: "#bmi" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Open 24/7 · All Levels Welcome",
      title: "Train harder. Recover smarter.",
      subtitle: "Premium equipment, expert coaching, and a community that keeps you accountable — every single day.",
      imageId: img.heroWide,
      primaryCta: { label: "Start Free Trial", href: "#membership" },
      secondaryCta: { label: "View Schedule", href: "#schedule" },
    },
    membershipEyebrow: "Membership Plans",
    membershipTitle: "Find your fit",
    membershipDescription: "No long-term contracts — cancel or upgrade anytime.",
    membership: [
      { name: "Basic", price: "$39", period: "/mo", features: ["24/7 gym access", "Standard equipment", "Locker room access"], ctaLabel: "Choose Basic" },
      { name: "Pro", price: "$69", period: "/mo", features: ["Everything in Basic", "Unlimited group classes", "1 free PT session/mo", "Guest passes"], highlighted: true, ctaLabel: "Choose Pro" },
      { name: "Elite", price: "$119", period: "/mo", features: ["Everything in Pro", "4 PT sessions/mo", "Nutrition coaching", "Recovery zone access"], ctaLabel: "Choose Elite" },
    ],
    trainersEyebrow: "Our Coaches",
    trainersTitle: "Train with the best",
    trainers: [
      { imageId: headshots.womanBlonde2, name: "Jade Lachance", role: "Head Strength Coach", bio: "Certified CSCS with 10 years coaching competitive athletes." },
      { imageId: headshots.manVNeck, name: "Marcus Reid", role: "Personal Trainer", bio: "Specializes in fat loss and functional strength programs." },
      { imageId: headshots.womanCloseup, name: "Priya Nair", role: "Personal Trainer", bio: "Certified in pre/post-natal and mobility-focused training." },
    ],
    scheduleEyebrow: "Class Schedule",
    scheduleTitle: "This week's classes",
    scheduleDescription: "Drop in anytime — all classes included with Pro and Elite memberships.",
    schedule: [
      { day: "Monday", classes: [{ name: "HIIT Circuit", time: "6:00 AM", trainer: "Jade L." }, { name: "Strength 101", time: "6:00 PM", trainer: "Marcus R." }] },
      { day: "Tuesday", classes: [{ name: "Spin", time: "7:00 AM", trainer: "Priya N." }, { name: "Powerlifting", time: "5:30 PM", trainer: "Jade L." }] },
      { day: "Wednesday", classes: [{ name: "HIIT Circuit", time: "6:00 AM", trainer: "Marcus R." }, { name: "Yoga Flow", time: "6:30 PM", trainer: "Priya N." }] },
      { day: "Thursday", classes: [{ name: "Strength 101", time: "6:00 PM", trainer: "Jade L." }] },
      { day: "Friday", classes: [{ name: "Spin", time: "7:00 AM", trainer: "Priya N." }, { name: "Open Gym Challenge", time: "5:00 PM", trainer: "Marcus R." }] },
    ],
    transformationsEyebrow: "Real Results",
    transformationsTitle: "Member transformations",
    transformationsDescription: "Drag to see the difference consistent training makes.",
    transformations: [
      { beforeId: img.grayscaleWorkout, afterId: img.barbellLift, caption: "12-Week Strength Program" },
      { beforeId: img.dumbbellsGear, afterId: img.weightSession, caption: "16-Week Body Recomposition" },
    ],
    storiesEyebrow: "Success Stories",
    storiesTitle: "Hear from our members",
    stories: [
      { quote: "Lost 30 lbs and gained more strength than I ever thought possible. The coaches actually care.", name: "Vanessa Cloutier", role: "Member since 2023", avatarId: headshots.womanBlonde, rating: 5 },
      { quote: "Best gym community in the city. I actually look forward to my 6 AM sessions now.", name: "Derek Osei", role: "Member since 2022", avatarId: headshots.manGreyJacket, rating: 5 },
      { quote: "The Elite program with nutrition coaching completely changed how I approach fitness.", name: "Mei Lin", role: "Member since 2024", avatarId: headshots.womanGlasses, rating: 5 },
    ],
    bmiEyebrow: "Free Tool",
    bmiTitle: "Calculate your BMI",
    bmiDescription: "A quick way to track your baseline as you start your fitness journey.",
    contactEyebrow: "Visit The Club",
    contactTitle: "Come see it for yourself",
    contactDescription: "Tour the facility and try a class on us.",
    hoursNote: "Staffed hours: 6:00 AM – 10:00 PM daily · 24/7 member access",
  };
}
