import React from 'react';
import Input from './Input';
import SelectButton from './SelectButton';
import Label from './Label';

function MoneyInput({ labelText, btnType, btnText, onShowCurrencySelect }) {
	const clickHandler = () => {
		onShowCurrencySelect(btnType);
	};

	return (
		<div>
			<Label>{labelText}</Label>
			<div className="money-input">
				<Input type="text" />
				<SelectButton onClick={clickHandler}>{btnText}</SelectButton>
			</div>
		</div>
	);
}

export default MoneyInput;
