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
				<Route path="app" element={<AppLayout />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
