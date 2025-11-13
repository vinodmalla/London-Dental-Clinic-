// Enhanced data models with full drilldown capabilities

export interface Patient {
  id: string;
  name: string;
  dob: string;
  contact: string;
  email: string;
  insuranceId: string;
  allergies: string[];
  primaryDoctor: string;
  registrationDate: string;
  address: string;
  emergencyContact: string;
  lastVisit?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  schedule: { day: string; slots: string[] }[];
  email: string;
  phone: string;
}

export interface Appointment {
  appointmentId: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'completed' | 'cancelled' | 'no-show' | 'checked-in';
  type: string;
  room: string;
  notes?: string;
  procedures?: string[];
}

export interface Procedure {
  id: string;
  appointmentId: string;
  toothId?: string;
  toothLabel?: string;
  type: string;
  materials: string;
  cost: number;
  date: string;
  doctor: string;
  rating?: number;
  notes?: string;
}

export interface Invoice {
  id: string;
  appointmentId: string;
  patientId: string;
  patientName: string;
  items: { description: string; quantity: number; unitPrice: number; total: number }[];
  subtotal: number;
  tax: number;
  total: number;
  paidAmount: number;
  status: 'paid' | 'pending' | 'overdue' | 'partial';
  paymentMethod?: string;
  insuranceCoverage: number;
  patientBalance: number;
  dueDate: string;
  createdDate: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  medications: {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    instructions: string;
  }[];
  date: string;
  refills: number;
}

export interface Review {
  id: string;
  patientId: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
  appointmentId: string;
  category: string;
}

export interface Claim {
  id: string;
  invoiceId: string;
  insurerId: string;
  insurerName: string;
  claimAmount: number;
  approvedAmount: number;
  status: 'submitted' | 'approved' | 'rejected' | 'pending';
  submittedDate: string;
  processedDate?: string;
  rejectionReason?: string;
}

export interface Imaging {
  id: string;
  patientId: string;
  patientName: string;
  type: 'X-ray' | 'CBCT' | 'OPG' | 'Panoramic';
  fileUrl: string;
  date: string;
  findings: string;
  requestedBy: string;
}

