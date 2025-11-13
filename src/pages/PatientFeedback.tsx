import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Star, MessageSquare } from "lucide-react";

export default function PatientFeedback() {
  // Rating distribution for Pie Chart
  const ratingData = [
    { name: "5 Stars", value: 52 },
    { name: "4 Stars", value: 28 },
    { name: "3 Stars", value: 12 },
    { name: "2 Stars", value: 6 },
    { name: "1 Star", value: 2 },
  ];

  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#e0f2fe"];

  // Monthly feedback for Bar Chart
  const monthlyFeedback = [
    { month: "Jan", feedback: 40 },
    { month: "Feb", feedback: 55 },
    { month: "Mar", feedback: 48 },
    { month: "Apr", feedback: 60 },
    { month: "May", feedback: 72 },
    { month: "Jun", feedback: 68 },
  ];

  // Sample feedback list
  const feedbackList = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      message: "Excellent service! Very friendly staff and quick treatment.",
    },
    {
      id: 2,
      name: "Emily Johnson",
      rating: 4,
      message: "Good experience overall. Appointment timings could improve.",
    },
    {
      id: 3,
      name: "Raj Patel",
      rating: 3,
      message: "Average. The waiting time was a bit long.",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Patient Feedback</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-3xl font-bold">
              4.4 <Star className="text-yellow-500 h-7 w-7" />
            </div>
            <p className="text-gray-600 mt-2">Based on last 6 months</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">Total Feedbacks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">305</div>
            <p className="text-gray-600 mt-2">All patient reviews</p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">Positive Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">82%</div>
            <p className="text-gray-600 mt-2">4★ and 5★ ratings</p>
          </CardContent>
        </Card>
      </div>

      {/* Graphs Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ratingData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    label
                  >
                    {ratingData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Feedback Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyFeedback}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="feedback" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Feedback List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {feedbackList.map((f) => (
            <div key={f.id} className="p-4 border rounded-lg bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">{f.name}</h3>
                <div className="flex items-center gap-1">
                  {Array.from({ length: f.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-500 h-4 w-4" />
                  ))}
                </div>
              </div>

              <div className="flex gap-2 text-gray-600">
                <MessageSquare className="h-4 w-4 mt-1" />
                <p>{f.message}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
