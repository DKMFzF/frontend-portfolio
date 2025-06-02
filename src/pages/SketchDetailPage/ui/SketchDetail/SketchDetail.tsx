import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { META_SITE_DATA, sketchesData } from '@config';
import { Suspense } from 'react';
import { SketchComponents } from './componentsLoaderLazy';

export const SketchDetail = () => {
	const { sketchId } = useParams<{
		sketchId: keyof typeof SketchComponents;
	}>();
	const sketch = sketchesData.find((s) => s.id === sketchId);
	const SketchComponent = sketchId ? SketchComponents[sketchId] : null;

	if (!sketch || !SketchComponent)
		return (
			<div
				style={{
					fontFamily: 'Inter',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '50px',
					fontStyle: 'italic',
					textDecoration: 'underline',
					width: '100vw',
					height: '100vh'
				}}
			>
				Sketch not found
			</div>
		);

	const pageTitle =
		META_SITE_DATA.titles.sketches.sketchesDetailInfo[
			sketchId as keyof typeof META_SITE_DATA.titles.sketches.sketchesDetailInfo
		] || `{ dkmfzf/sketches/${sketchId} }`;

	return (
		<>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<Suspense>
				<SketchComponent />
			</Suspense>
		</>
	);
};

export default SketchDetail;
