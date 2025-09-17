import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, MeshTransmissionMaterial, Environment, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFBO } from "@react-three/drei";

import { DepthBG } from "./DepthBG";

export const GlassModel = () => {
  const roughness = 0.01;
  const transmission = 1;
  const showOriginal = false;
  const color = "#fff";

  const buffer = useFBO();

  const ref0 = useRef<THREE.Group>(null);
  const ref1 = useRef<THREE.Mesh>(null);
  const material = useRef<any>(null);

  const gifTexture = useLoader(THREE.TextureLoader, "/math.png");

  useFrame((state) => {
    if (ref0.current && ref1.current) {
      ref0.current.visible = true;
      ref1.current.visible = false;

      state.gl.setRenderTarget(buffer);
      state.gl.render(state.scene, state.camera);
      state.gl.setRenderTarget(null);

      ref0.current.visible = showOriginal;
      ref1.current.visible = true;
    }
  });

  return (
    <>
      <group ref={ref0}>
        <DepthBG />
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={gifTexture} transparent />
        </mesh>
      </group>

      <RoundedBox
        ref={ref1}
        position={[0, 0, 0.8]}
        args={[2, 2, 2]}
        radius={0.1}
      >
        <MeshTransmissionMaterial
          ref={material}
          transmission={transmission}
          roughness={roughness}
          thickness={0.1}
          color={color}
          buffer={buffer.texture}
        />
      </RoundedBox>
    </>
  );
};

function RGBGlass() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
      <color attach="background" args={["#111111"]} />
      <Environment preset="warehouse" blur={1} />
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <GlassModel />
    </Canvas>
  );
}

export default RGBGlass;