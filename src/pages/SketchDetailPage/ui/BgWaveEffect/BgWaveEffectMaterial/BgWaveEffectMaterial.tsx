import { useRef } from 'react';
import fragmentShader from '../glsl/fragment.glsl';
import vertexShader from '../glsl/vertex.glsl';
import { AdditiveBlending, ShaderMaterial, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

export const BgWaveEffectMaterial = () => {
	const sphereMaterialRef = useRef<ShaderMaterial>(null);

	useFrame(({ clock, camera }) => {
		if (sphereMaterialRef.current) {
			sphereMaterialRef.current.uniforms.uTime.value =
				clock.getElapsedTime();
			sphereMaterialRef.current.uniforms.uViewDirection.value =
				camera.position;
			sphereMaterialRef.current.uniforms.uGlowDirection.value =
				new Vector3(0, 0, -1);
			sphereMaterialRef.current.uniforms.uGlowLength.value =
				5.0 + Math.sin(clock.elapsedTime) * 2.0;
		}
	});

	return (
		<shaderMaterial
			ref={sphereMaterialRef}
			uniforms={{
				uTime: { value: 0 },
				uGlowColor: { value: new Vector3(0.3, 0.6, 1.0) },
				uGlowSize: { value: 2.0 },
				uGlowLength: { value: 2.0 },
				uGlowFalloff: { value: 2.0 },
				uViewDirection: { value: new Vector3() },
				uGlowDirection: { value: new Vector3(0, 0, -5) }
			}}
			vertexShader={vertexShader}
			fragmentShader={fragmentShader}
			toneMapped={false}
			transparent
			opacity={0.2}
			depthWrite={false}
			blending={AdditiveBlending}
		/>
	);
};
