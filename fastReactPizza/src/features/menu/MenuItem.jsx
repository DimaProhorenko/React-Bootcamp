import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

	return (
		<li>
			<img src={imageUrl} alt={name} />
			<div>
				<p>{name}</p>
				<p>{ingredients.join(', ')}</p>
				<div>
					{!soldOut ? (
						<p>{formatCurrency(unitPrice)}</p>
					) : (
						<p>Sold out</p>
					)}
				</div>
			</div>
		</li>
	);
}

MenuItem.propTypes = {
	pizza: PropTypes.object.isRequired,
	id: PropTypes.number,
	name: PropTypes.string,
	unitPrice: PropTypes.number,
	ingredients: PropTypes.array,
	soldOut: PropTypes.bool,
	imageUrl: PropTypes.string,
};

export default MenuItem;
