import { useContext } from 'react';
import { Analytic } from '../context/analityc';

// yandex-metrik and google-analytics connection hook

export const useMetrika = () => {
	const { yandexId } = useContext(Analytic);

	return (method: string, idTarget: string, options: any = {}) => {
		if ((window as any).ym && yandexId) {
			(window as any).ym(yandexId, method, idTarget, options);
		}
	};
};
