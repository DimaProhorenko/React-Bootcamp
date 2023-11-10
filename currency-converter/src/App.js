import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MoneyInput from './components/MoneyInput';
import Card from './components/Card';
import Container from './components/Container';

function App() {
	return (
		<Container>
			<Header />
			<Main>
				<Card className="inputs">
					<MoneyInput btnText="usd" labelText="Value" />
					<MoneyInput btnText="euro" labelText="Converted to" />
				</Card>
			</Main>
		</Container>
	);
}

export default App;
