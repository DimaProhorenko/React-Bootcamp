import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="border-b-2 border-stone-300 bg-yellow-500 py-3 uppercase">
      <div className="container flex items-center justify-between">
        <Link to="/" className="tracking-widest">
          Fast React Pizza Co.
        </Link>
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}
export default Header;
