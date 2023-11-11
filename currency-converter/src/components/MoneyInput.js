import React from 'react';
import Input from './Input';
import SelectButton from './SelectButton';
import Label from './Label';

function MoneyInput({
	labelText,
	btnId,
	btnTitle,
	btnText,
	currencies,
	onSelect,
	defaultInputValue,
	onSetAmount,
	defaultValue,
}) {
	return (
		<div>
			<Label>{labelText}</Label>
			<div className="money-input">
				<Input
					type="text"
					defaultValue={defaultInputValue}
					onChangeHandler={onSetAmount}
				/>
				<SelectButton
					title={btnTitle}
					btnId={btnId}
					selectValues={currencies}
					onSelect={onSelect}
					defaultValue={defaultValue}
				>
					{btnText}
				</SelectButton>
			</div>
		</div>
	);
}

export default MoneyInput;
