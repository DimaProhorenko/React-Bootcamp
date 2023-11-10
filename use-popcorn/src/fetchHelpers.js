import { API_KEY } from './key';

export const searchMovieById = async (id) => {
	const result = await fetchData(`&i=${id}`);
	return result;
};

export const fetchData = async (subString) => {
	const searchString = `https://www.omdbapi.com/?apikey=${API_KEY}${subString}`;
	const res = await fetch(searchString);
	if (!res.ok) throw new Error('Something went wrong');
	const data = await res.json();

	if (data.Response !== 'True') throw new Error(data.Error);
	return data;
};

export const searchMovies = async (query) => {
	const result = await fetchData(`&s=${query}`);
	return result;
};
