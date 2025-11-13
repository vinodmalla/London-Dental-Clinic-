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
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Mic,
  MessageSquare,
  Brain,
  Timer,
  CheckCircle2,
} from "lucide-react";

export default function VoiceAIAssistantDashboard() {
  // Line Chart — Daily interactions
  const interactionTrend = [
    { day: "Mon", count: 22 },
    { day: "Tue", count: 35 },
    { day: "Wed", count: 30 },
    { day: "Thu", count: 45 },
    { day: "Fri", count: 50 },
    { day: "Sat", count: 28 },
    { day: "Sun", count: 18 },
  ];

  // Bar Chart — Intent categories
  const intentData = [
    { type: "Appointment Booking", count: 42 },
    { type: "Reschedule", count: 18 },
    { type: "Clinic Info", count: 25 },
    { type: "Billing Query", count: 15 },
    { type: "General Inquiry", count: 28 },
  ];

  // Pie Chart — Accuracy metrics
  const accuracyChart = [
    { name: "Correct Responses", value: 78 },
    { name: "Incorrect", value: 12 },
    { name: "Escalated to Human", value: 10 },
  ];

  const PIE_COLORS = ["#22c55e", "#ef4444", "#a855f7"];

  // Recent interactions table
  const recentAI = [
    {
      id: 1,
      user: "Emily Johnson",
      intent: "Book Appointment",
      confidence: "92%",
      status: "Completed",
      time: "09:22 AM",
    },
    {
      id: 2,
      user: "Amit Sharma",
      intent: "Billing Query",
      confidence: "78%",
      status: "Escalated",
      time: "09:45 AM",
    },
    {
      id: 3,
      user: "Sarah Lee",
      intent: "Clinic Info",
      confidence: "88%",
      status: "Completed",
      time: "10:10 AM",
    },
    {
      id: 4,
      user: "David Kim",
      intent: "Reschedule Appointment",
      confidence: "65%",
      status: "Incorrect",
      time: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-800">Voice AI Assistant Dashboard</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total AI Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-center text-3xl font-bold">
              228 <Mic className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-center text-3xl font-bold text-amber-600">
              0.8s <Timer className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Fast & responsive</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>AI Accuracy Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-center text-3xl font-bold text-green-600">
              78% <Brain className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Correct interpretations</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Completed Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 items-center text-3xl font-bold text-purple-600">
              142 <CheckCircle2 className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-gray-500 mt-1">Handled successfully</p>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily AI Interaction Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <LineChart data={interactionTrend}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
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
            <CardTitle>Intent Usage Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={intentData}>
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
            <CardTitle>AI Response Accuracy</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={accuracyChart}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {accuracyChart.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Interactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent AI Interactions</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">User</th>
                  <th className="p-3">Intent</th>
                  <th className="p-3">Confidence</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentAI.map((session) => (
                  <tr key={session.id} className="border-t">
                    <td className="p-3">{session.user}</td>
                    <td className="p-3">{session.intent}</td>
                    <td className="p-3">{session.confidence}</td>
                    <td
                      className={`p-3 font-semibold ${
                        session.status === "Completed"
                          ? "text-green-600"
                          : session.status === "Escalated"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {session.status}
                    </td>
                    <td className="p-3">{session.time}</td>
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
