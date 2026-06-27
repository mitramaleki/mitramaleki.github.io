import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Dog(props) {
  return (
    <group {...props}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 0.5, 8]} />
        <meshStandardMaterial color={0x000000} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.3, 0.2]}>
        <sphereGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color={0x000000} />
      </mesh>
      {/* Ears */}
      <mesh position={[-0.1, 0.4, 0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color={0x000000} />
      </mesh>
      <mesh position={[{0.1, 0.4, 0.1]}>
        <boxGeometry args={[0.05, 0.1, 0.05]} />
        <meshStandardMaterial color={0x000000} />
      </mesh>
      {/* Legs */}
      {[-0.15, 0.15].map((x) => (
        <mesh key={x} position={[x, -0.2, 0.1]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2]} />
          <meshStandardMaterial color={0x000000} />
        </mesh>
      ))}
      {[-0.15, 0.15].map((x) => (
        <mesh key={x+'back'} position={[x, -0.2, -0.2]}>
          <cylinderGeometry args={[0.03, 0.03, 0.2]} />
          <meshStandardMaterial color={0x000000} />
        </mesh>
      ))}
      {/* Tail */}
      <mesh position={[0, 0.1, -0.3]}>
        <cylinderGeometry args={[0.02, 0.02, 0.15]} />
        <meshStandardMaterial color={0x000000} />
      </mesh>
    </group>
  );
}

export default Dog;