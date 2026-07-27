import type { Metadata } from "next";
import { CafeDemo } from "./CafeDemo";

export const metadata: Metadata = {
  title: "Café — Démo de site par DualLane Digital",
  description: "Café de spécialité et pâtisseries maison dans une ambiance de quartier chaleureuse depuis 2018.",
};

export default function CafeDemoPage() {
  return <CafeDemo />;
}
