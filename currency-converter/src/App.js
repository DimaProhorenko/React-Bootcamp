import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MoneyInput from './components/MoneyInput';
import Card from './components/Card';
import Container from './components/Container';
import Fetcher from './Fetcher';

function App() {
	const [currencies, setCurrencies] = useState({});
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
		const fetchData = async () => {
			const data = await Fetcher.getCurrencies();
			setCurrencies(data);
			console.log(data);
		};

		fetchData();
	}, []);

	const onSelectCurrencyHandler = (btnId, value, description) => {
		const newCurrency = {};
		newCurrency[btnId] = {
			name: value,
			fullName: description,
		};

		setUsedCurrencies((prevState) => {
			return { ...prevState, ...newCurrency };
		});
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
					/>
				</Card>
			</Main>
		</Container>
	);
}

export default App;
