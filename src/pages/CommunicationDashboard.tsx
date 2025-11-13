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
  MessageCircle,
  Bell,
  Mail,
  Inbox,
  Send,
} from "lucide-react";

export default function CommunicationDashboard() {
  // Line Chart — Message Trend
  const messageTrend = [
    { day: "Mon", messages: 120 },
    { day: "Tue", messages: 150 },
    { day: "Wed", messages: 170 },
    { day: "Thu", messages: 160 },
    { day: "Fri", messages: 210 },
    { day: "Sat", messages: 140 },
    { day: "Sun", messages: 95 },
  ];

  // Bar Chart — Message types
  const messageTypes = [
    { type: "Sent", count: 320 },
    { type: "Received", count: 480 },
    { type: "Notifications", count: 220 },
  ];

  // Pie Chart — Channel Distribution
  const channelData = [
    { name: "Email", value: 48 },
    { name: "SMS", value: 32 },
    { name: "App Messages", value: 20 },
  ];

  const CHANNEL_COLORS = ["#3b82f6", "#22c55e", "#a855f7"];

  // Recent messages list
  const recentMessages = [
    {
      id: 1,
      user: "Emily Johnson",
      content: "Appointment confirmation sent",
      channel: "Email",
      time: "09:32 AM",
      status: "Sent",
    },
    {
      id: 2,
      user: "Amit Sharma",
      content: "Payment reminder",
      channel: "SMS",
      time: "09:50 AM",
      status: "Delivered",
    },
    {
      id: 3,
      user: "Sarah Lee",
      content: "Lab report ready",
      channel: "App Message",
      time: "10:10 AM",
      status: "Read",
    },
    {
      id: 4,
      user: "David Kim",
      content: "Follow-up appointment reminder",
      channel: "Email",
      time: "Yesterday",
      status: "Sent",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Communication & Message Tracking</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3">
              1020 <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Notifications Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-amber-600">
              220 <Bell className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Automatic reminders</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Email Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-blue-600">
              480 <Mail className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-gray-500 mt-1">Sent successfully</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Unread Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-red-600">
              65 <Inbox className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-1">Needs attention</p>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Message Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={messageTrend}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="messages" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Message Type Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={messageTypes}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Channel Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {channelData.map((_, index) => (
                    <Cell key={index} fill={CHANNEL_COLORS[index % CHANNEL_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Messages Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">User</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Channel</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentMessages.map((msg) => (
                  <tr key={msg.id} className="border-t">
                    <td className="p-3">{msg.user}</td>
                    <td className="p-3">{msg.content}</td>
                    <td className="p-3">{msg.channel}</td>
                    <td className="p-3">{msg.time}</td>
                    <td
                      className={`p-3 font-semibold ${
                        msg.status === "Read"
                          ? "text-green-600"
                          : msg.status === "Sent"
                          ? "text-blue-600"
                          : "text-amber-600"
                      }`}
                    >
                      {msg.status}
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
