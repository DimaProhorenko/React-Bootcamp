import React, { useReducer, useEffect } from 'react';
import { Main, Header, Loader, Error, StartScreen } from './components';

const reducer = (state, action) => {
	switch (action.type) {
		case 'dataRecieved':
			return { ...state, questions: action.payload, status: 'ready' };
		case 'dataFailed':
			return { ...state, questions: [], status: 'error' };
		default:
			throw new Error('Unknown action');
	}
};

const initialState = {
	questions: [],

	// loading, error, ready, active, finished
	status: 'loading',
};

function App() {
	const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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
					<StartScreen questionNum={numOfQuestions} />
				)}
			</Main>
		</>
	);
}

export default App;
