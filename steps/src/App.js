import React, { useState } from 'react';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

const App = () => {
	const [step, setStep] = useState(0);
	const [isOpen, setIsOpen] = useState(true);

	const toggleStepsHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	const prevHandler = () => {
		if (step > 0) {
			setStep((prevState) => prevState - 1);
		}
	};

	const nextHandler = () => {
		if (step < messages.length) {
			setStep((prevState) => prevState + 1);
		}
	};

	return (
		<main>
			<button className="close" onClick={toggleStepsHandler}>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						{messages.map((msg, index) => {
							return (
								<div
									key={index}
									className={step >= index ? 'active' : ''}
								>
									{index + 1}
								</div>
							);
						})}
					</div>
					<p className="message">{messages[step]}</p>
					<div className="buttons">
						<button
							className={step > 0 ? 'active' : ''}
							disabled={step === 0}
							onClick={prevHandler}
						>
							Previous
						</button>
						<button
							className={
								step < messages.length - 1 ? 'active' : ''
							}
							disabled={step >= messages.length - 1}
							onClick={nextHandler}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</main>
	);
};

export default App;
