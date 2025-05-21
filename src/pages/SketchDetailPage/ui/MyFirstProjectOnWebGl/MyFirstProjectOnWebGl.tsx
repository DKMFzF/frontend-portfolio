import { FC, useRef } from 'react';
import { useEffect } from 'react';
import {
	Scene,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
	PerspectiveCamera,
	WebGLRenderer,
	Color
} from 'three';
// import gsap from 'gsap';
import GUI from 'lil-gui';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const MyFirstProjectOnWebGl: FC = () => {
	// const animationRef = useRef<gsap.core.Tween>();
	// const cameraAnimation = useRef<gsap.core.Tween>();
	const guiRef = useRef<GUI>();

	useEffect(() => {
		// const cursor = {
		// 	x: 0,
		// 	y: 0,
		// }

		// window.addEventListener('mousemove', (evt) => {
		// 	cursor.x = (evt.clientX / window.innerWidth - 0.5);
		// 	cursor.y = -(evt.clientY / window.innerHeight - 0.5);
		// });

		const scene = new Scene();

		const geometry = new BoxGeometry(1, 1, 1);
		const material = new MeshBasicMaterial({
			color: 0xff0000,
			wireframe: true
		});
		const mesh = new Mesh(geometry, material);
		scene.add(mesh);

		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		const camera = new PerspectiveCamera(
			45,
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

		guiRef.current = new GUI();
		const gui = guiRef.current;

		gui.add(mesh.position, 'x', -2, 2).name('Position X');
		gui.add(mesh.position, 'y', -2, 2).name('Position Y');
		gui.add(mesh.position, 'z', -2, 2).name('Position Z');

		gui.add(mesh.rotation, 'x', 0, Math.PI * 2).name('Rotation X');
		gui.add(mesh.rotation, 'y', 0, Math.PI * 2).name('Rotation Y');
		gui.add(mesh.rotation, 'z', 0, Math.PI * 2).name('Rotation Z');

		gui.add(mesh.scale, 'x', 0.5, 2).name('Scale X');
		gui.add(mesh.scale, 'y', 0.5, 2).name('Scale Y');
		gui.add(mesh.scale, 'z', 0.5, 2).name('Scale Z');

		const params = {
			color: '#ff0000',
			wireframe: true
		};

		gui.addColor(params, 'color')
			.name('Color')
			.onChange((value: string) => {
				material.color.set(new Color(value));
			});

		gui.add(params, 'wireframe')
			.name('Wireframe')
			.onChange((value: boolean) => {
				material.wireframe = value;
			});

		// animationRef.current = gsap.to(mesh.rotation, {
		//   x: Math.PI * 2,
		//   y: Math.PI * 2,
		//   duration: 10,
		//   repeat: -1,
		//   ease: "none",
		//   onUpdate: () => renderer.render(scene, camera),
		// });

		const tick = () => {
			// camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
			// camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
			// camera.position.y = cursor.y * 5;
			// camera.lookAt(new Vector3());
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
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('dblclick', handleFullScreen);
			if (guiRef.current) {
				guiRef.current.destroy();
			}
		};
	}, []);

	return <canvas className='webgl-canvas' />;
};

export default MyFirstProjectOnWebGl;
