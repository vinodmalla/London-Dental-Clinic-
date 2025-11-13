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

import { Users, Clock, UserCheck, CalendarDays } from "lucide-react";

export default function StaffManagementDashboard() {
  // Line chart – weekly attendance performance
  const weeklyAttendance = [
    { day: "Mon", present: 28 },
    { day: "Tue", present: 30 },
    { day: "Wed", present: 27 },
    { day: "Thu", present: 32 },
    { day: "Fri", present: 29 },
    { day: "Sat", present: 25 },
  ];

  // Pie chart – department distribution
  const departmentData = [
    { name: "Dentists", value: 10 },
    { name: "Nursing Staff", value: 18 },
    { name: "Front Office", value: 6 },
    { name: "Support Staff", value: 4 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#f59e0b"];

  // Bar chart – daily attendance summary
  const attendanceStats = [
    { type: "Present", count: 45 },
    { type: "Absent", count: 5 },
    { type: "Late", count: 3 },
  ];

  // Recent staff attendance logs
  const staffLogs = [
    {
      id: 1,
      name: "Dr. Smith",
      status: "Present",
      time: "08:59 AM",
    },
    {
      id: 2,
      name: "Nurse Emma",
      status: "Late",
      time: "09:15 AM",
    },
    {
      id: 3,
      name: "John (Front Desk)",
      status: "Present",
      time: "08:52 AM",
    },
    {
      id: 4,
      name: "David (Support)",
      status: "Absent",
      time: "-",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Staff Management & Attendance</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Total Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-2">
              38 <Users className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-2">Active employees</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-2">
              45 <UserCheck className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-gray-500 mt-2">Present today</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Staff On Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-2 text-red-600">
              5 <CalendarDays className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-2">Leave requests</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Late Arrivals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-2 text-amber-500">
              3 <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-2">Today</p>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Weekly Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyAttendance}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line dataKey="present" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Department Wise Staff Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {departmentData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceStats}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Staff Activity Logs */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance Logs</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Name</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Time</th>
                </tr>
              </thead>

              <tbody>
                {staffLogs.map((log) => (
                  <tr key={log.id} className="border-t">
                    <td className="p-3">{log.name}</td>
                    <td
                      className={`p-3 font-semibold ${
                        log.status === "Present"
                          ? "text-green-600"
                          : log.status === "Late"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {log.status}
                    </td>
                    <td className="p-3">{log.time}</td>
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

