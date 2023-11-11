import { useState, useEffect } from 'react';

export const useLocalStorageState = (backupValue, keyName) => {
	const [values, setValues] = useState(() => {
		return JSON.parse(localStorage.getItem(keyName)) || backupValue;
	});

	useEffect(() => {
		localStorage.setItem(keyName, JSON.stringify(values));
	}, [values, keyName]);

	return [values, setValues];
};
