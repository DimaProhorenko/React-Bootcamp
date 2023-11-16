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
import { CitiesProvider } from './contexts/CitiesContext';

function App() {
	return (
		<CitiesProvider>
			<BrowserRouter>
				<Routes>
					<Route path="product" element={<Product />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="login" element={<Login />} />
					<Route path="/" element={<Homepage />} />
					<Route path="app" element={<AppLayout />}>
						<Route path="cities" element={<CityList />} />
						<Route path="cities/:id" element={<City />} />
						<Route path="countries" element={<CountryList />} />
						<Route path="form" element={<Form />} />
						<Route
							index
							element={<Navigate replace to="cities" />}
						/>
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</CitiesProvider>
	);
}
export default App;
