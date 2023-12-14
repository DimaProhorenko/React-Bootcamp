import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const quantity = useSelector(getCurrentQuantityById(id));
  const isInCart = quantity > 0;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        pizzaId: id,
        name,
        unitPrice,
        quantity: 1,
        totalPrice: unitPrice,
      }),
    );
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && <DeleteItem id={id} />}
          {!soldOut && !isInCart && (
            <Button size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
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
