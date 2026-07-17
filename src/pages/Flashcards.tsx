import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw,
  Shuffle,
  BookOpen,
  ChevronLeft,
  Check,
  X,
  Layers,
  AlertTriangle,
  Star,
  Pin,
  Lightbulb
} from 'lucide-react';
import { revisionModules, RevisionCard } from '@/data/revisionData';
import { ModuleIcon } from '@/lib/moduleIcons';
import { revisionDomainFor, useTargetExam } from '@/lib/targetExam';

interface FlashcardData {
  id: string;
  moduleId: string;
  moduleName: string;
  moduleIcon: string;
  question: string;
  essential: string;
  keyPoints: string[];
  examWarning?: string;
  tips: string[];
}

const Flashcards = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
  const [unknownCards, setUnknownCards] = useState<Set<string>>(new Set());

  const [target] = useTargetExam();
  const domainFilter = revisionDomainFor(target);
  const parcoursModules = useMemo(
    () =>
      revisionModules.filter(
        (m) => !domainFilter || m.domain === 'commun' || m.domain === domainFilter
      ),
    [domainFilter]
  );

  // Convert revision cards to flashcards with new structure
  const allFlashcards: FlashcardData[] = useMemo(() => {
    const cards: FlashcardData[] = [];

    parcoursModules.forEach(module => {
      module.cards.forEach(card => {
        cards.push({
          id: card.id,
          moduleId: module.moduleId,
          moduleName: module.moduleName,
          moduleIcon: module.moduleIcon,
          question: card.title,
          essential: card.essential,
          keyPoints: card.keyPoints,
          examWarning: card.examWarning,
          tips: card.tips,
        });
      });
    });
    
    return cards;
  }, [parcoursModules]);

  // Filter cards by selected module
  const flashcards = useMemo(() => {
    if (!selectedModule) return [];
    if (selectedModule === 'all') return allFlashcards;
    return allFlashcards.filter(card => card.moduleId === selectedModule);
  }, [selectedModule, allFlashcards]);

  const currentCard = flashcards[currentIndex];
  const progress = flashcards.length > 0 ? ((currentIndex + 1) / flashcards.length) * 100 : 0;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      // Session terminée
      setCurrentIndex(flashcards.length);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleKnown = () => {
    if (currentCard) {
      setKnownCards(prev => new Set([...prev, currentCard.id]));
      setUnknownCards(prev => {
        const next = new Set(prev);
        next.delete(currentCard.id);
        return next;
      });
    }
    handleNext();
  };

  const handleUnknown = () => {
    if (currentCard) {
      setUnknownCards(prev => new Set([...prev, currentCard.id]));
      setKnownCards(prev => {
        const next = new Set(prev);
        next.delete(currentCard.id);
        return next;
      });
    }
    handleNext();
  };

  const handleShuffle = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
  };

  const handleSelectModule = (moduleId: string) => {
    setSelectedModule(moduleId);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
  };

  const domainColors = {
    commun: 'bg-primary/10 text-primary',
    taxi: 'bg-yellow-500/10 text-yellow-600',
    vtc: 'bg-blue-500/10 text-blue-600',
    vmdtr: 'bg-green-500/10 text-green-600'
  };

  const domainLabels = {
    commun: 'Tronc commun',
    taxi: 'Taxi',
    vtc: 'VTC',
    vmdtr: 'VMDTR'
  };

  // Module selection view
  if (!selectedModule) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
              <Layers className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Flashcards
            </h1>
            <p className="text-muted-foreground">
              Mémorisez l'essentiel avec des cartes interactives
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {/* All modules option */}
            <button
              onClick={() => handleSelectModule('all')}
              className="w-full p-4 rounded-xl border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tous les modules</h3>
                  <p className="text-sm text-muted-foreground">
                    {allFlashcards.length} cartes au total
                  </p>
                </div>
              </div>
            </button>

            {/* Individual modules */}
            {parcoursModules.map(module => {
              const cardCount = allFlashcards.filter(c => c.moduleId === module.moduleId).length;
              return (
                <button
                  key={module.moduleId}
                  onClick={() => handleSelectModule(module.moduleId)}
                  className="w-full p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <ModuleIcon moduleId={module.moduleId} className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{module.moduleName}</h3>
                        <Badge variant="secondary" className={`${domainColors[module.domain]} text-xs`}>
                          {domainLabels[module.domain]}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {cardCount} carte{cardCount > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  // No cards in module
  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8 text-center">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Aucune carte disponible</h1>
          <p className="text-muted-foreground mb-6">Ce module n'a pas encore de flashcards.</p>
          <Button onClick={() => setSelectedModule(null)}>
            Choisir un autre module
          </Button>
        </main>
      </div>
    );
  }

  // Completed all cards
  if (currentIndex >= flashcards.length) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
              <Check className="h-10 w-10" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Session terminée !</h1>
            <p className="text-muted-foreground mb-8">
              Vous avez parcouru toutes les cartes.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-green-500">{knownCards.size}</p>
                  <p className="text-sm text-muted-foreground">Je sais</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-destructive">{unknownCards.size}</p>
                  <p className="text-sm text-muted-foreground">À revoir</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-3">
              <Button onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Recommencer
              </Button>
              <Button variant="outline" onClick={() => setSelectedModule(null)}>
                Choisir un autre module
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <button 
              onClick={() => setSelectedModule(null)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Retour</span>
            </button>

            <div className="text-center">
              <p className="text-sm font-medium">{currentCard?.moduleName}</p>
              <p className="text-xs text-muted-foreground">
                {currentIndex + 1} / {flashcards.length}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handleShuffle}>
                <Shuffle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-xl">
        {/* Progress */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-success" /> {knownCards.size} su{knownCards.size > 1 ? 's' : ''}
            </span>
            <span className="flex items-center gap-1">
              <X className="h-4 w-4 text-destructive" /> {unknownCards.size} à revoir
            </span>
          </div>
        </div>

        {/* Flashcard */}
        <div 
          className="perspective-1000 cursor-pointer mb-8"
          onClick={handleFlip}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentCard?.id}-${isFlipped ? 'back' : 'front'}`}
              initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`min-h-[320px] ${isFlipped ? 'bg-primary/5 border-primary/30' : ''}`}>
                <CardContent className="p-6 flex flex-col justify-center min-h-[320px]">
                  {!isFlipped ? (
                    // Question side
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <ModuleIcon moduleId={currentCard?.moduleId ?? ''} className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-4">
                        {currentCard?.question}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Cliquez pour voir la réponse
                      </p>
                    </div>
                  ) : (
                    // Answer side - new structure
                    <div className="space-y-4">
                      {/* L'essentiel */}
                      <div className="rounded-lg bg-primary/10 p-3">
                        <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
                          <Star className="h-3.5 w-3.5" /> L'essentiel
                        </p>
                        <p className="text-sm text-foreground mt-1">{currentCard?.essential}</p>
                      </div>

                      {/* Points clés (max 3) */}
                      <div>
                        <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-2">
                          <Pin className="h-3 w-3" /> Points clés
                        </p>
                        <ul className="space-y-1">
                          {currentCard?.keyPoints.slice(0, 3).map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs">
                              <span className="text-primary font-bold">{idx + 1}.</span>
                              <span className="text-foreground">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Piège examen */}
                      {currentCard?.examWarning && (
                        <div className="rounded-lg bg-destructive/10 p-2">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-3 w-3 text-destructive mt-0.5 shrink-0" />
                            <p className="text-xs text-foreground">{currentCard.examWarning}</p>
                          </div>
                        </div>
                      )}

                      {/* Astuce (1 seule) */}
                      {currentCard?.tips && currentCard.tips.length > 0 && (
                        <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Lightbulb className="h-3.5 w-3.5 shrink-0 text-cta" />
                          <span>{currentCard.tips[0]}</span>
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Actions */}
        {isFlipped ? (
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleUnknown}
            >
              <X className="h-4 w-4 mr-2" />
              À revoir
            </Button>
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handleKnown}
            >
              <Check className="h-4 w-4 mr-2" />
              Je sais
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Précédent
            </Button>
            <Button 
              className="flex-1"
              onClick={handleFlip}
            >
              Retourner
              <RotateCcw className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Flashcards;
