import { useLoaderData } from 'react-router-dom';

import MenuItem from './MenuItem';
import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData();
  return (
    <div className="container py-5 md:py-10">
      <ul className="divide-y divide-stone-400">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
