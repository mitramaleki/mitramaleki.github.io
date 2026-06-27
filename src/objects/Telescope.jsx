import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Telescope(props) {
  return (
    <group {...props}>
      {/* Tube */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color={0x222222} />
      </mesh>
      {/* Eyepiece */}
      <mesh position={[0, 0, 0.45]}>
        <sphereGeometry args={[0.08, 0.08, 0.08]} />
        <meshStandardMaterial color={0x555555} />
      </mesh>
      {/* Stand */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
        <meshStandardMaterial color={0x555555} />
      </mesh>
      {/* Base */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 8]} />
        <meshStandardMaterial color={0x555555} />
      </mesh>
    </group>
  );
}

export default Telescope;