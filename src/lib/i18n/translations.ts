export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export type Translations = {
  meta: { tagline: string };
  nav: {
    links: { key: string; label: string; href: string }[];
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    cta: string;
    callCta: string;
    trustLine: string;
    scrollCue: string;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string; features: string[] }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    items: {
      name: string;
      badge?: string;
      heroPrice: string;
      heroSuffix?: string;
      subtitle: string;
      downPayment?: string;
      features: string[];
      highlighted?: boolean;
      ctaLabel: string;
    }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    viewDemoCta: string;
    items: Record<
      string,
      {
        title: string;
        industry: string;
        description: string;
        features: string[];
      }
    >;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
    items: { title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string; badge?: string; ctaLabel?: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    responseLabel: string;
    responseValue: string;
    zoneLabel: string;
    zoneValue: string;
    connectLabel: string;
    connectDescription: string;
    quote: string;
    quoteAuthor: string;
    preferToTalk: {
      title: string;
      subtitle: string;
      phoneLabels: string[];
      availableLabel: string;
      days: string;
      hours: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phoneOptional: string;
      phonePlaceholder: string;
      projectTypeLabel: string;
      projectTypes: string[];
      businessTypeLabel: string;
      businessTypes: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successMessage: string;
      genericError: string;
    };
  };
  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
    legalLink: string;
    designedWithCare: string;
    allRightsReserved: string;
  };
  legal: {
    title: string;
    sections: { title: string; content: string }[];
  };
};

