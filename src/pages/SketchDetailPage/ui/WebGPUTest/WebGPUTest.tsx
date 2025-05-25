import { useEffect, useRef } from 'react';

import vertextShader from './wgsl/shader.wgsl';

/* 
  WebGPU and Wgsl are experimental technologies in browsers
  So you may have difficulty displaying this component
  Please make sure that you are using google chrome -v 113+
 */

export default function WebGPUTest() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const initWebGPU = async () => {
			// @ts-ignore
			if (!navigator.gpu) {
				return (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
							color: 'black'
						}}
					>
						WebGPU not supported on this browser.
					</div>
				);
			}

			// @ts-ignore
			const adapter = await navigator.gpu.requestAdapter();
			const device = await adapter.requestDevice();
			const canvas = canvasRef.current!;
			const context = canvas.getContext('webgpu')!;

			// @ts-ignore
			const format = navigator.gpu.getPreferredCanvasFormat();

			// @ts-ignore
			context.configure({
				device,
				format,
				alphaMode: 'opaque'
			});

			const shaderCode = await (await fetch(vertextShader)).text();

			const shaderModule = device.createShaderModule({
				code: shaderCode
			});

			const uniformBuffer = device.createBuffer({
				size: 4,
				// @ts-ignore
				usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
			});

			const bindGroupLayout = device.createBindGroupLayout({
				entries: [
					{
						binding: 0,
						// @ts-ignore
						visibility: GPUShaderStage.FRAGMENT,
						buffer: { type: 'uniform' }
					}
				]
			});

			const pipeline = device.createRenderPipeline({
				layout: device.createPipelineLayout({
					bindGroupLayouts: [bindGroupLayout]
				}),
				vertex: {
					module: shaderModule,
					entryPoint: 'vs_main'
				},
				fragment: {
					module: shaderModule,
					entryPoint: 'fs_main',
					targets: [{ format }]
				},
				primitive: {
					topology: 'triangle-list'
				}
			});

			const bindGroup = device.createBindGroup({
				layout: bindGroupLayout,
				entries: [
					{
						binding: 0,
						resource: {
							buffer: uniformBuffer
						}
					}
				]
			});

			let startTime = performance.now();

			const frame = () => {
				const now = performance.now();
				const time = (now - startTime) / 1000;

				device.queue.writeBuffer(
					uniformBuffer,
					0,
					new Float32Array([time])
				);

				const encoder = device.createCommandEncoder();

				// @ts-ignore
				const textureView = context.getCurrentTexture().createView();

				const pass = encoder.beginRenderPass({
					colorAttachments: [
						{
							view: textureView,
							clearValue: { r: 0, g: 0, b: 0, a: 1 },
							loadOp: 'clear',
							storeOp: 'store'
						}
					]
				});

				pass.setPipeline(pipeline);
				pass.setBindGroup(0, bindGroup);
				pass.draw(6, 1, 0, 0);
				pass.end();

				device.queue.submit([encoder.finish()]);
				requestAnimationFrame(frame);
			};

			requestAnimationFrame(frame);
		};

		initWebGPU();
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				width: '100vw',
				height: '100vh',
				display: 'block'
			}}
		/>
	);
}
