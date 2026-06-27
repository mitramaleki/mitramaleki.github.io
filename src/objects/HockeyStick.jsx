import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function HockeyStick(props) {
  return (
    <group {...props}>
      {/* Shaft */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
        <meshStandardMaterial color={0x8b4513} />
      </mesh>
      {/* Blade */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.2]} />
        <meshStandardMaterial color={0x000000} />
      </mesh>
    </group>
  );
}

export default HockeyStick;