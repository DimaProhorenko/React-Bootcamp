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
	Footer,
	Timer,
	Button,
} from './components';

const reducer = (state, action) => {
	switch (action.type) {
		case 'dataRecieved':
			return { ...state, questions: action.payload, status: 'ready' };
		case 'dataFailed':
			return { ...state, questions: [], status: 'error' };
		case 'startNewQuiz':
			return {
				...state,
				status: 'active',
				secondsRemaining: SECONDS_PER_QUESTION * state.questions.length,
			};
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
		case 'tick':
			return {
				...state,
				secondsRemaining: state.secondsRemaining - action.payload,
				status:
					state.secondsRemaining === 0 ? 'finished' : state.status,
			};
		default:
			throw new Error('Unknown action');
	}
};

const SECONDS_PER_QUESTION = 15;

const initialState = {
	questions: [],

	// loading, error, ready, active, finished
	status: 'loading',
	currentQuestionIndex: 0,
	answer: null,
	score: 0,
	highscore: null,
	secondsRemaining: null,
};

function App() {
	const [
		{
			questions,
			status,
			currentQuestionIndex,
			answer,
			score,
			highscore,
			secondsRemaining,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const numOfQuestions = questions.length;
	const totalPoints = questions.reduce(
		(points, nextEl) => points + nextEl.points,
		0
	);

	const finishHandler = () => {
		dispatch({
			type: 'finish',
		});
	};

	const nextQuestionHandler = () => {
		dispatch({
			type: 'nextQuestion',
		});
	};

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
						<Footer>
							<Timer
								dispatch={dispatch}
								secondsRemaining={secondsRemaining}
							/>
							{answer !== null && (
								<Button
									className="btn-ui"
									onClick={
										currentQuestionIndex ===
										numOfQuestions - 1
											? finishHandler
											: nextQuestionHandler
									}
								>
									Next
								</Button>
							)}
						</Footer>
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
