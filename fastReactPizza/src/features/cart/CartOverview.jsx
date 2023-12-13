import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-stone-800 py-4 uppercase text-stone-200">
      <div className="container flex items-center justify-between">
        <p className="space-x-4">
          <span>23 pizzas</span>
          <span>$23.45</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartOverview;
