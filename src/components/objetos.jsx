"use client";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Buble from "./buble";

const Objetos = (props) => {
  const { nodes, materials } = useGLTF("/bubbleess.glb");
  const { viewport } = useThree();

  return (
    <>
      <group scale={viewport.width / 800}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={250}
          position={[-250, -30, -60]}
        >
          <meshStandardMaterial color={"#fcf9e5"}></meshStandardMaterial>
        </mesh>

        <Buble
          position={[-190, 90, 10]}
          scale={100}
          speed={4}
          stops={[0.3, 0.9]}
          rotation={[0, 0, 0]}
        />

        <Buble
          position={[250, 100, 10]}
          scale={150}
          speed={3}
          stops={[0.3, 0.7]}
          rotation={[7, 0, 0]}
        />

        <Buble
          position={[50, -10, 0]}
          scale={40}
          speed={3}
          stops={[0.4, 1]}
          rotation={[0, 0, 0]}
        />

        <Buble
          position={[190, -160, 10]}
          scale={100}
          speed={4}
          stops={[0.2, 0.7]}
          rotation={[0, -8, 4]}
        />

        <Buble
          position={[0, 100, 0]}
          scale={60}
          speed={3}
          stops={[0.5, 0.7]}
          rotation={[0, 0, 0]}
        />
        <Buble
          position={[-70, -80, 0]}
          scale={85}
          speed={4}
          stops={[0.3, 0.6]}
          rotation={[0, 0, 0]}
        />
        <Buble
          position={[-330, -130, 0]}
          scale={100}
          speed={3}
          stops={[0.3, 0.6]}
          rotation={[0, -8, 1]}
        />
      </group>
    </>
  );
};
useGLTF.preload("/cristal.glb");
export default Objetos;
