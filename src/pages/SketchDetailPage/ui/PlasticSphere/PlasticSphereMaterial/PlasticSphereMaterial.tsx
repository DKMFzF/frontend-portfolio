import { useRef } from 'react';
import fragmentShader from '../glsl/fragment.glsl';
import vertexShader from '../glsl/vertex.glsl';
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export const PlasticSphereMaterial = ({ uTime = 0 }) => {
	const sphereMaterialRef = useRef<ShaderMaterial>(null);

	useFrame(({ clock }) => {
		if (sphereMaterialRef.current) {
			sphereMaterialRef.current.uniforms.uTime.value =
				clock.getElapsedTime();
		}
	});

	return (
		<shaderMaterial
			ref={sphereMaterialRef}
			uniforms={{
				uTime: { value: uTime },
				uGlowColor: { value: [0.3, 0.6, 1.0] } // Добавляем uniform для цвета свечения
			}}
			vertexShader={vertexShader}
			fragmentShader={fragmentShader}
			toneMapped={false}
			transparent // Делаем материал полупрозрачным для лучшего эффекта
			blending={2} // Добавляем blending для свечения
		/>
	);
};
