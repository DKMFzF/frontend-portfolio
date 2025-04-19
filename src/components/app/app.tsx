import { AppHeader } from '../app-header';
import { Modal } from '../modal';
import { FormInput } from '../ui/form-input-prompt';
import React, { useState } from 'react';
import style from './app.module.scss';

export const App = () => {
	const [modal, setModal] = useState<boolean>(false);

	console.log(modal, setModal);

	return (
		<div className={style.app}>
			<AppHeader />
		</div>
	);
};
