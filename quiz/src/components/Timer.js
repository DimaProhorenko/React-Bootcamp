import React, { useEffect } from 'react';

function Timer({ secondsRemaining, dispatch }) {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log('tick');
			dispatch({
				type: 'tick',
				payload: 1,
			});
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [dispatch]);
	return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
