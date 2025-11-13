// Dummy data for London Dental Clinic dashboards

export const appointmentData = {
  totalAppointments: 1247,
  newPatients: 342,
  returningPatients: 905,
  dailySchedule: [
    { day: 'Mon', appointments: 45 },
    { day: 'Tue', appointments: 52 },
    { day: 'Wed', appointments: 48 },
    { day: 'Thu', appointments: 55 },
    { day: 'Fri', appointments: 50 },
    { day: 'Sat', appointments: 30 },
    { day: 'Sun', appointments: 15 }
  ],
  doctorAvailability: [
    { doctor: 'Dr. Smith', monday: true, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: false, sunday: false },
    { doctor: 'Dr. Johnson', monday: true, tuesday: true, wednesday: false, thursday: true, friday: true, saturday: true, sunday: false },
    { doctor: 'Dr. Williams', monday: true, tuesday: true, wednesday: true, thursday: true, friday: false, saturday: true, sunday: false },
    { doctor: 'Dr. Brown', monday: false, tuesday: true, wednesday: true, thursday: true, friday: true, saturday: false, sunday: false }
  ]
};

export const dentalChartingData = {
  treatmentTypes: [
    { type: 'Cleaning', count: 450, percentage: 30 },
    { type: 'Fillings', count: 380, percentage: 25 },
    { type: 'Root Canal', count: 225, percentage: 15 },
    { type: 'Crowns', count: 180, percentage: 12 },
    { type: 'Extractions', count: 150, percentage: 10 },
    { type: 'Implants', count: 120, percentage: 8 }
  ],
  toothAreas: [
    { area: 'Upper Front', frequency: 320 },
    { area: 'Upper Back', frequency: 410 },
    { area: 'Lower Front', frequency: 280 },
    { area: 'Lower Back', frequency: 495 }
  ],
  satisfactionScores: {
    average: 4.7,
    total: 1205,
    distribution: [
      { stars: 5, count: 890 },
      { stars: 4, count: 245 },
      { stars: 3, count: 50 },
      { stars: 2, count: 15 },
      { stars: 1, count: 5 }
    ]
  }
};

export const emrData = {
  totalRecords: 3450,
  commonDiagnoses: [
    { diagnosis: 'Dental Caries', count: 890, percentage: 26 },
    { diagnosis: 'Gingivitis', count: 720, percentage: 21 },
    { diagnosis: 'Periodontitis', count: 550, percentage: 16 },
    { diagnosis: 'Tooth Sensitivity', count: 480, percentage: 14 },
    { diagnosis: 'Malocclusion', count: 420, percentage: 12 },
    { diagnosis: 'TMJ Disorder', count: 390, percentage: 11 }
  ],
  visitFrequency: [
    { month: 'Jan', visits: 285 },
    { month: 'Feb', visits: 310 },
    { month: 'Mar', visits: 340 },
    { month: 'Apr', visits: 325 },
    { month: 'May', visits: 360 },
    { month: 'Jun', visits: 355 },
    { month: 'Jul', visits: 295 },
    { month: 'Aug', visits: 280 },
    { month: 'Sep', visits: 345 },
    { month: 'Oct', visits: 370 },
    { month: 'Nov', visits: 385 },
    { month: 'Dec', visits: 320 }
  ]
};

export const patientManagementData = {
  totalPatients: 3450,
  newRegistrations: 127,
  retentionRate: 87.5,
  activeTreatmentPlans: 456,
  patientGrowth: [
    { month: 'Jan', patients: 3100 },
    { month: 'Feb', patients: 3150 },
    { month: 'Mar', patients: 3200 },
    { month: 'Apr', patients: 3250 },
    { month: 'May', patients: 3300 },
    { month: 'Jun', patients: 3350 },
    { month: 'Jul', patients: 3380 },
    { month: 'Aug', patients: 3400 },
    { month: 'Sep', patients: 3420 },
    { month: 'Oct', patients: 3440 },
    { month: 'Nov', patients: 3450 }
  ],
  ageDistribution: [
    { range: '0-18', count: 520 },
    { range: '19-35', count: 1150 },
    { range: '36-50', count: 980 },
    { range: '51-65', count: 580 },
    { range: '65+', count: 220 }
  ]
};

export const billingData = {
  monthlyRevenue: 285000,
  paymentMethods: [
    { method: 'Credit Card', amount: 142500, percentage: 50 },
    { method: 'Cash', amount: 71250, percentage: 25 },
    { method: 'Insurance', amount: 48450, percentage: 17 },
    { method: 'Bank Transfer', amount: 22800, percentage: 8 }
  ],
  outstandingInvoices: [
    { patient: 'John Smith', amount: 1250, dueDate: '2025-11-20', status: 'overdue' },
    { patient: 'Emma Johnson', amount: 850, dueDate: '2025-11-25', status: 'pending' },
    { patient: 'Michael Brown', amount: 2100, dueDate: '2025-11-28', status: 'pending' },
    { patient: 'Sarah Davis', amount: 650, dueDate: '2025-12-05', status: 'upcoming' }
  ],
  averageBillValue: 228,
  revenueByMonth: [
    { month: 'Jan', revenue: 245000 },
    { month: 'Feb', revenue: 260000 },
    { month: 'Mar', revenue: 275000 },
    { month: 'Apr', revenue: 268000 },
    { month: 'May', revenue: 290000 },
    { month: 'Jun', revenue: 285000 },
    { month: 'Jul', revenue: 255000 },
    { month: 'Aug', revenue: 248000 },
    { month: 'Sep', revenue: 278000 },
    { month: 'Oct', revenue: 295000 },
    { month: 'Nov', revenue: 285000 }
  ]
};

