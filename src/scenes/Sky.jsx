import React from 'react';
import { Mesh } from '@react-three/fiber';
import * as THREE from 'three';

function Sky() {
  // Create a large sphere for the sky
  const geometry = new THREE.SphereGeometry(500, 60, 40);
  // Invert the normals so we can see inside
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00000a, // very dark blue
    side: THREE.BackSide,
  });

  return <mesh geometry={geometry} material={material} />;
}

export default Sky;