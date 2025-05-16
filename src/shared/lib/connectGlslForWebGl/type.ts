import { RefObject } from 'react';

export type ShaderRendererOptions = {
	canvasRef: RefObject<HTMLCanvasElement>;
	folder: string; // путь до папки glsl/`
	timeSpeed?: number;
};
