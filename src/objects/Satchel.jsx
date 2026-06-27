import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Satchel(props) {
  return (
    <group {...props}>
      {/* Main body */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 8]} />
        <meshStandardMaterial color={0x8b4513} />
      </mesh>
      {/* Flap */}
      <mesh position={[0, 0, 0.35]}>
        <boxGeometry args={[0.8, 0.1, 0.5]} />
        <meshStandardMaterial color={0x654321} />
      </mesh>
      {/* Strap */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
        <meshStandardMaterial color={0x8b4513} />
      </mesh>
      {/* Buckle */}
      <mesh position={[0, 0.5, 0.3]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color={0xffd700} />
      </mesh>
    </group>
  );
}

export default Satchel;