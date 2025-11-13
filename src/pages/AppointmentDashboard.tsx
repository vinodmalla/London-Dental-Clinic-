import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { DashboardCard } from '../components/DashboardCard';
import { Calendar, Users, TrendingUp, Clock, Plus } from 'lucide-react';
import { appointmentData } from '../lib/dummyData';
import { mockAppointments, Appointment } from '../lib/enhancedData';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { AppointmentDetailModal } from '../components/AppointmentDetailModal';
import { ScheduleAppointmentModal } from '../components/ScheduleAppointmentModal';
import { toast } from 'sonner';

export default function AppointmentDashboard() {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'checked-in':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'completed':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
      case 'cancelled':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      case 'no-show':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setDetailModalOpen(true);
  };

  const handleCheckIn = () => {
    if (selectedAppointment) {
      const updated = appointments.map((apt) =>
        apt.appointmentId === selectedAppointment.appointmentId ? { ...apt, status: 'checked-in' as const } : apt
      );
      setAppointments(updated);
      setSelectedAppointment({ ...selectedAppointment, status: 'checked-in' });
      toast.success('Patient checked in successfully');
    }
  };

  const handleReschedule = () => {
    toast.info('Reschedule feature - Opening calendar...');
  };

  const handleCancel = () => {
    if (selectedAppointment) {
      const updated = appointments.map((apt) =>
        apt.appointmentId === selectedAppointment.appointmentId ? { ...apt, status: 'cancelled' as const } : apt
      );
      setAppointments(updated);
      setDetailModalOpen(false);
      toast.success('Appointment cancelled');
    }
  };

  const handleMarkNoShow = () => {
    if (selectedAppointment) {
      const updated = appointments.map((apt) =>
        apt.appointmentId === selectedAppointment.appointmentId ? { ...apt, status: 'no-show' as const } : apt
      );
      setAppointments(updated);
      setDetailModalOpen(false);
      toast.warning('Marked as no-show');
    }
  };

  const handleCreateInvoice = () => {
    toast.success('Invoice created successfully', {
      description: 'Redirecting to billing dashboard...'
    });
  };

  const handleSaveAppointment = (newAppointment: Appointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const noShowCount = appointments.filter((a) => a.status === 'no-show').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Appointment Dashboard</h2>
          <p className="text-gray-600">Track appointments, schedules, and doctor availability</p>
        </div>
        <Button onClick={() => setScheduleModalOpen(true)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Appointments"
          value={appointments.length.toString()}
          description="Today's schedule"
          icon={Calendar}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="New Patients"
          value={appointmentData.newPatients}
          description="First-time visitors"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Checked In"
          value={appointments.filter((a) => a.status === 'checked-in').length}
          description="Currently in clinic"
          icon={TrendingUp}
        />
        <DashboardCard title="No-shows" value={noShowCount} description="Today" icon={Clock} />
      </div>

      {/* Today's Schedule Table */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule - November 20, 2025</CardTitle>
          <CardDescription>Click on any appointment to view details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Time</th>
                  <th className="text-left py-3 px-4 font-medium">Patient</th>
                  <th className="text-left py-3 px-4 font-medium">Doctor</th>
                  <th className="text-left py-3 px-4 font-medium">Type</th>
                  <th className="text-left py-3 px-4 font-medium">Room</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={appointment.appointmentId}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleAppointmentClick(appointment)}
                  >
                    <td className="py-3 px-4 font-medium">
                      {new Date(appointment.startTime).toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td className="py-3 px-4">{appointment.patientName}</td>
                    <td className="py-3 px-4">{appointment.doctorName}</td>
                    <td className="py-3 px-4 capitalize">{appointment.type}</td>
                    <td className="py-3 px-4">{appointment.room}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(appointment.status)}>{appointment.status.toUpperCase()}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAppointmentClick(appointment);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Schedule Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Daily Schedule Trends</CardTitle>
            <CardDescription>Appointments by day of week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointmentData.dailySchedule.map((day) => (
                <div key={day.day} className="flex items-center">
                  <div className="w-16 text-sm font-medium">{day.day}</div>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full flex items-center justify-end pr-2 text-white text-sm font-medium"
                        style={{ width: `${(day.appointments / 60) * 100}%` }}
                      >
                        {day.appointments}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Doctor Availability Widget */}
        <Card>
          <CardHeader>
            <CardTitle>Doctor Availability</CardTitle>
            <CardDescription>Weekly schedule overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {appointmentData.doctorAvailability.map((doctor, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <p className="font-medium mb-2">{doctor.doctor}</p>
                  <div className="flex gap-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                      const dayKey = day.toLowerCase() as keyof typeof doctor;
                      const isAvailable = doctor[dayKey];
                      return (
                        <div
                          key={idx}
                          className={`flex-1 text-center py-1 text-xs rounded ${
                            isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modals */}
      <AppointmentDetailModal
        appointment={selectedAppointment}
        open={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onCheckIn={handleCheckIn}
        onReschedule={handleReschedule}
        onCancel={handleCancel}
        onMarkNoShow={handleMarkNoShow}
        onCreateInvoice={handleCreateInvoice}
      />

      <ScheduleAppointmentModal
        open={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        onSave={handleSaveAppointment}
      />
    </div>
  );
}