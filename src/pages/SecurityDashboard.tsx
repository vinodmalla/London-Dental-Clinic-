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

import { ShieldCheck, KeyRound, Lock, LogIn } from "lucide-react";

export default function SecurityDashboard() {
  // Line Chart – Access Attempts Over Time
  const accessAttempts = [
    { hour: "9 AM", attempts: 22 },
    { hour: "10 AM", attempts: 38 },
    { hour: "11 AM", attempts: 41 },
    { hour: "12 PM", attempts: 33 },
    { hour: "1 PM", attempts: 50 },
    { hour: "2 PM", attempts: 45 },
    { hour: "3 PM", attempts: 55 },
  ];

  // Bar Chart – Success vs Failed Logins
  const loginStats = [
    { type: "Successful", count: 145 },
    { type: "Failed", count: 32 },
  ];

  // Pie Chart – User Role Access Distribution
  const roleDistribution = [
    { name: "Admin", value: 12 },
    { name: "Doctor", value: 24 },
    { name: "Staff", value: 40 },
    { name: "Restricted Guest", value: 6 },
  ];

  const COLORS = ["#2563eb", "#22c55e", "#f59e0b", "#ef4444"];

  // Recent access logs
  const logs = [
    {
      id: 1,
      user: "Dr. Smith",
      action: "Logged in",
      time: "10:15 AM",
      status: "Success",
    },
    {
      id: 2,
      user: "Admin John",
      action: "Accessed patient files",
      time: "10:25 AM",
      status: "Success",
    },
    {
      id: 3,
      user: "Unknown IP",
      action: "Failed login attempt",
      time: "10:40 AM",
      status: "Blocked",
    },
    {
      id: 4,
      user: "Nurse Emma",
      action: "Logged out",
      time: "11:10 AM",
      status: "Success",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">Data Security & Access Logs</h1>

      {/* Summary Security Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Total Access Attempts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">412</span>
              <LogIn className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-2">Today</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Failed Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">32</span>
              <Lock className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-2">Today</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Encrypted Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">98%</span>
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-gray-500 mt-2">Secure HTTPS</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Admin Privilege Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">12</span>
              <KeyRound className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-gray-500 mt-2">Active Admin Users</p>
          </CardContent>
        </Card>

      </div>

      {/* Graphs Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart – Access Attempts */}
        <Card>
          <CardHeader>
            <CardTitle>Access Attempts Over Time</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accessAttempts}>
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="attempts" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart – Authentication Status */}
        <Card>
          <CardHeader>
            <CardTitle>Authentication Summary (Success vs Fail)</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={loginStats}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* Graphs Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pie Chart – Role Access */}
        <Card>
          <CardHeader>
            <CardTitle>User Role Access Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleDistribution}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {roleDistribution.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Access Logs Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Access Logs</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">User</th>
                  <th className="p-3">Action</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-t">
                    <td className="p-3">{log.user}</td>
                    <td className="p-3">{log.action}</td>
                    <td className="p-3">{log.time}</td>
                    <td
                      className={`p-3 font-medium ${
                        log.status === "Success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {log.status}
                    </td>
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
