import { expect, test } from "vitest";
import { sum } from "./sum";
import { Calculator } from "./calc";

// 1 toBe  - success
// test("1 더하기 2는 3이다", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// 2 toEqual - success
// test("1 더하기 2는 3이다", () => {
//   expect(sum(1, 2)).toEqual(3);
// });

// 3
describe("Calculator", () => {
  // 응집도 있는 테스트 세트를 위한 describe
  it("2개 숫자 더하기", () => {
    // 단위 테스트 이름
    // Arrange
    const first = 10; // 준비 구절
    const second = 20;
    const calculator = new Calculator();

    // Act
    const result = calculator.sum(first, second); // 실행 구절

    // Assert
    expect(result).toBe(30); // 검증 구절
  });
});
