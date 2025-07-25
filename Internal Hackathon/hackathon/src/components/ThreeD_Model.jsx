import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function CanModel() {
  const { scene } = useGLTF("/can.glb"); // relative to public/
  const ref = useRef();

  useEffect(() => {
    ref.current.rotation.x = THREE.MathUtils.degToRad(-5);
  }, []);

  const rollAxis = new THREE.Vector3(0, 1, 0).normalize(); // 45° tilt between X and Y

  useFrame(() => {
    ref.current.rotateOnAxis(rollAxis, 0.03); // adjust speed
  });

  return <primitive object={scene} ref={ref} scale={2.5} />;
}
