import type { Metadata } from "next";
import { BarbershopDemo } from "./BarbershopDemo";

export const metadata: Metadata = {
  title: "Salon de coiffure — Démo de site par DualLane Digital",
  description: "Une vision moderne du salon de coiffure classique — coupes précises, rasage à la serviette chaude et une ambiance pensée pour vous.",
};

export default function BarbershopDemoPage() {
  return <BarbershopDemo />;
}
