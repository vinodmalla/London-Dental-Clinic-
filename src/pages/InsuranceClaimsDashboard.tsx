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

import {
  
  Hourglass,
  ShieldCheck,
  XCircle,
  FileText,
} from "lucide-react";

export default function InsuranceClaimsDashboard() {
  // Line Chart — Claims trend
  const claimTrend = [
    { month: "Jan", claims: 42 },
    { month: "Feb", claims: 55 },
    { month: "Mar", claims: 62 },
    { month: "Apr", claims: 70 },
    { month: "May", claims: 68 },
    { month: "Jun", claims: 80 },
  ];

  // Bar Chart — Status summary
  const claimStatus = [
    { type: "Approved", count: 120 },
    { type: "Pending", count: 35 },
    { type: "Rejected", count: 18 },
  ];

  // Pie Chart — Claim categories
  const claimTypes = [
    { name: "Dental Surgery", value: 35 },
    { name: "Consultation", value: 25 },
    { name: "Root Canal", value: 18 },
    { name: "Braces", value: 12 },
    { name: "Cosmetic", value: 10 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#a855f7", "#ef4444"];

  // Recent claims table
  const recentClaims = [
    {
      id: "C-0912",
      patient: "Emily Johnson",
      type: "Dental Surgery",
      amount: "$480",
      status: "Approved",
      date: "Today",
    },
    {
      id: "C-0913",
      patient: "Amit Sharma",
      type: "Root Canal",
      amount: "$210",
      status: "Pending",
      date: "Today",
    },
    {
      id: "C-0910",
      patient: "Sarah Lee",
      type: "Cosmetic",
      amount: "$350",
      status: "Rejected",
      date: "Yesterday",
    },
    {
      id: "C-0908",
      patient: "David Kim",
      type: "Consultation",
      amount: "$90",
      status: "Approved",
      date: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Insurance & eClaims Dashboard</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl flex items-center gap-3 font-bold">
              173 <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-gray-500 mt-1">Submitted this year</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Approved Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl flex items-center gap-3 font-bold text-green-600">
              120 <ShieldCheck className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Successfully processed</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Pending Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl flex items-center gap-3 font-bold text-amber-600">
              35 <Hourglass className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-gray-500 mt-1">Awaiting response</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Rejected Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl flex items-center gap-3 font-bold text-red-600">
              18 <XCircle className="h-8 w-8 text-red-500" />
            </div>
            <p className="text-gray-500 mt-1">Requires review</p>
          </CardContent>
        </Card>

      </div>

      {/* GRAPHS ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Claims Trend Over Months</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={claimTrend}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="claims"
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
            <CardTitle>Claim Status Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={claimStatus}>
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
            <CardTitle>Claim Types Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={claimTypes}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {claimTypes.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Claims Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Claims</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Claim ID</th>
                  <th className="p-3">Patient</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentClaims.map((claim) => (
                  <tr key={claim.id} className="border-t">
                    <td className="p-3">{claim.id}</td>
                    <td className="p-3">{claim.patient}</td>
                    <td className="p-3">{claim.type}</td>
                    <td className="p-3">{claim.amount}</td>
                    <td
                      className={`p-3 font-semibold ${
                        claim.status === "Approved"
                          ? "text-green-600"
                          : claim.status === "Pending"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {claim.status}
                    </td>
                    <td className="p-3">{claim.date}</td>
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
