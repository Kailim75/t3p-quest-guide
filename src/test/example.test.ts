import { describe, expect, it } from "vitest";
import { isAnswerCorrect, parseCorrectAnswers } from "@/data/quizData";

describe("quiz answer helpers", () => {
  it("parses single and multiple correct answers", () => {
    expect(parseCorrectAnswers("A")).toEqual(["A"]);
    expect(parseCorrectAnswers("A,B")).toEqual(["A", "B"]);
  });

  it("validates multi-answer selections regardless of order", () => {
    expect(isAnswerCorrect(["B", "A"], "A,B")).toBe(true);
    expect(isAnswerCorrect(["A"], "A,B")).toBe(false);
    expect(isAnswerCorrect(["A", "C"], "A,B")).toBe(false);
  });
});
