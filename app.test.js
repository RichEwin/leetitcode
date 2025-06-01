import { expect, test } from "vitest";
import { flatten } from "./app.js";

test("flatten", () => {
	expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
});
