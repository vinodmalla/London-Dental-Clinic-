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
  AreaChart,
  Area,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

export default function ReportingDashboard() {
  // Line Chart – Appointments Trend
  const appointmentData = [
    { month: "Jan", value: 180 },
    { month: "Feb", value: 215 },
    { month: "Mar", value: 240 },
    { month: "Apr", value: 260 },
    { month: "May", value: 305 },
    { month: "Jun", value: 322 },
  ];

  // Bar Chart – Revenue Analytics
  const revenueData = [
    { month: "Jan", revenue: 3200 },
    { month: "Feb", revenue: 4100 },
    { month: "Mar", revenue: 4500 },
    { month: "Apr", revenue: 4700 },
    { month: "May", revenue: 5100 },
    { month: "Jun", revenue: 5600 },
  ];

  // Pie Chart – Patient Categories
  const patientPie = [
    { name: "New Patients", value: 40 },
    { name: "Returning Patients", value: 35 },
    { name: "Walk-ins", value: 25 },
  ];

  const PIE_COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

  // Area Chart – Clinic Activity
  const activityData = [
    { day: "Mon", count: 80 },
    { day: "Tue", count: 95 },
    { day: "Wed", count: 78 },
    { day: "Thu", count: 110 },
    { day: "Fri", count: 135 },
    { day: "Sat", count: 120 },
    { day: "Sun", count: 60 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">Reporting & Analytics</h1>

      {/* Summary KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* KPI 1 */}
        <Card className="p-4 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Total Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              322 <TrendingUp className="h-7 w-7 text-blue-600" />
            </div>
            <p className="text-gray-500">Last 30 days</p>
          </CardContent>
        </Card>

        {/* KPI 2 */}
        <Card className="p-4 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Active Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              912 <Users className="h-7 w-7 text-green-600" />
            </div>
            <p className="text-gray-500">Total registered</p>
          </CardContent>
        </Card>

        {/* KPI 3 */}
        <Card className="p-4 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              ₹56,000 <DollarSign className="h-7 w-7 text-amber-500" />
            </div>
            <p className="text-gray-500">Revenue generated</p>
          </CardContent>
        </Card>

        {/* KPI 4 */}
        <Card className="p-4 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Clinic Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              120 <Activity className="h-7 w-7 text-purple-600" />
            </div>
            <p className="text-gray-500">Daily avg activity</p>
          </CardContent>
        </Card>
      </div>

      {/* Graphs Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Appointments Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={appointmentData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Graphs Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={patientPie}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {patientPie.map((_, index) => (
                    <Cell
                      key={index}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Area Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Clinic Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#8b5cf6"
                  fill="#ddd6fe"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Reporting Table */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Metric</th>
                <th className="p-3">This Month</th>
                <th className="p-3">Last Month</th>
                <th className="p-3">Growth</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3">Appointments</td>
                <td className="p-3">322</td>
                <td className="p-3">260</td>
                <td className="p-3 text-green-600 font-semibold">+24%</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Revenue</td>
                <td className="p-3">₹56,000</td>
                <td className="p-3">₹47,200</td>
                <td className="p-3 text-green-600 font-semibold">+18%</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">New Patients</td>
                <td className="p-3">40</td>
                <td className="p-3">32</td>
                <td className="p-3 text-green-600 font-semibold">+25%</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">Walk-ins</td>
                <td className="p-3">25</td>
                <td className="p-3">20</td>
                <td className="p-3 text-green-600 font-semibold">+20%</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
