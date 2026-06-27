import React from 'react';
import { Mesh } from '@react-three/fiber';
import * as THREE from 'three';

function Ground() {
  // Create a plane geometry
  const geometry = new THREE.PlaneGeometry(200, 200);
  // Rotate to be horizontal
  const material = new THREE.MeshStandardMaterial({
    color: '#2e8b57', // sea green as a base for grass
    roughness: 0.8,
  });

  return (
    <mesh rotation={[ -Math.PI / 2, 0, 0 ]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#2e8b57" roughness={0.8} />
    </mesh>
  );
}

export default Ground;