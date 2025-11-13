import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { allDashboards } from '../lib/dummyData';
import { MetricCard } from '../components/DashboardCard';

export default function DashboardHome() {
  

  const quickStats = [
    { label: 'Total Patients', value: '3,450', icon: '👥', color: 'blue' },
    { label: "Today's Appointments", value: '45', icon: '📅', color: 'green' },
    { label: 'Monthly Revenue', value: '£285K', icon: '💰', color: 'purple' },
    { label: 'Patient Satisfaction', value: '4.7/5', icon: '⭐', color: 'orange' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome to London Dental Clinic Management Portal</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <MetricCard key={index} {...stat} />
        ))}
      </div>

      {/* Dashboard Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">All Dashboards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allDashboards.map((dashboard) => (
          <Link to={dashboard.path} >  <Card
              key={dashboard.id}
              className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-blue-300"
              
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{dashboard.icon}</span>
                  <span className="text-xs text-gray-500">#{dashboard.id}</span>
                </div>
                <CardTitle className="text-lg mt-2">{dashboard.name}</CardTitle>
                <CardDescription className="text-sm">{dashboard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-blue-600 font-medium">View Dashboard →</p>
              </CardContent>
            </Card> </Link>
          ))}
        </div>
      </div>

      {/* Feature Highlight */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">20 Specialized Dashboards</h3>
              <p className="text-gray-600">
                Comprehensive analytics and management tools for every aspect of your dental clinic
              </p>
            </div>
            <img
              src="/dashboard-analytics.jpg"
              alt="Analytics"
              className="hidden md:block w-32 h-32 rounded-lg object-cover shadow-lg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
