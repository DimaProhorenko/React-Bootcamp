import React, { useReducer, useEffect } from 'react';
import {
	Main,
	Header,
	Loader,
	Error,
	StartScreen,
	Question,
	Progress,
	FinishScreen,
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
		case 'finish':
			return {
				...state,
				status: 'finished',
				highscore:
					state.score > state.highscore
						? state.score
						: state.highscore,
			};
		case 'restart':
			return {
				...initialState,
				status: 'ready',
				questions: state.questions,
				highscore: state.highscore,
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
	highscore: null,
};

function App() {
	const [
		{ questions, status, currentQuestionIndex, answer, score, highscore },
		dispatch,
	] = useReducer(reducer, initialState);
	console.log(answer);

	const numOfQuestions = questions.length;
	const totalPoints = questions.reduce(
		(points, nextEl) => points + nextEl.points,
		0
	);

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
					<>
						<Progress
							questionIndex={currentQuestionIndex}
							numOfQuestions={numOfQuestions}
							score={score}
							totalPoints={totalPoints}
							answer={answer}
						/>
						<Question
							question={questions.at(currentQuestionIndex)}
							questionIndex={currentQuestionIndex}
							numOfQuestions={numOfQuestions}
							answer={answer}
							dispatch={dispatch}
						/>
					</>
				)}
				{status === 'finished' && (
					<FinishScreen
						score={score}
						totalPoints={totalPoints}
						highscore={highscore}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</>
	);
}

export default App;
