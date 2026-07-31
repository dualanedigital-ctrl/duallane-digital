"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Mesh } from "three";

const ROTATION_SECONDS = 78;
const CLOUDS_SPEED_MULTIPLIER = 1.35;
const AXIAL_TILT = THREE.MathUtils.degToRad(23.4);
const SPECULAR_COLOR = new THREE.Color("#9fc6ff");

export function Earth({ radius = 1.4 }: { radius?: number }) {
  const earthRef = useRef<Mesh>(null);
  const cloudsRef = useRef<Mesh>(null);

  const [dayMap, normalMap, specularMap, cloudsMap] = useTexture(
    [
      "/textures/earth/earth_daymap.webp",
      "/textures/earth/earth_normal.jpg",
      "/textures/earth/earth_specular.webp",
      "/textures/earth/earth_clouds.webp",
    ],
    ([day, , , clouds]) => {
      day.colorSpace = THREE.SRGBColorSpace;
      clouds.colorSpace = THREE.SRGBColorSpace;
    }
  );

  useFrame((_, delta) => {
    const spin = (delta * Math.PI * 2) / ROTATION_SECONDS;
    if (earthRef.current) earthRef.current.rotation.y += spin;
    if (cloudsRef.current) cloudsRef.current.rotation.y += spin * CLOUDS_SPEED_MULTIPLIER;
  });

  return (
    <group rotation={[0, 0, AXIAL_TILT]}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={SPECULAR_COLOR}
          shininess={22}
        />
      </mesh>

      <mesh ref={cloudsRef} scale={1.01}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshLambertMaterial map={cloudsMap} transparent opacity={0.5} depthWrite={false} />
      </mesh>
    </group>
  );
}
