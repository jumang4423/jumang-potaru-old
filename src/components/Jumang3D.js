import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { softShadows } from "drei";
import * as THREE from "three";

const model = React.lazy(() => import("@/models/jumang.glb"));

//generic softShadows
softShadows();

export default function Jumang3D() {
  //group for useRef
  const group = useRef(null);

  //load model datas from here
  const { nodes, materials } = useLoader(GLTFLoader, "");
  materials.material02 = new THREE.MeshToonMaterial({ color: 'rgb(76, 30, 41)', roughtness: 0.1 });
  //everyframe multiplation
  useFrame(() => (
    group.current.rotation.z += 0.01
  ));

  return (
    <motion.group
      ref={group}
      initial={
        { opacity: 0, scale: 0 }}
      animate={
        { opacity: 1, scale: 1 }}>
      <mesh material={materials.material} geometry={nodes.square.geometry} position={[0.06, -1.91, 0.75]} scale={[1.98, 2, 1.98]} />
      <mesh material={new THREE.MeshBasicMaterial({ color: 'hotpink', roughtness: 1.0 })} geometry={nodes.sphere.geometry} position={[-1.7, -0.09, 1.69]} />
      <mesh material={materials.material02} geometry={nodes.square04.geometry} position={[0.9, -0.44, -0.02]} scale={[0.3, 0.3, 0.3]} />
      <mesh material={materials.material02} geometry={nodes.square05.geometry} position={[-1.12, -0.44, -0.04]} scale={[0.22, 0.22, 0.22]} />
      <mesh material={materials.material02} geometry={nodes.square06.geometry} position={[0.92, -0.14, 1.14]} scale={[0.13, 0.13, 0.13]} />
      <mesh material={materials.material02} geometry={nodes.square07.geometry} position={[-1.16, -0.14, 1.11]} scale={[0.13, 0.13, 0.13]} />
      <mesh
        material={materials.material02}
        geometry={nodes.square08.geometry}
        position={[2.28, -0.22, 1.71]}
        rotation={[0, 1.19, 0]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh
        material={materials.material02}
        geometry={nodes.square09.geometry}
        position={[2.11, -0.22, 1.96]}
        rotation={[0, 1.19, 0]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh
        material={materials.material02}
        geometry={nodes.square10.geometry}
        position={[2.12, -0.22, 2.28]}
        rotation={[0, 1.09, 0]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh
        material={materials.material02}
        geometry={nodes.square11.geometry}
        position={[-1.87, -0.18, 2.3]}
        rotation={[0, -1.56, 0]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh
        material={materials.material02}
        geometry={nodes.square12.geometry}
        position={[-1.96, -0.16, 1.98]}
        rotation={[Math.PI, -1.36, Math.PI]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh
        material={materials.material02}
        geometry={nodes.square13.geometry}
        position={[-1.96, -0.16, 1.64]}
        rotation={[Math.PI, -1.09, Math.PI]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh material={materials.material02} geometry={nodes.sphere2.geometry} position={[-0.2, -0.04, 1.62]} scale={[0.23, 0.23, 0.23]} />
    </motion.group>
  );
};