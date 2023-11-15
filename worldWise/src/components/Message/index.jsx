import styles from './Message.module.css';
import PropTypes from 'prop-types';

Message.propTypes = {
	msg: PropTypes.string,
};

function Message({ msg }) {
	return (
		<p className={styles.message}>
			<span role="img">👋</span> {msg}
		</p>
	);
}

export default Message;
