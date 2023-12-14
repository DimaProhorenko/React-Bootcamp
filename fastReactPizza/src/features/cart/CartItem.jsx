import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 md:flex md:items-center md:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="mt-2 flex items-center justify-between md:mt-0 md:gap-4">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <DeleteItem id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
