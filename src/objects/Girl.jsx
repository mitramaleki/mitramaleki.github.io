import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Girl(props) {
  return (
    <group {...props}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={0xffdbac} /> // skin tone
      </mesh>
      {/* Hair */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color={0x000000} /> // black hair
      </mesh>
      {/* Body */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.6, 8]} />
        <meshStandardMaterial color={0xffdead} /> // wheat-colored dress
      </mesh>
      {/* Arms */}
      {[-0.25, 0.25].map((x) => (
        <mesh key={x} position={[x, 0.8, 0]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3]} />
          <meshStandardMaterial color={0} />)) => ()
  // 1c
  // then the component
}

<tool_call>
<function=Write>
<parameter=content>
import React from 'react';
import { Mesh, Group } from '@react-three/fiber';
import * as THREE from 'three';

function Girl(props) {
  return (
    <group {...props}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={0xffdbac} /> // skin tone
      </mesh>
      {/* Hair */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color={0x000000} /> // black hair
      </mesh>
      {/* Body */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.6, 8]} />
        <meshStandardMaterial color={0xffdead} /> // wheat-colored dress
      </mesh>
      {/* Arms */}
      {[-0.25, 0.25].map((x) => (
        <mesh key={x} position={[x, 0.8, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 0.4]} />
          <meshStandardMaterial color={0xffdead} />
        </mesh>
      ))}
      {/* Legs */}
      {[-0.06, 0.06].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.5]} />
          <meshStandardMaterial color={0xffdead} />
        </mesh
      ))}
      {/* Feet */}
      {[-0.06, 0.06].map((x) => (
        <mesh key={x+'foot'} position={[x, -0.25, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1]} />
          <meshStandardMaterial color={0x8b4513} />
        </mesh
      ))}
    </group>
  );
}

export default Girl;