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
      <hemisphereLight intensity={1.5} groundColor={new THREE.Color("black")} />
      <spotLight
        ref={spotLightRef}
        angle={0.3}
        penumbra={1}
        intensity={5}
        castShadow
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2, -1.6] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
