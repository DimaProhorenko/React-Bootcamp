import React from 'react';
import { Button } from './';

function FinishScreen({ score, totalPoints, highscore, dispatch }) {
	const percentage = (score / totalPoints) * 100;

	const restartHandler = () => {
		dispatch({
			type: 'restart',
		});
	};

	return (
		<>
			<p className="result">
				You scored <strong>{score}</strong> out of {totalPoints} (
				{percentage}%)
			</p>
			<p className="highscore">Highscore {highscore}</p>
			<Button className="btn-ui" onClick={restartHandler}>
				Restart
			</Button>
		</>
	);
}

export default FinishScreen;
