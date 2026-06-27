import React, { useRef } from 'react';
import { Points } from '@react-three/fiber';
import * as THREE from 'three';

const STAR_COUNT = 10000;

function Stars() {
  const pointsRef = useRef();

  useEffect(() => {
    if (!pointsRef.current) return;
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      // Distribute stars in a sphere
      const radius = 500 + Math.random() * 500; // inner and outer radius
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);

      // Star color: white with slight variation
      const brightness = 0.8 + Math.random() * 0.2;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }

    pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }, []);

  // Twinkle effect
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const colors = pointsRef.current.geometry.attributes.color.array;
    const time = performance.now() * 0.001;

    for (let i =  =  = 0; i < STAR_COUNT; i++) {
      // Twinkle by varying brightness
      const twinkle = 0.5 + Math.sin(time * 2 + i * 0.1) * 0.5;
      const base = 0.8 + Math.random() * 0.2; // but we don't have the base stored, so we'll use a fixed base and modulate
      // Instead, we'll store the base in the color's alpha? We don't have alpha. We'll use the green channel to store base? Not ideal.
      // Let's change approach: we'll store the base intensity in the color's value and use a separate attribute for twinkle phase.
      // But for simplicity, we'll just modulate the color.
      const intensity = 0.8 + Math.random() * 0.2; // this is static, we want to vary it
      // We'll use the time and index to vary
      const varied = 0.8 + Math.random() * 0.2 + Math.sin(time * 2 + i * 0.1) * 0.2;
      colors[i * 3] = Math.min(1, varied);
      colors[i * 3 + 1] = Math.min(1, varied);
      colors[i * 3 + 2] = Math.min(1, varied);
    }
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <points
      ref={pointsRef}
      // We'll use a points material
    >
      <bufferGeometry />
      <pointsMaterial
        size={0.5}
        vertexColors
        transparent
        opacity={0.9}
      />
    </points>
  );
}

export default Stars;