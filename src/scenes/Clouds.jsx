import React, { useRef } from 'react';
import { Mesh } from '@react-three/fiber';
import * as THREE from 'three';

function Clouds() {
  const meshRef = useRef();

  // Animate clouds drifting slowly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.01; // slow drift
    }
  });

  // Create a few cloud quads
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={i === 0 ? meshRef : undefined}
          scale={[
            10 + Math.random() * 10,
            5 + Math.random() * 5,
            1,
          ]}
          position={[
            -20 + i * 20,
            10 + Math.random() * 5,
            -30 + Math.random() * 20,
          ]}
          rotation={[0, Math.random() * Math.PI, 0]}
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={0xffffff}
            opacity={0.3}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
}

export default Clouds;