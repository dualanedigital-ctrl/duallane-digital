import type { Metadata } from "next";
import { ConstructionDemo } from "./ConstructionDemo";

export const metadata: Metadata = {
  title: "Construction — Démo de site par DualLane Digital",
  description: "Entrepreneur général complet pour projets résidentiels et commerciaux dans le Grand Montréal.",
};

export default function ConstructionDemoPage() {
  return <ConstructionDemo />;
}
