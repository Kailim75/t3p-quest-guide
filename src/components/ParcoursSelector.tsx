import { useState } from 'react';
import { Layers, Check } from 'lucide-react';
import { ModuleIcon } from '@/lib/moduleIcons';
import { TargetExam, targetLabels, useTargetExam } from '@/lib/targetExam';

const options: {
  value: TargetExam;
  title: string;
  description: string;
  moduleId?: string;
}[] = [
  { value: 'taxi', title: 'Taxi', description: 'ADS, tarifs, topographie Paris', moduleId: 'taxi' },
  { value: 'vtc', title: 'VTC', description: 'Réservation, registre, plateformes', moduleId: 'vtc' },
  { value: 'vmdtr', title: 'Moto (VMDTR)', description: 'Sécurité 2-roues, passager', moduleId: 'vmdtr' },
  { value: 'tous', title: 'Tous les métiers', description: 'Afficher tous les modules' },
];

/**
 * Choix du parcours (métier préparé). Affiche la carte de sélection tant
 * qu'aucun choix n'est fait, puis une simple ligne « Parcours : X · changer ».
 */
const ParcoursSelector = () => {
  const [target, setTarget] = useTargetExam();
  const [editing, setEditing] = useState(false);

  if (target && !editing) {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>
          Parcours : <span className="font-semibold text-foreground">{targetLabels[target]}</span>
          {target !== 'tous' && ' — seuls les modules de votre métier sont affichés (+ tronc commun)'}
        </span>
        <button
          onClick={() => setEditing(true)}
          className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
        >
          changer
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-card p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-foreground mb-1">
        Quelle épreuve préparez-vous ?
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        L'application n'affichera que le tronc commun et les modules de votre métier.
        Vous pourrez changer à tout moment.
      </p>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {options.map((option) => {
          const isSelected = target === option.value;
          return (
            <button
              key={option.value}
              onClick={() => {
                setTarget(option.value);
                setEditing(false);
              }}
              className={`group relative flex flex-col items-start gap-2 rounded-xl border-2 p-4 text-left transition-all hover:border-primary/60 hover:bg-primary/5 ${
                isSelected ? 'border-primary bg-primary/5' : 'border-border bg-card'
              }`}
            >
              {isSelected && (
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </span>
              )}
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                {option.moduleId ? (
                  <ModuleIcon moduleId={option.moduleId} className="h-5 w-5 text-primary" />
                ) : (
                  <Layers className="h-5 w-5 text-primary" />
                )}
              </span>
              <span className="font-semibold text-foreground">{option.title}</span>
              <span className="text-xs text-muted-foreground">{option.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ParcoursSelector;
