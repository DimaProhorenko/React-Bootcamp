import { combineReducers, createStore } from 'redux';

import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customersSlice';

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

export default createStore(rootReducer);
