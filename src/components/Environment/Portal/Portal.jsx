import "./style.css";
import { useEffect, useRef } from "react";
import { shaderMaterial, useGLTF, useTexture,Sparkles } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import portalVertexShader from "../shaders/portal/vertex.js";
import portalFragmentShader from "../shaders/portal/fragment.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//material used for the portal
const PortalMaterial = shaderMaterial(
    {
      uTime: 0,
      uColorStart: new THREE.Color("#e07bec"),
      uColorEnd: new THREE.Color("#4e0354"),
    },
    portalVertexShader,
    portalFragmentShader
  );
  
  extend({ PortalMaterial });


const Portal = () => {
  const { nodes } = useGLTF("./model/portal.glb");
  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;
  const { camera } = useThree();
  const portal = useRef();
  const portalMaterial = useRef();

    //getting the canvas element
    const trigger = document.getElementById("hero");
    const tl = useRef();

    //controlling the camera with gsap
    useGSAP(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "bottom 50%",
          // markers: true,
          scrub: 1,
          pin: true,
        },
      });
  
      tl.current
        .to(
          camera.position,
          {
            x: 0,
            y: 0.4,
            z: 2.5,
            duration: 4,
          },
          "a"
        )
        .to(
          camera.rotation,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 4,
          },
          "a"
        );
    }, []);
  
  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta * 3;
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* <OrbitControls makeDefault /> */}
      <group>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
          ref={portal}
        >
          <meshBasicMaterial color="#ffffe5" />
          <portalMaterial ref={portalMaterial} />
        </mesh>
        <Sparkles
          size={6}
          scale={[2, 0.01, 3]}
          position-y={0.3}
          speed={0.5}
          count={40}
        />
      </group>
    </>
  );
};
export default Portal;
