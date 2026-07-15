import { defineTool } from "@lovable.dev/mcp-js";
import { modules } from "@/data/quizData";

export default defineTool({
  name: "list_modules",
  title: "List training modules",
  description:
    "List all T3P training modules (Taxi, VTC, VMDTR) with their sub-modules and question counts.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = modules.map((m) => ({
      id: m.id,
      name: m.name,
      description: m.description,
      subModules: m.subModules.map((s) => ({
        id: s.id,
        name: s.name,
        questionCount: s.questionCount,
      })),
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { modules: summary },
    };
  },
});
