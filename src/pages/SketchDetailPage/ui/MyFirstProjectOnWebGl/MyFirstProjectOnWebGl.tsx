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

export const MyFirstProjectOnWebGl: FC = () => {
	useEffect(() => {
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
			75,
			sizes.width / sizes.height,
			0.1,
			1000
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

		const animate = () => {
			requestAnimationFrame(animate);

			mesh.rotation.x += 0.01;
			mesh.rotation.y += 0.01;

			renderer.render(scene, camera);
		};
		animate();

		const handleResize = () => {
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			renderer.setSize(sizes.width, sizes.height);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <canvas className='webgl-canvas' />;
};

export default MyFirstProjectOnWebGl;
