import { useRef, useEffect } from 'react';
import {
	Vector2,
	Scene,
	OrthographicCamera,
	WebGLRenderer,
	PlaneGeometry,
	ShaderMaterial,
	Mesh
} from 'three';

import vertexShader from './glsl/vertex.glsl';
import fragmentShader from './glsl/fragment.glsl';

const FlexibleSomething = () => {
	const mountRef = useRef<HTMLDivElement>(null);
	const mousePosRef = useRef(new Vector2(0, 0));

	useEffect(() => {
		const scene = new Scene();
		const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
		const renderer = new WebGLRenderer({ antialias: true });
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
				},
				u_mouse: { value: new Vector2(0, 0) }
			}
		});

		const mesh = new Mesh(geometry, material);
		scene.add(mesh);
		camera.position.z = 1;

		const handleMouseMove = (event: MouseEvent) => {
			mousePosRef.current.set(
				event.clientX,
				window.innerHeight - event.clientY
			);
		};

		window.addEventListener('mousemove', handleMouseMove);

		let animationId: number;
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			material.uniforms.u_time.value += 0.01;
			material.uniforms.u_mouse.value.copy(mousePosRef.current);
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
			window.removeEventListener('mousemove', handleMouseMove);
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
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 0
			}}
		/>
	);
};

export default FlexibleSomething;
