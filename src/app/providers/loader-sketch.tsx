import {
	createContext,
	useState,
	useContext,
	ReactNode,
	FC,
	ReactElement
} from 'react';

type LoaderContextType = {
	isLoader: boolean;
	setIsLoader: (value: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextType>({
	isLoader: false,
	setIsLoader: () => {}
});

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider: FC<{ children: ReactNode }> = ({
	children
}): ReactElement => {
	const [isLoader, setIsLoader] = useState(false);

	return (
		<LoaderContext.Provider value={{ isLoader, setIsLoader }}>
			{children}
		</LoaderContext.Provider>
	);
};
