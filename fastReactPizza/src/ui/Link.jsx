import { Link as RouterLink } from 'react-router-dom';

function Link({ children, to }) {
  return (
    <RouterLink
      to={to}
      className="text-sm text-blue-500  hover:text-blue-600 hover:underline"
    >
      {children}
    </RouterLink>
  );
}
export default Link;
