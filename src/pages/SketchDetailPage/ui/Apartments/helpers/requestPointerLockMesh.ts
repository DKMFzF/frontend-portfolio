export const requestPointerLockMesh = () => {
	const requestPointerLock = async () => {
		try {
			await document.body.requestPointerLock();
		} catch (err) {
			console.error('Error request:', err);
		}
	};

	requestPointerLock();
};
