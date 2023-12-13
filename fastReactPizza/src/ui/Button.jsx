import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  type = 'submit',
  to = '',
  variant = 'default',
}) {
  const baseClasses =
    'cursor-pointer rounded-full   px-4 py-2 font-semibold uppercase  transition-all  disabled:cursor-not-allowed disabled:opacity-50';
  const variantClasses = {
    default:
      'border border-transparent bg-yellow-500 text-stone-100 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 focus:bg-yellow-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2',
    outline:
      'border border-yellow-500 hover:bg-yellow-500 hover:text-stone-100',
    secondary:
      'bg-blue-500 text-stone-100 hover:bg-blue-800 transition-colors focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
export default Button;
