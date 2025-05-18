import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import img1 from './img/3.jpg';

const CurlySector: React.FC = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		const canvas = document.createElement('canvas');
		canvas.className = 'webgl';

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		canvas.style.position = 'fixed';
		canvas.style.top = '0';
		canvas.style.left = '0';
		canvas.style.outline = 'none';
		canvas.style.zIndex = '0';

		if (mountRef.current) {
			mountRef.current.appendChild(canvas);
		}

		const parameters = {
			materialColor: '#ffeded'
		};

		const textureLoader = new THREE.TextureLoader();
		const gradientTexture = textureLoader.load(img1);
		gradientTexture.magFilter = THREE.NearestFilter;

		const material = new THREE.MeshToonMaterial({
			color: parameters.materialColor,
			gradientMap: gradientTexture
		});

		const objectsDistance = 4;
		const mesh1 = new THREE.Mesh(
			new THREE.TorusGeometry(1, 0.4, 16, 60),
			material
		);
		const mesh2 = new THREE.Mesh(
			new THREE.ConeGeometry(1, 2, 32),
			material
		);
		const mesh3 = new THREE.Mesh(
			new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
			material
		);

		mesh1.position.y = -objectsDistance * 0;
		mesh2.position.y = -objectsDistance * 1;
		mesh3.position.y = -objectsDistance * 2;
		mesh1.position.x = 2;
		mesh2.position.x = -2;
		mesh3.position.x = 2;

		scene.add(mesh1, mesh2, mesh3);
		const sectionMeshes = [mesh1, mesh2, mesh3];

		const particlesCount = 200;
		const positions = new Float32Array(particlesCount * 3);

		for (let i = 0; i < particlesCount; i++) {
			positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
			positions[i * 3 + 1] =
				objectsDistance * 0.4 -
				Math.random() * objectsDistance * sectionMeshes.length;
			positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
		}

		const particlesGeometry = new THREE.BufferGeometry();
		particlesGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3)
		);

		const particlesMaterial = new THREE.PointsMaterial({
			color: parameters.materialColor,
			sizeAttenuation: true,
			size: 0.03
		});

		const particles = new THREE.Points(
			particlesGeometry,
			particlesMaterial
		);
		scene.add(particles);

		const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
		directionalLight.position.set(1, 1, 0);
		scene.add(directionalLight);

		const cameraGroup = new THREE.Group();
		scene.add(cameraGroup);

		const camera = new THREE.PerspectiveCamera(
			35,
			sizes.width / sizes.height,
			0.1,
			100
		);
		camera.position.z = 6;
		cameraGroup.add(camera);

		let scrollY = window.scrollY;
		let currentSection = 0;

		const handleScroll = () => {
			scrollY = window.scrollY;
			const newSection = Math.round(scrollY / sizes.height);

			if (newSection !== currentSection) {
				currentSection = newSection;

				if (sectionMeshes[currentSection]) {
					gsap.to(sectionMeshes[currentSection].rotation, {
						duration: 1.5,
						ease: 'power2.inOut',
						x: '+=6',
						y: '+=3',
						z: '+=1.5'
					});
				}
			}
		};

		const cursor = { x: 0, y: 0 };
		const handleMouseMove = (e: MouseEvent) => {
			cursor.x = e.clientX / sizes.width - 0.5;
			cursor.y = e.clientY / sizes.height - 0.5;
		};

		const handleResize = () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', handleResize);

		const clock = new THREE.Clock();
		let previousTime = 0;

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();
			const deltaTime = elapsedTime - previousTime;
			previousTime = elapsedTime;

			camera.position.y = (-scrollY / sizes.height) * objectsDistance;

			const parallaxX = cursor.x * 0.5;
			const parallaxY = -cursor.y * 0.5;
			cameraGroup.position.x +=
				(parallaxX - cameraGroup.position.x) * 5 * deltaTime;
			cameraGroup.position.y +=
				(parallaxY - cameraGroup.position.y) * 5 * deltaTime;

			for (const mesh of sectionMeshes) {
				mesh.rotation.x += deltaTime * 0.1;
				mesh.rotation.y += deltaTime * 0.12;
			}

			renderer.render(scene, camera);
			requestAnimationFrame(tick);
		};

		tick();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);

			if (mountRef.current && mountRef.current.contains(canvas)) {
				mountRef.current.removeChild(canvas);
			}
		};
	}, []);

	const sectionStyle: React.CSSProperties = {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		fontFamily: "'Cabin', sans-serif",
		color: '#ffeded',
		textTransform: 'uppercase' as const,
		fontSize: '7vmin',
		padding: '0 10%',
		position: 'relative' as const,
		zIndex: 0
	};

	const containerStyle: React.CSSProperties = {
		inlineSize: '100%',
		position: 'relative',
		background: '#1e1a20',
		margin: 0,
		padding: 0
	};

	return (
		<div ref={mountRef} style={containerStyle}>
			<section style={{ ...sectionStyle, justifyContent: 'flex-start' }}>
				<h1>DEMKA</h1>
			</section>
			<section style={{ ...sectionStyle, justifyContent: 'flex-end' }}>
				<h2>DEMKA</h2>
			</section>
			<section style={{ ...sectionStyle, justifyContent: 'flex-start' }}>
				<h2>DEMKA</h2>
			</section>
		</div>
	);
};

export default CurlySector;
