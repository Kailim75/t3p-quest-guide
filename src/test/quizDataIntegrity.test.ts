import { describe, expect, it } from "vitest";
import { getAllQuestions } from "@/data/quizData";
import {
  correctAnswers,
  examQuestionCounts,
  questionModules,
  quizModuleIds,
  validQuizIds,
} from "../../supabase/functions/validate-quiz-result/correctAnswers";

const examModules = {
  admissibilite: ["reglementation", "securite", "gestion", "francais", "anglais"],
  "admission-taxi": ["taxi", "taxi-national", "taxi-territoire"],
  "admission-vtc": ["vtc"],
  "admission-vmdtr": ["vmdtr"],
};

describe("quiz data validation contract", () => {
  const questions = getAllQuestions();

  it("keeps edge validation answers synchronized with app questions", () => {
    const appQuestionIds = questions.map(q => q.id).sort();
    const edgeQuestionIds = Object.keys(correctAnswers).sort();

    expect(edgeQuestionIds).toEqual(appQuestionIds);

    for (const question of questions) {
      expect(correctAnswers[question.id]).toBe(question.correctAnswer);
      expect(questionModules[question.id]).toBe(question.moduleId);
    }
  });

  it("uses the same quiz IDs as the app routes", () => {
    expect(validQuizIds.sort()).toEqual(Object.keys(quizModuleIds).sort());
    expect(quizModuleIds).toMatchObject(examModules);
    expect(examQuestionCounts).toEqual({
      admissibilite: 50,
      "admission-taxi": 20,
      "admission-vtc": 20,
      "admission-vmdtr": 20,
    });
  });

  it("has enough available questions for every exam configuration", () => {
    for (const [examId, moduleIds] of Object.entries(examModules)) {
      const availableQuestions = questions.filter(question =>
        moduleIds.includes(question.moduleId),
      );

      expect(availableQuestions.length).toBeGreaterThanOrEqual(examQuestionCounts[examId]);
    }
  });
});
