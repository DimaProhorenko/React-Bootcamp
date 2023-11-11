import React, { useState } from 'react';
import CurrencySelect from './CurrencySelect';

function SelectButton({
	children,
	btnId,
	selectValues,
	onSelect,
	defaultValue = '',
	...restProps
}) {
	const [showCurrencySelect, setShowCurrencySelect] = useState(false);
	const [selected, setSelected] = useState(defaultValue);

	const openCurrensySelectHandler = () => {
		setShowCurrencySelect(true);
	};

	const closeCurrensySelectHandler = () => {
		setShowCurrencySelect(false);
	};

	const selectValueHandler = (value, description) => {
		console.log(value, description);
		// const data = {};
		// data[btnId] = {
		// 	name: value,

		// };
		// onSelect(data);
		// setSelected(value);
		// closeCurrensySelectHandler();
		onSelect(btnId, value, description);
		setSelected(value);
		closeCurrensySelectHandler();
	};

	return (
		<>
			<button
				className="select-btn"
				{...restProps}
				onClick={openCurrensySelectHandler}
			>
				{selected}
			</button>
			{showCurrencySelect && (
				<CurrencySelect
					currencies={selectValues}
					onSelectValue={selectValueHandler}
				/>
			)}
		</>
	);
}

export default SelectButton;
