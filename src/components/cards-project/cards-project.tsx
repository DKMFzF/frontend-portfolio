import { FC } from 'react';
import { CardsProjectUI } from '@ui/index';
import { CardsProjectProps } from '../ui/cards-project/type';

export const CardsProject: FC<CardsProjectProps> = ({
	cards,
	transformStyle
}) => <CardsProjectUI cards={cards} transformStyle={transformStyle} />;
