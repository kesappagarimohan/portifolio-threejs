import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import useWindowDimensions from "../../hooks";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }: any) => {
  const { width } = useWindowDimensions();
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight
        position={[-20, 50, 7]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={20} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={
          isMobile
            ? [0, -3.25, -2.5]
            : width <= 1025 && width > 500
            ? [0, -3.25, -1.5]
            : [0, -4.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = ({ isMobile }: any) => (
  <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 10], fov: 25 }}
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

export default ComputerCanvas;
