import React from 'react';
import { Option } from './';

function Question({
	question,
	answer,
	numOfQuestions,
	questionIndex,
	dispatch,
}) {
	const { question: q, options, correctOption, points } = question;

	const answerHandler = (id) => {
		dispatch({
			type: 'newAnswer',
			payload: {
				id,
				correctOption,
				isCorrect: id === correctOption,
				points,
			},
		});
	};

	return (
		<div>
			<h4>{q}</h4>
			<div className="options">
				{options.map((option, idx) => (
					<Option
						key={option}
						id={idx}
						text={option}
						onClick={() => answerHandler(idx)}
						className={`${
							answer !== null
								? correctOption === idx
									? 'correct'
									: 'wrong'
								: ''
						}`}
						disabled={answer !== null}
					/>
				))}
			</div>
		</div>
	);
}

export default Question;
