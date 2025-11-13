import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Appointment, mockPatients } from '../lib/enhancedData';
import { Calendar, Clock, MapPin, User, Phone, Mail, FileText } from 'lucide-react';

interface AppointmentDetailModalProps {
  appointment: Appointment | null;
  open: boolean;
  onClose: () => void;
  onCheckIn?: () => void;
  onReschedule?: () => void;
  onCancel?: () => void;
  onMarkNoShow?: () => void;
  onCreateInvoice?: () => void;
}

export function AppointmentDetailModal({
  appointment,
  open,
  onClose,
  onCheckIn,
  onReschedule,
  onCancel,
  onMarkNoShow,
  onCreateInvoice
}: AppointmentDetailModalProps) {
  if (!appointment) return null;

  const patient = mockPatients.find((p) => p.id === appointment.patientId);

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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Appointment Details</DialogTitle>
          <DialogDescription>ID: {appointment.appointmentId}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-between">
            <Badge className={`${getStatusColor(appointment.status)} text-sm px-3 py-1`}>
              {appointment.status.toUpperCase()}
            </Badge>
            <span className="text-sm text-gray-500">{appointment.type}</span>
          </div>

          {/* Patient Card */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <User className="mr-2 h-5 w-5" />
              Patient Information
            </h3>
            {patient && (
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-600">Name</p>
                  <p className="font-medium">{patient.name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Date of Birth</p>
                  <p className="font-medium">{patient.dob}</p>
                </div>
                <div>
                  <p className="text-gray-600 flex items-center">
                    <Phone className="mr-1 h-3 w-3" /> Contact
                  </p>
                  <p className="font-medium">{patient.contact}</p>
                </div>
                <div>
                  <p className="text-gray-600 flex items-center">
                    <Mail className="mr-1 h-3 w-3" /> Email
                  </p>
                  <p className="font-medium text-xs">{patient.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">Insurance ID</p>
                  <p className="font-medium">{patient.insuranceId}</p>
                </div>
                <div>
                  <p className="text-gray-600">Last Visit</p>
                  <p className="font-medium">{patient.lastVisit || 'N/A'}</p>
                </div>
                {patient.allergies.length > 0 && (
                  <div className="col-span-2">
                    <p className="text-gray-600">Allergies</p>
                    <div className="flex gap-2 mt-1">
                      {patient.allergies.map((allergy, idx) => (
                        <Badge key={idx} variant="destructive">
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Appointment Details */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3">Appointment Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <Calendar className="mr-2 h-4 w-4 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-600">Date & Time</p>
                  <p className="font-medium">
                    {new Date(appointment.startTime).toLocaleDateString('en-GB', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="font-medium">
                    {new Date(appointment.startTime).toLocaleTimeString('en-GB', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}{' '}
                    -{' '}
                    {new Date(appointment.endTime).toLocaleTimeString('en-GB', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="mr-2 h-4 w-4 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-medium">
                    {Math.round(
                      (new Date(appointment.endTime).getTime() - new Date(appointment.startTime).getTime()) / 60000
                    )}{' '}
                    minutes
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <User className="mr-2 h-4 w-4 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-600">Doctor</p>
                  <p className="font-medium">{appointment.doctorName}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-600">Room</p>
                  <p className="font-medium">{appointment.room}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Procedures Scheduled */}
          {appointment.procedures && appointment.procedures.length > 0 && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Procedures Scheduled
              </h3>
              <ul className="space-y-2">
                {appointment.procedures.map((procedure, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {procedure}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Notes */}
          {appointment.notes && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Notes</h3>
              <p className="text-sm text-gray-700">{appointment.notes}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {appointment.status === 'confirmed' && (
              <Button onClick={onCheckIn} className="bg-green-600 hover:bg-green-700">
                Check-in Patient
              </Button>
            )}
            <Button onClick={onReschedule} variant="outline">
              Reschedule
            </Button>
            <Button onClick={onCancel} variant="outline" className="text-red-600 hover:text-red-700">
              Cancel Appointment
            </Button>
            <Button onClick={onMarkNoShow} variant="outline" className="text-orange-600 hover:text-orange-700">
              Mark No-show
            </Button>
            <Button onClick={onCreateInvoice} className="bg-blue-600 hover:bg-blue-700">
              Create Invoice
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}