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
  TrendingUp,
  Rocket,
  DollarSign,
  MousePointerClick,
} from "lucide-react";

export default function MarketingHubDashboard() {
  // Line Chart — ROI Trend
  const roiTrend = [
    { month: "Jan", roi: 2.1 },
    { month: "Feb", roi: 2.8 },
    { month: "Mar", roi: 3.4 },
    { month: "Apr", roi: 3.1 },
    { month: "May", roi: 3.8 },
    { month: "Jun", roi: 4.2 },
  ];

  // Bar Chart — Lead conversions
  const conversions = [
    { channel: "Google Ads", leads: 85 },
    { channel: "Facebook Ads", leads: 60 },
    { channel: "Instagram", leads: 45 },
    { channel: "Email", leads: 30 },
    { channel: "Referrals", leads: 25 },
  ];

  // Pie Chart — Marketing Spend Distribution
  const spendData = [
    { name: "Google Ads", value: 40 },
    { name: "Meta Ads", value: 30 },
    { name: "Influencers", value: 15 },
    { name: "Email", value: 10 },
    { name: "Other", value: 5 },
  ];

  const PIE_COLORS = ["#3b82f6", "#22c55e", "#a855f7", "#f97316", "#ef4444"];

  // Recent marketing campaigns
  const recentCampaigns = [
    {
      id: "MK-214",
      name: "Summer Whitening Offer",
      reach: "12.1K",
      roi: "4.2x",
      status: "Active",
    },
    {
      id: "MK-198",
      name: "Braces Awareness Push",
      reach: "9.5K",
      roi: "3.4x",
      status: "Completed",
    },
    {
      id: "MK-202",
      name: "Kids Dentistry Campaign",
      reach: "5.2K",
      roi: "1.9x",
      status: "Paused",
    },
    {
      id: "MK-205",
      name: "Dental Implants Ads",
      reach: "11.9K",
      roi: "3.9x",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-gray-800">Marketing Hub – ROI Analytics</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Overall ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-green-600">
              4.2x <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-gray-500 mt-1">Marketing performance</p>
          </CardContent>
        </Card>
        
        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Total Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold">
              245 <MousePointerClick className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Ad Spend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-purple-600">
              $4.8K <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-gray-500 mt-1">Total spend</p>
          </CardContent>
        </Card>

        <Card className="p-5 shadow">
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 text-3xl font-bold text-blue-600">
              12 <Rocket className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-gray-500 mt-1">Running now</p>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 1 — LINE + BAR */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Line Chart – ROI Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly ROI Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <LineChart data={roiTrend}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="roi" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart – Conversions */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Conversions by Channel</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <BarChart data={conversions}>
                <XAxis dataKey="channel" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="leads" fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>

      {/* GRAPH ROW 2 — PIE + TABLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pie Chart — Spend Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Marketing Spend Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={spendData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >
                  {spendData.map((_, idx) => (
                    <Cell key={idx} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Campaigns Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
          </CardHeader>
          <CardContent className="h-72 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-3">Campaign</th>
                  <th className="p-3">Reach</th>
                  <th className="p-3">ROI</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentCampaigns.map((camp) => (
                  <tr key={camp.id} className="border-t">
                    <td className="p-3">{camp.name}</td>
                    <td className="p-3">{camp.reach}</td>
                    <td className="p-3 font-semibold">{camp.roi}</td>
                    <td
                      className={`p-3 font-semibold ${
                        camp.status === "Active"
                          ? "text-green-600"
                          : camp.status === "Completed"
                          ? "text-blue-600"
                          : "text-amber-600"
                      }`}
                    >
                      {camp.status}
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
