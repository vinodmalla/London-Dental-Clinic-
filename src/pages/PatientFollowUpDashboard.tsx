import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import { CalendarDays, Clock, UserCheck, AlertTriangle } from "lucide-react";

export default function PatientFollowUpDashboard() {
  // Line chart – Follow-up success trend
  const trendData = [
    { month: "Jan", completed: 32 },
    { month: "Feb", completed: 40 },
    { month: "Mar", completed: 48 },
    { month: "Apr", completed: 42 },
    { month: "May", completed: 55 },
    { month: "Jun", completed: 60 },
  ];

  // Bar chart – Upcoming vs Overdue follow-ups
  const followUpSummary = [
    { type: "Upcoming", count: 72 },
    { type: "Overdue", count: 15 },
  ];

  // Pie chart – Types of follow-up visits
  const followUpReasons = [
    { name: "Cleaning", value: 35 },
    { name: "Cavity Review", value: 22 },
    { name: "Braces Adjustment", value: 18 },
    { name: "Pain Check", value: 12 },
    { name: "Cosmetic Follow-Up", value: 8 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#f97316", "#ef4444"];

  // Recent follow-up table
  const recentFollowUps = [
    {
      id: 1,
      patient: "Emily Johnson",
      type: "Cleaning",
      status: "Upcoming",
      date: "Tomorrow, 10:00 AM",
    },
    {
      id: 2,
      patient: "Amit Sharma",
      type: "Braces Adjustment",
      status: "Completed",
      date: "Yesterday",
    },
    {
      id: 3,
      patient: "Sarah Lee",
      type: "Pain Check",
      status: "Overdue",
      date: "3 days ago",
    },
    {
      id: 4,
      patient: "David Kim",
      type: "Cavity Review",
      status: "Upcoming",
      date: "Today, 2:00 PM",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Patient Follow-Up Dashboard</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Follow-Ups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3">
              87 <CalendarDays className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">Scheduled this month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Completed Follow-Ups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-green-600">
              60 <UserCheck className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Successfully completed</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Upcoming Follow-Ups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-blue-600">
              22 <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-gray-500 mt-1">Within 7 days</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Overdue Follow-Ups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-red-600">
              5 <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-1">Needs urgent attention</p>
          </CardContent>
        </Card>

      </div>

      {/* GRAPHS ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Follow-Up Completion Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="completed" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming vs Overdue Follow-Ups</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={followUpSummary}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* GRAPHS ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Follow-Up Reasons Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={followUpReasons}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {followUpReasons.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Follow-Up Actions</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Patient</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentFollowUps.map((f) => (
                  <tr key={f.id} className="border-t">
                    <td className="p-3">{f.patient}</td>
                    <td className="p-3">{f.type}</td>
                    <td
                      className={`p-3 font-semibold ${
                        f.status === "Completed"
                          ? "text-green-600"
                          : f.status === "Upcoming"
                          ? "text-blue-600"
                          : "text-red-600"
                      }`}
                    >
                      {f.status}
                    </td>
                    <td className="p-3">{f.date}</td>
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
