import { Toaster } from "sonner";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import AppointmentDashboard from './pages/AppointmentDashboard';
import PatientManagement from './pages/PatientManagement';
import BillingDashboard from './pages/BillingDashboard';
import EMRDashboard from './pages/EMRDashboard';
import DentalCharting from './pages/DentalCharting';
import PatientFeedback from "./pages/PatientFeedback";
import NotFound from './pages/NotFound';
import PrescriptionDashboard from "./pages/PrescriptionDashboard";
import ReportingDashboard from "./pages/ReportingDashboard";
import SecurityDashboard from "./pages/SecurityDashboard";
import StaffManagementDashboard from "./pages/StaffManagementDashboard";
import PatientFollowUpDashboard from "./pages/PatientFollowUpDashboard";
import CustomerSupportDashboard from "./pages/CustomerSupportDashboard";
import CommunicationDashboard from "./pages/CommunicationDashboard";
import InsuranceClaimsDashboard from "./pages/InsuranceClaimsDashboard";
import TreatmentPlanningDashboard from "./pages/TreatmentPlanningDashboard";
import ImagingCenterDashboard from "./pages/ImagingCenterDashboard";
import VoiceAIAssistantDashboard from "./pages/VoiceAIAssistantDashboard";
import MarketingHubDashboard from "./pages/MarketingHubDashboard";
import DigitalSignatureDashboard from "./pages/DigitalSignatureDashboard";
import PatientPortalAnalytics from "./pages/PatientPortalAnalytics";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="appointments" element={<AppointmentDashboard />} />
          <Route path="patients" element={<PatientManagement />} />
          <Route path="billing" element={<BillingDashboard />} />
          <Route path="emr" element={<EMRDashboard />} />

          {/* Placeholder routes */}
          
          <Route path="dental-charting" element={<DentalCharting />} />
          <Route path="feedback" element={<PatientFeedback />} />
          <Route path="prescriptions" element={<PrescriptionDashboard />} />
          <Route path="reporting" element={<ReportingDashboard />} />
          <Route path="security" element={<SecurityDashboard />} />
          <Route path="portal-analytics" element={<PatientPortalAnalytics />} />
          <Route path="staff" element={<StaffManagementDashboard />} />
          <Route path="follow-up" element={<PatientFollowUpDashboard />} />
          <Route path="support" element={<CustomerSupportDashboard />} />
          <Route path="communication" element={<CommunicationDashboard />} />
          <Route path="insurance" element={<InsuranceClaimsDashboard />} />
          <Route path="treatment-planning" element={<TreatmentPlanningDashboard/>} />
          <Route path="imaging" element={<ImagingCenterDashboard />} />
          <Route path="voice-ai" element={<VoiceAIAssistantDashboard />} />
          <Route path="marketing" element={<MarketingHubDashboard />} />
          <Route path="digital-signature" element={<DigitalSignatureDashboard />} />
        </Route>

        {/* FIXED: NotFound route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);



export default App;