export const translations: Record<Locale, Translations> = {
  fr: {
    meta: {
      tagline: "Agence de création de sites web",
    },
    nav: {
      links: [
        { key: "whyUs", label: "Pourquoi nous", href: "#pourquoi-nous" },
        { key: "services", label: "Services", href: "#services" },
        { key: "pricing", label: "Tarifs", href: "#tarifs" },
        { key: "portfolio", label: "Réalisations", href: "#realisations" },
        { key: "process", label: "Processus", href: "#processus" },
        { key: "faq", label: "FAQ", href: "#faq" },
      ],
      cta: "Demander un tarif",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      badge: "Agence de création de sites web premium",
      titleBefore: "Des sites web qui ",
      titleHighlight: "convertissent vos visiteurs",
      titleAfter: " en clients",
      subtitle:
        "DualLane Digital conçoit des sites rapides, modernes et sur mesure pour les entreprises qui veulent une présence en ligne à la hauteur de leur ambition.",
      cta: "Demander un tarif",
      callCta: "Appeler maintenant",
      trustLine: "Réponse sous 48h · Consultation sans engagement",
      scrollCue: "Découvrir",
    },
    whyUs: {
      eyebrow: "Pourquoi nous choisir",
      title: "Une agence pensée pour la performance",
      description:
        "Chaque site que nous livrons repose sur les mêmes fondations : vitesse, design, sécurité et accompagnement.",
      items: [
        {
          title: "Sites ultra rapides",
          description:
            "Scores Lighthouse 95+ garantis. Chaque milliseconde compte pour votre taux de conversion.",
        },
        {
          title: "Design moderne",
          description:
            "Des interfaces épurées et sur mesure, pensées pour refléter le positionnement premium de votre marque.",
        },
        {
          title: "Mobile first",
          description:
            "Plus de 60% du trafic vient du mobile. Vos pages sont conçues pour être parfaites sur tous les écrans.",
        },
        {
          title: "SEO optimisé",
          description:
            "Architecture technique propre, balises sémantiques et performance pensées pour bien référencer votre site.",
        },
        {
          title: "Sécurité renforcée",
          description:
            "Hébergement fiable, certificats SSL, sauvegardes automatiques et bonnes pratiques à chaque déploiement.",
        },
        {
          title: "Support réactif",
          description:
            "Une équipe disponible après la livraison pour ajuster, faire évoluer et maintenir votre site.",
        },
      ],
    },
    services: {
      eyebrow: "Nos services",
      title: "Tout ce qu'il faut pour votre présence en ligne",
      description:
        "De la création à la maintenance, nous couvrons chaque étape du cycle de vie de votre site web.",
      items: [
        {
          title: "Site vitrine",
          description:
            "Un site sur mesure qui présente votre activité avec clarté et impact, pensé pour convertir vos visiteurs en clients.",
          features: ["Design sur mesure", "Contenu optimisé", "Formulaire de contact", "Mise en ligne incluse"],
        },
        {
          title: "Refonte de site",
          description:
            "Votre site actuel vous freine ? Nous le modernisons entièrement sans perdre votre référencement existant.",
          features: ["Audit complet", "Nouveau design", "Migration du contenu", "Redirections SEO"],
        },
        {
          title: "Optimisation SEO",
          description:
            "Structure technique, contenu et performance optimisés pour améliorer votre visibilité sur Google.",
          features: ["Audit technique", "Mots-clés ciblés", "Balisage sémantique", "Suivi des positions"],
        },
        {
          title: "Maintenance",
          description:
            "Mises à jour, corrections et surveillance continue pour un site toujours performant et sécurisé.",
          features: ["Mises à jour régulières", "Surveillance 24/7", "Sauvegardes", "Corrections rapides"],
        },
        {
          title: "Hébergement",
          description:
            "Un hébergement rapide et fiable, géré de bout en bout pour que vous n'ayez rien à configurer.",
          features: ["Serveurs performants", "Certificat SSL", "Nom de domaine", "Disponibilité 99,9%"],
        },
      ],
    },
    pricing: {
      eyebrow: "Tarifs",
      title: "Un tarif clair, sans surprise",
      description:
        "Commencez votre site professionnel avec un paiement mensuel accessible, sans gros montant à payer d'un coup.",
      note: "Offre de lancement disponible pour une durée limitée, en échange de l'autorisation d'ajouter votre site à notre portfolio.",
      items: [
        {
          name: "Plan A",
          heroPrice: "50 $",
          heroSuffix: "/ mois",
          subtitle: "pendant 11 mois",
          downPayment: "300 $ à la commande",
          features: ["Mise de fond la plus élevée des 3 plans"],
          ctaLabel: "Choisir ce plan",
        },
        {
          name: "Plan B",
          badge: "Le plus populaire",
          heroPrice: "65 $",
          heroSuffix: "/ mois",
          subtitle: "pendant 11 mois",
          downPayment: "150 $ à la commande",
          features: ["Mise de fond réduite"],
          ctaLabel: "Choisir ce plan",
        },
        {
          name: "Plan C",
          badge: "Sans mise de fond",
          heroPrice: "75 $",
          heroSuffix: "/ mois",
          subtitle: "pendant 12 mois",
          downPayment: "0 $ à la commande",
          features: ["Le plus accessible pour démarrer"],
          ctaLabel: "Choisir ce plan",
        },
      ],
    },
    portfolio: {
      eyebrow: "Réalisations",
      title: "Des projets pensés pour convertir",
      description:
        "Un aperçu de sites premium conçus pour des entreprises exigeantes, dans des secteurs variés. Explorez une démo complète et interactive pour chaque secteur.",
      viewDemoCta: "Voir la démo en direct",
      items: {
        construction: {
          title: "Construction",
          industry: "Construction générale",
          description: "Entreprise de construction générale — devis gratuit, projets réalisés et ligne d'urgence.",
          features: ["Formulaire de soumission gratuite", "Galerie avant/après", "Ligne d'urgence 24/7"],
        },
        restaurant: {
          title: "Restaurant",
          industry: "Restaurant gastronomique",
          description: "Bistro français moderne — réservations en ligne, menu interactif et présentation du chef.",
          features: ["Réservations en ligne", "Menu interactif", "Galerie de plats"],
        },
        autoRepair: {
          title: "Garage",
          industry: "Garage & mécanique",
          description: "Garage automobile complet — diagnostics, forfaits d'entretien et financement disponible.",
          features: ["Réservation de rendez-vous", "Forfaits d'entretien", "Options de financement"],
        },
        barbershop: {
          title: "Salon de coiffure",
          industry: "Salon de coiffure haut de gamme",
          description: "Salon de coiffure moderne et haut de gamme — liste de prix, rendez-vous en ligne et galerie.",
          features: ["Rendez-vous en ligne", "Liste de prix", "Galerie de coupes"],
        },
        cafe: {
          title: "Café",
          industry: "Café de quartier",
          description: "Café de quartier chaleureux — menu de café, produits de boulangerie et galerie photo.",
          features: ["Menu interactif", "Galerie photo", "Avis clients"],
        },
        gym: {
          title: "Gym",
          industry: "Centre de conditionnement physique",
          description: "Centre de fitness premium — plans d'abonnement, horaire des cours et calculateur d'IMC.",
          features: ["Plans d'abonnement", "Horaire des cours", "Calculateur d'IMC"],
        },
      },
    },
    process: {
      eyebrow: "Notre processus",
      title: "Un parcours clair, du premier appel à la mise en ligne",
      description: "Quatre étapes simples pour transformer votre vision en un site web performant.",
      stepLabel: "ÉTAPE",
      items: [
        {
          title: "Discussion",
          description:
            "On échange sur vos objectifs, votre marque et vos besoins pour définir la meilleure stratégie.",
        },
        {
          title: "Maquette",
          description:
            "Nous créons une maquette sur mesure de votre site pour valider le design avant le développement.",
        },
        {
          title: "Développement",
          description:
            "Votre site est développé avec des technologies modernes, rapide, sécurisé et 100% responsive.",
        },
        {
          title: "Mise en ligne",
          description:
            "Déploiement, tests finaux et formation pour que vous soyez autonome dès le lancement.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      description: "Tout ce que vous devez savoir avant de vous lancer avec DualLane Digital.",
      items: [
        {
          question: "Combien coûte un site web ?",
          badge: "Offre de lancement",
          answer:
            "Pour une durée limitée, nous créons des sites web professionnels à seulement 300 $ CA, en échange de l'autorisation d'ajouter le site à notre portfolio. Cette offre nous permet de bâtir notre portfolio tout en offrant à nos premiers clients un site web moderne, performant et professionnel à un tarif exceptionnel. Le prix comprend un site web personnalisé, adapté à votre entreprise, optimisé pour mobile, rapide, sécurisé et conçu pour convertir vos visiteurs en clients. Cette offre est disponible pour une durée limitée.",
          ctaLabel: "Obtenir cette offre",
        },
        {
          question: "Proposez-vous des plans de paiement ?",
          answer:
            "Oui, si vous préférez étaler le paiement de l'offre de lancement plutôt que de payer 300 $ comptant, trois options sont disponibles sur 12 mois : 300 $ à la commande puis 50 $/mois pendant 11 mois (850 $ au total) ; 150 $ à la commande puis 65 $/mois pendant 11 mois (865 $ au total) ; ou 75 $/mois pendant 12 mois, sans mise de fond (900 $ au total).",
        },
        {
          question: "Combien de temps faut-il pour créer mon site ?",
          answer:
            "En général entre 2 et 4 semaines selon la complexité du projet, de la première discussion jusqu'à la mise en ligne. Un site vitrine simple peut être livré plus rapidement, tandis qu'une refonte complète ou un site e-commerce demandera un peu plus de temps.",
        },
        {
          question: "Et pour un projet plus complexe (e-commerce, fonctionnalités avancées) ?",
          answer:
            "L'offre de lancement à 300 $ CA couvre un site vitrine standard. Pour les projets plus complexes — boutique en ligne, fonctionnalités sur mesure, intégrations spécifiques — chaque besoin est différent, donc chaque soumission l'est aussi. Après notre premier échange, vous recevez une soumission claire et détaillée, sans frais cachés, adaptée à vos objectifs et à votre budget.",
        },
        {
          question: "Est-ce que je pourrai modifier mon site moi-même ?",
          answer:
            "Oui. Nous pouvons intégrer un système de gestion de contenu simple à utiliser, et nous vous formons personnellement à la mise à jour de vos textes, images et pages.",
        },
        {
          question: "Le site sera-t-il bien référencé sur Google ?",
          answer:
            "Chaque site que nous livrons est construit avec les meilleures pratiques SEO techniques : vitesse, structure sémantique, balises optimisées et compatibilité mobile. Nous proposons également un accompagnement SEO continu en option.",
        },
        {
          question: "Proposez-vous l'hébergement et le nom de domaine ?",
          answer:
            "Oui, nous gérons l'hébergement, le nom de domaine et les certificats de sécurité de bout en bout, pour que vous n'ayez rien à configurer techniquement.",
        },
        {
          question: "Que se passe-t-il après la mise en ligne du site ?",
          answer:
            "Nous restons disponibles pour le support, les ajustements et la maintenance. Plusieurs forfaits d'accompagnement sont proposés selon vos besoins à long terme.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Discutons de votre projet",
      description: "Décrivez-nous votre besoin, nous revenons vers vous sous 48h avec une proposition claire.",
      emailLabel: "Email",
      responseLabel: "Réponse rapide",
      responseValue: "Sous 48h ouvrées",
      zoneLabel: "Zone de service",
      zoneValue: "100% à distance, partout dans le monde",
      connectLabel: "Restons connectés",
      connectDescription:
        "Suivez-nous pour découvrir nos derniers projets, des inspirations web et les coulisses de l'agence.",
      quote: "« Votre vision, notre savoir-faire — ensemble, on construit un site qui convertit. »",
      quoteAuthor: "— L'équipe DualLane Digital",
      preferToTalk: {
        title: "Vous préférez en parler de vive voix ?",
        subtitle: "Appelez-nous directement",
        phoneLabels: ["Ligne principale", "Ligne secondaire"],
        availableLabel: "Disponibles :",
        days: "Lundi – Vendredi",
        hours: "9h00 – 18h00",
      },
      form: {
        nameLabel: "Nom complet",
        namePlaceholder: "Jean Tremblay",
        emailLabel: "Email",
        emailPlaceholder: "jean@entreprise.com",
        phoneLabel: "Téléphone",
        phoneOptional: "(optionnel)",
        phonePlaceholder: "+1 514 000 0000",
        projectTypeLabel: "Type de projet",
        projectTypes: ["Site vitrine", "Refonte de site", "E-commerce", "Optimisation SEO", "Autre"],
        businessTypeLabel: "Type de commerce",
        businessTypes: ["Boulangerie", "Restaurant", "Gym", "Café", "Dépanneur", "Magasin", "Autre"],
        messageLabel: "Votre message",
        messagePlaceholder: "Parlez-nous de votre projet, vos objectifs et vos délais...",
        submit: "Envoyer ma demande",
        submitting: "Envoi en cours...",
        successMessage: "Merci ! Votre demande a bien été envoyée, nous vous répondons sous 48h.",
        genericError: "Une erreur est survenue. Veuillez réessayer.",
      },
    },
    footer: {
      description:
        "DualLane Digital conçoit des sites web rapides, modernes et sur mesure pour les entreprises qui veulent convertir davantage de visiteurs en clients.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      legalLink: "Mentions légales",
      designedWithCare: "Conçu et développé avec soin.",
      allRightsReserved: "Tous droits réservés.",
    },
    legal: {
      title: "Mentions légales",
      sections: [
        {
          title: "Éditeur du site",
          content: "Le présent site est édité par DualLane Digital. Pour toute question, contactez-nous à l'adresse dualane.digital@gmail.com.",
        },
        {
          title: "Hébergement",
          content:
            "Ce site est hébergé par un fournisseur d'hébergement web professionnel garantissant la disponibilité et la sécurité des données.",
        },
        {
          title: "Propriété intellectuelle",
          content:
            "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) est la propriété exclusive de DualLane Digital, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
        },
        {
          title: "Données personnelles",
          content:
            "Les informations recueillies via le formulaire de contact sont utilisées uniquement dans le cadre du traitement de votre demande et ne sont transmises à aucun tiers. Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.",
        },
        {
          title: "Cookies",
          content:
            "Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucune donnée personnelle n'est collectée à des fins publicitaires sans votre consentement.",
        },
      ],
    },
  },
  en: {
    meta: {
      tagline: "Web design agency",
    },
    nav: {
      links: [
        { key: "whyUs", label: "Why Us", href: "#pourquoi-nous" },
        { key: "services", label: "Services", href: "#services" },
        { key: "pricing", label: "Pricing", href: "#tarifs" },
        { key: "portfolio", label: "Work", href: "#realisations" },
        { key: "process", label: "Process", href: "#processus" },
        { key: "faq", label: "FAQ", href: "#faq" },
      ],
      cta: "Get a Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Premium web design agency",
      titleBefore: "Websites that ",
      titleHighlight: "convert your visitors",
      titleAfter: " into clients",
      subtitle:
        "DualLane Digital builds fast, modern, custom websites for businesses that want an online presence as ambitious as they are.",
      cta: "Get a Quote",
      callCta: "Call Now",
      trustLine: "Response within 48h · No-obligation consultation",
      scrollCue: "Explore",
    },
    whyUs: {
      eyebrow: "Why choose us",
      title: "An agency built for performance",
      description:
        "Every site we deliver rests on the same foundations: speed, design, security, and support.",
      items: [
        {
          title: "Lightning-fast sites",
          description:
            "95+ Lighthouse scores, guaranteed. Every millisecond matters for your conversion rate.",
        },
        {
          title: "Modern design",
          description:
            "Clean, custom interfaces designed to reflect your brand's premium positioning.",
        },
        {
          title: "Mobile first",
          description:
            "Over 60% of traffic comes from mobile. Your pages are built to be flawless on every screen.",
        },
        {
          title: "SEO optimized",
          description:
            "Clean technical architecture, semantic markup, and performance built to rank your site well.",
        },
        {
          title: "Strong security",
          description:
            "Reliable hosting, SSL certificates, automatic backups, and best practices with every deployment.",
        },
        {
          title: "Responsive support",
          description:
            "A team available after launch to adjust, evolve, and maintain your site.",
        },
      ],
    },
    services: {
      eyebrow: "Our services",
      title: "Everything you need for your online presence",
      description:
        "From creation to maintenance, we cover every stage of your website's lifecycle.",
      items: [
        {
          title: "Showcase website",
          description:
            "A custom site that presents your business with clarity and impact, designed to convert visitors into clients.",
          features: ["Custom design", "Optimized content", "Contact form", "Launch included"],
        },
        {
          title: "Website redesign",
          description:
            "Is your current site holding you back? We modernize it entirely without losing your existing SEO.",
          features: ["Full audit", "New design", "Content migration", "SEO redirects"],
        },
        {
          title: "SEO optimization",
          description:
            "Technical structure, content, and performance optimized to improve your visibility on Google.",
          features: ["Technical audit", "Targeted keywords", "Semantic markup", "Ranking tracking"],
        },
        {
          title: "Maintenance",
          description:
            "Updates, fixes, and continuous monitoring so your site stays fast and secure.",
          features: ["Regular updates", "24/7 monitoring", "Backups", "Quick fixes"],
        },
        {
          title: "Hosting",
          description:
            "Fast, reliable hosting, managed end-to-end so you have nothing to configure.",
          features: ["High-performance servers", "SSL certificate", "Domain name", "99.9% uptime"],
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Clear pricing, no surprises",
      description:
        "Start your professional website with an affordable monthly payment — no big amount to pay upfront.",
      note: "Launch offer available for a limited time, in exchange for permission to feature your site in our portfolio.",
      items: [
        {
          name: "Plan A",
          heroPrice: "$50",
          heroSuffix: "/ month",
          subtitle: "for 11 months",
          downPayment: "$300 down at order time",
          features: ["Highest down payment of the 3 plans"],
          ctaLabel: "Choose This Plan",
        },
        {
          name: "Plan B",
          badge: "Most Popular",
          heroPrice: "$65",
          heroSuffix: "/ month",
          subtitle: "for 11 months",
          downPayment: "$150 down at order time",
          features: ["Lower down payment"],
          ctaLabel: "Choose This Plan",
        },
        {
          name: "Plan C",
          badge: "No Down Payment",
          heroPrice: "$75",
          heroSuffix: "/ month",
          subtitle: "for 12 months",
          downPayment: "$0 down at order time",
          features: ["The most accessible way to start"],
          ctaLabel: "Choose This Plan",
        },
      ],
    },
    portfolio: {
      eyebrow: "Our Work",
      title: "Projects designed to convert",
      description:
        "A look at premium sites built for demanding businesses across a range of industries. Explore a full, interactive demo for each one.",
      viewDemoCta: "View Live Demo",
      items: {
        construction: {
          title: "Construction",
          industry: "General Contracting",
          description: "Full-service construction company — free quote form, completed projects, and an emergency line.",
          features: ["Free quote form", "Before & after gallery", "24/7 emergency line"],
        },
        restaurant: {
          title: "Restaurant",
          industry: "Fine Dining Restaurant",
          description: "Modern French bistro — online reservations, interactive menu, and a chef spotlight.",
          features: ["Online reservations", "Interactive menu", "Food gallery"],
        },
        autoRepair: {
          title: "Auto Repair",
          industry: "Auto Repair Garage",
          description: "Full-service auto shop — diagnostics process, maintenance packages, and financing options.",
          features: ["Online booking", "Maintenance packages", "Financing options"],
        },
        barbershop: {
          title: "Hair Salon",
          industry: "Luxury Hair Salon",
          description: "Modern premium hair salon — price list, online appointments, and a full gallery.",
          features: ["Online appointments", "Price list", "Barber gallery"],
        },
        cafe: {
          title: "Café",
          industry: "Neighborhood Café",
          description: "Warm neighborhood café — coffee menu, bakery items, and a photo gallery.",
          features: ["Interactive menu", "Photo gallery", "Customer reviews"],
        },
        gym: {
          title: "Gym",
          industry: "Fitness Center",
          description: "Premium fitness club — membership plans, class schedule, and a BMI calculator.",
          features: ["Membership plans", "Class schedule", "BMI calculator"],
        },
      },
    },
    process: {
      eyebrow: "Our process",
      title: "A clear path, from first call to launch",
      description: "Four simple steps to turn your vision into a high-performing website.",
      stepLabel: "STEP",
      items: [
        {
          title: "Discussion",
          description:
            "We discuss your goals, your brand, and your needs to define the best strategy.",
        },
        {
          title: "Mockup",
          description:
            "We create a custom mockup of your site so you can validate the design before development.",
        },
        {
          title: "Development",
          description:
            "Your site is built with modern technology — fast, secure, and 100% responsive.",
        },
        {
          title: "Launch",
          description:
            "Deployment, final testing, and training so you're self-sufficient from day one.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      description: "Everything you need to know before getting started with DualLane Digital.",
      items: [
        {
          question: "How much does a website cost?",
          badge: "Launch Offer",
          answer:
            "For a limited time, we're building professional websites for just $300 CAD, in exchange for permission to feature the site in our portfolio. This offer lets us grow our portfolio while giving our first clients a modern, high-performing, professional website at an exceptional rate. The price includes a fully custom website tailored to your business — mobile-optimized, fast, secure, and designed to convert your visitors into clients. This offer is available for a limited time.",
          ctaLabel: "Get This Offer",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes — if you'd rather spread out the launch offer than pay $300 upfront, three 12-month options are available: $300 down then $50/month for 11 months ($850 total); $150 down then $65/month for 11 months ($865 total); or $75/month for 12 months with no down payment ($900 total).",
        },
        {
          question: "How long does it take to build my site?",
          answer:
            "Generally between 2 and 4 weeks depending on project complexity, from our first discussion to launch. A simple showcase site can be delivered faster, while a full redesign or e-commerce site will take a bit more time.",
        },
        {
          question: "What about a more complex project (e-commerce, advanced features)?",
          answer:
            "The $300 CAD launch offer covers a standard showcase website. For more complex projects — online stores, custom features, specific integrations — every need is different, so every quote is too. After our first conversation, you'll receive a clear, detailed quote — no hidden fees — tailored to your goals and budget.",
        },
        {
          question: "Will I be able to update my site myself?",
          answer:
            "Yes. We can integrate an easy-to-use content management system, and we personally train you to update your text, images, and pages.",
        },
        {
          question: "Will my site rank well on Google?",
          answer:
            "Every site we deliver is built with SEO best practices: speed, semantic structure, optimized tags, and mobile compatibility. We also offer ongoing SEO support as an option.",
        },
        {
          question: "Do you provide hosting and a domain name?",
          answer:
            "Yes, we handle hosting, the domain name, and security certificates end-to-end, so you have nothing to configure technically.",
        },
        {
          question: "What happens after my site goes live?",
          answer:
            "We remain available for support, adjustments, and maintenance. Several support plans are available depending on your long-term needs.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      description: "Tell us what you need — we'll get back to you within 48h with a clear proposal.",
      emailLabel: "Email",
      responseLabel: "Fast response",
      responseValue: "Within 48 business hours",
      zoneLabel: "Service area",
      zoneValue: "100% remote, worldwide",
      connectLabel: "Connect With Us",
      connectDescription:
        "Follow us to see our latest projects, website inspiration, and behind-the-scenes content.",
      quote: "“Your vision, our expertise — together, we'll build a site that converts.”",
      quoteAuthor: "— The DualLane Digital team",
      preferToTalk: {
        title: "Prefer to talk?",
        subtitle: "Call us directly",
        phoneLabels: ["Main line", "Second line"],
        availableLabel: "Available:",
        days: "Monday – Friday",
        hours: "9:00 AM – 6:00 PM",
      },
      form: {
        nameLabel: "Full name",
        namePlaceholder: "John Smith",
        emailLabel: "Email",
        emailPlaceholder: "john@company.com",
        phoneLabel: "Phone",
        phoneOptional: "(optional)",
        phonePlaceholder: "+1 514 000 0000",
        projectTypeLabel: "Project type",
        projectTypes: ["Showcase website", "Website redesign", "E-commerce", "SEO optimization", "Other"],
        businessTypeLabel: "Business type",
        businessTypes: ["Bakery", "Restaurant", "Gym", "Café", "Convenience Store", "Retail Shop", "Other"],
        messageLabel: "Your message",
        messagePlaceholder: "Tell us about your project, goals, and timeline...",
        submit: "Send my request",
        submitting: "Sending...",
        successMessage: "Thank you! Your request has been sent, we'll get back to you within 48h.",
        genericError: "Something went wrong. Please try again.",
      },
    },
    footer: {
      description:
        "DualLane Digital builds fast, modern, custom websites for businesses that want to convert more visitors into clients.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      legalLink: "Legal Notice",
      designedWithCare: "Designed and built with care.",
      allRightsReserved: "All rights reserved.",
    },
    legal: {
      title: "Legal Notice",
      sections: [
        {
          title: "Site Publisher",
          content:
            "This site is published by DualLane Digital. For any questions, contact us at dualane.digital@gmail.com.",
        },
        {
          title: "Hosting",
          content:
            "This site is hosted by a professional web hosting provider ensuring data availability and security.",
        },
        {
          title: "Intellectual Property",
          content:
            "All content on this site (text, images, logos, graphic elements) is the exclusive property of DualLane Digital, unless otherwise stated, and may not be reproduced without prior authorization.",
        },
        {
          title: "Personal Data",
          content:
            "Information collected through the contact form is used solely to process your request and is never shared with third parties. In accordance with applicable regulations, you have the right to access, correct, and delete your personal data.",
        },
        {
          title: "Cookies",
          content:
            "This site may use technical cookies necessary for it to function properly. No personal data is collected for advertising purposes without your consent.",
        },
      ],
    },
  },
};
