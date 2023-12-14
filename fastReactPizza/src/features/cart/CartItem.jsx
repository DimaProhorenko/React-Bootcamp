import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="py-3 md:flex md:items-center md:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="mt-2 flex items-center justify-between md:mt-0 md:gap-4">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
