import React from 'react';

function StartScreen({ questionNum, dispatch }) {
	const startNewQuizHandler = () => {
		dispatch({
			type: 'startNewQuiz',
		});
	};

	return (
		<div className="start">
			<h2>Welcome to React Quiz!</h2>
			<h3>{questionNum} questions to test your React knowledge</h3>
			<button className="btn btn-ui" onClick={startNewQuizHandler}>
				Let's start
			</button>
		</div>
	);
}

export default StartScreen;
