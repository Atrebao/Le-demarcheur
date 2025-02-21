import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three";
import { Dialog, DialogContent, DialogTrigger, DialogTitle  } from "@/components/ui/dialog";

export default function Image3DViewer({ imageUrl }) {
  return (
    <Dialog>
      <DialogTrigger>
        <img
          src={imageUrl}
          alt="Preview"
          className="w-full h-auto rounded-lg cursor-pointer shadow-md"
        />
      </DialogTrigger>
      <DialogContent className="w-full max-w-4xl h-[500px] bg-white rounded-lg shadow-lg p-4">
      <DialogTitle className="sr-only">3D Image Viewer</DialogTitle>
        <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 3] }}>
            <OrbitControls enableZoom={true} minDistance={1} maxDistance={5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Image3D imageUrl={imageUrl} />
          </Canvas>
        </Suspense>
      </DialogContent>
    </Dialog>
  );
}

function Image3D({ imageUrl }) {
  const texture = useLoader(TextureLoader, imageUrl);
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      {/* Plan légèrement bombé pour un effet 3D */}
      <planeGeometry args={[2, 2, 20, 20]} />  
      <meshStandardMaterial 
        map={texture} 
        displacementMap={texture}  // Ajoute du relief selon l'image
        displacementScale={0.1}   // Réglage de l'intensité du relief
      />
    </mesh>
  );
}
