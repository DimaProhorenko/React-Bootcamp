import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MoneyInput from './components/MoneyInput';
import Card from './components/Card';
import Container from './components/Container';
import CurrencySelect from './components/CurrencySelect';
import Fetcher from './Fetcher';

function App() {
	const [currencies, setCurrencies] = useState({});
	const [showCurrencySelect, setShowCurrencySelect] = useState(false);
	const [firstCurrency, setFirstCurrency] = useState('USD');
	const [secondCurrency, setSecondCurrency] = useState('EURO');

	const openCurrensySelectHandler = (btnType) => {
		setShowCurrencySelect(true);
	};

	const closeCurrensySelectHandler = () => {
		setShowCurrencySelect(false);
	};

	const selectCurrencyHandler = () => {
		closeCurrensySelectHandler();
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await Fetcher.getCurrencies();
			setCurrencies(data);
			console.log(data);
		};

		fetchData();
	}, []);

	return (
		<Container>
			<Header />
			<Main>
				<Card className="inputs">
					<MoneyInput
						btnType="first"
						btnText={firstCurrency}
						labelText="Value"
						currencies={currencies}
						onShowCurrencySelect={openCurrensySelectHandler}
					/>
					<MoneyInput
						btnType="second"
						btnText={secondCurrency}
						labelText="Converted to"
						currencies={currencies}
						onShowCurrencySelect={openCurrensySelectHandler}
					/>
				</Card>
				{showCurrencySelect && (
					<CurrencySelect
						currencies={currencies}
						onSelectCurrency={selectCurrencyHandler}
					/>
				)}
			</Main>
		</Container>
	);
}

export default App;
