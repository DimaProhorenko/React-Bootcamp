import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CityItem.module.css';
import { useCities } from '../../contexts/CitiesContext';

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
	const { cityName, emoji, date, id, position } = city;
	const { currentCity } = useCities();

	return (
		<li>
			<Link
				className={`${styles.cityItem} ${
					id === currentCity.id ? styles['cityItem--active'] : ''
				}`}
				to={`${id}?lat=${position.lat}&lng=${position.lng}`}
			>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>
					{new Date(date).toLocaleDateString('en-US', options)}
				</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
}
export default CityItem;
