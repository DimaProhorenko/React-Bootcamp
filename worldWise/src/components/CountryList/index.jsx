import { Spinner, CountryItem, Message } from '../';
import styles from './CountryList.module.css';
import PropTypes from 'prop-types';

CountryList.propTypes = {
	cities: PropTypes.array,
	isLoading: PropTypes.bool,
};

function CountryList({ cities, isLoading }) {
	const countries = cities.reduce((arr, city) => {
		if (!arr.map((el) => el.country).includes(city.country)) {
			return [
				...arr,
				{ country: city.country, emoji: city.emoji, id: city.id },
			];
		} else {
			return arr;
		}
	}, []);
	console.log(countries);
	if (isLoading) return <Spinner />;
	if (!cities.length)
		return <Message msg="Add your first city by clicking on the map" />;
	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem key={country.id} country={country} />
			))}
		</ul>
	);
}
export default CountryList;
