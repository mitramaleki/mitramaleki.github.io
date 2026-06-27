import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Lantern(props) {
  return (
    <group {...props}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
        <meshStandardMaterial color={0x8b4513} />
      </mesh>
      {/* Glass */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 8]} />
        <meshStandardMaterial color={0xffffcc} opacity={0.8} transparent />
      </mesh>
      {/* Light inside */}
      <pointLight position={[0, 0.2, 0]} intensity={1} distance={5} decay={2} />
      {/* Top */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 8]} />
        <meshStandardMaterial color={0x8b4513} />
      </mesh>
      {/* Handle */}
      <mesh rotation={[Math.PI/2, 0, 0]}>
        <torusGeometry args={[0.1, 0.02, 8, 16]} />
        <meshStandardMaterial color={0x8b4513} />
      </mesh>
    </group>
  );
}

export default Lantern;