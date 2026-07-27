"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type { Group, Points as PointsImpl } from "three";

function randomInSphere(count: number, radius: number) {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return positions;
}

export function ParticleField({
  count = 1800,
  color = "#8b5cf6",
}: {
  count?: number;
  color?: string;
}) {
  const groupRef = useRef<Group>(null);
  const pointsRef = useRef<PointsImpl>(null);
  const positions = useMemo(() => randomInSphere(count, 4.2), [count]);
  const pointer = useThree((state) => state.pointer);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    const group = groupRef.current;
    if (!points || !group) return;

    points.rotation.y += delta * 0.035;
    points.rotation.x += delta * 0.01;

    const targetX = pointer.y * 0.15;
    const targetY = pointer.x * 0.15;
    group.rotation.x += (targetX - group.rotation.x) * 0.02;
    group.rotation.y += (targetY - group.rotation.y) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <Points ref={pointsRef} positions={positions} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={0.014}
          sizeAttenuation
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}
