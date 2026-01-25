import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
import { QuestionInput } from '@/hooks/useQuestions';
import { Loader2 } from 'lucide-react';

interface QuestionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (question: QuestionInput) => Promise<void>;
  initialData?: QuestionInput | null;
  isLoading?: boolean;
}

const QuestionForm = ({ open, onOpenChange, onSubmit, initialData, isLoading }: QuestionFormProps) => {
  const [formData, setFormData] = useState<QuestionInput>({
    id: '',
    module_id: '',
    sub_module_id: '',
    text: '',
    option_a: '',
    option_b: '',
    option_c: '',
    option_d: '',
    correct_answer: 'A',
    explanation: '',
    reference: '',
    difficulty: 'moyen',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
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
        correct_answer: 'A',
        explanation: '',
        reference: '',
        difficulty: 'moyen',
      });
    }
  }, [initialData, open]);

  const selectedModule = modules.find(m => m.id === formData.module_id);
  const subModules = selectedModule?.subModules || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

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
              <Label htmlFor="option_a">Option A</Label>
              <Input
                id="option_a"
                value={formData.option_a}
                onChange={(e) => setFormData(prev => ({ ...prev, option_a: e.target.value }))}
                placeholder="Réponse A"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="option_b">Option B</Label>
              <Input
                id="option_b"
                value={formData.option_b}
                onChange={(e) => setFormData(prev => ({ ...prev, option_b: e.target.value }))}
                placeholder="Réponse B"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="option_c">Option C</Label>
              <Input
                id="option_c"
                value={formData.option_c}
                onChange={(e) => setFormData(prev => ({ ...prev, option_c: e.target.value }))}
                placeholder="Réponse C"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="option_d">Option D</Label>
              <Input
                id="option_d"
                value={formData.option_d}
                onChange={(e) => setFormData(prev => ({ ...prev, option_d: e.target.value }))}
                placeholder="Réponse D"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="correct_answer">Bonne réponse</Label>
              <Select
                value={formData.correct_answer}
                onValueChange={(value: 'A' | 'B' | 'C' | 'D') => 
                  setFormData(prev => ({ ...prev, correct_answer: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                </SelectContent>
              </Select>
            </div>

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
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {initialData ? 'Mettre à jour' : 'Ajouter'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionForm;
