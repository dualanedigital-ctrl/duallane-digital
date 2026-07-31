import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { LegalContent } from "./LegalContent";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales de ${siteConfig.name}.`,
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return <LegalContent />;
}
