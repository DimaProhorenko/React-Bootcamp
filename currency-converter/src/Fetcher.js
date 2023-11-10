export default class Fetcher {
	static _URL = 'https://api.frankfurter.app/';

	static async getCurrencies() {
		const data = await Fetcher._getData('currencies');
		return data;
	}

	static async _getData(endpoint) {
		const res = await fetch(`${Fetcher._URL}${endpoint}`);
		if (res.ok) {
			const data = await res.json();
			return data;
		} else return null;
	}
}
