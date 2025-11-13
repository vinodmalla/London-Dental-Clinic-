import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { Users, Smartphone, MousePointerClick, Activity } from "lucide-react";

export default function PatientPortalAnalytics() {
  // Line Chart — Daily Active Portal Users
  const dailyUsers = [
    { day: "Mon", count: 120 },
    { day: "Tue", count: 150 },
    { day: "Wed", count: 165 },
    { day: "Thu", count: 180 },
    { day: "Fri", count: 190 },
    { day: "Sat", count: 130 },
    { day: "Sun", count: 95 },
  ];

  // Device usage Pie Chart
  const deviceUsage = [
    { name: "Mobile", value: 62 },
    { name: "Desktop", value: 28 },
    { name: "Tablet", value: 10 },
  ];

  const PIE_COLORS = ["#3b82f6", "#a855f7", "#f59e0b"];

  // Login vs Portal Actions Bar Chart
  const activityStats = [
    { type: "Logins", count: 312 },
    { type: "Appointment Bookings", count: 122 },
    { type: "Prescription Views", count: 95 },
    { type: "Profile Updates", count: 68 },
  ];

  // Recent patient portal actions
  const recentActivity = [
    {
      id: 1,
      user: "Emily Johnson",
      action: "Booked an appointment",
      time: "09:42 AM",
    },
    {
      id: 2,
      user: "Amit Sharma",
      action: "Viewed prescription",
      time: "10:12 AM",
    },
    {
      id: 3,
      user: "Sarah Lee",
      action: "Updated personal details",
      time: "10:45 AM",
    },
    {
      id: 4,
      user: "David Kim",
      action: "Cancelled appointment",
      time: "11:05 AM",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Patient Portal Analytics</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Active Portal Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              912 <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-2">Total registered users</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Mobile Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              62% <Smartphone className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-gray-500 mt-2">Access via mobile</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Logins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              1,220 <MousePointerClick className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-gray-500 mt-2">Interactions recorded</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Peak Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              190 <Activity className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-2">Highest daily users</p>
          </CardContent>
        </Card>

      </div>

      {/* Graph Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Active Users</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyUsers}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Device Type Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceUsage}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {deviceUsage.map((_, index) => (
                    <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* Graph Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Portal Interactions Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityStats}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Activity Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Portal Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">User</th>
                  <th className="p-3">Activity</th>
                  <th className="p-3">Time</th>
                </tr>
              </thead>

              <tbody>
                {recentActivity.map((a) => (
                  <tr key={a.id} className="border-t">
                    <td className="p-3">{a.user}</td>
                    <td className="p-3">{a.action}</td>
                    <td className="p-3">{a.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
