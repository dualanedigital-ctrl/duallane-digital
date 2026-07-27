import type { Metadata } from "next";
import { AutoRepairDemo } from "./AutoRepairDemo";

export const metadata: Metadata = {
  title: "Garage — Démo de site par DualLane Digital",
  description: "Réparation et entretien automobile complet pour toutes marques et modèles — diagnostics honnêtes, prix justes.",
};

export default function AutoRepairDemoPage() {
  return <AutoRepairDemo />;
}
