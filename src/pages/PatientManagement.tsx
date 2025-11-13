import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { DashboardCard } from '../components/DashboardCard';
import { Users, UserPlus, TrendingUp, Clipboard } from 'lucide-react';
import { patientManagementData } from '../lib/dummyData';

export default function PatientManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Management Dashboard</h2>
        <p className="text-gray-600">Track patient data, registrations, and retention metrics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Patients"
          value={patientManagementData.totalPatients.toLocaleString()}
          description="Active patient base"
          icon={Users}
          trend={{ value: 3.2, isPositive: true }}
        />
        <DashboardCard
          title="New Registrations"
          value={patientManagementData.newRegistrations}
          description="This month"
          icon={UserPlus}
          trend={{ value: 15, isPositive: true }}
        />
        <DashboardCard
          title="Retention Rate"
          value={`${patientManagementData.retentionRate}%`}
          description="Patient retention"
          icon={TrendingUp}
          trend={{ value: 2.5, isPositive: true }}
        />
        <DashboardCard
          title="Active Treatment Plans"
          value={patientManagementData.activeTreatmentPlans}
          description="Ongoing treatments"
          icon={Clipboard}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Growth Trend</CardTitle>
            <CardDescription>Monthly patient base growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {patientManagementData.patientGrowth.slice(-6).map((month, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 text-sm font-medium">{month.month}</div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full flex items-center justify-end pr-2 text-white text-xs font-medium"
                        style={{ width: `${(month.patients / 3500) * 100}%` }}
                      >
                        {month.patients.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Growth Rate</span>
                <span className="font-bold text-green-600">+11.3% this year</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Age Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Age Distribution</CardTitle>
            <CardDescription>Breakdown by age groups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {patientManagementData.ageDistribution.map((group, index) => {
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'];
                const percentage = ((group.count / patientManagementData.totalPatients) * 100).toFixed(1);
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{group.range} years</span>
                      <span className="text-sm font-bold">{group.count.toLocaleString()}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className={`${colors[index]} h-full`} style={{ width: `${percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{percentage}% of total patients</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-medium mb-1">Average Age</p>
                <p className="text-3xl font-bold text-blue-900">38.5</p>
                <p className="text-xs text-blue-600 mt-1">Years old</p>
              </div>
              <span className="text-4xl">👤</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-medium mb-1">Patient Visits</p>
                <p className="text-3xl font-bold text-green-900">2.8</p>
                <p className="text-xs text-green-600 mt-1">Average per year</p>
              </div>
              <span className="text-4xl">📅</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 font-medium mb-1">Referral Rate</p>
                <p className="text-3xl font-bold text-purple-900">24%</p>
                <p className="text-xs text-purple-600 mt-1">From existing patients</p>
              </div>
              <span className="text-4xl">🤝</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}