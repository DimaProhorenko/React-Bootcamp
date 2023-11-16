import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'http://localhost:8000';

export const CitiesContext = createContext();

CitiesProvider.propTypes = {
	children: PropTypes.any,
};

export function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchCities = async () => {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`);
				const data = await res.json();
				setCities(data);
			} catch (err) {
				alert(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCities();
	}, []);
	return (
		<CitiesContext.Provider value={{ cities, isLoading }}>
			{children}
		</CitiesContext.Provider>
	);
}

export function useCities() {
	const value = useContext(CitiesContext);
	if (value === undefined)
		throw new Error('CitiesContext was used outside Provider');
	return value;
}
