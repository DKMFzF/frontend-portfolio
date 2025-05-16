import { useEffect, useRef } from 'react';
import { Text } from '@react-three/drei';
import { CodeSnippetProps } from './type';
import gsap from 'gsap';

export const CodeSnippet = ({
	text,
	position,
	onComplete
}: CodeSnippetProps) => {
	const ref = useRef<any>();

	useEffect(() => {
		if (ref.current) {
			const targetY = -3 * position[1];
			gsap.to(ref.current.position, {
				y: targetY,
				duration: 10,
				ease: 'power2.out'
			});
			gsap.to(ref.current.rotation, {
				x: Math.random() * 4,
				y: Math.random() * 4,
				duration: 10
			});
			gsap.to(ref.current.material, {
				opacity: 0,
				duration: 10,
				delay: 1.5,
				onComplete
			});
		}
	}, []);

	return (
		<Text
			ref={ref}
			position={position}
			fontSize={0.3}
			color='black'
			fillOpacity={0.3}
			anchorX='center'
			anchorY='middle'
			material-transparent
			material-opacity={1}
		>
			{text}
		</Text>
	);
};
