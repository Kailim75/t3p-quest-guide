import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { modules } from '@/data/quizData';
import { QuestionInput, AnswerLetter, parseCorrectAnswers, formatCorrectAnswers } from '@/hooks/useQuestions';
import { Loader2, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface QuestionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (question: QuestionInput) => Promise<void>;
  initialData?: QuestionInput | null;
  isLoading?: boolean;
}

const QuestionForm = ({ open, onOpenChange, onSubmit, initialData, isLoading }: QuestionFormProps) => {
  const [formData, setFormData] = useState<Omit<QuestionInput, 'correct_answer'> & { correct_answers: AnswerLetter[] }>({
    id: '',
    module_id: '',
    sub_module_id: '',
    text: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answers: ['A'],
    explanation: '',
    reference: '',
    difficulty: 'moyen',
  });

  useEffect(() => {
    if (initialData) {
      const correctAnswers = parseCorrectAnswers(initialData.correct_answer);
      setFormData({
        ...initialData,
        correct_answers: correctAnswers,
      });
    } else {
      setFormData({
        id: `q-${Date.now()}`,
        module_id: '',
        sub_module_id: '',
        text: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        correct_answers: ['A'],
        explanation: '',
        reference: '',
        difficulty: 'moyen',
      });
    }
  }, [initialData, open]);

  const selectedModule = modules.find(m => m.id === formData.module_id);
  const subModules = selectedModule?.subModules || [];

  const handleAnswerToggle = (letter: AnswerLetter) => {
    setFormData(prev => {
      const currentAnswers = prev.correct_answers;
      const isSelected = currentAnswers.includes(letter);
      
      if (isSelected) {
        // Permettre de tout décocher
        return { ...prev, correct_answers: currentAnswers.filter(a => a !== letter) };
      } else {
        // Max 2 answers allowed
        if (currentAnswers.length >= 2) {
          return { ...prev, correct_answers: [currentAnswers[1], letter] };
        }
        return { ...prev, correct_answers: [...currentAnswers, letter] };
      }
    });
  };

  const hasValidAnswers = formData.correct_answers.length >= 1 && formData.correct_answers.length <= 2;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { correct_answers, ...rest } = formData;
    const questionInput: QuestionInput = {
      ...rest,
      correct_answer: formatCorrectAnswers(correct_answers),
    };
    
    await onSubmit(questionInput);
  };

  const isMultipleAnswers = formData.correct_answers.length > 1;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {initialData ? 'Modifier la question' : 'Ajouter une question'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="module">Module</Label>
              <Select
                value={formData.module_id}
                onValueChange={(value) => setFormData(prev => ({ 
                  ...prev, 
                  module_id: value,
                  sub_module_id: '' 
                }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un module" />
                </SelectTrigger>
                <SelectContent>
                  {modules.map((module) => (
                    <SelectItem key={module.id} value={module.id}>
                      {module.icon} {module.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="submodule">Sous-module</Label>
              <Select
                value={formData.sub_module_id}
                onValueChange={(value) => setFormData(prev => ({ ...prev, sub_module_id: value }))}
                disabled={!formData.module_id}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un sous-module" />
                </SelectTrigger>
                <SelectContent>
                  {subModules.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="text">Question</Label>
            <Textarea
              id="text"
              value={formData.text}
              onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
              placeholder="Entrez la question..."
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="check_a"
                  checked={formData.correct_answers.includes('A')}
                  onCheckedChange={() => handleAnswerToggle('A')}
                />
                <Label htmlFor="option_a" className="flex-1">Option A</Label>
              </div>
              <Input
                id="option_a"
                value={formData.option_a}
                onChange={(e) => setFormData(prev => ({ ...prev, option_a: e.target.value }))}
                placeholder="Réponse A"
                required
                className={formData.correct_answers.includes('A') ? 'border-green-500 bg-green-500/10' : ''}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="check_b"
                  checked={formData.correct_answers.includes('B')}
                  onCheckedChange={() => handleAnswerToggle('B')}
                />
                <Label htmlFor="option_b" className="flex-1">Option B</Label>
              </div>
              <Input
                id="option_b"
                value={formData.option_b}
                onChange={(e) => setFormData(prev => ({ ...prev, option_b: e.target.value }))}
                placeholder="Réponse B"
                required
                className={formData.correct_answers.includes('B') ? 'border-green-500 bg-green-500/10' : ''}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="check_c"
                  checked={formData.correct_answers.includes('C')}
                  onCheckedChange={() => handleAnswerToggle('C')}
                />
                <Label htmlFor="option_c" className="flex-1">Option C</Label>
              </div>
              <Input
                id="option_c"
                value={formData.option_c}
                onChange={(e) => setFormData(prev => ({ ...prev, option_c: e.target.value }))}
                placeholder="Réponse C"
                required
                className={formData.correct_answers.includes('C') ? 'border-green-500 bg-green-500/10' : ''}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="check_d"
                  checked={formData.correct_answers.includes('D')}
                  onCheckedChange={() => handleAnswerToggle('D')}
                />
                <Label htmlFor="option_d" className="flex-1">Option D</Label>
              </div>
              <Input
                id="option_d"
                value={formData.option_d}
                onChange={(e) => setFormData(prev => ({ ...prev, option_d: e.target.value }))}
                placeholder="Réponse D"
                required
                className={formData.correct_answers.includes('D') ? 'border-green-500 bg-green-500/10' : ''}
              />
            </div>
          </div>

          {isMultipleAnswers && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Cette question a <strong>2 bonnes réponses</strong> : {formData.correct_answers.join(' et ')}.
                L'utilisateur devra sélectionner les deux pour valider.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulté</Label>
            <Select
              value={formData.difficulty}
              onValueChange={(value: 'facile' | 'moyen' | 'difficile') => 
                setFormData(prev => ({ ...prev, difficulty: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facile">Facile</SelectItem>
                <SelectItem value="moyen">Moyen</SelectItem>
                <SelectItem value="difficile">Difficile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="explanation">Explication</Label>
            <Textarea
              id="explanation"
              value={formData.explanation}
              onChange={(e) => setFormData(prev => ({ ...prev, explanation: e.target.value }))}
              placeholder="Explication de la bonne réponse..."
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference">Référence</Label>
            <Input
              id="reference"
              value={formData.reference}
              onChange={(e) => setFormData(prev => ({ ...prev, reference: e.target.value }))}
              placeholder="Source ou référence officielle"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isLoading || !hasValidAnswers}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {initialData ? 'Mettre à jour' : 'Ajouter'}
            </Button>
          </div>
          {!hasValidAnswers && (
            <p className="text-sm text-destructive text-center">
              Veuillez sélectionner 1 ou 2 bonnes réponses
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionForm;
