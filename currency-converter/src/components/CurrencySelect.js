import React from 'react';

function CurrencySelect({ currencies, onSelectValue }) {
	return (
		<div className="currency-select">
			<ul>
				{Object.keys(currencies).map((el) => {
					return (
						<li
							key={el}
							onClick={() => {
								onSelectValue(el, currencies[el]);
							}}
						>
							{el}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CurrencySelect;
