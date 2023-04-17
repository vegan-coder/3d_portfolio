import { Suspense } from "react"
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoder from "../Loader";

const Earth = () => {

const earth = useGLTF("./planet/scene.gltf")

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
      // position-x={0}
      // rotation-x={0}
    />
  );
}


const EarthCanvas = () => {
  return <Canvas
  shadows
  frameloop="demand"
  gl={{preserveDrawingBuffer: true}}
  camera={{
    fov: 45,
    near: 0.1,
    far: 200,
    position: [0, 3, 6]
  }}
  >
<Suspense fallback={<CanvasLoder />}>
  <OrbitControls
  autoRotate={true}
  enableZoom={true}
  // maxPolarAngle={Math.PI / 2}
  // minPolarAngle={Math.PI / 2}
  />
  <Earth />
</Suspense>
  </Canvas>
}

export default EarthCanvas;
