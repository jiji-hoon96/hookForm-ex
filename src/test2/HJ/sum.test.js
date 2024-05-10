import { expect, test } from "vitest";
import { sum } from "./sum";

test("1 더하기 2는 3이다", () => {
  expect(sum(1, 2)).toBe(3);
});

// test결과
// ✓ 1 더하기 2는 3이다

// Test Files  1 passed (1)
//    Tests  1 passed (1)
// Start at  09:16:39
// Duration  177ms (transform 17ms, setup 0ms, collect 8ms, tests 1ms, environment 0ms, prepare 46ms)
