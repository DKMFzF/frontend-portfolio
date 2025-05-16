import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Group } from 'three';
import gsap from 'gsap';
import { CodeSnippet } from '../CodeSnippet';
import { codeSnippet } from '../../../lib/code-snippets';
import { type RotatingBgModelProps } from './type';

export const RotatingBgModel = ({
	modelPath,
	rotationDirection,
	basePosition,
	shakeOffset,
	snippetZ = 2
}: RotatingBgModelProps) => {
	const gltf = useGLTF(modelPath);
	const modelRef = useRef<Group>(null);
	const shakeTween = useRef<gsap.core.Tween | null>(null);
	const [snippets, setSnippets] = useState<JSX.Element[]>([]);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (modelRef.current) {
			gsap.to(modelRef.current.rotation, {
				x: `+=${rotationDirection * Math.PI * 2}`,
				y: `+=${rotationDirection * Math.PI * 2}`,
				z: `+=${rotationDirection * Math.PI * 2}`,
				duration: 100,
				repeat: -1,
				ease: 'none'
			});
		}
	}, [rotationDirection]);

	const handlePointerOver = () => {
		if (modelRef.current) {
			const [x, y] = shakeOffset;
			shakeTween.current = gsap.to(modelRef.current.position, {
				x: basePosition[0] + x,
				y: basePosition[1] + y,
				repeat: -1,
				yoyo: true,
				duration: 0.1,
				ease: 'none'
			});
		}

		if (!intervalRef.current) {
			intervalRef.current = setInterval(() => {
				const randomText =
					codeSnippet[Math.floor(Math.random() * codeSnippet.length)];
				const newSnippet = (
					<CodeSnippet
						key={Date.now() + Math.random()}
						text={randomText}
						position={[
							basePosition[0] + (Math.random() - 0.5) * 2,
							basePosition[1],
							(Math.random() - 0.5) * 2 + snippetZ
						]}
						onComplete={() => {
							setSnippets((prev) => prev.slice(1));
						}}
					/>
				);
				setSnippets((prev) => [...prev, newSnippet]);
			}, 400);
		}
	};

	const handlePointerOut = () => {
		if (shakeTween.current) {
			shakeTween.current.kill();
			shakeTween.current = null;
		}

		if (modelRef.current) {
			gsap.to(modelRef.current.position, {
				x: basePosition[0],
				y: basePosition[1],
				duration: 0.2
			});
		}

		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};

	return (
		<>
			<primitive
				ref={modelRef}
				object={gltf.scene}
				scale={5}
				position={basePosition}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			/>
			{snippets}
		</>
	);
};
