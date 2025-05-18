import { useRef, useEffect } from 'react';
import {
	Scene,
	OrthographicCamera,
	WebGLRenderer,
	PlaneGeometry,
	ShaderMaterial,
	Vector2,
	Mesh
} from 'three';

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

export const AnimatedBackground = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new Scene();
		const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
		const renderer = new WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		if (mountRef.current) {
			mountRef.current.appendChild(renderer.domElement);
		}

		const geometry = new PlaneGeometry(2, 2);

		const material = new ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				u_time: { value: 0 },
				u_resolution: {
					value: new Vector2(window.innerWidth, window.innerHeight)
				}
			}
		});

		const mesh = new Mesh(geometry, material);
		scene.add(mesh);
		camera.position.z = 1;

		let animationId: number;
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			material.uniforms.u_time.value += 0.05;
			renderer.render(scene, camera);
		};
		animate();

		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			material.uniforms.u_resolution.value.set(
				window.innerWidth,
				window.innerHeight
			);
			camera.updateProjectionMatrix();
		};
		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
			if (
				mountRef.current &&
				mountRef.current.contains(renderer.domElement)
			) {
				mountRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div
			ref={mountRef}
			style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}
		/>
	);
};

export default AnimatedBackground;
