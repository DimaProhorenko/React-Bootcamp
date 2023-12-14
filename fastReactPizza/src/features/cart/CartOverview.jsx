import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartItems, getTotalCartPrice } from './cartSlice';

function CartOverview() {
  const totalCartItems = useSelector(getTotalCartItems);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalCartItems === 0) return null;

  return (
    <div className="bg-stone-800 py-4 uppercase text-stone-200">
      <div className="container flex items-center justify-between">
        <p className="space-x-4">
          <span>{totalCartItems} pizzas</span>
          <span>€{totalCartPrice}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartOverview;
