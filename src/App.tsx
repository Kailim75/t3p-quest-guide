import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import ExamSelect from "./pages/ExamSelect";
import Exam from "./pages/Exam";
import Revision from "./pages/Revision";
import Progress from "./pages/Progress";
import Admin from "./pages/Admin";
import ErrorRevision from "./pages/ErrorRevision";
import Badges from "./pages/Badges";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/module/:moduleId" element={<ModuleDetail />} />
            <Route path="/quiz/:moduleId" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/exam" element={<ExamSelect />} />
            <Route path="/exam/:examId" element={<Exam />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/revision-erreurs" element={<ErrorRevision />} />
            <Route path="/badges" element={<Badges />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
