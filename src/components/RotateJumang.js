import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

const Jumang3D = React.lazy(() => import('@/components/Jumang3D'));

export default function RotateJumang() {
    return (
        <Canvas camera={{ position: [0, 12, 1], fov: 50 }}>
            <ambientLight intensity={0.1} />
            <directionalLight
                castShadow
                position={[0, 100, 0]}
                intensity={0.7}
                shadow-mapSize-width={1027}
                shadow-mapSize-height={720}
                shadow-camera-far={90}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            {/*some point light*/}
            <pointLight position={[-10, 20, -10]} intensity={0.5} />
            <pointLight position={[30, -40, 0]} intensity={0.5} />
            <Suspense fallback={null}>
                <Jumang3D />
            </Suspense>
        </Canvas>
    );
};