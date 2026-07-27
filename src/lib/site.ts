export const siteConfig = {
  name: "DualLane Digital",
  tagline: "Agence de création de sites web",
  description:
    "DualLane Digital conçoit des sites web rapides, modernes et sur mesure pour les entreprises qui veulent convertir davantage de visiteurs en clients.",
  url: "https://duallanedigital.com",
  email: "dualane.digital@gmail.com",
  phone: "+14383082443",
  phones: [
    { tel: "+14383082443", display: "(438) 308-2443" },
    { tel: "+15144582646", display: "(514) 458-2646" },
  ],
  instagramHandle: "@dualane.digital",
  social: {
    instagram: "https://instagram.com/dualane.digital",
    linkedin: "https://linkedin.com/company/duallanedigital",
    x: "https://x.com/duallanedigital",
  },
};

import { unsplash, construction, restaurant, autoRepair, barbershop, cafe, gym } from "./demo-content/images";

export const whyUsIcons = ["Zap", "Sparkles", "Smartphone", "Search", "ShieldCheck", "HeadphonesIcon"];

export const servicesIcons = ["LayoutTemplate", "RefreshCcw", "TrendingUp", "Wrench", "Server"];

export type PortfolioProject = {
  id: string;
  image: string;
  demoPath: string;
};

export const portfolio: PortfolioProject[] = [
  { id: "construction", image: unsplash(construction.crew, 800, 600), demoPath: "/portfolio/construction" },
  { id: "restaurant", image: unsplash(restaurant.diningRoom, 800, 600), demoPath: "/portfolio/restaurant" },
  { id: "autoRepair", image: unsplash(autoRepair.workingMachinery, 800, 600), demoPath: "/portfolio/auto-repair" },
  { id: "barbershop", image: unsplash(barbershop.clientInChair, 800, 600), demoPath: "/portfolio/barbershop" },
  { id: "cafe", image: unsplash(cafe.mugTable, 800, 600), demoPath: "/portfolio/cafe" },
  { id: "gym", image: unsplash(gym.interior, 800, 600), demoPath: "/portfolio/gym" },
];

export const processSteps = [
  { step: "01", icon: "MessagesSquare" },
  { step: "02", icon: "PenTool" },
  { step: "03", icon: "Code2" },
  { step: "04", icon: "Rocket" },
];
