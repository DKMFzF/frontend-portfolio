import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function DepthBG() {
  const CreativeMaterial = shaderMaterial(
    { time: 0 },
    /* vertex shader */ `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    /* fragment shader */ `
      uniform float time;
      varying vec3 vPosition;

      // Простая функция шума
      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453);
      }

      void main() {
        // Волновое движение по Z
        float wave = sin(vPosition.z * 3.0 + time * 2.0) * 0.5 + 0.5;

        // Перелив цвета через плавные функции
        vec3 color = vec3(
          0.5 + 0.5 * sin(time + vPosition.x * 2.0),
          0.5 + 0.5 * sin(time + vPosition.y * 3.0),
          0.5 + 0.5 * sin(time + vPosition.z * 4.0)
        );

        // Добавляем немного случайного шума для текстуры
        float n = hash(vPosition + time * 0.3);
        color += n * 0.1;

        // Прозрачность зависит от позиции и волны
        float alpha = smoothstep(0.0, 1.0, wave) * 0.8;

        gl_FragColor = vec4(color * wave, alpha);
      }
    `
  );

  extend({ CreativeMaterial });
  const ref = useRef();

  useFrame(({ clock }) => {
    // @ts-ignore
    if (ref.current) ref.current.time = clock.getElapsedTime();
  });

  return (
    <mesh>
      <boxGeometry args={[2, 2, 8]} />
      {/* @ts-ignore */}
      <creativeMaterial ref={ref} side={THREE.DoubleSide} transparent />
    </mesh>
  );
}
