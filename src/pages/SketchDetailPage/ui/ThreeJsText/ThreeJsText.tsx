import { useEffect } from 'react';
import {
	LoadingManager,
	Mesh,
	MeshMatcapMaterial,
	MeshNormalMaterial,
	PerspectiveCamera,
	Scene,
	TextureLoader,
	TorusGeometry,
	WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import textureTextLoad from './matcaps/1.png';

export const ThreeJsText = () => {
	useEffect(() => {
		const scene = new Scene();

		const laoderManager = new LoadingManager();
		laoderManager.onLoad = () => console.log('Start laoding');
		laoderManager.onError = () => console.log('Error loading');

		const textureLoader = new TextureLoader(laoderManager);
		const textureText = textureLoader.load(textureTextLoad);

		const fontsLoader = new FontLoader(laoderManager);
		fontsLoader.load('../helvetiker_regular.typeface.json', (font) => {
			console.log('Done font loader');
			const textGeometry = new TextGeometry('Sketch text', {
				font,
				size: 0.5,
				depth: 0.1,
				curveSegments: 3
			});

			// center text (hard guide)
			// textGeometry.computeBoundingBox();
			// textGeometry.translate(
			//   -textGeometry.boundingBox!.max.x * 0.5,
			//   -textGeometry.boundingBox!.max.y * 0.5,
			//   -textGeometry.boundingBox!.max.z * 0.5,
			// );

			// center text easy guide
			textGeometry.center();

			const textMaterial = new MeshMatcapMaterial({
				matcap: textureText
			});
			const text = new Mesh(textGeometry, textMaterial);
			scene.add(text);

			const geometryDonut = new TorusGeometry(0.3, 0.2, 20, 35);
			const normalMap2 = new MeshNormalMaterial();

			for (let i = 0; i < 200; i++) {
				const meshDonut = new Mesh(geometryDonut, normalMap2);

				meshDonut.position.x = (Math.random() - 0.5) * 10;
				meshDonut.position.y = (Math.random() - 0.5) * 10;
				meshDonut.position.z = (Math.random() - 0.5) * 10;

				meshDonut.rotateX(Math.random() * 10);
				meshDonut.rotateY(Math.random() * 10);
				meshDonut.rotateZ(Math.random() * 10);

				const scale = Math.random();
				meshDonut.scale.set(scale, scale, scale);

				scene.add(meshDonut);
			}
		});

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
		camera.position.z = 2;
		scene.add(camera);

		const canvas = document.querySelector(
			'.webgl-canvas'
		) as HTMLCanvasElement;
		const renderer = new WebGLRenderer({
			canvas
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		const tick = () => {
			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(tick);
		};

		tick();

		const handleResize = () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.render(scene, camera);
		};

		const handleFullScreen = () => {
			if (!document.fullscreenElement) canvas.requestFullscreen();
			else document.exitFullscreen();
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('dblclick', handleFullScreen);

		return () => {
			document.removeEventListener('dblclick', handleFullScreen);
			document.removeEventListener('resize', handleResize);
		};
	});

	return <canvas className='webgl-canvas' />;
};

export default ThreeJsText;