// Mock data
export const mockPatients: Patient[] = [
  {
    id: 'P001',
    name: 'Anna Smith',
    dob: '1985-03-15',
    contact: '+44 20 7946 0958',
    email: 'anna.smith@email.com',
    insuranceId: 'INS-12345',
    allergies: ['Penicillin'],
    primaryDoctor: 'Dr. Lee',
    registrationDate: '2023-01-15',
    address: '123 Baker Street, London',
    emergencyContact: '+44 20 7946 0959',
    lastVisit: '2025-10-15'
  },
  {
    id: 'P002',
    name: 'John Davis',
    dob: '1990-07-22',
    contact: '+44 20 7946 0960',
    email: 'john.davis@email.com',
    insuranceId: 'INS-12346',
    allergies: [],
    primaryDoctor: 'Dr. Khan',
    registrationDate: '2023-03-20',
    address: '456 Oxford Street, London',
    emergencyContact: '+44 20 7946 0961',
    lastVisit: '2025-11-01'
  },
  {
    id: 'P003',
    name: 'Emma Wilson',
    dob: '1978-11-30',
    contact: '+44 20 7946 0962',
    email: 'emma.wilson@email.com',
    insuranceId: 'INS-12347',
    allergies: ['Latex'],
    primaryDoctor: 'Dr. Smith',
    registrationDate: '2022-08-10',
    address: '789 Regent Street, London',
    emergencyContact: '+44 20 7946 0963',
    lastVisit: '2025-11-05'
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: 'D01',
    name: 'Dr. Smith',
    specialty: 'General Dentistry',
    schedule: [
      { day: 'Monday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
      { day: 'Tuesday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
      { day: 'Wednesday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] }
    ],
    email: 'dr.smith@londondental.com',
    phone: '+44 20 7946 1000'
  },
  {
    id: 'D02',
    name: 'Dr. Khan',
    specialty: 'Orthodontics',
    schedule: [
      { day: 'Tuesday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Thursday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Friday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] }
    ],
    email: 'dr.khan@londondental.com',
    phone: '+44 20 7946 1001'
  },
  {
    id: 'D05',
    name: 'Dr. Lee',
    specialty: 'Endodontics',
    schedule: [
      { day: 'Monday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Wednesday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Friday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] }
    ],
    email: 'dr.lee@londondental.com',
    phone: '+44 20 7946 1002'
  }
];

export const mockAppointments: Appointment[] = [
  {
    appointmentId: 'A123',
    patientId: 'P001',
    patientName: 'Anna Smith',
    doctorId: 'D05',
    doctorName: 'Dr. Lee',
    startTime: '2025-11-20T09:00:00',
    endTime: '2025-11-20T09:30:00',
    status: 'confirmed',
    type: 'cleaning',
    room: 'Op1',
    procedures: ['Dental Cleaning', 'Fluoride Treatment']
  },
  {
    appointmentId: 'A124',
    patientId: 'P002',
    patientName: 'John Davis',
    doctorId: 'D02',
    doctorName: 'Dr. Khan',
    startTime: '2025-11-20T10:00:00',
    endTime: '2025-11-20T10:45:00',
    status: 'checked-in',
    type: 'consultation',
    room: 'Op2',
    procedures: ['Orthodontic Consultation']
  },
  {
    appointmentId: 'A125',
    patientId: 'P003',
    patientName: 'Emma Wilson',
    doctorId: 'D01',
    doctorName: 'Dr. Smith',
    startTime: '2025-11-20T11:00:00',
    endTime: '2025-11-20T12:00:00',
    status: 'confirmed',
    type: 'filling',
    room: 'Op1',
    procedures: ['Composite Filling', 'X-ray']
  },
  {
    appointmentId: 'A126',
    patientId: 'P001',
    patientName: 'Anna Smith',
    doctorId: 'D05',
    doctorName: 'Dr. Lee',
    startTime: '2025-11-20T14:00:00',
    endTime: '2025-11-20T15:00:00',
    status: 'confirmed',
    type: 'root-canal',
    room: 'Op3',
    procedures: ['Root Canal Treatment']
  }
];

export const mockProcedures: Procedure[] = [
  {
    id: 'PR001',
    appointmentId: 'A123',
    toothId: '36',
    toothLabel: 'Lower Left 6',
    type: 'filling',
    materials: 'Composite Resin',
    cost: 150,
    date: '2025-10-01',
    doctor: 'Dr. Khan',
    rating: 4,
    notes: 'Deep cavity, required anesthesia'
  },
  {
    id: 'PR002',
    appointmentId: 'A124',
    toothId: '11',
    toothLabel: 'Upper Right 1',
    type: 'crown',
    materials: 'Porcelain',
    cost: 850,
    date: '2025-09-15',
    doctor: 'Dr. Smith',
    rating: 5,
    notes: 'Permanent crown placement'
  },
  {
    id: 'PR003',
    appointmentId: 'A125',
    toothId: '46',
    toothLabel: 'Lower Right 6',
    type: 'root-canal',
    materials: 'Gutta-percha',
    cost: 650,
    date: '2025-08-20',
    doctor: 'Dr. Lee',
    rating: 5,
    notes: 'Three canal treatment'
  }
];

export const mockInvoices: Invoice[] = [
  {
    id: 'INV001',
    appointmentId: 'A123',
    patientId: 'P001',
    patientName: 'Anna Smith',
    items: [
      { description: 'Dental Cleaning', quantity: 1, unitPrice: 80, total: 80 },
      { description: 'Fluoride Treatment', quantity: 1, unitPrice: 40, total: 40 }
    ],
    subtotal: 120,
    tax: 24,
    total: 144,
    paidAmount: 144,
    status: 'paid',
    paymentMethod: 'Credit Card',
    insuranceCoverage: 96,
    patientBalance: 48,
    dueDate: '2025-11-27',
    createdDate: '2025-11-20'
  },
  {
    id: 'INV002',
    appointmentId: 'A124',
    patientId: 'P002',
    patientName: 'John Davis',
    items: [
      { description: 'Orthodontic Consultation', quantity: 1, unitPrice: 120, total: 120 },
      { description: 'X-ray (Full Mouth)', quantity: 1, unitPrice: 150, total: 150 }
    ],
    subtotal: 270,
    tax: 54,
    total: 324,
    paidAmount: 0,
    status: 'pending',
    insuranceCoverage: 200,
    patientBalance: 124,
    dueDate: '2025-12-05',
    createdDate: '2025-11-20'
  }
];

export const mockPrescriptions: Prescription[] = [
  {
    id: 'RX001',
    patientId: 'P001',
    patientName: 'Anna Smith',
    doctorId: 'D05',
    doctorName: 'Dr. Lee',
    medications: [
      {
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: '3 times daily',
        duration: '7 days',
        instructions: 'Take with food'
      },
      {
        name: 'Ibuprofen',
        dosage: '400mg',
        frequency: 'Every 6 hours as needed',
        duration: '5 days',
        instructions: 'For pain relief'
      }
    ],
    date: '2025-11-20',
    refills: 0
  }
];

export const mockReviews: Review[] = [
  {
    id: 'REV001',
    patientId: 'P001',
    patientName: 'Anna Smith',
    rating: 5,
    comment: 'Excellent service! Dr. Lee was very professional and gentle.',
    date: '2025-11-15',
    appointmentId: 'A123',
    category: 'Treatment Quality'
  },
  {
    id: 'REV002',
    patientId: 'P002',
    patientName: 'John Davis',
    rating: 4,
    comment: 'Good experience overall. Wait time was a bit long.',
    date: '2025-11-10',
    appointmentId: 'A124',
    category: 'Overall Experience'
  }
];

export const mockClaims: Claim[] = [
  {
    id: 'CLM001',
    invoiceId: 'INV001',
    insurerId: 'INS001',
    insurerName: 'Bupa UK',
    claimAmount: 144,
    approvedAmount: 96,
    status: 'approved',
    submittedDate: '2025-11-20',
    processedDate: '2025-11-22'
  },
  {
    id: 'CLM002',
    invoiceId: 'INV002',
    insurerId: 'INS002',
    insurerName: 'AXA Health',
    claimAmount: 324,
    approvedAmount: 0,
    status: 'pending',
    submittedDate: '2025-11-20'
  }
];

export const mockImaging: Imaging[] = [
  {
    id: 'IMG001',
    patientId: 'P001',
    patientName: 'Anna Smith',
    type: 'X-ray',
    fileUrl: '/images/Xray.jpg',
    date: '2025-11-20',
    findings: 'Cavity detected on tooth #36',
    requestedBy: 'Dr. Lee'
  },
  {
    id: 'IMG002',
    patientId: 'P002',
    patientName: 'John Davis',
    type: 'CBCT',
    fileUrl: '/assets/cbct-sample.jpg',
    date: '2025-11-18',
    findings: 'Normal bone structure',
    requestedBy: 'Dr. Khan'
  }
];