import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'http://localhost:8000';

export const CitiesContext = createContext();

CitiesProvider.propTypes = {
	children: PropTypes.any,
};

export function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [currentCity, setCurrentCity] = useState({});
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

	const getCurrentCity = async (id) => {
		try {
			setIsLoading(true);
			const res = await fetch(`http://localhost:8000/cities/${id}`);
			const data = await res.json();
			setCurrentCity(data);
		} catch (err) {
			alert(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<CitiesContext.Provider
			value={{ cities, currentCity, getCurrentCity, isLoading }}
		>
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
