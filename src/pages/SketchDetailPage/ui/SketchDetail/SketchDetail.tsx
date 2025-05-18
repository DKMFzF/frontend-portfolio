import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { META_SITE_DATA, sketchesData } from '@config';
import { lazy, Suspense } from 'react';

const SketchComponents = {
	'sketch-1': lazy(() => import('../AnimatedBackground/AnimatedBackground')),
	'sketch-2': lazy(() => import('../FlexibleSomething/FlexibleSomething'))
};

export const SketchDetail = () => {
	const { sketchId } = useParams<{
		sketchId: keyof typeof SketchComponents;
	}>();
	const sketch = sketchesData.find((s) => s.id === sketchId);
	const SketchComponent = sketchId ? SketchComponents[sketchId] : null;

	if (!sketch || !SketchComponent) return <div>Sketch not found</div>;

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
