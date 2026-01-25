import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Search, 
  HelpCircle,
  Loader2,
  FileQuestion
} from 'lucide-react';
import { useQuestions, QuestionInput, DbQuestion } from '@/hooks/useQuestions';
import { modules } from '@/data/quizData';
import { useToast } from '@/hooks/use-toast';
import QuestionForm from './QuestionForm';

const difficultyLabels: Record<string, string> = {
  facile: 'Facile',
  moyen: 'Moyen',
  difficile: 'Difficile',
};

const difficultyColors: Record<string, string> = {
  facile: 'bg-green-500/10 text-green-600',
  moyen: 'bg-yellow-500/10 text-yellow-600',
  difficile: 'bg-red-500/10 text-red-600',
};

const QuestionsManager = () => {
  const { questions, isLoading, addQuestion, updateQuestion, deleteQuestion } = useQuestions();
  const { toast } = useToast();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [formOpen, setFormOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<DbQuestion | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<string | null>(null);

  // Filter questions
  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModule = selectedModule === 'all' || q.module_id === selectedModule;
    return matchesSearch && matchesModule;
  });

  const handleAddQuestion = async (question: QuestionInput) => {
    try {
      await addQuestion.mutateAsync(question);
      toast({
        title: 'Question ajoutée',
        description: 'La question a été ajoutée avec succès.',
      });
      setFormOpen(false);
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible d\'ajouter la question.',
        variant: 'destructive',
      });
    }
  };

  const handleUpdateQuestion = async (question: QuestionInput) => {
    try {
      await updateQuestion.mutateAsync(question);
      toast({
        title: 'Question modifiée',
        description: 'La question a été mise à jour avec succès.',
      });
      setFormOpen(false);
      setEditingQuestion(null);
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de modifier la question.',
        variant: 'destructive',
      });
    }
  };

  const handleDeleteQuestion = async () => {
    if (!questionToDelete) return;
    
    try {
      await deleteQuestion.mutateAsync(questionToDelete);
      toast({
        title: 'Question supprimée',
        description: 'La question a été supprimée avec succès.',
      });
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de supprimer la question.',
        variant: 'destructive',
      });
    } finally {
      setDeleteDialogOpen(false);
      setQuestionToDelete(null);
    }
  };

  const openEditForm = (question: DbQuestion) => {
    setEditingQuestion(question);
    setFormOpen(true);
  };

  const openDeleteDialog = (questionId: string) => {
    setQuestionToDelete(questionId);
    setDeleteDialogOpen(true);
  };

  const getModuleName = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    return module ? `${module.icon} ${module.name}` : moduleId;
  };

  const convertToFormData = (question: DbQuestion): QuestionInput => ({
    id: question.id,
    module_id: question.module_id,
    sub_module_id: question.sub_module_id,
    text: question.text,
    option_a: question.option_a,
    option_b: question.option_b,
    option_c: question.option_c,
    option_d: question.option_d,
    correct_answer: question.correct_answer,
    explanation: question.explanation,
    reference: question.reference,
    difficulty: question.difficulty,
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <FileQuestion className="h-5 w-5" />
            Gestion des Questions ({questions.length})
          </CardTitle>
          <Button onClick={() => { setEditingQuestion(null); setFormOpen(true); }}>
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une question
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedModule} onValueChange={setSelectedModule}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Filtrer par module" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les modules</SelectItem>
              {modules.map((module) => (
                <SelectItem key={module.id} value={module.id}>
                  {module.icon} {module.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Questions Table */}
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : filteredQuestions.length > 0 ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">ID</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Réponse</TableHead>
                  <TableHead>Difficulté</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question) => (
                  <TableRow key={question.id}>
                    <TableCell className="font-mono text-xs">
                      {question.id.slice(0, 8)}
                    </TableCell>
                    <TableCell className="max-w-[300px]">
                      <p className="truncate">{question.text}</p>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{getModuleName(question.module_id)}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-bold">
                        {question.correct_answer}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={difficultyColors[question.difficulty]}>
                        {difficultyLabels[question.difficulty]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openEditForm(question)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => openDeleteDialog(question.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground mb-4">
              {searchQuery || selectedModule !== 'all' 
                ? 'Aucune question trouvée avec ces filtres'
                : 'Aucune question dans la base de données'}
            </p>
            <Button onClick={() => { setEditingQuestion(null); setFormOpen(true); }}>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter la première question
            </Button>
          </div>
        )}

        {/* Question Form Dialog */}
        <QuestionForm
          open={formOpen}
          onOpenChange={(open) => {
            setFormOpen(open);
            if (!open) setEditingQuestion(null);
          }}
          onSubmit={editingQuestion ? handleUpdateQuestion : handleAddQuestion}
          initialData={editingQuestion ? convertToFormData(editingQuestion) : null}
          isLoading={addQuestion.isPending || updateQuestion.isPending}
        />

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Supprimer cette question ?</AlertDialogTitle>
              <AlertDialogDescription>
                Cette action est irréversible. La question sera définitivement supprimée de la base de données.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteQuestion}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                {deleteQuestion.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Trash2 className="h-4 w-4 mr-2" />
                )}
                Supprimer
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
};

export default QuestionsManager;
