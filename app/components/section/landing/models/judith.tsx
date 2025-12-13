"use client";

import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../landing.module.css"

const JudithModel = () => {
    const {scene, animations} = useGLTF("models/judith.gltf");
    const { actions } = useAnimations(animations, scene);

    useEffect(()=>{
        const first = Object.values(actions)[0];
        const second = Object.values(actions)[1];
        if (first) {
            first.play().setLoop(THREE.LoopRepeat, Infinity);
        }
        if (second) {
            second.play().setLoop(THREE.LoopRepeat, Infinity);
        }
    }, [actions])

    return <primitive object={scene}/>
}

const JudithCanvas = () =>{

    const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "50px",
  });

    return <div ref={ref} className={styles.judithCanvas}>
    {inView && (<Canvas camera={{ position: [0, 0, 60], fov: 1 }} 
    dpr={[1, 1.5]}
    gl={{ antialias: false, powerPreference: "low-power" }}
    shadows={false}
    frameloop={inView ? "always" : "never"}
    >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={3.5} />
        <Suspense>
        <JudithModel></JudithModel>
        </Suspense>
    </Canvas>)}
    </div>
}

export default JudithCanvas