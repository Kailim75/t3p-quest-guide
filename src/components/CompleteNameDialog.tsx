import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { nameFromMetadata } from '@/lib/displayName';
import { useToast } from '@/hooks/use-toast';
import { UserRound, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CompleteNameDialogProps {
  user: User;
}

/**
 * Complète le profil des comptes créés sans nom.
 *
 * La connexion Google (gérée par Lovable) ne transmet pas le nom de
 * l'apprenant : sans lui, le formateur voit « Sans nom » dans son suivi.
 * Si les métadonnées du compte contiennent un nom, on l'enregistre en
 * silence ; sinon, on le demande une fois, à la première connexion.
 */
const CompleteNameDialog = ({ user }: CompleteNameDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const save = async (displayName: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ display_name: displayName })
      .eq('id', user.id);
    if (error) throw error;
    await queryClient.invalidateQueries({ queryKey: ['user-profile', user.id] });
  };

  useEffect(() => {
    // Le nom est peut-être déjà dans les métadonnées du compte : dans ce
    // cas on l'enregistre sans rien demander.
    const guessed = nameFromMetadata(user.user_metadata);
    if (guessed) {
      save(guessed).catch(() => setOpen(true));
    } else {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const cleaned = name.trim();
    if (cleaned.length < 2) return;

    setSaving(true);
    try {
      await save(cleaned);
      setOpen(false);
      toast({ title: `Bienvenue, ${cleaned.split(' ')[0]} !` });
    } catch {
      toast({
        title: "Impossible d'enregistrer votre nom",
        description: 'Réessayez dans un instant.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    // Fermable : la fenêtre se représentera à la prochaine connexion tant
    // que le nom n'est pas renseigné — insistant sans être bloquant.
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <UserRound className="h-6 w-6 text-primary" />
          </span>
          <DialogTitle className="text-center">Comment vous appelez-vous ?</DialogTitle>
          <DialogDescription className="text-center">
            Votre prénom et votre nom permettent à votre formateur de suivre
            votre progression. À renseigner une seule fois.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-3">
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Prénom Nom"
            aria-label="Votre prénom et votre nom"
            className="w-full rounded-lg border-2 border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            disabled={name.trim().length < 2 || saving}
            className="btn-cta w-full justify-center disabled:opacity-50"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            Enregistrer
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CompleteNameDialog;
