import { useEffect } from 'react';
import {
	AmbientLight,
	Clock,
	LoadingManager,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	SphereGeometry,
	TextureLoader,
	WebGLRenderer,
	ACESFilmicToneMapping,
	DirectionalLight,
	HemisphereLight
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import diffTexture from './textures/rock_face_03_diff_4k.jpg';
import dispTexture from './textures/rock_face_03_disp_4k.png';

export const TestMaterials = () => {
	useEffect(() => {
		const loaderManager = new LoadingManager();
		loaderManager.onLoad = () => console.log('[LoadingManager]: Done');
		loaderManager.onError = () => console.log('[LoadingManager]: Error');

		const textureLoader = new TextureLoader(loaderManager);

		const pbrTextureDiff = textureLoader.load(diffTexture);
		const pbrTextureDisp = textureLoader.load(dispTexture);

		const scene = new Scene();

		// Улучшенный материал
		const pbrMaterial = new MeshStandardMaterial({
			map: pbrTextureDiff,
			displacementMap: pbrTextureDisp,
			displacementScale: 0.3,
			roughness: 1,
			metalness: 0
		});

		const sphape = new Mesh(new SphereGeometry(1, 256, 256), pbrMaterial);

		scene.add(sphape);

		const ambientLight = new AmbientLight(0xffffff, 0.3);
		scene.add(ambientLight);

		const directionalLight = new DirectionalLight(0xffffff, 2);
		directionalLight.position.set(5, 5, 5);
		directionalLight.castShadow = true;
		scene.add(directionalLight);

		const hemisphereLight = new HemisphereLight(0xffffbb, 0x080820, 0.5);
		scene.add(hemisphereLight);

		const pointLight = new PointLight(0xffffff, 3, 10);
		pointLight.position.set(2, 3, 4);
		pointLight.castShadow = true;
		scene.add(pointLight);

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		const camera = new PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			100
		);

		camera.position.z = 3;
		scene.add(camera);

		const canvas = document.querySelector(
			'.webgl-canvas'
		) as HTMLCanvasElement;
		const renderer = new WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true
		});

		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.toneMapping = ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.2;
		renderer.shadowMap.enabled = true;

		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		const handleResize = () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		};

		const clock = new Clock();
		const tick = () => {
			const elepsedTime = clock.getElapsedTime();

			sphape.rotation.y = 0.1 * elepsedTime;
			sphape.rotation.x = 0.15 * elepsedTime;

			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(tick);
		};

		tick();

		const handleFullScreen = () => {
			if (!document.fullscreenElement) canvas.requestFullscreen();
			else document.exitFullscreen();
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('dblclick', handleFullScreen);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('dblclick', handleFullScreen);
		};
	}, []);

	return <canvas className='webgl-canvas' />;
};

export default TestMaterials;
