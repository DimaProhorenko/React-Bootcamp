import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Homepage,
	Pricing,
	Product,
	PageNotFound,
	Login,
	AppLayout,
} from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Homepage />} />
				<Route path="app" element={<AppLayout />}>
					<Route path="cities" element={<p>List of cities</p>} />
					<Route
						path="countries"
						element={<p>List of countries</p>}
					/>
					<Route path="form" element={<p>Form</p>} />
					<Route index element={<p>Cities</p>} />
				</Route>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
