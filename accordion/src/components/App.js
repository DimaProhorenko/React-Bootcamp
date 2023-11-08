import React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

function App() {
	const faqs = [
		{
			id: 0,
			title: 'Where are these chairs assembled?',
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
		},
		{
			id: 1,
			title: 'How long do I have to return my chair?',
			text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
		},
		{
			id: 2,
			title: 'Do you ship to countries outside the EU?',
			text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
		},
	];
	return (
		<main className="container">
			<Accordion>
				{faqs.map((el) => (
					<AccordionItem
						key={Date.now() * Math.random()}
						title={el.title}
						text={el.text}
						id={el.id}
					/>
				))}
			</Accordion>
		</main>
	);
}

export default App;
