import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { TrendingUp, PieChart as PieChartIcon, BarChart3 } from 'lucide-react';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { QuizResult } from '@/hooks/useQuizResults';

interface ProgressChartsProps {
  results: QuizResult[];
}

const ProgressCharts = ({ results }: ProgressChartsProps) => {
  // Prepare data for score evolution chart (last 30 days)
  const scoreEvolutionData = useMemo(() => {
    if (!results || results.length === 0) return [];

    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = subDays(new Date(), 29 - i);
      return {
        date: startOfDay(date),
        dateStr: format(date, 'dd/MM', { locale: fr }),
        scores: [] as number[],
      };
    });

    // Group results by day
    results.forEach(result => {
      const resultDate = startOfDay(new Date(result.created_at));
      const dayData = last30Days.find(d => isSameDay(d.date, resultDate));
      if (dayData) {
        dayData.scores.push(result.percentage);
      }
    });

    // Calculate average score for each day
    return last30Days
      .map(day => ({
        date: day.dateStr,
        score: day.scores.length > 0 
          ? Math.round(day.scores.reduce((a, b) => a + b, 0) / day.scores.length)
          : null,
        count: day.scores.length,
      }))
      .filter(d => d.score !== null);
  }, [results]);

  // Prepare data for module performance chart
  const modulePerformanceData = useMemo(() => {
    if (!results || results.length === 0) return [];

    const moduleStats: Record<string, { total: number; passed: number; avgScore: number; count: number }> = {};

    results.forEach(result => {
      if (!moduleStats[result.quiz_id]) {
        moduleStats[result.quiz_id] = { total: 0, passed: 0, avgScore: 0, count: 0 };
      }
      moduleStats[result.quiz_id].total += 1;
      moduleStats[result.quiz_id].passed += result.passed ? 1 : 0;
      moduleStats[result.quiz_id].avgScore += result.percentage;
      moduleStats[result.quiz_id].count += 1;
    });

    return Object.entries(moduleStats)
      .map(([module, stats]) => ({
        module: module.length > 12 ? module.substring(0, 12) + '...' : module,
        fullName: module,
        avgScore: Math.round(stats.avgScore / stats.count),
        passRate: Math.round((stats.passed / stats.total) * 100),
        count: stats.count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [results]);

  // Prepare data for quiz vs exam distribution
  const distributionData = useMemo(() => {
    if (!results || results.length === 0) return [];

    const quizzes = results.filter(r => r.quiz_type === 'module');
    const exams = results.filter(r => r.quiz_type === 'exam');

    return [
      { name: 'Quiz modules', value: quizzes.length, color: 'hsl(var(--primary))' },
      { name: 'Examens blancs', value: exams.length, color: 'hsl(var(--secondary))' },
    ].filter(d => d.value > 0);
  }, [results]);

  // Prepare success rate over time (rolling average)
  const successRateTrend = useMemo(() => {
    if (!results || results.length < 3) return [];

    // Sort by date ascending
    const sortedResults = [...results].sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );

    // Calculate rolling average (last 5 results)
    return sortedResults.map((_, index) => {
      const windowStart = Math.max(0, index - 4);
      const window = sortedResults.slice(windowStart, index + 1);
      const avgScore = Math.round(
        window.reduce((sum, r) => sum + r.percentage, 0) / window.length
      );
      const passRate = Math.round(
        (window.filter(r => r.passed).length / window.length) * 100
      );

      return {
        index: index + 1,
        date: format(new Date(sortedResults[index].created_at), 'dd/MM', { locale: fr }),
        avgScore,
        passRate,
      };
    }).slice(-20); // Last 20 data points
  }, [results]);

  if (!results || results.length === 0) {
    return null;
  }

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--muted-foreground))'];

  return (
    <div className="space-y-6">
      {/* Score Evolution Chart */}
      {successRateTrend.length >= 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Évolution des scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={successRateTrend}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    domain={[0, 100]}
                    tick={{ fontSize: 12 }}
                    className="text-muted-foreground"
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number, name: string) => [
                      `${value}%`,
                      name === 'avgScore' ? 'Score moyen' : 'Taux réussite'
                    ]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="avgScore" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                    name="Score moyen"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="passRate" 
                    stroke="hsl(142 76% 36%)" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: 'hsl(142 76% 36%)', strokeWidth: 2 }}
                    name="Taux réussite"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Score moyen (moy. glissante)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(142 76% 36%)' }} />
                <span className="text-muted-foreground">Taux de réussite</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module Performance Chart */}
        {modulePerformanceData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance par module
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={modulePerformanceData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      type="number" 
                      domain={[0, 100]}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="module" 
                      width={100}
                      tick={{ fontSize: 11 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`${value}%`, 'Score moyen']}
                      labelFormatter={(label) => {
                        const item = modulePerformanceData.find(d => d.module === label);
                        return item?.fullName || label;
                      }}
                    />
                    <Bar 
                      dataKey="avgScore" 
                      fill="hsl(var(--primary))"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Distribution Pie Chart */}
        {distributionData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChartIcon className="h-5 w-5" />
                Répartition des activités
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                      labelLine={false}
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-2">
                <p className="text-2xl font-bold">{results.length}</p>
                <p className="text-sm text-muted-foreground">Total sessions</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProgressCharts;
