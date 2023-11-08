export default class Storage {
	static getArrayItem(itemName) {
		return JSON.parse(localStorage.getItem(itemName)) || [];
	}

	static setArrayItem(itemName, item) {
		localStorage.setItem(itemName, JSON.stringify(item));
	}
}
