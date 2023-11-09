import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

function ListBox({ children }) {
	const [isOpen1, setIsOpen1] = useState(true);

	const toggleHandler = () => {
		setIsOpen1((open) => !open);
	};

	return (
		<div className="box">
			<ToggleButton isOpen={isOpen1} onToggle={toggleHandler} />
			{isOpen1 && children}
		</div>
	);
}

export default ListBox;
