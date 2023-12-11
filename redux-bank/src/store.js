import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customersSlice';

export default configureStore({
	reducer: {
		account: accountReducer,
		customer: customerReducer,
	},
});
