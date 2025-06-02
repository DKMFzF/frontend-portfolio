import { FC, Suspense, useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Preloader } from '@ui';
import { MusicSphereProps } from './type';
import { DisplacedSphereMaterial } from '../DisplacedSphereMaterial';

export const MusicSphere: FC<MusicSphereProps> = ({
	audioUrl,
	baseRadius = 1.2,
	sensitivity = 0.5
}) => {
	const meshRef = useRef<Mesh>(null);
	const audioRef = useRef<HTMLAudioElement>(null);
	const [userInteracted, setUserInteracted] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioContextRef = useRef<AudioContext | null>(null);
	const analyserRef = useRef<AnalyserNode | null>(null);
	const dataArrayRef = useRef<Uint8Array | null>(null);
	const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);

	const initAudio = () => {
		if (!audioRef.current) return;

		const AudioContext =
			window.AudioContext || (window as any).webkitAudioContext;
		const audioContext = new AudioContext();
		const analyser = audioContext.createAnalyser();
		analyser.fftSize = 256;

		const source = audioContext.createMediaElementSource(audioRef.current);
		source.connect(analyser);
		analyser.connect(audioContext.destination);

		const bufferLength = analyser.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);

		audioContextRef.current = audioContext;
		analyserRef.current = analyser;
		dataArrayRef.current = dataArray;
		sourceRef.current = source;
	};

	const startPlayback = () => {
		if (!audioRef.current) return;

		const playPromise = audioRef.current.play();
		if (playPromise !== undefined) {
			playPromise
				.then(() => {
					setIsPlaying(true);
					if (!audioContextRef.current) {
						initAudio();
					}
				})
				.catch((error) => {
					console.error('Autoplay prevented:', error);
					setUserInteracted(false);
				});
		}
	};

	const handleClick = () => {
		if (!isPlaying) {
			setUserInteracted(true);
			startPlayback();
		}
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.load();
		}
		startPlayback();

		const timer = setTimeout(() => {
			startPlayback();
		}, 1000);

		return () => {
			clearTimeout(timer);
			if (
				audioContextRef.current &&
				audioContextRef.current.state !== 'closed'
			) {
				audioContextRef.current.close();
			}
		};
	}, []);

	const Sphere = () => {
		useFrame(({ clock }) => {
			if (
				!meshRef.current ||
				!analyserRef.current ||
				!dataArrayRef.current
			)
				return;

			const analyser = analyserRef.current;
			const dataArray = dataArrayRef.current;
			analyser.getByteFrequencyData(dataArray);

			let sum = 0;
			for (let i = 0; i < dataArray.length; i++) {
				sum += dataArray[i];
			}
			const average = sum / dataArray.length;

			const scale = 1 + (average / 255) * sensitivity;
			meshRef.current.scale.set(scale, scale, scale);
		});

		return (
			<mesh ref={meshRef} onClick={handleClick}>
				<icosahedronGeometry args={[baseRadius, 64]} />
				<DisplacedSphereMaterial />
			</mesh>
		);
	};

	return (
		<Suspense fallback={<Preloader />}>
			<div
				style={{
					width: '100vw',
					height: '100vh',
					position: 'relative'
				}}
			>
				<Canvas
					camera={{ position: [0, 0, 5], fov: 45 }}
					onPointerMissed={handleClick}
				>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<Sphere />
					<OrbitControls />
				</Canvas>

				<audio
					ref={audioRef}
					src={audioUrl}
					loop
					style={{ display: 'none' }}
				/>
			</div>
		</Suspense>
	);
};
