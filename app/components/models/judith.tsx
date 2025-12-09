"use client";

import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const JudithModel = () => {
    const {scene, animations} = useGLTF("models/judith.gltf");
    const { actions } = useAnimations(animations, scene);

    useEffect(()=>{
        const first = Object.values(actions)[0];
        if (first) {
            first.play().setLoop(THREE.LoopRepeat, Infinity);
        }
    }, [actions])

    return <primitive object={scene} />
}

const JudithCanvas = () =>{
    return <div style={{ width: "100%", height: "700px" }} className="judithCanvas">
    <Canvas camera={{ position: [0, 0, 60], fov: 1 }} 
    dpr={[1, 1.5]}
    gl={{ antialias: false, powerPreference: "low-power" }}
    shadows={false}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3.5} />
        <JudithModel></JudithModel>
    </Canvas>
    </div>
}

export default JudithCanvas