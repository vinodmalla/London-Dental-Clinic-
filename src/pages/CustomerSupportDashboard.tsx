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
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Headphones,
  AlertTriangle,
  MessageCircle,
  Clock,
} from "lucide-react";

export default function CustomerSupportDashboard() {
  // Line chart – daily ticket trend
  const ticketTrend = [
    { day: "Mon", tickets: 12 },
    { day: "Tue", tickets: 22 },
    { day: "Wed", tickets: 18 },
    { day: "Thu", tickets: 25 },
    { day: "Fri", tickets: 28 },
    { day: "Sat", tickets: 17 },
    { day: "Sun", tickets: 10 },
  ];

  // Bar chart – ticket status summary
  const statusSummary = [
    { type: "Open", count: 35 },
    { type: "In Progress", count: 22 },
    { type: "Resolved", count: 68 },
    { type: "Closed", count: 50 },
  ];

  // Pie chart – ticket priority distribution
  const priorityData = [
    { name: "High", value: 18 },
    { name: "Medium", value: 52 },
    { name: "Low", value: 32 },
  ];

  const PRIORITY_COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  // Recent support tickets table
  const recentTickets = [
    {
      id: 1,
      user: "Emily Johnson",
      issue: "Login not working",
      priority: "High",
      status: "Open",
      time: "10:22 AM",
    },
    {
      id: 2,
      user: "Amit Sharma",
      issue: "Prescription not loading",
      priority: "Medium",
      status: "In Progress",
      time: "09:45 AM",
    },
    {
      id: 3,
      user: "Sarah Lee",
      issue: "Payment failure",
      priority: "High",
      status: "Resolved",
      time: "Yesterday",
    },
    {
      id: 4,
      user: "David Kim",
      issue: "Unable to update profile",
      priority: "Low",
      status: "Closed",
      time: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Customer Support Dashboard</h1>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              175 <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Open Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-red-600">
              35 <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-1">Needs immediate action</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Resolved Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-green-600">
              68 <MessageCircle className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Successfully handled</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-amber-600">
              12m <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Fast response</p>
          </CardContent>
        </Card>

      </div>

      {/* Graphs Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Ticket Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ticketTrend}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="tickets" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket Status Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusSummary}>
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

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket Priority Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={priorityData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {priorityData.map((_, i) => (
                    <Cell key={i} fill={PRIORITY_COLORS[i % PRIORITY_COLORS.length]} />
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
            <CardTitle>Recent Support Tickets</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">User</th>
                  <th className="p-3">Issue</th>
                  <th className="p-3">Priority</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-t">
                    <td className="p-3">{ticket.user}</td>
                    <td className="p-3">{ticket.issue}</td>
                    <td
                      className={`p-3 font-semibold ${
                        ticket.priority === "High"
                          ? "text-red-600"
                          : ticket.priority === "Medium"
                          ? "text-amber-600"
                          : "text-green-600"
                      }`}
                    >
                      {ticket.priority}
                    </td>
                    <td className="p-3">{ticket.status}</td>
                    <td className="p-3">{ticket.time}</td>
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
