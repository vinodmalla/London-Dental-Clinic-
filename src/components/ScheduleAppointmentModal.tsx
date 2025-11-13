import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { mockPatients, mockDoctors } from '../lib/enhancedData';
import { Calendar } from '../components/ui/calendar';
import { toast } from 'sonner';

interface ScheduleAppointmentModalProps {
  open: boolean;
  onClose: () => void;
  onSave?: (appointment: any) => void;
}

export function ScheduleAppointmentModal({ open, onClose, onSave }: ScheduleAppointmentModalProps) {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [duration, setDuration] = useState('30');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [insurance, setInsurance] = useState('');

  const appointmentTypes = [
    'Cleaning',
    'Consultation',
    'Filling',
    'Root Canal',
    'Crown',
    'Extraction',
    'Orthodontic',
    'Emergency'
  ];

  const timeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30'
  ];

  const handleSave = () => {
    if (!selectedPatient || !selectedDoctor || !appointmentType || !selectedDate || !selectedTime) {
      toast.error('Please fill in all required fields');
      return;
    }

    const patient = mockPatients.find((p) => p.id === selectedPatient);
    const doctor = mockDoctors.find((d) => d.id === selectedDoctor);

    const newAppointment = {
      appointmentId: `A${Math.floor(Math.random() * 10000)}`,
      patientId: selectedPatient,
      patientName: patient?.name || '',
      doctorId: selectedDoctor,
      doctorName: doctor?.name || '',
      startTime: `${selectedDate.toISOString().split('T')[0]}T${selectedTime}:00`,
      endTime: `${selectedDate.toISOString().split('T')[0]}T${
        parseInt(selectedTime.split(':')[0]) + Math.floor(parseInt(duration) / 60)
      }:${(parseInt(selectedTime.split(':')[1]) + (parseInt(duration) % 60)).toString().padStart(2, '0')}:00`,
      status: 'confirmed',
      type: appointmentType.toLowerCase(),
      room: 'Op1',
      notes: notes,
      insurance: insurance
    };

    if (onSave) {
      onSave(newAppointment);
    }

    toast.success('Appointment scheduled successfully!', {
      description: 'SMS and email confirmation sent to patient'
    });

    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule New Appointment</DialogTitle>
          <DialogDescription>Fill in the details to create a new appointment</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Patient Selection */}
            <div className="space-y-2">
              <Label htmlFor="patient">
                Patient <span className="text-red-500">*</span>
              </Label>
              <Select value={selectedPatient} onValueChange={setSelectedPatient}>
                <SelectTrigger id="patient">
                  <SelectValue placeholder="Select patient" />
                </SelectTrigger>
                <SelectContent>
                  {mockPatients.map((patient) => (
                    <SelectItem key={patient.id} value={patient.id}>
                      {patient.name} - {patient.contact}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Doctor Selection */}
            <div className="space-y-2">
              <Label htmlFor="doctor">
                Doctor <span className="text-red-500">*</span>
              </Label>
              <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                <SelectTrigger id="doctor">
                  <SelectValue placeholder="Select doctor" />
                </SelectTrigger>
                <SelectContent>
                  {mockDoctors.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Appointment Type */}
            <div className="space-y-2">
              <Label htmlFor="type">
                Type of Visit <span className="text-red-500">*</span>
              </Label>
              <Select value={appointmentType} onValueChange={setAppointmentType}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {appointmentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="30"
              />
            </div>

            {/* Insurance */}
            <div className="space-y-2 col-span-2">
              <Label htmlFor="insurance">Insurance Information</Label>
              <Input
                id="insurance"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                placeholder="Insurance ID or provider"
              />
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <Label>
              Preferred Date <span className="text-red-500">*</span>
            </Label>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          </div>

          {/* Time Slot Selection */}
          <div className="space-y-2">
            <Label>
              Preferred Time <span className="text-red-500">*</span>
            </Label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? 'default' : 'outline'}
                  onClick={() => setSelectedTime(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>
            {selectedDoctor && selectedDate && (
              <p className="text-sm text-green-600 mt-2">✓ Doctor available at selected time</p>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes or special requirements"
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={handleSave} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Schedule Appointment
            </Button>
            <Button onClick={onClose} variant="outline" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}