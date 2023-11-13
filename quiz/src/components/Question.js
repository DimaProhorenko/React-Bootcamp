import React from 'react';
import { Option, Button } from './';

function Question({ question, answer, dispatch }) {
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

	const nextQuestionHandler = () => {
		dispatch({
			type: 'nextQuestion',
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
			{answer !== null && (
				<Button className="btn-ui" onClick={nextQuestionHandler}>
					Next
				</Button>
			)}
		</div>
	);
}

export default Question;
