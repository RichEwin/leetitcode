// node --watch app.js

export function flatten(array) {
	if (typeof array !== "object" || array === null) {
		return array;
	}

	return array.reduce((acc, prevValue) => acc.concat(prevValue), []);
}
