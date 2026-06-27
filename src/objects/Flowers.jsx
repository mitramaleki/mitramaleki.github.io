import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Flowers(props) {
  return (
    <group {...props}>
      {/* Each flower: a center and petals */}
      {Array.from({length: 5}).map((_, i) => (
        <group key={i} position={[ (i-2)*0.5, 0, 0 ]}>
          {/* Center */}
          <mesh>
            <sphereGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial color={0xffd700} />
          </mesh>
          {/* Petals: we'll use flat quads around the center */}
          {Array.from({length: 5}).map((_, j) => (
            <mesh
              key={j}
              rotation={[0, 0, (j * Math.PI * 2) / 5]}
              position={[0.2, 0, 0]}
            >
              <planeGeometry args={[0.3, 0.1]} />
              <meshStandardMaterial color={['#ff69b4', '#ff1493', '#db7093', '#ffb6c1', '#ffc0cb'][j]} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export default Flowers;