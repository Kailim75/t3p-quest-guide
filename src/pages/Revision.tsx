import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, Lightbulb, FileText, GraduationCap } from 'lucide-react';
import Header from '@/components/Header';
import { getAllRevisionModules, RevisionModule, RevisionCard } from '@/data/revisionData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Revision = () => {
  const [selectedModule, setSelectedModule] = useState<RevisionModule | null>(null);
  const modules = getAllRevisionModules();

  if (selectedModule) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Back link */}
          <button 
            onClick={() => setSelectedModule(null)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux modules
          </button>

          {/* Module Header */}
          <div className="rounded-2xl border bg-card p-6 sm:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {selectedModule.moduleIcon}
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {selectedModule.moduleName}
                </h1>
                <p className="text-muted-foreground">
                  {selectedModule.introduction}
                </p>
              </div>
            </div>
          </div>

          {/* Fiches de cours */}
          <Accordion type="single" collapsible className="space-y-4">
            {selectedModule.cards.map((card, index) => (
              <AccordionItem 
                key={card.id} 
                value={card.id}
                className="border rounded-xl bg-card overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 data-[state=open]:bg-secondary/30">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-bold text-accent">
                      {index + 1}
                    </div>
                    <span className="font-semibold text-foreground">{card.title}</span>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-6 pt-2">
                  <RevisionCardContent card={card} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link 
              to={`/quiz/${selectedModule.moduleId}`}
              className="btn-primary"
            >
              <GraduationCap className="h-4 w-4" />
              Tester mes connaissances
            </Link>
            <Link 
              to={`/module/${selectedModule.moduleId}`}
              className="btn-outline"
            >
              Voir le détail du module
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back link */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <BookOpen className="h-4 w-4" />
            Mode révision
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Fiches de cours théoriques
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Révisez les points clés de chaque module sans QCM. 
            Idéal pour mémoriser la théorie avant de vous tester.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <button
              key={module.moduleId}
              onClick={() => setSelectedModule(module)}
              className="text-left rounded-2xl border bg-card p-6 hover:shadow-soft transition-all hover:border-primary/30 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl group-hover:bg-primary/10 transition-colors">
                  {module.moduleIcon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {module.moduleName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {module.cards.length} fiches
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {module.introduction}
              </p>
            </button>
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-12 rounded-2xl border bg-accent/5 p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-accent mb-2">
            <Lightbulb className="h-5 w-5" />
            <span className="font-semibold">Conseil de révision</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alternez entre la lecture des fiches et les quiz pour une mémorisation optimale. 
            Relisez les fiches après chaque erreur en quiz.
          </p>
        </div>
      </main>
    </div>
  );
};

// Composant pour afficher le contenu d'une fiche
const RevisionCardContent = ({ card }: { card: RevisionCard }) => {
  return (
    <div className="space-y-6">
      {/* Points clés */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-primary" />
          <h4 className="font-semibold text-foreground">Points clés</h4>
        </div>
        <ul className="space-y-2">
          {card.keyPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary mt-0.5">
                {idx + 1}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Astuces */}
      {card.tips.length > 0 && (
        <div className="rounded-lg bg-warning/10 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-4 w-4 text-warning" />
            <h4 className="font-semibold text-foreground">À retenir</h4>
          </div>
          <ul className="space-y-2">
            {card.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-warning">💡</span>
                <span className="text-foreground">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Références légales */}
      {card.legalRefs.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Références :</span>
          {card.legalRefs.map((ref, idx) => (
            <span key={idx} className="text-xs rounded bg-muted px-2 py-1">
              {ref}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Revision;
