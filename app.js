// node --watch app.js

export function flatten(array) {
	if (typeof array !== "object" || array === null) {
		return array;
	}

	return array.reduce((acc, prevValue) => acc.concat(prevValue), []);
}

export function sorted(array) {
	return array.sort((a, b) => a - b);
}

export function twoSum(array, target) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				return [i, j];
			}
		}
	}
}

export function accumulateStrings(string) {
    const splitString = string.split("")
    return splitString
    .map((item, index) => (item.toUpperCase() + item.toLowerCase()
    .repeat(index)))
    .join("-")
}
