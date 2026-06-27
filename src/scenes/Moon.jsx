import React from 'react';
import { Mesh } from '@react-three/fiber';
import * as THREE from 'three';

function Moon() {
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  // Use a texture for the moon if available, otherwise a color
  const material = new THREE.MeshStandardMaterial({
    color: '#f0e68c', // khaki
    roughness: 0.8,
    metalness: 0.1,
  });

  return (
    <mesh
      position={[0, 50, -30]} // position the moon in the sky
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color="#f0e68c" roughness={0.8} metalness={0.1} />
    </mesh>
  );
}

export default Moon;