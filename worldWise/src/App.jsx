import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Pricing, Product, PageNotFound } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="product" element={<Product />} />
				<Route path="pricing" element={<Pricing />} />
				<Route path="/" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
