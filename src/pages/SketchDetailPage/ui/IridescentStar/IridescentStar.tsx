import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import fragmentShader from './glsl/fragment.glsl';
import vertexShader from './glsl/vertex.glsl';

const IridescentStar: React.FC = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		const renderer = new THREE.WebGLRenderer({ antialias: true });

		if (mountRef.current) {
			renderer.setSize(
				mountRef.current.clientWidth,
				mountRef.current.clientHeight
			);
			mountRef.current.appendChild(renderer.domElement);
		}

		const uniforms = {
			u_time: { value: 0.0 },
			u_resolution: {
				value: new THREE.Vector2(
					mountRef.current?.clientWidth || window.innerWidth,
					mountRef.current?.clientHeight || window.innerHeight
				)
			},
			u_mouse: { value: new THREE.Vector2(0.0, 0.0) }
		};

		const material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader
		});

		const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
		scene.add(quad);

		let animationId: number;
		const animate = () => {
			uniforms.u_time.value += 0.01;
			renderer.render(scene, camera);
			animationId = requestAnimationFrame(animate);
		};
		animate();

		const handleResize = () => {
			if (mountRef.current) {
				uniforms.u_resolution.value.set(
					mountRef.current.clientWidth,
					mountRef.current.clientHeight
				);
				renderer.setSize(
					mountRef.current.clientWidth,
					mountRef.current.clientHeight
				);
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (mountRef.current) {
				const rect = mountRef.current.getBoundingClientRect();
				uniforms.u_mouse.value.set(
					e.clientX - rect.left,
					mountRef.current.clientHeight - (e.clientY - rect.top)
				);
			}
		};

		window.addEventListener('resize', handleResize);
		mountRef.current?.addEventListener('mousemove', handleMouseMove);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
			mountRef.current?.removeEventListener('mousemove', handleMouseMove);
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
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: 0
			}}
		/>
	);
};

export default IridescentStar;
