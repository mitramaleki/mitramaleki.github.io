import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Notebook(props) {
  return (
    <group {...props}>
      {/* Left page */}
      <mesh position={[-0.25, 0, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.01]} />
        <meshStandardMaterial color={0xfafafa} />
      </mesh>
      {/* Right page */}
      <mesh position={[0.25, 0, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.01]} />
        <meshStandardMaterial color={0xfafafa} />
      </mesh>
      {/* Cover */}
      <mesh position={[0, 0, -0.015]}>
        <boxGeometry args={[0.5, 0.62, 0.03]} />
        <meshStandardMaterial color={0x8b4513} /> // saddle brown
      </mesh>
      {/* Spine */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.05, 0.62, 0.03]} />
        <meshStandardMaterial color={0x654321} />
      </mesh>
    </group>
  );
}

export default Notebook;