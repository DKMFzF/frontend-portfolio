import { useEffect } from 'react';
import { ShaderRendererOptions } from './type';

/**
 * the clean webgl hoock for connect glsl fragment and vertex files
 * project-name/
 *   glsl/
 *     fragment.glsl
 *     vertext.glsl
 *   Component.tsx
 */

export const useShaderRenderer = ({
	canvasRef,
	folder,
	timeSpeed = 0.001
}: ShaderRendererOptions) => {
	useEffect(() => {
		if (!canvasRef.current) return;
		const canvas = canvasRef.current;
		const gl = canvas.getContext('webgl');

		if (!gl) {
			console.log('WebGL not supported');
			return;
		}

		const loadShader = async (url: string): Promise<string> => {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Failed to load shader: ${url}`);
			return res.text();
		};

		const createShader = (
			gl: WebGLRenderingContext,
			type: number,
			source: string
		): WebGLShader | null => {
			const shader = gl.createShader(type);
			if (!shader) return null;

			gl.shaderSource(shader, source);
			gl.compileShader(shader);
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				console.error(
					'Shader compile error:',
					gl.getShaderInfoLog(shader)
				);
				gl.deleteShader(shader);
				return null;
			}
			return shader;
		};

		const setup = async () => {
			try {
				const [fragSource, vertSource] = await Promise.all([
					loadShader(`./glsl/${folder}/fragment.glsl`),
					loadShader(`./glsl/${folder}/vertex.glsl`)
				]);

				const vertexShader = createShader(
					gl,
					gl.VERTEX_SHADER,
					vertSource
				);
				const fragmentShader = createShader(
					gl,
					gl.FRAGMENT_SHADER,
					fragSource
				);
				if (!vertexShader || !fragmentShader) return;

				const program = gl.createProgram();
				if (!program) return;

				gl.attachShader(program, vertexShader);
				gl.attachShader(program, fragmentShader);
				gl.linkProgram(program);

				if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
					console.error(
						'Program link error:',
						gl.getProgramInfoLog(program)
					);
					return;
				}

				gl.useProgram(program);

				// Vertex positions for two triangles (full screen quad)
				const positionBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
				gl.bufferData(
					gl.ARRAY_BUFFER,
					new Float32Array([
						-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1
					]),
					gl.STATIC_DRAW
				);

				const positionLocation = gl.getAttribLocation(
					program,
					'a_position'
				);
				gl.enableVertexAttribArray(positionLocation);
				gl.vertexAttribPointer(
					positionLocation,
					2,
					gl.FLOAT,
					false,
					0,
					0
				);

				const uTimeLocation = gl.getUniformLocation(program, 'u_time');
				const uResolutionLocation = gl.getUniformLocation(
					program,
					'u_resolution'
				);

				const render = (time: number) => {
					time *= timeSpeed;

					gl.uniform1f(uTimeLocation, time);
					gl.uniform2f(
						uResolutionLocation,
						canvas.width,
						canvas.height
					);

					gl.viewport(0, 0, canvas.width, canvas.height);
					gl.clear(gl.COLOR_BUFFER_BIT);
					gl.drawArrays(gl.TRIANGLES, 0, 6);

					requestAnimationFrame(render);
				};

				requestAnimationFrame(render);
			} catch (error) {
				console.error('Shader renderer error:', error);
			}
		};

		setup();
	}, [canvasRef, folder, timeSpeed]);
};
