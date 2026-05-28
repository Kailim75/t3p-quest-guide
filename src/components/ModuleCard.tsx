import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Module } from '@/data/quizData';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  const totalQuestions = module.subModules.reduce((acc, sub) => acc + sub.questionCount, 0);

  return (
    <Link to={`/module/${module.id}`} className="module-card group">
      {/* Gradient accent bar */}
      <div 
        className="absolute left-0 top-0 h-1 w-full rounded-t-xl bg-gradient-to-r from-primary to-accent opacity-80"
      />
      
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary text-2xl">
          {module.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`badge-module ${module.type === 'commun' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
              {module.type === 'commun' ? 'Module commun' : 'Module spécifique'}
            </span>
            {module.rsCode && (
              <span
                className="inline-flex items-center rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-[11px] font-mono font-semibold text-foreground"
                title={module.rsFiche ? `France Compétences ${module.rsFiche}` : 'Référentiel France Compétences'}
              >
                {module.rsCode}
              </span>
            )}
            {module.rsFiche && (
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                {module.rsFiche}
              </span>
            )}
          </div>

          
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {module.name}
          </h3>
          
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {module.description}
          </p>

          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {module.subModules.length} sous-modules
            </span>
            <span>•</span>
            <span>{totalQuestions} questions</span>
          </div>
        </div>

        {/* Arrow */}
        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
};

export default ModuleCard;
