import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { questions } from "@/data/quizData";

export default defineTool({
  name: "get_module_questions",
  title: "Get questions for a module",
  description:
    "Return official T3P quiz questions for a given module id (e.g. 'taxi', 'vtc', 'vmd', 'trans'). Question text, options and reference are returned; correct answers are not exposed.",
  inputSchema: {
    moduleId: z.string().min(1).describe("Module id, e.g. 'taxi' or 'vtc'."),
    subModuleId: z
      .string()
      .optional()
      .describe("Optional sub-module id to filter within the module."),
    limit: z.number().int().min(1).max(200).optional().describe("Max questions to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ moduleId, subModuleId, limit }) => {
    let list = questions.filter((q) => q.moduleId === moduleId);
    if (subModuleId) list = list.filter((q) => q.subModuleId === subModuleId);
    if (limit) list = list.slice(0, limit);
    const safe = list.map((q) => ({
      id: q.id,
      moduleId: q.moduleId,
      subModuleId: q.subModuleId,
      text: q.text,
      options: q.options,
      reference: q.reference,
      difficulty: q.difficulty,
    }));
    return {
      content: [{ type: "text", text: `Returned ${safe.length} questions.` }],
      structuredContent: { questions: safe },
    };
  },
});
