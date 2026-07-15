import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import LearnersProgress from "./pages/LearnersProgress";
import ErrorRevision from "./pages/ErrorRevision";
import Badges from "./pages/Badges";
import Flashcards from "./pages/Flashcards";
import Install from "./pages/Install";
import NotFound from "./pages/NotFound";
import OAuthConsent from "./pages/OAuthConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="t3p-theme">
      <AuthProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* OAuth consent (unprotected — handles its own auth) */}
            <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
            {/* All routes are protected - require authentication */}
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/modules" element={<ProtectedRoute><Modules /></ProtectedRoute>} />
            <Route path="/module/:moduleId" element={<ProtectedRoute><ModuleDetail /></ProtectedRoute>} />
            <Route path="/quiz/:moduleId" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
            <Route path="/exam" element={<ProtectedRoute><ExamSelect /></ProtectedRoute>} />
            <Route path="/exam/:examId" element={<ProtectedRoute><Exam /></ProtectedRoute>} />
            <Route path="/revision" element={<ProtectedRoute><Revision /></ProtectedRoute>} />
            <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/admin/learners" element={<ProtectedRoute><LearnersProgress /></ProtectedRoute>} />
            <Route path="/revision-erreurs" element={<ProtectedRoute><ErrorRevision /></ProtectedRoute>} />
            <Route path="/badges" element={<ProtectedRoute><Badges /></ProtectedRoute>} />
            <Route path="/flashcards" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
            <Route path="/install" element={<ProtectedRoute><Install /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
