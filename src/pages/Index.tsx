import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, DollarSign, FileText, Star, Activity } from 'lucide-react';

export default function Index() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: 'Appointment Management',
      description: 'Track and manage all patient appointments efficiently',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Comprehensive patient records and analytics',
      color: 'text-green-600'
    },
    {
      icon: DollarSign,
      title: 'Billing & Revenue',
      description: 'Financial tracking and payment management',
      color: 'text-purple-600'
    },
    {
      icon: FileText,
      title: 'EMR System',
      description: 'Electronic medical records and diagnoses',
      color: 'text-orange-600'
    },
    {
      icon: Star,
      title: 'Patient Feedback',
      description: 'Monitor satisfaction and reviews',
      color: 'text-yellow-600'
    },
    {
      icon: Activity,
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights and performance metrics',
      color: 'text-red-600'
    }
  ];

  const stats = [
    { label: 'Active Patients', value: '3,450+', icon: '👥' },
    { label: 'Monthly Appointments', value: '1,247', icon: '📅' },
    { label: 'Success Rate', value: '94.5%', icon: '✅' },
    { label: 'Patient Satisfaction', value: '4.7/5', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/london-background.jpg)' }}
        ></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              London Dental Clinic
            </h1>
            <p className="text-xl md:text-2xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Advanced Dental Care Management Portal
            </p>
            <p className="text-lg mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Comprehensive dashboards for appointments, patient management, billing, and analytics
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
              onClick={() => navigate('/dashboard')}
            >
              Access Dashboard Portal
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <span className="text-4xl">{stat.icon}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Clinic Management</h2>
          <p className="text-xl text-gray-600">Everything you need to run a modern dental practice</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <feature.icon className={`h-12 w-12 mb-4 ${feature.color}`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Showcase */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Modern Dental Excellence</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art facility in London combines cutting-edge technology with compassionate care. 
                Our comprehensive portal provides real-time insights into every aspect of clinic operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-2">✓</span>
                  20 Specialized Dashboards
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-2">✓</span>
                  Real-time Analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-2">✓</span>
                  Integrated Patient Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-600 mr-2">✓</span>
                  Advanced Reporting Tools
                </li>
              </ul>
              <Button size="lg" onClick={() => navigate('/dashboard')}>
                Explore All Features
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/hero-dental-clinic.jpg"
                alt="Modern Dental Clinic"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/dentist-patient-care.jpg"
                alt="Dental Care"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white border-0">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Clinic Management?</h3>
            <p className="text-xl mb-8 opacity-90">
              Access all 20 specialized dashboards and take control of your dental practice
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => navigate('/dashboard')}
            >
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">London Dental Clinic</p>
          <p className="text-gray-400">Advanced Dental Care Management Portal</p>
          <p className="text-gray-500 text-sm mt-4">© 2025 London Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}