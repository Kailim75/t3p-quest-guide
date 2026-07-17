import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

interface QuestionRow {
  id: string;
  module_id: string;
  sub_module_id: string;
  text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  reference: string;
  difficulty: string;
}

/** Environnement d'exécution serveur (Deno, edge function) — absent côté navigateur. */
const getEnv = (name: string): string | undefined =>
  (globalThis as { Deno?: { env: { get(key: string): string | undefined } } }).Deno?.env.get(name);

export default defineTool({
  name: "get_module_questions",
  title: "Get questions for a module",
  description:
    "Return official T3P quiz questions for a given module id (e.g. 'taxi', 'vtc', 'vmdtr'). Questions are read from the database (single source of truth); correct answers are not exposed.",
  inputSchema: {
    moduleId: z.string().min(1).describe("Module id, e.g. 'taxi' or 'vtc'."),
    subModuleId: z
      .string()
      .optional()
      .describe("Optional sub-module id to filter within the module."),
    limit: z.number().int().min(1).max(200).optional().describe("Max questions to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ moduleId, subModuleId, limit }) => {
    const supabaseUrl = getEnv("SUPABASE_URL");
    const serviceKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceKey) {
      return {
        content: [
          { type: "text", text: "Questions unavailable: database credentials missing in this environment." },
        ],
        structuredContent: { questions: [] },
      };
    }

    const params = new URLSearchParams({
      select: "id,module_id,sub_module_id,text,option_a,option_b,option_c,option_d,reference,difficulty",
      module_id: `eq.${moduleId}`,
      order: "id.asc",
      limit: String(limit ?? 200),
    });
    if (subModuleId) params.set("sub_module_id", `eq.${subModuleId}`);

    const response = await fetch(`${supabaseUrl}/rest/v1/questions?${params.toString()}`, {
      headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
    });

    if (!response.ok) {
      return {
        content: [{ type: "text", text: `Failed to load questions (HTTP ${response.status}).` }],
        structuredContent: { questions: [] },
      };
    }

    const rows = (await response.json()) as QuestionRow[];
    const safe = rows.map((q) => ({
      id: q.id,
      moduleId: q.module_id,
      subModuleId: q.sub_module_id,
      text: q.text,
      options: [
        { letter: "A", text: q.option_a },
        { letter: "B", text: q.option_b },
        { letter: "C", text: q.option_c },
        { letter: "D", text: q.option_d },
      ],
      reference: q.reference,
      difficulty: q.difficulty,
    }));

    return {
      content: [{ type: "text", text: `Returned ${safe.length} questions.` }],
      structuredContent: { questions: safe },
    };
  },
});
