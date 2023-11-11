import { useEffect } from 'react';

export const useKey = (key, cb) => {
	useEffect(() => {
		const handler = (e) => {
			if (e.code.toLowerCase() === key.toLowerCase()) {
				typeof cb === 'function' && cb();
			}
		};

		document.addEventListener('keydown', handler);

		return () => {
			document.removeEventListener('keydown', handler);
		};
	}, [key, cb]);
};
