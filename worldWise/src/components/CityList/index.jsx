import { Spinner, CityItem, Message } from '../';
import styles from './CityList.module.css';
import { useCities } from '../../contexts/CitiesContext';

function CityList() {
	const { cities, isLoading } = useCities();
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
