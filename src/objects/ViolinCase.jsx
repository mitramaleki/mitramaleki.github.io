import React from 'react';
import { Mesh } from '@react-three/fiber';
import * as THREE from 'three';

function ViolinCase(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 0.3, 0.5]} />
      <meshStandardMaterial color={0x8b0000} /> // dark red
    </mesh>
  );
}

export default ViolinCase;