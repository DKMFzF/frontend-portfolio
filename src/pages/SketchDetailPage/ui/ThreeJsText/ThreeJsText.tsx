import { useEffect } from 'react';
import {
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const ThreeJsText = () => {
	useEffect(() => {
		const scene = new Scene();
		const material = new MeshBasicMaterial({
			color: 'red',
			wireframe: true
		});
		const geometry = new BoxGeometry(1, 1, 1);
		const mesh = new Mesh(geometry, material);
		scene.add(mesh);

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
			canvas,
			alpha: true
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

		document.addEventListener('dblclick', handleFullScreen);
		document.addEventListener('resize', handleResize);

		return () => {
			document.removeEventListener('dblclick', handleFullScreen);
			document.removeEventListener('resize', handleResize);
		};
	});

	return <canvas className='webgl-canvas' />;
};

export default ThreeJsText;
