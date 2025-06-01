import { expect, test } from "vitest";
import { flatten, plusOne, sorted, twoSum } from "./app.js";

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

