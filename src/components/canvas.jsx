"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import dynamic from "next/dynamic";
import "../app/globals.css";

const Objetos = dynamic(() => import("./objetos"), {
  ssr: false,
});

const Escena = () => {
  return (
    <Canvas className="canvas-cont">
      <directionalLight intensity={2} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Objetos />
    </Canvas>
  );
};

export default Escena;
