import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	const toggleHandler = () => {
		setIsOpen((open) => !open);
	};

	return (
		<div className="box">
			<ToggleButton isOpen={isOpen} onToggle={toggleHandler} />
			{isOpen && children}
		</div>
	);
}

export default Box;
