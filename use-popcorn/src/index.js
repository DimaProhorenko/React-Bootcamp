import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import './style.css';
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StarRating
			size={48}
			messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
			className="font"
		/>
	</React.StrictMode>
);
