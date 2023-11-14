import PropTypes from 'prop-types';
import styles from './CityItem.module.css';

CityItem.propTypes = {
	city: PropTypes.object,
};

const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

function CityItem({ city }) {
	const { cityName, emoji, date } = city;
	return (
		<li className={styles.cityItem}>
			<span className={styles.emoji}>{emoji}</span>
			<h3 className={styles.name}>{cityName}</h3>
			<time className={styles.date}>
				{new Date(date).toLocaleDateString('en-US', options)}
			</time>
			<button className={styles.deleteBtn}>&times;</button>
		</li>
	);
}
export default CityItem;
