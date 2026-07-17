import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight, Lightbulb, GraduationCap, Search, X } from 'lucide-react';
import { ModuleIcon } from '@/lib/moduleIcons';
import { revisionDomainFor, useTargetExam } from '@/lib/targetExam';
import { searchFiches, searchTerms, accentInsensitiveRegex } from '@/lib/ficheSearch';
import Header from '@/components/Header';
import { getAllRevisionModules, RevisionModule } from '@/data/revisionData';
import RevisionCardContent from '@/components/revision/RevisionCardContent';
import ModuleHeader from '@/components/revision/ModuleHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

/** Surligne les termes recherchés dans un texte. */
const HighlightedText = ({ text, terms }: { text: string; terms: string[] }) => {
  if (terms.length === 0) return <>{text}</>;
  const pattern = terms.map((t) => accentInsensitiveRegex(t).source).join('|');
  const parts = text.split(new RegExp(`(${pattern})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded bg-cta/25 px-0.5 text-foreground">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
};

const Revision = () => {
  const [selectedModule, setSelectedModule] = useState<RevisionModule | null>(null);
  const [query, setQuery] = useState('');
  const [openCard, setOpenCard] = useState<string | undefined>();
  const [searchParams] = useSearchParams();
  const [target] = useTargetExam();
  const domainFilter = revisionDomainFor(target);
  const modules = getAllRevisionModules().filter(
    (m) => !domainFilter || m.domain === 'commun' || m.domain === domainFilter
  );

  // Ouverture directe d'un module via /revision?module=<id>
  // (lien « Revoir les fiches » proposé après une erreur dans le quiz)
  useEffect(() => {
    const moduleParam = searchParams.get('module');
    if (moduleParam) {
      const target = modules.find(m => m.moduleId === moduleParam);
      if (target) setSelectedModule(target);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Après un clic sur un résultat de recherche : fait défiler jusqu'à la fiche ouverte
  useEffect(() => {
    if (selectedModule && openCard) {
      const timer = setTimeout(() => {
        document.getElementById(`fiche-${openCard}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedModule, openCard]);

  const terms = searchTerms(query);
  const searchResults = terms.length > 0 ? searchFiches(modules, query) : [];

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

  if (selectedModule) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Back link */}
          <button
            onClick={() => {
              setSelectedModule(null);
              setOpenCard(undefined);
            }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {terms.length > 0 ? 'Retour aux résultats' : 'Retour aux modules'}
          </button>

          {/* Module Header */}
          <ModuleHeader module={selectedModule} />

          {/* Fiches de cours */}
          <Accordion
            type="single"
            collapsible
            value={openCard ?? ''}
            onValueChange={(value) => setOpenCard(value || undefined)}
            className="space-y-4"
          >
            {selectedModule.cards.map((card, index) => (
              <AccordionItem
                key={card.id}
                value={card.id}
                id={`fiche-${card.id}`}
                className="border rounded-xl bg-card overflow-hidden scroll-mt-24"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 data-[state=open]:bg-secondary/30">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cta/10 font-bold text-cta">
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
            Fiches de cours optimisées
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Révisez efficacement avec des fiches structurées : l'essentiel, exemples terrain et pièges à éviter.
          </p>
        </div>

        {/* Recherche dans les fiches */}
        <div className="relative max-w-xl mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher dans les fiches : vignette, forfait CDG, chien guide…"
            className="w-full rounded-2xl border-2 border-border bg-card py-3 pl-12 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            aria-label="Rechercher dans les fiches de cours"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Effacer la recherche"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Résultats de recherche */}
        {terms.length > 0 ? (
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-sm text-muted-foreground">
              {searchResults.length === 0
                ? 'Aucune fiche ne correspond à cette recherche'
                : `${searchResults.length} fiche${searchResults.length > 1 ? 's' : ''} trouvée${searchResults.length > 1 ? 's' : ''}`}
              {' '}pour « {query.trim()} »
            </p>
            <div className="space-y-3">
              {searchResults.map(({ module, card, snippet }) => (
                <button
                  key={card.id}
                  onClick={() => {
                    setSelectedModule(module);
                    setOpenCard(card.id);
                  }}
                  className="w-full text-left rounded-2xl border bg-card p-5 hover:border-primary/40 hover:shadow-soft transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <ModuleIcon moduleId={module.moduleId} className="h-5 w-5 text-primary" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        <HighlightedText text={card.title} terms={terms} />
                      </h3>
                      <p className="text-xs text-muted-foreground">{module.moduleName}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    <HighlightedText text={snippet} terms={terms} />
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <button
              key={module.moduleId}
              onClick={() => setSelectedModule(module)}
              className="text-left rounded-2xl border bg-card p-6 hover:shadow-soft transition-all hover:border-primary/30 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                  <ModuleIcon moduleId={module.moduleId} className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {module.moduleName}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={`${domainColors[module.domain]} text-xs`}>
                      {domainLabels[module.domain]}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {module.cards.length} fiches
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {module.examObjective}
              </p>
            </button>
          ))}
        </div>
        )}

        {/* Info Banner */}
        <div className="mt-12 rounded-2xl border bg-cta/5 p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-cta mb-2">
            <Lightbulb className="h-5 w-5" />
            <span className="font-semibold">Conseil de révision</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque fiche contient l'essentiel à retenir, un exemple concret et les pièges à éviter. 
            Alternez fiches et quiz pour une mémorisation optimale.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Revision;
