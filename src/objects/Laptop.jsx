import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Laptop(props) {
  return (
    <group {...props}>
      {/* Base */}
      <mesh>
        <boxGeometry args={[1.2, 0.1, 0.8]} />
        <meshStandardMaterial color={0x222222} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.2, 0.3]}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial color={0x000000} /> // screen black
        {/* Screen glow */}
        <mesh>
          <planeGeometry args={[1.1, 0.7]} />
          <meshBasicMaterial color={0x00ff00} transparent opacity={0.2} />
        </mesh>
      </mesh>
      {/* Keyboard */}
      <mesh position={[0, 0.05, 0.2]}>
        <boxGeometry args={[1.1, 0.05, 0.6]} />
        <meshStandardMaterial color={0x444444} />
      </mesh>
    </group>
  );
}

export default Laptop;