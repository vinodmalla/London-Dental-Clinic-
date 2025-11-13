import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ScrollArea } from '../components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { Menu, Home } from 'lucide-react';
import { allDashboards } from '../lib/dummyData';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const DashboardNav = () => (
    <ScrollArea className="h-full py-6 px-4">
      <div className="space-y-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">London Dental</h2>
          <p className="text-sm text-gray-600">Management Portal</p>
        </div>

        <Button
          variant={isActive('/dashboard') ? 'default' : 'ghost'}
          className="w-full justify-start"
          onClick={() => {
            navigate('/dashboard');
            setOpen(false);
          }}
        >
          <Home className="mr-2 h-4 w-4" />
          Dashboard Home
        </Button>

        <div className="pt-4">
          <h3 className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase">All Dashboards</h3>
          <div className="space-y-1">
            {allDashboards.map((dashboard) => (
              <Button
                key={dashboard.id}
                variant={isActive(dashboard.path) ? 'default' : 'ghost'}
                className="w-full justify-start text-left"
                onClick={() => {
                  navigate(dashboard.path);
                  setOpen(false);
                }}
              >
                <span className="mr-2">{dashboard.icon}</span>
                <span className="text-sm">{dashboard.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <DashboardNav />
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-bold text-gray-900">London Dental Clinic Portal</h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-72 border-r bg-white h-[calc(100vh-57px)] sticky top-[57px]">
          <DashboardNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}