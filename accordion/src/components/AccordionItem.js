import React from 'react';

function AccordionItem({ openIndex, onOpen, title, text, id }) {
	const isOpen = openIndex === id;
	const openHandler = () => {
		onOpen(id);
	};

	return (
		<div
			className={`accordion__item ${
				isOpen ? 'accordion__item--open' : ''
			}`}
			key={id}
		>
			<div className="accordion__header" onClick={openHandler}>
				<div className="accordion__flex">
					<span className="accordion__counter">
						{id < 10 ? '0' : ''}
						{id + 1}
					</span>
					<h3 className="accordion__title">{title}</h3>
				</div>
				<span className="accordion__icon">
					{isOpen
						? String.fromCharCode(10006)
						: String.fromCharCode(10010)}
				</span>
			</div>
			<div className="accordion__body">{text}</div>
		</div>
	);
}

export default AccordionItem;
