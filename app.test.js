import { expect, test } from "vitest";
import { accumulateStrings, alternateCapitalize, findUnique, flatten, greaterThan10, lengthOfLastWord, plusOne, removeDuplicatesFromList, sorted, sumDigits, twoSum } from "./app.js";

test("flatten", () => {
	expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("sorted", () => {
	const list = [5, 4, 3, 2, 1];
	expect(sorted(list)).toBe(list.reverse());
});

test("twoSum", () => {
	expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSum([7, 3, 11, 15], 10)).toStrictEqual([0, 1]);
});

test("accumulateStrings", () => {
  expect(accumulateStrings("abcd")).toEqual("A-Bb-Ccc-Dddd")
})

test("sumDigits", () => {
  expect(sumDigits(10)).toEqual(1)
  expect(sumDigits(99)).toEqual(18)
  expect(sumDigits(-32)).toEqual(5)
})

test("lengthOfLastWord", () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5)
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4)
})

test("removeDuplicatesFromList", () => {
  expect(removeDuplicatesFromList([1,1,2])).toEqual([1,2])
  expect(removeDuplicatesFromList([1,1,2,3,3])).toEqual([1,2,3])
  expect(removeDuplicatesFromList([])).toEqual([])
  expect(removeDuplicatesFromList(null)).toEqual([])
})

test("alternateCapitalize", () => {
  expect(alternateCapitalize("abcdef")).toEqual(['AbCdEf', 'aBcDeF'])
})

test("findUnique", () => {
  expect(findUnique([ 1, 0, 0 ])).toEqual(1)
  expect(findUnique([ 3, 10, 3, 3, 3 ])).toEqual(10)
  expect(findUnique([ 1, 1, 1, 2, 1, 1 ])).toEqual(2)
})

test("greaterThan10", () => {
  expect(greaterThan10([0,10,20,30])).toEqual([20,30])
})

