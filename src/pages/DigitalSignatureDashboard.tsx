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
  FileSignature,
  CheckCircle,
  Clock,
  AlertTriangle,

} from "lucide-react";

export default function DigitalSignatureDashboard() {
  // Line Chart — daily signatures
  const dailySignatures = [
    { day: "Mon", count: 12 },
    { day: "Tue", count: 18 },
    { day: "Wed", count: 22 },
    { day: "Thu", count: 20 },
    { day: "Fri", count: 28 },
    { day: "Sat", count: 14 },
    { day: "Sun", count: 8 },
  ];

  // Bar Chart — signing status
  const signatureStatus = [
    { type: "Signed", count: 85 },
    { type: "Pending", count: 25 },
    { type: "Rejected", count: 8 },
  ];

  // Pie Chart — document types
  const documentTypes = [
    { name: "Consent Form", value: 40 },
    { name: "Treatment Plan", value: 28 },
    { name: "Insurance Document", value: 18 },
    { name: "Medical History", value: 14 },
  ];

  const PIE_COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#ef4444"];

  // Recent signature records
  const recentDocs = [
    {
      id: "DS-3011",
      patient: "Emily Johnson",
      document: "Consent Form",
      status: "Signed",
      time: "Today",
    },
    {
      id: "DS-3012",
      patient: "Amit Sharma",
      document: "Treatment Plan",
      status: "Pending",
      time: "Today",
    },
    {
      id: "DS-3009",
      patient: "Sarah Lee",
      document: "Medical History",
      status: "Signed",
      time: "Yesterday",
    },
    {
      id: "DS-3003",
      patient: "David Kim",
      document: "Insurance Document",
      status: "Rejected",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-800">Digital Signature Dashboard</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Documents Signed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3">
              128 <FileSignature className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Signed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-green-600">
              22 <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-gray-500 mt-1">Successfully signed</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Pending Signatures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-amber-600">
              25 <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Waiting for review</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Rejected Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold flex items-center gap-3 text-red-600">
              8 <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-1">Needs attention</p>
          </CardContent>
        </Card>

      </div>

      {/* ROW 1 — LINE CHART & BAR CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Signature Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <LineChart data={dailySignatures}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Signature Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={signatureStatus}>
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* ROW 2 — PIE CHART + TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Document Types Signed</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={documentTypes}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {documentTypes.map((_, idx) => (
                    <Cell key={idx} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Documents Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Signature Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Doc ID</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Document</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentDocs.map((doc) => (
                  <tr key={doc.id} className="border-t">
                    <td className="p-3">{doc.id}</td>
                    <td className="p-3">{doc.patient}</td>
                    <td className="p-3">{doc.document}</td>
                    <td
                      className={`p-3 font-semibold ${
                        doc.status === "Signed"
                          ? "text-green-600"
                          : doc.status === "Pending"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {doc.status}
                    </td>
                    <td className="p-3">{doc.time}</td>
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
