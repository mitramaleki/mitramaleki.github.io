import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import StarsComponent from './Stars';
import Sky from './Sky';
import Ground from './Ground';
import Clouds from './Clouds';
import Fireflies from './Fireflies';
import Moon from './Moon';
import Telescope from '../objects/Telescope';
import StarsConstellation from '../objects/StarsConstellation';
import Notebook from '../objects/Notebook';
import Laptop from '../objects/Laptop';
import Satchel from '../objects/Satchel';
import FloatingLetters from '../objects/FloatingLetters';
import ViolinCase from '../objects/ViolinCase';
import HockeyStick from '../objects/HockeyStick';
import Flowers from '../objects/Flowers';
import Dog from '../objects/Dog';
import Lantern from '../objects/Lantern';
import Girl from '../objects/Girl';

// Helper to wrap an object with click handling
function WrapClickable({ Component, key, onObjectClick, ...props }) {
  const handleClick = () => {
    if (onObjectClick) {
      onObjectClick(key);
    }
  };

  return (
    <group onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Component {...props} />
    </group>
  );
}

function MainScene({ onObjectClick }) {
  const { size } = useThree();
  const cameraRef = useRef();

  // Scroll handling
  useEffect(() => {
    let scrollY = 0;
    const updateScroll = (e) => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // Camera position based on scroll
  useFrame((state, delta) => {
    // Map scrollY to a camera position
    // We'll define a few key points for the camera path
    const scrollProgress = Math.min(
      Math.max(window.scrollY / (document.body.scrollHeight - window.innerHeight), 0),
      1
    );

    // Define key points: [position, target] for different scroll positions
    const points = [
      // Initial position: looking at the girl and dog
      { position: [0, 1.6, 5], target: [0, 0, 0] },
      // Slightly moved to see the telescope
      { position: [-2, 1.8, 4], target: [-0.5, 0, -2] },
      // Move to see the stars (publications)
      { position: [0, 2, 0], target: [0, 5, -10] },
      // Move to see the notebook and laptop
      { position: [2, 1.5, 2], target: [0, 0.5, 0] },
      // Move to see the satchel and floating letters
      { position: [0, 3, -5], target: [0, 1, -8] },
      // Move to see the violin case and hockey stick
      { position: [3, 1.2, 0], target: [0, 0.5, 0] },
      // Move to see the flowers and dog
      { position: [0, 0.5, 3], target: [0, 0, 2] },
      // Move to see the lantern (contact)
      { position: [0, 2, 8], target: [0, 1.5, 10] },
      // Return to initial
      { position: [0, 1.6, 5], target: [0, 0, 0] }
    ];

    // Interpolate between points based on scrollProgress
    const pointIndex = scrollProgress * (points.length - 1);
    const lowerIndex = Math.floor(pointIndex);
    const upperIndex = Math.ceil(pointIndex);
    const fraction = pointIndex - lowerIndex;

    const currentPosition = points[lowerIndex].position.map(
      (start, i) => start + (points[upperIndex].position[i] - start) * fraction
    );
    const currentTarget = points[lowerIndex].target.map(
      (start, i) => start + (points[upperIndex].target[i] - start) * fraction
    );

    // Smoothly move the camera
    if (cameraRef.current) {
      cameraRef.current.position.lerp(
        new THREE.Vector3(...currentPosition),
        delta * 5
      );
      cameraRef.current.lookAt(new THREE.Vector3(...currentTarget));
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow
      >
        <shadowCamera
          left={-50}
          bottom={-50}
          near={0.1}
          far={500}
          right={50}
          top={50}
        />
      </directionalLight>

      {/* Sky and stars */}
      <Sky />
      <StarsComponent count={8000} size={0.01} velocity={0.1} depth={150} material={{ transparent: true, opacity: 0.8 }} />
      <Ground />
      <Clouds />
      <Fireflies />
      <Moon />

      {/* Objects with click handling */}
      <group>
        <WrapClickable Component={Telescope} key="telescope" onObjectClick={onObjectClick} position={[-10, 0, -5]} />
        <WrapClickable Component={StarsConstellation} key="stars" onObjectClick={onObjectClick} position={[0, 5, -10]} />
        <WrapClickable Component={Notebook} key="notebook" onObjectClick={onObjectClick} position={[-5, 0.5, -3]} />
        <WrapClickable Component={Laptop} key="laptop" onObjectClick={onObjectClick} position={[5, 0.5, -3]} />
        <WrapClickable Component={Satchel} key="satchel" onObjectClick={onObjectClick} position={[0, 0.5, -8]} />
        <WrapClickable Component={FloatingLetters} key="letters" onObjectClick={onObjectClick} position={[-8, 3, -15]} />
        <WrapClickable Component={ViolinCase} key="violin" onObjectClick={onObjectClick} position={[8, 0.5, -5]} />
        <WrapClickable Component={HockeyStick} key="hockey" onObjectClick={onObjectClick} position={[0, 0.5, 5]} />
        <WrapClickable Component={Flowers} key="flowers" onObjectClick={onObjectClick} position={[-3, 0, 7]} />
        <WrapClickable Component={Dog} key="dog" onObjectClick={onObjectClick} position={[0, 0, 0]} />
        <WrapClickable Component={Lantern} key="lantern" onObjectClick={onObjectClick} position={[0, 1.5, 10]} />
        <WrapClickable Component={Girl} key="girl" onObjectClick={onObjectClick} position={[0, 0, 0]} />
      </group>
    </>
  );
}

export default MainScene;