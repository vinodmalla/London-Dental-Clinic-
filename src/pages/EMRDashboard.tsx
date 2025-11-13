import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { DashboardCard } from '../components/DashboardCard';
import { FileText, Activity, TrendingUp, Users } from 'lucide-react';
import { emrData } from '../lib/dummyData';

export default function EMRDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">EMR Dashboard</h2>
        <p className="text-gray-600">Electronic Medical Records summary and analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Records"
          value={emrData.totalRecords.toLocaleString()}
          description="Patient records"
          icon={FileText}
        />
        <DashboardCard
          title="Active Cases"
          value="456"
          description="Ongoing treatments"
          icon={Activity}
          trend={{ value: 5, isPositive: true }}
        />
        <DashboardCard
          title="Monthly Visits"
          value="370"
          description="This month"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Record Completion"
          value="98.5%"
          description="Documentation rate"
          icon={TrendingUp}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Common Diagnoses */}
        <Card>
          <CardHeader>
            <CardTitle>Most Common Diagnoses</CardTitle>
            <CardDescription>Top dental conditions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {emrData.commonDiagnoses.map((diagnosis, index) => {
                const colors = [
                  'bg-red-500',
                  'bg-orange-500',
                  'bg-yellow-500',
                  'bg-green-500',
                  'bg-blue-500',
                  'bg-purple-500'
                ];
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{diagnosis.diagnosis}</span>
                      <span className="text-sm font-bold">{diagnosis.count}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className={`${colors[index]} h-full`} style={{ width: `${diagnosis.percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{diagnosis.percentage}% of all diagnoses</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Diagnoses</span>
                <span className="text-xl font-bold">
                  {emrData.commonDiagnoses.reduce((sum, d) => sum + d.count, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visit Frequency */}
        <Card>
          <CardHeader>
            <CardTitle>Visit Frequency by Month</CardTitle>
            <CardDescription>Patient visits throughout the year</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emrData.visitFrequency.map((month, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 text-sm font-medium">{month.month}</div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-full flex items-center justify-end pr-2 text-white text-xs font-medium"
                        style={{ width: `${(month.visits / 400) * 100}%` }}
                      >
                        {month.visits}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average Monthly Visits</span>
                <span className="font-bold text-blue-600">
                  {Math.round(emrData.visitFrequency.reduce((sum, m) => sum + m.visits, 0) / 12)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-medium mb-1">Digital Records</p>
                <p className="text-3xl font-bold text-blue-900">100%</p>
                <p className="text-xs text-blue-600 mt-1">Fully digitized</p>
              </div>
              <span className="text-4xl">💾</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-medium mb-1">Avg. Visit Duration</p>
                <p className="text-3xl font-bold text-green-900">45</p>
                <p className="text-xs text-green-600 mt-1">Minutes per visit</p>
              </div>
              <span className="text-4xl">⏱️</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 font-medium mb-1">Treatment Success</p>
                <p className="text-3xl font-bold text-purple-900">94.5%</p>
                <p className="text-xs text-purple-600 mt-1">Success rate</p>
              </div>
              <span className="text-4xl">✅</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}