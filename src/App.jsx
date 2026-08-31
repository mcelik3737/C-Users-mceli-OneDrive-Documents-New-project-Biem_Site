import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedRoute from '@/components/ProtectedRoute';

// Auth pages
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';

// Layout
import SiteLayout from '@/components/layout/SiteLayout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import WirelessSystems from '@/pages/WirelessSystems';
import RailSystems from '@/pages/RailSystems';
import DasRfSolutions from '@/pages/DasRfSolutions';
import MiningTunnel from '@/pages/MiningTunnel';
import HyteraProducts from '@/pages/HyteraProducts';
import RfRepeater from '@/pages/RfRepeater';
import LeakyFeeder from '@/pages/LeakyFeeder';
import JrEmergencyPhones from '@/pages/JrEmergencyPhones';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import TetraProducts from '@/pages/TetraProducts';
import AccountSettings from '@/pages/AccountSettings';
import Blog from '@/pages/Blog';
import AnalyticsDashboard from '@/pages/AnalyticsDashboard';
import BlogDetail from '@/pages/BlogDetail';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider">SİSTEM YÜKLENIYOR</span>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Site routes */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/telsiz-haberlesme-sistemleri" element={<WirelessSystems />} />
        <Route path="/rayli-sistem-cozumleri" element={<RailSystems />} />
        <Route path="/das-rf-kapsama-cozumleri" element={<DasRfSolutions />} />
        <Route path="/maden-tunel-haberlesmesi" element={<MiningTunnel />} />
        <Route path="/hytera-telsiz-urunleri" element={<HyteraProducts />} />
        <Route path="/rf-repeater-bda-urunleri" element={<RfRepeater />} />
        <Route path="/leaky-feeder-sistemleri" element={<LeakyFeeder />} />
        <Route path="/jr-acil-durum-telefonlari" element={<JrEmergencyPhones />} />
        <Route path="/tetra-telsiz-sistemleri" element={<TetraProducts />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hesap-ayarlari" element={<AccountSettings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/analitik-paneli" element={<AnalyticsDashboard />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
