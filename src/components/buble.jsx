"use client";
import React from "react";
import * as THREE from "three";
import {
  MeshDistortMaterial,
  GradientTexture,
  useCursor,
} from "@react-three/drei";
import { useState, useRef } from "react";

import { useFrame } from "@react-three/fiber";

const Buble = ({ position, scale, speed, stops, rotation }) => {
  const [hovered, setHovered] = useState(false);
  const refA = useRef(null);
  useCursor(hovered);
  useFrame(() => {
    refA.current.distort = THREE.MathUtils.lerp(
      refA.current.distort,
      hovered ? 0.7 : 0.2,
      hovered ? 0.1 : 0.01
    );
  });
  return (
    <>
      <mesh
        rotation={rotation}
        position={position}
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          ref={refA}
          speed={speed}
          transparent={true}
          opacity={1.2}
          distort={0.3}
          roughness={0}
          ior={1.2}
          transmission={1}
          thickness={0.5}
        >
          <GradientTexture
            colors={["#e897bb", "#70aff9"]}
            stops={stops}
            size={100}
          />
        </MeshDistortMaterial>
      </mesh>
    </>
  );
};

export default Buble;
