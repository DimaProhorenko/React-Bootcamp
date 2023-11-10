import React from 'react';

function CurrencySelect({ currencies, onSelectCurrency }) {
	return (
		<div className="currency-select">
			<ul>
				{Object.keys(currencies).map((el) => {
					return (
						<li key={el} onClick={onSelectCurrency}>
							{el}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CurrencySelect;
