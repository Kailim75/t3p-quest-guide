import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listModulesTool from "./tools/list-modules";
import getModuleQuestionsTool from "./tools/get-module-questions";
import getMyProgressTool from "./tools/get-my-progress";
import getMyBadgesTool from "./tools/get-my-badges";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "t3p-quest-mcp",
  title: "T3P Quest MCP",
  version: "0.1.0",
  instructions:
    "Tools for T3P Quest, a French T3P (Taxi/VTC/VMDTR) exam prep app. Use `list_modules` and `get_module_questions` to explore official training content. Use `get_my_progress` and `get_my_badges` to read the signed-in user's data.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listModulesTool, getModuleQuestionsTool, getMyProgressTool, getMyBadgesTool],
});
