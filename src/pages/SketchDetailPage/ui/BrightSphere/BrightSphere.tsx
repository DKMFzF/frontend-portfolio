import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import fragmentShader from './glsl/fragment.glsl';
import vertexShader from './glsl/vertex.glsl';

const BrightSphere: React.FC = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 3;
		const renderer = new THREE.WebGLRenderer({ antialias: true });

		if (mountRef.current) {
			renderer.setSize(
				mountRef.current.clientWidth,
				mountRef.current.clientHeight
			);
			mountRef.current.appendChild(renderer.domElement);
		}

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableZoom = false;
		controls.enablePan = false;

		const uniforms = {
			u_time: { value: 0 },
			u_pulse: { value: 0 },
			u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
			u_resolution: {
				value: new THREE.Vector2(
					mountRef.current?.clientWidth || window.innerWidth,
					mountRef.current?.clientHeight || window.innerHeight
				)
			},
			u_spherePosition: { value: new THREE.Vector3() }
		};

		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(1, 64, 64),
			new THREE.ShaderMaterial({
				uniforms,
				vertexShader,
				fragmentShader,
				side: THREE.DoubleSide
			})
		);
		scene.add(sphere);

		let animationId: number;
		let pulseIntensity = 0;
		let pulseDirection = 1;

		const animate = () => {
			uniforms.u_time.value += 0.01;

			pulseIntensity += 0.01 * pulseDirection;
			if (pulseIntensity > 1.0 || pulseIntensity < 0.0)
				pulseDirection *= -1;
			uniforms.u_pulse.value = pulseIntensity;

			uniforms.u_spherePosition.value.copy(sphere.position);

			controls.update();
			renderer.render(scene, camera);
			animationId = requestAnimationFrame(animate);
		};
		animate();

		const handleResize = () => {
			if (mountRef.current) {
				camera.aspect =
					mountRef.current.clientWidth /
					mountRef.current.clientHeight;
				camera.updateProjectionMatrix();
				renderer.setSize(
					mountRef.current.clientWidth,
					mountRef.current.clientHeight
				);
				uniforms.u_resolution.value.set(
					mountRef.current.clientWidth,
					mountRef.current.clientHeight
				);
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (mountRef.current) {
				const rect = mountRef.current.getBoundingClientRect();
				uniforms.u_mouse.value.x = (e.clientX - rect.left) / rect.width;
				uniforms.u_mouse.value.y = (e.clientY - rect.top) / rect.height;
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
			controls.dispose();
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
				left: 0
			}}
		/>
	);
};

export default BrightSphere;
