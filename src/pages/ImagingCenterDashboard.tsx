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
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

import {
  Image,
  ScanSearch,
  Activity,
  BarChart3,
  
} from "lucide-react";

export default function ImagingCenterDashboard() {
  // Line Chart — Daily scans performed
  const scanTrend = [
    { day: "Mon", scans: 12 },
    { day: "Tue", scans: 18 },
    { day: "Wed", scans: 22 },
    { day: "Thu", scans: 20 },
    { day: "Fri", scans: 28 },
    { day: "Sat", scans: 15 },
    { day: "Sun", scans: 8 },
  ];

  // Bar Chart — Scan types counts
  const scanTypes = [
    { type: "X-Ray", count: 58 },
    { type: "OPG", count: 32 },
    { type: "CBCT", count: 25 },
    { type: "Intraoral Scan", count: 40 },
  ];

  // Pie Chart — Imaging category distribution
  const imagingData = [
    { name: "Diagnostic", value: 45 },
    { name: "Treatment Planning", value: 30 },
    { name: "Post-Op Review", value: 18 },
    { name: "Emergency", value: 7 },
  ];

  const PIE_COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#ef4444"];

  // Recent imaging records
  const recentImaging = [
    {
      id: "IMG-2041",
      patient: "Emily Johnson",
      type: "X-Ray",
      status: "Completed",
      time: "Today",
    },
    {
      id: "IMG-2042",
      patient: "Amit Sharma",
      type: "CBCT",
      status: "Processing",
      time: "Today",
    },
    {
      id: "IMG-2037",
      patient: "Sarah Lee",
      type: "Intraoral Scan",
      status: "Completed",
      time: "Yesterday",
    },
    {
      id: "IMG-2034",
      patient: "David Kim",
      type: "OPG",
      status: "Completed",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Imaging Center Dashboard</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Scans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              168 <Image className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Diagnostic Scans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-green-600">
              45 <ScanSearch className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Used for diagnosis</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-amber-600">
              6 <Activity className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Being processed</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-purple-600">
              22 <BarChart3 className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-gray-500 mt-1">Finished successfully</p>
          </CardContent>
        </Card>

      </div>

      {/* Row 1 — Line Chart & Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart — Daily Scans */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Scan Volume</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scanTrend}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="scans"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart — Scan Type Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Scan Type Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={scanTypes}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* Row 2 — Pie Chart & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pie Chart — Imaging Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Imaging Categories Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={imagingData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {imagingData.map((_, idx) => (
                    <Cell
                      key={idx}
                      fill={PIE_COLORS[idx % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Imaging Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Imaging Records</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Scan ID</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentImaging.map((scan) => (
                  <tr key={scan.id} className="border-t">
                    <td className="p-3">{scan.id}</td>
                    <td className="p-3">{scan.patient}</td>
                    <td className="p-3">{scan.type}</td>
                    <td
                      className={`p-3 font-semibold ${
                        scan.status === "Completed"
                          ? "text-green-600"
                          : scan.status === "Processing"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {scan.status}
                    </td>
                    <td className="p-3">{scan.time}</td>
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
