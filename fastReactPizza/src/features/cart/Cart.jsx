import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import Link from '../../ui/Link';
import CartItem from './CartItem';
import { clearCart } from './cartSlice';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const name = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) {
    return (
      <div className="container py-5">
        <h1 className="text-lg font-semibold md:text-xl">
          Your cart is empty. Start ordering pizzas
        </h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/menu">&larr; Back to menu</Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {name}</h2>

      <ul className="mt-3 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-7 space-x-3 md:space-x-6">
        <Button to="/order/new">Order pizzas</Button>
        <Button variant="danger" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
