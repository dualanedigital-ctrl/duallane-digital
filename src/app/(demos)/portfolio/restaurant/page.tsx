import type { Metadata } from "next";
import { RestaurantDemo } from "./RestaurantDemo";

export const metadata: Metadata = {
  title: "Restaurant — Démo de site par DualLane Digital",
  description: "Cuisine bistro française moderne au cœur du Vieux-Montréal, depuis 2015.",
};

export default function RestaurantDemoPage() {
  return <RestaurantDemo />;
}
