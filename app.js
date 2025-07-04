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

export function sumDigits(number) {
    return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, currValue) => (acc) + Number(currValue), 0)
}

export function lengthOfLastWord(word) {
	return word.trim().split(" ").at(-1).length
}

export function removeDuplicatesFromList(list) {
	if(!list) return []
	const newList = []
	list.forEach((item) => {
		if (!newList.includes(item)) 
			newList.push(item)
	})

	return newList
}

export function alternateCapitalize(string) {
	const list = [[],[]]

	string.split("").forEach((item, index) => {
		index % 2 === 0 ? 
		list[0].push(item.toUpperCase()) : 
		list[0].push(item)
	})
	

	string.split("").forEach((item, index) => {
		index % 2 !== 0 ?
		list[1].push(item.toUpperCase()) :
		list[1].push(item)
	})
	
	
	return [list[0].join(""), list[1].join("")]
}

export function findUnique(list) {
	const sortedList = list.sort()
	
	if (sortedList[0] !== sortedList[1]) {
		return sortedList[0]
	} 
		return sortedList.at(-1)
}

export function greaterThan10(list) {
	const greaterThan10 = []
	
	list.forEach((item) => {
		if(item > 10) {
			greaterThan10.push(item)
		}
	})

	return greaterThan10
}

export function last(list) {
	if(list.length === 0) {
		return -1
	}
	return list.at(-1)
}

export async function sleep(millis) {
	return new Promise((resolve) => setTimeout(resolve(millis), millis))
}

