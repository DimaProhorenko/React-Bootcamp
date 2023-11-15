import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
	Homepage,
	Pricing,
	Product,
	PageNotFound,
	Login,
	AppLayout,
} from './pages';
import { CityList, CountryList, City, Form } from './components';

const BASE_URL = 'http://localhost:8000';

function App() {
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
		<BrowserRouter>
			<Routes>
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Homepage />} />
				<Route path="app" element={<AppLayout />}>
					<Route
						path="cities"
						element={
							<CityList cities={cities} isLoading={isLoading} />
						}
					/>
					<Route path="cities/:id" element={<City />} />
					<Route
						path="countries"
						element={
							<CountryList
								cities={cities}
								isLoading={isLoading}
							/>
						}
					/>
					<Route path="form" element={<Form />} />
					<Route index element={<Navigate replace to="cities" />} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
