import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePWA } from '@/hooks/usePWA';
import { 
  Download, 
  Smartphone, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  Share,
  MoreVertical,
  Plus
} from 'lucide-react';

const Install = () => {
  const navigate = useNavigate();
  const { isInstallable, isInstalled, isOnline, installApp } = usePWA();

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      // App installed successfully
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-4">
            <img 
              src="/pwa-192x192.png" 
              alt="Quiz T3P" 
              className="w-16 h-16 rounded-xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Installer Quiz T3P
          </h1>
          <p className="text-muted-foreground">
            Révisez n'importe où, même sans connexion
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${
            isOnline 
              ? 'bg-green-500/10 text-green-600' 
              : 'bg-destructive/10 text-destructive'
          }`}>
            {isOnline ? <Wifi className="h-4 w-4" /> : <WifiOff className="h-4 w-4" />}
            {isOnline ? 'En ligne' : 'Hors ligne'}
          </div>
          
          {isInstalled && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
              <CheckCircle2 className="h-4 w-4" />
              Installée
            </div>
          )}
        </div>

        {/* Install Button (Chrome/Edge) */}
        {isInstallable && !isInstalled && (
          <Card className="mb-6 border-primary/30 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <Button size="lg" onClick={handleInstall} className="w-full sm:w-auto">
                  <Download className="h-5 w-5 mr-2" />
                  Installer l'application
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Cliquez pour installer directement
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Already installed */}
        {isInstalled && (
          <Card className="mb-6 border-green-500/30 bg-green-500/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Application installée !</h3>
                <p className="text-muted-foreground text-sm">
                  Vous pouvez maintenant réviser même sans connexion internet.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Manual install instructions */}
        {!isInstalled && (
          <>
            <h2 className="text-lg font-semibold mb-4">Installation manuelle</h2>
            
            <div className="space-y-4">
              {/* iOS Instructions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <span className="text-xl">🍎</span>
                    iPhone / iPad (Safari)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">1</div>
                    <p>Appuyez sur le bouton <Share className="inline h-4 w-4 mx-1" /> Partager</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">2</div>
                    <p>Faites défiler et appuyez sur <Plus className="inline h-4 w-4 mx-1" /> "Sur l'écran d'accueil"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">3</div>
                    <p>Appuyez sur "Ajouter"</p>
                  </div>
                </CardContent>
              </Card>

              {/* Android Instructions */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <span className="text-xl">🤖</span>
                    Android (Chrome)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">1</div>
                    <p>Appuyez sur <MoreVertical className="inline h-4 w-4 mx-1" /> le menu (3 points)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">2</div>
                    <p>Sélectionnez "Installer l'application" ou "Ajouter à l'écran d'accueil"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">3</div>
                    <p>Confirmez l'installation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Features */}
        <h2 className="text-lg font-semibold mt-8 mb-4">Avantages de l'application</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <WifiOff className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mode hors-ligne</h3>
                  <p className="text-sm text-muted-foreground">Révisez sans internet</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Accès rapide</h3>
                  <p className="text-sm text-muted-foreground">Icône sur l'écran d'accueil</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Léger</h3>
                  <p className="text-sm text-muted-foreground">Pas besoin de télécharger sur le store</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Toujours à jour</h3>
                  <p className="text-sm text-muted-foreground">Mises à jour automatiques</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => navigate('/modules')}>
            Continuer à réviser
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Install;
