import { RevisionModule } from '@/data/revisionData';
import { Badge } from '@/components/ui/badge';

interface ModuleHeaderProps {
  module: RevisionModule;
}

const ModuleHeader = ({ module }: ModuleHeaderProps) => {
  const domainLabels = {
    commun: 'Tronc commun',
    taxi: 'Taxi',
    vtc: 'VTC',
    vmdtr: 'VMDTR'
  };

  const domainColors = {
    commun: 'bg-primary/10 text-primary',
    taxi: 'bg-yellow-500/10 text-yellow-600',
    vtc: 'bg-blue-500/10 text-blue-600',
    vmdtr: 'bg-green-500/10 text-green-600'
  };

  return (
    <div className="rounded-2xl border bg-card p-6 sm:p-8 mb-8">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl">
          {module.moduleIcon}
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {module.moduleName}
            </h1>
            <Badge variant="secondary" className={domainColors[module.domain]}>
              {domainLabels[module.domain]}
            </Badge>
          </div>
          
          {/* Objectif examen */}
          <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 mb-3">
            <p className="text-sm font-medium text-primary">
              🎯 {module.examObjective}
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm">
            {module.introduction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleHeader;
