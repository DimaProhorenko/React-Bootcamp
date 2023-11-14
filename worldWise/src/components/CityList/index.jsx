import { Spinner, CityItem } from '../';
import styles from './CityList.module.css';
import PropTypes from 'prop-types';

CityList.propTypes = {
	cities: PropTypes.array,
	isLoading: PropTypes.bool,
};

function CityList(props) {
	const { cities, isLoading } = props;
	return (
		<ul className={styles.cityList}>
			{isLoading && <Spinner />}
			{!isLoading &&
				cities.map((city) => <CityItem key={city.id} city={city} />)}
		</ul>
	);
}
export default CityList;
