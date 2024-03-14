import { useState, useRef, Suspense, useContext } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { themeContext } from '../context';

const Stars = ({intensity}) => {
    const ref = useRef(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));
    const { isDark } = useContext(themeContext);

    useFrame((state, delta) => {
        if (state)
            ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...{}}>
                <PointMaterial
                    transparent
                    color={ isDark ? "#f272c8" : "#000"}
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = ({ children }) => {
    return (
        <div className="w-full h-full absolute">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;