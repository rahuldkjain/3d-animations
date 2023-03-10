import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import Clock from "../../animations/Clock";
import Loader from "../../components/Loader";
import "./style.css";

const DigitalClock = () => {
  useEffect(() => {
    document.title = "Digital Clock Three.js animation | rahuldkjain";
  }, []);
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default DigitalClock;
