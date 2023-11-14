import React from 'react';

function Progress({
	answer,
	questionIndex,
	numOfQuestions,
	totalPoints,
	score,
}) {
	return (
		<header className="progress">
			<progress
				value={questionIndex + Number(answer !== null)}
				max={numOfQuestions}
			/>
			<p>
				<strong>Question {questionIndex + 1}</strong> / {numOfQuestions}
			</p>
			<p>
				<strong>{score}</strong> / {totalPoints}
			</p>
		</header>
	);
}

export default Progress;
