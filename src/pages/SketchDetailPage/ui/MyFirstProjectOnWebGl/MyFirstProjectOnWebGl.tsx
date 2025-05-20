import { FC } from 'react';
import { useEffect } from 'react';
import {
	Scene,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
	PerspectiveCamera,
	WebGLRenderer
} from 'three';
// import gsap from 'gsap';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const MyFirstProjectOnWebGl: FC = () => {
	// const animationRef = useRef<gsap.core.Tween>();
	// const cameraAnimation = useRef<gsap.core.Tween>();

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
		const material = new MeshBasicMaterial({ color: 0xff0000 });
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

		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

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
			renderer.render(scene, camera);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <canvas className='webgl-canvas' />;
};

export default MyFirstProjectOnWebGl;
