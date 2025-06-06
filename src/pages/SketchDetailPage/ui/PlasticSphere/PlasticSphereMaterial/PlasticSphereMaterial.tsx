import { useRef } from 'react';
import fragmentShader from '../glsl/fragment.glsl';
import vertexShader from '../glsl/vertex.glsl';
import { ShaderMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export const PlasticSphereMaterial = ({ uTime = 0 }) => {
	const sphereMaterialRef = useRef<ShaderMaterial | null>(null);

	useFrame(({ clock }) => {
		if (sphereMaterialRef.current)
			sphereMaterialRef.current.uniforms.uTime.value =
				clock.getElapsedTime();
	});

	return (
		<shaderMaterial
			ref={sphereMaterialRef}
			uniforms={{
				uTime: { value: uTime }
			}}
			vertexShader={vertexShader}
			fragmentShader={fragmentShader}
			toneMapped={false}
		/>
	);
};
