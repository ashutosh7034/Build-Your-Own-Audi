import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Experience = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath); // Dynamically load the model

  return (
    <PresentationControls
      speed={2}
      global
      zoom={1}
      polar={[-0.1, Math.PI / 2]}
    >
      <Stage environment={"city"} intensity={1} contactShadow={true} adjustCamera={false}>
        <primitive object={gltf.scene} />
      </Stage>
      <mesh rotation={[-Math.PI / 2,0,0]} position={[0,-0.69,0]}>
            <planeGeometry args={[170,170]}/>
            <MeshReflectorMaterial
              blur={[300,100]}
              resolution={1000}
              mixBlur={1}
              mixStrength={20}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.5}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
            />
        </mesh>
    </PresentationControls>
  );
};

export default Experience;
