// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react';

import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import { Button } from '../';

export function convertToEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split('')
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
	const navigate = useNavigate();

	const [lat, lng] = useUrlPosition();

	const [isLoadingGeo, setIsLoadingGeo] = useState(false);
	const [cityName, setCityName] = useState('');
	const [country, setCountry] = useState('');
	const [emoji, setEmoji] = useState('');

	const [date, setDate] = useState(new Date());
	const [notes, setNotes] = useState('');

	const goBackHandler = (e) => {
		e.preventDefault();
		navigate(-1);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `${BASE_URL}?latitude=${lat}&longtitude=${lng}`;
				console.log(url);
				setIsLoadingGeo(true);
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
				setCityName(data.city);
				setCountry(data.countryName);
				setEmoji(convertToEmoji(data.countryCode));
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoadingGeo(false);
			}
		};
		fetchData();
	}, [lat, lng]);

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<label htmlFor="cityName">City name</label>
				<input
					id="cityName"
					onChange={(e) => setCityName(e.target.value)}
					value={cityName}
				/>
				{/* <span className={styles.flag}>{emoji}</span> */}
			</div>

			<div className={styles.row}>
				<label htmlFor="date">When did you go to {cityName}?</label>
				<input
					id="date"
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
			</div>

			<div className={styles.row}>
				<label htmlFor="notes">
					Notes about your trip to {cityName}
				</label>
				<textarea
					id="notes"
					onChange={(e) => setNotes(e.target.value)}
					value={notes}
				/>
			</div>

			<div className={styles.buttons}>
				<Button type="primary">Add</Button>
				<Button type="back" onClick={goBackHandler}>
					&larr; Back
				</Button>
			</div>
		</form>
	);
}

export default Form;
