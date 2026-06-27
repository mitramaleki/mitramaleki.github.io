import React, { useRef } from 'react';
import { Points } from '@react-three/fiber';
import * as THREE from 'three';

function StarsConstellation(props) {
  const pointsRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Create a constellation of stars (points)
  useEffect(() => {
    if (!pointsRef.current) return;
    const count = 20;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Create a constellation shape (e.g., Orion-like)
    const points = [
      [0, 0, 0],
      [0.5, 0.5, 0],
      [1, 0, 0],
      [0.5, -0.5, 0],
      [0, -0.5, 0],
      [-0.5, -0.5, 0],
      [-1, 0, 0],
      [-0.5, 0.5, 0],
      [0.25, 0.25, 0],
      [-0.25, 0.25, 0],
      [0.25, -0.25, 0],
      [-0.25, -0.25, 0],
      [0.75, 0.25, 0],
      [0.75, -0.25, 0],
      [-0.75, 0.25, 0],
      [-0.75, -0.25, 0],
      [0, 0.75, 0],
      [0, -0.75, 0],
      [0.5, 0.75, 0],
      [-0.5, 0.75, 0]
    ];

    for (let i = 0; i < Math.min(points.length, count); i++) {
      positions[i * 3] = points[i][0];
      positions[i * 3 + 1] = points[i][1];
      positions[i * 3 + 2] = points[i][2] || 0;

      // Star color: white with a bit of variation
      const brightness = 0.8 + Math.random() * 0.2;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness;
    }

    pointsRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsRef.current.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }, []);

  // Handle hover (we'll use a simple approach: if the camera is close, we consider it hovered)
  // For a proper hover, we'd need raycasting, but for now, we'll just animate on a timer to simulate interaction
  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    pointsRef.current.scale.set(scale, scale, scale);
  });

  return (
    <group {...props}>
      <points
        ref={pointsRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <bufferGeometry />
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
        />
      </points>
      {/* Show lines when hovered */}
      {hovered && (
        <>
          {/* We'll draw lines between the points */}
          {[
            [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,0],
            [0,8], [2,9], [4,10], [6,11],
            [8,12], [9,13], [10,14], [11,15],
            [12,16], [13,17], [14,18], [15,19]
          ].map(([a,b], i) => (
            <mesh key={i} >
              <bufferGeometry attribute="position" array={new Float32Array([
                /* point a */
                0,0,0, // placeholder, we'll need to compute from the points array
                /* point b */
                0,0,0
              ])} />
              <meshLineMaterial
                color={0xffd700}
                lineWidth={0.02}
                resolution={new THREE.Vector2(window.innerWidth, window.innerHeight)}
              />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
}

export default StarsConstellation;