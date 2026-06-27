import React, { useRef } from 'react';
import { Group, mesh } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingLetters(props) {
  const groupRef = useRef();

  // Animate gentle floating
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {/* Create a few floating elements */}
      {Array.from({length: 5}).map((_, i) => (
        <mesh key={i} position={[ (i-2)*0.5, 0, 0 ]} rotation={[0, Math.PI/4, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color={['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffe66d', '#95e1d3'][i]} />
        </mesh>
      ))}
    </group>
  );
}

export default FloatingLetters;