import React from 'react';
import Input from './Input';
import SelectButton from './SelectButton';
import Label from './Label';

function MoneyInput({ labelText, btnText }) {
	return (
		<div>
			<Label>{labelText}</Label>
			<div className="money-input">
				<Input type="text" />
				<SelectButton>{btnText}</SelectButton>
			</div>
		</div>
	);
}

export default MoneyInput;
