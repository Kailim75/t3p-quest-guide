import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Legend,
  AreaChart,
  Area,
} from 'recharts';
import { format, subDays, startOfDay, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { TrendingUp, Activity, Users } from 'lucide-react';

interface QuizResult {
  id: string;
  user_id: string;
  quiz_type: string;
  quiz_id: string;
  score: number;
  total_questions: number;
  percentage: number;
  passed: boolean;
  time_spent: number | null;
  created_at: string;
}

interface LearnerProfile {
  id: string;
  email: string | null;
  display_name: string | null;
  is_approved: boolean;
  created_at: string;
}

interface LearnersChartsProps {
  allResults: QuizResult[];
  profiles: LearnerProfile[];
}

const LearnersCharts = ({ allResults, profiles }: LearnersChartsProps) => {
  // Score evolution over the last 30 days
  const scoreEvolutionData = useMemo(() => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = startOfDay(subDays(new Date(), 29 - i));
      return {
        date,
        dateStr: format(date, 'dd/MM', { locale: fr }),
        avgScore: 0,
        count: 0,
        passRate: 0,
      };
    });

    allResults.forEach((result) => {
      const resultDate = startOfDay(parseISO(result.created_at));
      const dayIndex = last30Days.findIndex(
        (d) => d.date.getTime() === resultDate.getTime()
      );
      if (dayIndex !== -1) {
        last30Days[dayIndex].count++;
        last30Days[dayIndex].avgScore += Number(result.percentage);
        if (result.passed) {
          last30Days[dayIndex].passRate++;
        }
      }
    });

    return last30Days.map((day) => ({
      date: day.dateStr,
      avgScore: day.count > 0 ? Math.round(day.avgScore / day.count) : null,
      count: day.count,
      passRate: day.count > 0 ? Math.round((day.passRate / day.count) * 100) : null,
    }));
  }, [allResults]);

  // Activity per day (number of quizzes taken)
  const activityData = useMemo(() => {
    const last14Days = Array.from({ length: 14 }, (_, i) => {
      const date = startOfDay(subDays(new Date(), 13 - i));
      return {
        date,
        dateStr: format(date, 'EEE dd', { locale: fr }),
        quizzes: 0,
        exams: 0,
        uniqueUsers: new Set<string>(),
      };
    });

    allResults.forEach((result) => {
      const resultDate = startOfDay(parseISO(result.created_at));
      const dayIndex = last14Days.findIndex(
        (d) => d.date.getTime() === resultDate.getTime()
      );
      if (dayIndex !== -1) {
        if (result.quiz_type === 'exam') {
          last14Days[dayIndex].exams++;
        } else {
          last14Days[dayIndex].quizzes++;
        }
        last14Days[dayIndex].uniqueUsers.add(result.user_id);
      }
    });

    return last14Days.map((day) => ({
      date: day.dateStr,
      quizzes: day.quizzes,
      exams: day.exams,
      uniqueUsers: day.uniqueUsers.size,
    }));
  }, [allResults]);

  // Top learners by score
  const topLearnersData = useMemo(() => {
    const learnerScores = new Map<string, { total: number; count: number; name: string }>();

    allResults.forEach((result) => {
      const profile = profiles.find((p) => p.id === result.user_id);
      if (!profile) return;

      const current = learnerScores.get(result.user_id) || {
        total: 0,
        count: 0,
        name: profile.display_name || profile.email?.split('@')[0] || 'Anonyme',
      };
      current.total += Number(result.percentage);
      current.count++;
      learnerScores.set(result.user_id, current);
    });

    return Array.from(learnerScores.entries())
      .map(([userId, data]) => ({
        userId,
        name: data.name.substring(0, 12) + (data.name.length > 12 ? '...' : ''),
        avgScore: Math.round(data.total / data.count),
        quizCount: data.count,
      }))
      .sort((a, b) => b.avgScore - a.avgScore)
      .slice(0, 8);
  }, [allResults, profiles]);

  if (allResults.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 mb-8">
      {/* Score Evolution Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Évolution des scores (30 jours)
          </CardTitle>
          <CardDescription>
            Score moyen et taux de réussite quotidiens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreEvolutionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }} 
                  className="text-muted-foreground"
                  interval="preserveStartEnd"
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
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  formatter={(value: number | null, name: string) => {
                    if (value === null) return ['Aucune donnée', name];
                    return [`${value}%`, name === 'avgScore' ? 'Score moyen' : 'Taux de réussite'];
                  }}
                />
                <Legend 
                  formatter={(value) => value === 'avgScore' ? 'Score moyen' : 'Taux de réussite'}
                />
                <Line
                  type="monotone"
                  dataKey="avgScore"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="passRate"
                  stroke="hsl(var(--secondary-foreground))"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Activité quotidienne (14 jours)
            </CardTitle>
            <CardDescription>
              Nombre de quiz et examens réalisés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }} 
                    className="text-muted-foreground"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                    formatter={(value: number, name: string) => {
                      const labels: Record<string, string> = {
                        quizzes: 'Quiz modules',
                        exams: 'Examens blancs',
                        uniqueUsers: 'Utilisateurs uniques',
                      };
                      return [value, labels[name] || name];
                    }}
                  />
                  <Legend 
                    formatter={(value) => {
                      const labels: Record<string, string> = {
                        quizzes: 'Quiz modules',
                        exams: 'Examens blancs',
                        uniqueUsers: 'Utilisateurs',
                      };
                      return labels[value] || value;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="quizzes"
                    stackId="1"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="exams"
                    stackId="1"
                    stroke="hsl(var(--secondary-foreground))"
                    fill="hsl(var(--secondary))"
                    fillOpacity={0.6}
                  />
                  <Line
                    type="monotone"
                    dataKey="uniqueUsers"
                    stroke="hsl(var(--cta))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--cta))' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Learners Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Classement des apprenants
            </CardTitle>
            <CardDescription>
              Top 8 par score moyen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topLearnersData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    type="number" 
                    domain={[0, 100]} 
                    tick={{ fontSize: 12 }} 
                    className="text-muted-foreground"
                  />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    tick={{ fontSize: 11 }} 
                    className="text-muted-foreground"
                    width={80}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                    formatter={(value: number, name: string) => {
                      if (name === 'avgScore') return [`${value}%`, 'Score moyen'];
                      return [value, 'Quiz réalisés'];
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
      </div>
    </div>
  );
};

export default LearnersCharts;
