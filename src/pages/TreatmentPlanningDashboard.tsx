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
  Stethoscope,
  ClipboardList,
  Activity,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function TreatmentPlanningDashboard() {
  // Line Chart – Treatment progress/completion
  const progressTrend = [
    { month: "Jan", completed: 28 },
    { month: "Feb", completed: 35 },
    { month: "Mar", completed: 42 },
    { month: "Apr", completed: 48 },
    { month: "May", completed: 52 },
    { month: "Jun", completed: 60 },
  ];

  // Pie Chart – Types of treatments
  const treatmentTypes = [
    { name: "Root Canal", value: 25 },
    { name: "Braces", value: 18 },
    { name: "Cleaning", value: 30 },
    { name: "Extraction", value: 12 },
    { name: "Cosmetic", value: 15 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#f59e0b", "#ef4444"];

  // Bar Chart – Daily treatment plans
  const dailyPlans = [
    { day: "Mon", plans: 20 },
    { day: "Tue", plans: 25 },
    { day: "Wed", plans: 22 },
    { day: "Thu", plans: 28 },
    { day: "Fri", plans: 30 },
    { day: "Sat", plans: 18 },
  ];

  // Table – Recent treatment plans
  const recentPlans = [
    {
      id: 1,
      patient: "Emily Johnson",
      treatment: "Root Canal",
      status: "In Progress",
      date: "Today",
    },
    {
      id: 2,
      patient: "Amit Sharma",
      treatment: "Braces",
      status: "Completed",
      date: "Yesterday",
    },
    {
      id: 3,
      patient: "Sarah Lee",
      treatment: "Cleaning",
      status: "Scheduled",
      date: "Tomorrow",
    },
    {
      id: 4,
      patient: "David Kim",
      treatment: "Extraction",
      status: "In Progress",
      date: "Today",
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-800">Treatment Planning & Analytics</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Total Treatments Planned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              145 <ClipboardList className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Treatments Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-green-600">
              92 <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Great progress</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Ongoing Treatments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-amber-600">
              38 <Activity className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Currently being worked on</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow-sm">
          <CardHeader>
            <CardTitle>Pending / Waiting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-red-600">
              15 <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-1">Needs scheduling</p>
          </CardContent>
        </Card>

      </div>

      {/* ROW 1 – LINE CHART + PIE CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LINE CHART */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Treatment Completion Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressTrend}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* PIE CHART */}
        <Card>
          <CardHeader>
            <CardTitle>Treatment Types Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={treatmentTypes}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {treatmentTypes.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* ROW 2 – BAR CHART + TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* BAR CHART */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Treatment Plans</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={dailyPlans}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="plans" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* TABLE */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Treatment Plans</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Patient</th>
                  <th className="p-3">Treatment</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentPlans.map((plan) => (
                  <tr key={plan.id} className="border-t">
                    <td className="p-3">{plan.patient}</td>
                    <td className="p-3">{plan.treatment}</td>
                    <td
                      className={`p-3 font-semibold ${
                        plan.status === "Completed"
                          ? "text-green-600"
                          : plan.status === "In Progress"
                          ? "text-amber-600"
                          : "text-blue-600"
                      }`}
                    >
                      {plan.status}
                    </td>
                    <td className="p-3">{plan.date}</td>
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
