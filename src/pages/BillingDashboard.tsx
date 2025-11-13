import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { DashboardCard } from '../components/DashboardCard';
import { DollarSign, CreditCard, FileText, TrendingUp } from 'lucide-react';
import { billingData } from '../lib/dummyData';
import { Badge } from '../components/ui/badge';

export default function BillingDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Billing Dashboard</h2>
        <p className="text-gray-600">Track revenue, payments, and outstanding invoices</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Monthly Revenue"
          value={`£${(billingData.monthlyRevenue / 1000).toFixed(0)}K`}
          description="Current month"
          icon={DollarSign}
          trend={{ value: 8.5, isPositive: true }}
        />
        <DashboardCard
          title="Average Bill Value"
          value={`£${billingData.averageBillValue}`}
          description="Per patient"
          icon={FileText}
          trend={{ value: 3.2, isPositive: true }}
        />
        <DashboardCard
          title="Outstanding Invoices"
          value={billingData.outstandingInvoices.length}
          description="Pending payments"
          icon={CreditCard}
        />
        <DashboardCard
          title="Collection Rate"
          value="96.8%"
          description="Payment success"
          icon={TrendingUp}
          trend={{ value: 1.5, isPositive: true }}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method Breakdown</CardTitle>
            <CardDescription>Distribution by payment type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billingData.paymentMethods.map((method, index) => {
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{method.method}</span>
                      <span className="text-sm font-bold">£{(method.amount / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div className={`${colors[index]} h-full`} style={{ width: `${method.percentage}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{method.percentage}% of total revenue</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Revenue</span>
                <span className="text-xl font-bold">£{(billingData.monthlyRevenue / 1000).toFixed(0)}K</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
            <CardDescription>Last 11 months performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {billingData.revenueByMonth.map((month, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 text-sm font-medium">{month.month}</div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-full flex items-center justify-end pr-2 text-white text-xs font-medium"
                        style={{ width: `${(month.revenue / 300000) * 100}%` }}
                      >
                        £{(month.revenue / 1000).toFixed(0)}K
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Outstanding Invoices */}
      <Card>
        <CardHeader>
          <CardTitle>Outstanding Invoices</CardTitle>
          <CardDescription>Pending and overdue payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Patient Name</th>
                  <th className="text-left py-3 px-4 font-medium">Amount</th>
                  <th className="text-left py-3 px-4 font-medium">Due Date</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {billingData.outstandingInvoices.map((invoice, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{invoice.patient}</td>
                    <td className="py-3 px-4">£{invoice.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">{invoice.dueDate}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(invoice.status)}>{invoice.status.toUpperCase()}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Send Reminder</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Outstanding</span>
            <span className="text-xl font-bold text-red-600">
              £{billingData.outstandingInvoices.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}