import "./style.css";
import { Canvas } from "@react-three/fiber";
import Portal from "./Portal/Portal";
import { Html } from "@react-three/drei";

const Environment = () => {
  return (
    <>
      <Canvas
        className="canvas relative"
        camera={{ position: [0, 0.4, 0.25], fov: 50 }}
      >
        {/* <ambientLight intensity={0.5} /> */}
        <color attach="background" args={["#eab539"]} />
        <Portal />
      </Canvas>
    </>
  );
};

export default Environment;
