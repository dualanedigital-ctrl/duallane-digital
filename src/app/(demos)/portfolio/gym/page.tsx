import type { Metadata } from "next";
import { GymDemo } from "./GymDemo";

export const metadata: Metadata = {
  title: "Gym — Démo de site par DualLane Digital",
  description: "Gym de musculation et de conditionnement premium avec un encadrement expert et une communauté qui vous pousse plus loin.",
};

export default function GymDemoPage() {
  return <GymDemo />;
}
