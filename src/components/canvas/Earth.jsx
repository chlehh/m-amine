import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ spin }) => {
  const earth = useGLTF("./planet/scene.gltf");
  const ref = useRef();

  // Touch screens get no OrbitControls, so the planet turns on its own.
  useFrame((state, delta) => {
    if (!spin) return;
    ref.current.rotation.y -= delta * 0.2;
    state.invalidate();
  });

  return (
    <primitive ref={ref} object={earth.scene} scale={2.5} position-y={0} />
  );
};

const EarthCanvas = () => {
  const [isTouch] = useState(() => window.matchMedia("(pointer: coarse)").matches);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        // Same framing the locked OrbitControls produce (camera on the horizontal plane)
        position: isTouch ? [-4.33, 0, 6.5] : [-4, 3, 6],
      }}
      onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isTouch && (
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
        <Earth spin={isTouch} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
