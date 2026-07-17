import { Link } from 'react-router-dom';
import { Clock, FileText, Award, AlertCircle, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import { ModuleIcon } from '@/lib/moduleIcons';

interface ExamType {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  questionCount: number;
  passingScore: number; // percentage
  modules: string[];
}

const examTypes: ExamType[] = [
  {
    id: 'admissibilite',
    name: 'Épreuve d\'admissibilité',
    description: 'Tronc commun - Questions sur la réglementation, sécurité routière, gestion, français et anglais',
    duration: 90, // 1h30
    questionCount: 50,
    passingScore: 70, // 35/50
    modules: ['reglementation', 'securite', 'gestion', 'francais', 'anglais']
  },
  {
    id: 'admission-taxi',
    name: 'Épreuve d\'admission Taxi',
    description: 'Épreuve spécifique au métier de chauffeur de taxi',
    duration: 30,
    questionCount: 20,
    passingScore: 70, // 14/20
    modules: ['taxi', 'taxi-national', 'taxi-territoire']
  },

  {
    id: 'admission-vtc',
    name: 'Épreuve d\'admission VTC',
    description: 'Épreuve spécifique au métier de chauffeur VTC',
    duration: 30,
    questionCount: 20,
    passingScore: 70, // 14/20
    modules: ['vtc']
  },
  {
    id: 'admission-vmdtr',
    name: 'Épreuve d\'admission VMDTR',
    description: 'Épreuve spécifique aux véhicules motorisés à deux ou trois roues',
    duration: 30,
    questionCount: 20,
    passingScore: 70, // 14/20
    modules: ['vmdtr']
  }
];

const ExamSelect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
            <Award className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Examen Blanc T3P
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entraînez-vous dans les conditions réelles de l'examen avec le chronomètre et le barème officiel.
          </p>
        </div>

        {/* Warning */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-start gap-3 rounded-xl bg-warning/10 border border-warning/20 p-4">
            <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-warning mb-1">Conditions d'examen</p>
              <p className="text-muted-foreground">
                L'examen blanc simule les conditions réelles : chronomètre actif, pas de retour en arrière possible, 
                et résultats basés sur le barème officiel. Assurez-vous d'avoir le temps nécessaire avant de commencer.
              </p>
            </div>
          </div>
        </div>

        {/* Exam Types */}
        <div className="max-w-3xl mx-auto space-y-4">
          {examTypes.map((exam) => (
            <Link
              key={exam.id}
              to={`/exam/${exam.id}`}
              className="block group"
            >
              <div className="rounded-2xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <ModuleIcon moduleId={exam.id} className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {exam.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exam.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{exam.duration} minutes</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        <span>{exam.questionCount} questions</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Seuil : {exam.passingScore}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info */}
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-lg font-semibold text-foreground mb-4 text-center">
            Modalités officielles France Compétences
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">Admissibilité</h3>
                <span className="text-[10px] font-mono text-muted-foreground">A · B · C · D · E</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 50 questions QCM — tronc commun</li>
                <li>• Durée : 1h30 (90 min)</li>
                <li>• Seuil : 35/50 (70%)</li>
                <li>• Note éliminatoire anglais : &lt; 4/20</li>
                <li>• Note éliminatoire matière : &lt; 6/20</li>
              </ul>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground">Admission</h3>
                <span className="text-[10px] font-mono text-muted-foreground">F(T)/G(T) · F(V)/G(V) · F(M)/G(M)</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 20 questions spécifiques métier</li>
                <li>• Durée : 30 minutes</li>
                <li>• Seuil : 14/20 (70%)</li>
                <li>• Référentiels : RS5635 (Taxi), RS5637 (VTC), RS5636 (VMDTR)</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-4">
            Source : fiches France Compétences RS5635, RS5636, RS5637.
          </p>
        </div>

      </main>
    </div>
  );
};

export default ExamSelect;
