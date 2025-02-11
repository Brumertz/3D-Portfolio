import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const spotLightRef = useRef();

  useEffect(() => {
    if (spotLightRef.current) {
      spotLightRef.current.lookAt(new THREE.Vector3(0, 0, 0));
      spotLightRef.current.shadow.mapSize.set(1024, 1024);
    }
  }, []);

  return (
    <mesh receiveShadow castShadow>   
      <hemisphereLight intensity={3.5} groundColor={new THREE.Color("black")} />
      <spotLight
        ref={spotLightRef}
        intensity={7}
        angle={3}
        castShadow
      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.8}
        position={isMobile ? [0, -1.9, -1.5] : [0, -4, -1.2]}
        rotation={[-0.001, -0.2, -0.1]}
        castShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas 
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
