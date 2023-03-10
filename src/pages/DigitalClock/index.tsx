import { Canvas } from "@react-three/fiber";
import Clock from "../../animations/Clock";
import "./style.css";

const DigitalClock = () => {
  return (
    <Canvas
      camera={{
        fov: 105 - Math.floor((window.innerWidth - 320) / 320) * 10,
        near: 0.1,
        far: 200,
        position: [0.5, -1.5, 3],
      }}
    >
      <Clock />
    </Canvas>
  );
};

export default DigitalClock;
