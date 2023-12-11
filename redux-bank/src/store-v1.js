import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: '',
};

const initialStateCustomer = {
	fullName: '',
	nationalId: '',
	createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
	switch (action.type) {
		case 'account/deposit':
			return { ...state, balance: state.balance + action.payload };
		case 'account/withdraw':
			return { ...state, balance: state.balance - action.payload };
		case 'account/requestLoan':
			if (state.loan > 0) {
				return { ...state };
			}
			// Later
			return {
				...state,
				balance: state.balance + action.payload.amount,
				loan: action.payload.amount,
				loanPurpose: action.payload.purpose,
			};
		case 'account/payLoan':
			return {
				...state,
				loan: 0,
				loanPurpose: '',
				balance: state.balance - state.loan,
			};

		default:
			return state;
	}
}

function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case 'customer/createCustomer':
			return {
				...state,
				fullName: action.payload.fullName,
				nationalId: action.payload.nationalId,
				createdAt: action.payload.createdAt,
			};
		case 'customer/updateFullName':
			return { ...state, fullName: action.payload };

		default:
			return { ...state };
	}
}

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', payload: 300 });

// console.log(store.getState());

// store.dispatch({
// 	type: 'account/requestLoan',
// 	payload: {
// 		amount: 1000,
// 		purpose: 'Buy a phone',
// 	},
// });

// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });

// console.log(store.getState());

function accountDeposit(amount) {
	return { type: 'account/deposit', payload: amount };
}

function accountWithdraw(amount) {
	return { type: 'account/withdraw', payload: amount };
}

function accountRequestLoan(amount, purpose) {
	return {
		type: 'account/requestLoan',
		payload: {
			amount,
			purpose,
		},
	};
}

function accountPayLoan() {
	return { type: 'account/payLoan' };
}

function createCustomer(fullName, nationalId) {
	return {
		type: 'customer/createCustomer',
		payload: {
			fullName,
			nationalId,
			createdAt: new Date().toISOString(),
		},
	};
}

function updateFullName(fullName) {
	return {
		type: 'customer/updateName',
		payload: fullName,
	};
}

store.dispatch(createCustomer('Dima Prokhorenko', '9827498'));

store.dispatch(accountDeposit(500));
console.log(store.getState());

store.dispatch(accountWithdraw(200));
console.log(store.getState());

store.dispatch(accountRequestLoan(5000, 'Buy a car'));
console.log(store.getState());

store.dispatch(accountPayLoan());
console.log(store.getState());

store.dispatch(accountDeposit(2000));
console.log(store.getState());
