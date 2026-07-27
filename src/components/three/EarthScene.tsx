"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "@/components/three/ParticleField";
import { Earth } from "@/components/three/Earth";

export function EarthScene({
  particleCount,
  radius,
  offsetX,
  active = true,
}: {
  particleCount: number;
  radius: number;
  offsetX: number;
  active?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      frameloop={active ? "always" : "never"}
    >
      <ambientLight intensity={0.12} />
      <directionalLight position={[5, 2, 4]} intensity={3.2} color="#fff4e0" />

      <Suspense fallback={null}>
        <group position={[offsetX, 0, 0]}>
          <Earth radius={radius} />
        </group>
      </Suspense>

      <ParticleField count={particleCount} />
    </Canvas>
  );
}
