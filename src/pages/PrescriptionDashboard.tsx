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
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Pill, CalendarDays, ClipboardList } from "lucide-react";

export default function PrescriptionDashboard() {
  // Line Chart – Daily Medicine Usage
  const usageData = [
    { day: "Mon", pills: 45 },
    { day: "Tue", pills: 52 },
    { day: "Wed", pills: 38 },
    { day: "Thu", pills: 61 },
    { day: "Fri", pills: 48 },
    { day: "Sat", pills: 70 },
    { day: "Sun", pills: 55 },
  ];

  // Bar Chart – Stock Levels
  const stockData = [
    { name: "Amoxicillin", stock: 90 },
    { name: "Ibuprofen", stock: 120 },
    { name: "Paracetamol", stock: 40 },
    { name: "Metformin", stock: 65 },
    { name: "Aspirin", stock: 30 },
  ];

  // Pie Chart – Expiry Breakdown
  const expiryData = [
    { name: "Expiring Soon", value: 20 },
    { name: "1–3 Months", value: 40 },
    { name: "3–6 Months", value: 25 },
    { name: "6+ Months", value: 15 },
  ];

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6"];

  // Recent prescriptions list
  const recentPrescriptions = [
    {
      id: 1,
      name: "John Smith",
      medicine: "Amoxicillin",
      dosage: "500mg",
      days: 5,
    },
    {
      id: 2,
      name: "Emily Davis",
      medicine: "Ibuprofen",
      dosage: "200mg",
      days: 3,
    },
    {
      id: 3,
      name: "Michael Lee",
      medicine: "Metformin",
      dosage: "850mg",
      days: 7,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Prescription Dashboard</h1>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">Total Prescriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-3xl font-bold">
              124 <ClipboardList className="h-7 w-7 text-blue-600" />
            </div>
            <p className="text-gray-600 mt-2">Last 30 days</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">Medicines Used Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-3xl font-bold">
              55 <Pill className="h-7 w-7 text-green-600" />
            </div>
            <p className="text-gray-600 mt-2">Daily usage</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">Upcoming Expiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-3xl font-bold">
              20 <CalendarDays className="h-7 w-7 text-red-600" />
            </div>
            <p className="text-gray-600 mt-2">Within 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Graph Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Medicine Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pills" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Medicine Stock Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stockData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="stock" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Expiry Timeline Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expiryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  label
                >
                  {expiryData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Prescriptions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Prescriptions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {recentPrescriptions.map((p) => (
            <div key={p.id} className="p-4 border rounded-lg bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{p.name}</h3>
                <span className="text-sm font-medium text-blue-600">{p.medicine}</span>
              </div>

              <p className="text-gray-600">
                Dosage: <span className="font-medium">{p.dosage}</span>
              </p>
              <p className="text-gray-600">
                Duration: <span className="font-medium">{p.days} days</span>
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
