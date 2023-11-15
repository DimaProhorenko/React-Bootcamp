import styles from './Button.module.css';
import PropTypes from 'prop-types';

Button.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	type: PropTypes.string,
};

function Button({ children, className, type, ...restProps }) {
	return (
		<button
			className={`${styles.btn} ${className || ''} ${styles[type]}`}
			{...restProps}
		>
			{children}
		</button>
	);
}
export default Button;
