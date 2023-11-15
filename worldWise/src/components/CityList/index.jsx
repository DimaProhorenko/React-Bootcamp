import { Spinner, CityItem, Message } from '../';
import styles from './CityList.module.css';
import PropTypes from 'prop-types';

CityList.propTypes = {
	cities: PropTypes.array,
	isLoading: PropTypes.bool,
};

function CityList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;
	if (!cities.length)
		return <Message msg="Add your first city by clicking on the map" />;
	return (
		<ul className={styles.cityList}>
			{cities.map((city) => (
				<CityItem key={city.id} city={city} />
			))}
		</ul>
	);
}
export default CityList;
