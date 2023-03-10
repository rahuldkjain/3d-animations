import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { formatDate } from "../utils/dates";

const timeArgs = {
  font: "./fonts/orbitron_regular.json",
  size: 0.5,
  height: 0.1,
  curveSegments: 8,
  bevelEnabled: true,
  bevelThickness: 0.01,
  bevelSize: 0.01,
  bevelOffset: 0,
  bevelSegments: 8,
};

const matcapMaterial = new THREE.MeshMatcapMaterial();

const Text = () => {
  const [time, setTime] = useState(formatDate(new Date()));
  const [matcapTexture] = useMatcapTexture("2A2A2A_B3B3B3_6D6D6D_848C8C", 256);

  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding;
    matcapTexture.needsUpdate = true;

    matcapMaterial.matcap = matcapTexture;
    matcapMaterial.needsUpdate = true;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime({ ...formatDate(new Date()) });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <>
      <Center position={[-2, 0, 0]}>
        <Text3D {...timeArgs} material={matcapMaterial}>
          {time.hour} :
        </Text3D>
      </Center>
      <Center position={[-0.5, 0, 0]}>
        <Text3D {...timeArgs} material={matcapMaterial}>
          {time.minutes} :
        </Text3D>
      </Center>
      <Center position={[1, 0, 0]}>
        <Text3D {...timeArgs} material={matcapMaterial}>
          {time.seconds}
        </Text3D>
      </Center>
      <Center position={[2.5, -0.1, 0]}>
        <Text3D {...timeArgs} size={0.4} material={matcapMaterial}>
          &nbsp;{time.period}
        </Text3D>
      </Center>
      <Center position={[1.5, -0.75, 0]}>
        <Text3D {...timeArgs} size={0.2} material={matcapMaterial}>
          {time.date} {time.month} {time.year}
        </Text3D>
      </Center>
    </>
  );
};

const Clock = () => {
  const timeGroup = useRef(null);

  useFrame((state, delta) => {
    if (timeGroup?.current) {
      timeGroup.current.rotation.y +=
        Math.sin(state.clock.elapsedTime) * delta * 0.05;
    }
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault />
      <group ref={timeGroup}>
        <Text />
      </group>
    </>
  );
};

export default Clock;
