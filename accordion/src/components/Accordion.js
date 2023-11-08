import React, { useState } from 'react';

function Accordion({ children }) {
	const [openItem, setOpenItem] = useState(-1);

	const openItemHandler = (index) => {
		if (index === openItem) {
			setOpenItem(-1);
		} else {
			setOpenItem(index);
		}
	};

	const childrenWithProps = React.Children.map(children, (el, index) => {
		return React.cloneElement(el, {
			openIndex: openItem,
			onOpen: openItemHandler,
		});
	});

	return <div className="accordion">{childrenWithProps}</div>;
}

export default Accordion;
