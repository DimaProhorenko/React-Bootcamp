import React, { useReducer, useEffect } from 'react';
import {
	Main,
	Header,
	Loader,
	Error,
	StartScreen,
	Question,
} from './components';

const reducer = (state, action) => {
	switch (action.type) {
		case 'dataRecieved':
			return { ...state, questions: action.payload, status: 'ready' };
		case 'dataFailed':
			return { ...state, questions: [], status: 'error' };
		case 'startNewQuiz':
			return { ...state, status: 'active' };
		case 'newAnswer':
			const { isCorrect, points } = action.payload;

			const score = isCorrect ? state.score + points : state.score;
			return {
				...state,
				answer: { ...action.payload },
				score,
			};
		case 'nextQuestion':
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				answer: null,
			};
		default:
			throw new Error('Unknown action');
	}
};

const initialState = {
	questions: [],

	// loading, error, ready, active, finished
	status: 'loading',
	currentQuestionIndex: 0,
	answer: null,
	score: 0,
};

function App() {
	const [{ questions, status, currentQuestionIndex, answer }, dispatch] =
		useReducer(reducer, initialState);

	const numOfQuestions = questions.length;

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch('http://localhost:8000/questions');
				if (!res.ok) throw new Error('Something went wrong');
				const data = await res.json();
				dispatch({
					type: 'dataRecieved',
					payload: data,
				});
			} catch (err) {
				dispatch({
					type: 'dataFailed',
				});
			}
		};
		getData();
	}, []);

	return (
		<>
			<Main>
				<Header />
				{status === 'loading' && <Loader />}
				{status === 'error' && <Error />}
				{status === 'ready' && (
					<StartScreen
						questionNum={numOfQuestions}
						dispatch={dispatch}
					/>
				)}
				{status === 'active' && (
					<Question
						question={questions.at(currentQuestionIndex)}
						answer={answer}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</>
	);
}

export default App;
