import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { modules, isAnswerCorrect, parseCorrectAnswers, hasMultipleAnswers } from "@/data/quizData";
import { questionExplanations } from "@/data/questionExplanations";

// La base de données est l'unique source des questions et des corrigés.
// Ces tests protègent ce qui reste embarqué dans le code : la structure
// des modules/examens (partagée entre l'app et la fonction serveur) et
// les utilitaires de correction.

const edgeFunctionSource = readFileSync(
  resolve(__dirname, "../../supabase/functions/validate-quiz-result/index.ts"),
  "utf-8",
);

describe("structure des modules et des examens", () => {
  it("expose 11 modules aux ids uniques", () => {
    expect(modules).toHaveLength(11);
    const ids = modules.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const module of modules) {
      expect(["commun", "specifique"]).toContain(module.type);
      expect(module.name.length).toBeGreaterThan(0);
    }
  });

  it("garde la fonction serveur alignée sur les modules de l'app", () => {
    // Chaque module de l'app doit être un quiz_id accepté par la fonction serveur.
    for (const module of modules) {
      expect(edgeFunctionSource).toContain(`'${module.id}'`);
    }
    // Structure des examens blancs (mêmes valeurs que les pages Exam/ExamSelect).
    expect(edgeFunctionSource).toContain("admissibilite: { count: 50");
    expect(edgeFunctionSource).toContain("'admission-taxi': { count: 20");
    expect(edgeFunctionSource).toContain("'admission-vtc': { count: 20");
    expect(edgeFunctionSource).toContain("'admission-vmdtr': { count: 20");
    // Le défi du jour doit rester accepté.
    expect(edgeFunctionSource).toContain("defi-");
    // Le barème doit être lu dans la base, pas dans un fichier embarqué.
    expect(edgeFunctionSource).toContain("from('questions')");
    expect(edgeFunctionSource).not.toContain("correctAnswers.ts");
  });
});

describe("utilitaires de correction", () => {
  it("compare les réponses indépendamment de l'ordre", () => {
    expect(isAnswerCorrect(["A"], "A")).toBe(true);
    expect(isAnswerCorrect(["B", "A"], "A,B")).toBe(true);
    expect(isAnswerCorrect(["A"], "A,B")).toBe(false);
    expect(isAnswerCorrect(["A", "B"], "A")).toBe(false);
    expect(isAnswerCorrect(["C"], "A")).toBe(false);
  });

  it("analyse correctement les clés simples et multiples", () => {
    expect(parseCorrectAnswers("A")).toEqual(["A"]);
    expect(parseCorrectAnswers("A,B")).toEqual(["A", "B"]);
    expect(hasMultipleAnswers("A,B")).toBe(true);
    expect(hasMultipleAnswers("A")).toBe(false);
  });
});

describe("fiches pédagogiques", () => {
  it("contient une fiche complète pour chaque entrée", () => {
    const entries = Object.entries(questionExplanations);
    expect(entries.length).toBeGreaterThanOrEqual(452);
    for (const [id, explanation] of entries) {
      expect(id).toMatch(/^[a-z0-9-]+$/);
      expect(explanation.content.length, `fiche ${id} sans contenu`).toBeGreaterThan(20);
      expect(explanation.tip.length, `fiche ${id} sans astuce`).toBeGreaterThan(5);
    }
  });
});
