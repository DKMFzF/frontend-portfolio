import { Canvas } from '@react-three/fiber';
import fragmentShader from './glsl/fragment.glsl';
import vertexShader from './glsl/vertex.glsl';

const SlideImg = () => (
	<div id='canvas-wrapper'>
		<Canvas
			camera={{
				position: [0, 0, 2],
				fov: 75,
				near: 0.1,
				far: 10
			}}
		/>
	</div>
);

export default SlideImg;
