import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MoneyInput from './components/MoneyInput';
import Card from './components/Card';
import Container from './components/Container';
import Fetcher from './Fetcher';

function App() {
	const [currencies, setCurrencies] = useState({});
	const [amount, setAmount] = useState(1000);
	const [convertedValue, setConvertedValue] = useState(0);
	const [rates, setRates] = useState(null);
	const [usedCurrencies, setUsedCurrencies] = useState({
		first: {
			name: 'USD',
			fullName: 'United States Dollar',
		},
		second: {
			name: 'EUR',
			fullName: 'EURO',
		},
	});

	useEffect(() => {
		setConvertedValue(
			rates && amount * rates[usedCurrencies?.second?.name]
		);
	}, [amount, rates, usedCurrencies?.second?.name]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await Fetcher.getCurrencies();
			setCurrencies(data);
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const data = await Fetcher.getRates(usedCurrencies.first.name);
			setRates(data.rates);
		};
		fetchData();
	}, [usedCurrencies.first]);

	const onSelectCurrencyHandler = async (btnId, value, description) => {
		const newCurrency = {};
		newCurrency[btnId] = {
			name: value,
			fullName: description,
		};

		setUsedCurrencies((prevState) => {
			return { ...prevState, ...newCurrency };
		});
		if (btnId === 'first') {
			const fetchedRates = await Fetcher.getRates(value);
			setRates({ ...fetchedRates.rates });
			console.log(fetchedRates.rates);
		}
	};

	return (
		<Container>
			<Header />
			<Main>
				<Card className="inputs">
					<MoneyInput
						btnId="first"
						btnTitle={usedCurrencies.first.fullName}
						btnText={usedCurrencies.first}
						labelText="Value"
						currencies={currencies}
						onSelect={onSelectCurrencyHandler}
						defaultInputValue={amount}
						onSetAmount={setAmount}
						defaultValue={usedCurrencies.first.name}
					/>
					<MoneyInput
						btnId="second"
						btnTitle={usedCurrencies.second.fullName}
						btnText={usedCurrencies.second}
						labelText="Converted to"
						currencies={currencies}
						onSelect={onSelectCurrencyHandler}
						defaultValue={usedCurrencies.second.name}
						defaultInputValue={convertedValue}
					/>
				</Card>
			</Main>
		</Container>
	);
}

export default App;
