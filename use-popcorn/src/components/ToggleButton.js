import React from 'react';

function ToggleButton({ className, isOpen, onToggle }) {
	return (
		<button
			// className="btn-toggle"
			className={`btn-toggle ${className || ''}`}
			onClick={onToggle}
		>
			{isOpen ? '–' : '+'}
		</button>
	);
}

export default ToggleButton;