export const feedbackData = {
  averageRating: 4.7,
  totalReviews: 1205,
  weeklyReviews: [
    { week: 'Week 1', count: 28 },
    { week: 'Week 2', count: 32 },
    { week: 'Week 3', count: 35 },
    { week: 'Week 4', count: 30 }
  ],
  satisfactionTrend: [
    { month: 'Jul', rating: 4.5 },
    { month: 'Aug', rating: 4.6 },
    { month: 'Sep', rating: 4.6 },
    { month: 'Oct', rating: 4.7 },
    { month: 'Nov', rating: 4.7 }
  ]
};

export const prescriptionData = {
  totalPrescriptions: 2340,
  medicineTypes: [
    { type: 'Antibiotics', count: 680, percentage: 29 },
    { type: 'Pain Relievers', count: 585, percentage: 25 },
    { type: 'Anti-inflammatory', count: 468, percentage: 20 },
    { type: 'Antiseptic', count: 351, percentage: 15 },
    { type: 'Fluoride', count: 256, percentage: 11 }
  ],
  prescriptionsByDoctor: [
    { doctor: 'Dr. Smith', count: 680 },
    { doctor: 'Dr. Johnson', count: 620 },
    { doctor: 'Dr. Williams', count: 580 },
    { doctor: 'Dr. Brown', count: 460 }
  ]
};

export const reportingData = {
  totalVisits: 4170,
  totalRevenue: 285000,
  treatmentSuccessRate: 94.5,
  topDentists: [
    { name: 'Dr. Smith', visits: 1150, revenue: 82500, rating: 4.8 },
    { name: 'Dr. Johnson', visits: 1050, revenue: 75000, rating: 4.7 },
    { name: 'Dr. Williams', visits: 980, revenue: 70000, rating: 4.6 },
    { name: 'Dr. Brown', visits: 990, revenue: 57500, rating: 4.7 }
  ]
};

export const staffData = {
  activeStaff: 45,
  attendanceRate: 96.5,
  shiftUtilization: 88.3,
  doctorPatientRatio: '1:12',
  staffByDepartment: [
    { department: 'Dentists', count: 12 },
    { department: 'Hygienists', count: 8 },
    { department: 'Assistants', count: 15 },
    { department: 'Reception', count: 6 },
    { department: 'Admin', count: 4 }
  ]
};

export const allDashboards = [
  { id: 1, name: 'Appointment Dashboard', path: '/dashboard/appointments', icon: '📅', description: 'Track appointments and schedules' },
  { id: 2, name: 'Dental Charting', path: '/dashboard/dental-charting', icon: '🦷', description: 'Treatment types and patient satisfaction' },
  { id: 3, name: 'EMR Dashboard', path: '/dashboard/emr', icon: '📋', description: 'Medical records and diagnoses' },
  { id: 4, name: 'Patient Management', path: '/dashboard/patients', icon: '👥', description: 'Patient data and retention' },
  { id: 5, name: 'Billing Dashboard', path: '/dashboard/billing', icon: '💰', description: 'Revenue and payment tracking' },
  { id: 6, name: 'Patient Feedback', path: '/dashboard/feedback', icon: '⭐', description: 'Reviews and satisfaction trends' },
  { id: 7, name: 'Prescription Dashboard', path: '/dashboard/prescriptions', icon: '💊', description: 'Medicine tracking' },
  { id: 8, name: 'Reporting Dashboard', path: '/dashboard/reporting', icon: '📊', description: 'Performance analytics' },
  { id: 9, name: 'Data Security', path: '/dashboard/security', icon: '🔒', description: 'Access logs and security' },
  { id: 10, name: 'Patient Portal Analytics', path: '/dashboard/portal-analytics', icon: '🌐', description: 'Portal usage statistics' },
  { id: 11, name: 'Staff Management', path: '/dashboard/staff', icon: '👨‍⚕️', description: 'Staff and attendance' },
  { id: 12, name: 'Patient Follow-Up', path: '/dashboard/follow-up', icon: '🔔', description: 'Follow-up tracking' },
  { id: 13, name: 'Customer Support', path: '/dashboard/support', icon: '💬', description: 'Support tickets' },
  { id: 14, name: 'Communication', path: '/dashboard/communication', icon: '📧', description: 'Message tracking' },
  { id: 15, name: 'Insurance/eClaims', path: '/dashboard/insurance', icon: '🏥', description: 'Claims management' },
  { id: 16, name: 'Treatment Planning', path: '/dashboard/treatment-planning', icon: '📝', description: 'Treatment analytics' },
  { id: 17, name: 'Imaging Center', path: '/dashboard/imaging', icon: '📷', description: 'Scan and imaging data' },
  { id: 18, name: 'Voice AI Assistant', path: '/dashboard/voice-ai', icon: '🤖', description: 'AI assistant metrics' },
  { id: 19, name: 'Marketing Hub', path: '/dashboard/marketing', icon: '📈', description: 'Marketing ROI' },
  { id: 20, name: 'Digital Signature', path: '/dashboard/digital-signature', icon: '✍️', description: 'Document signing' }
];