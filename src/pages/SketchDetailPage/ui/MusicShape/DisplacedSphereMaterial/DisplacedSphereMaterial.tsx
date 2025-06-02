import { useRef } from 'react';
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

import vertexShader from '../glsl/vertex.glsl';
import fragmentShader from '../glsl/fragment.glsl';

export const DisplacedSphereMaterial = ({ uTime = 0 }) => {
	const materialRef = useRef<ShaderMaterial>(null);

	useFrame(({ clock }) => {
		if (materialRef.current) {
			materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
		}
	});

	return (
		<shaderMaterial
			ref={materialRef}
			uniforms={{
				uTime: { value: uTime }
			}}
			vertexShader={vertexShader}
			fragmentShader={fragmentShader}
			toneMapped={false}
		/>
	);
};
