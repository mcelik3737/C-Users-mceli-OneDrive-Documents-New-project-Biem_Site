import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import SiteLayout from '@/components/layout/SiteLayout';

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
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';

function PublicSite() {
  return (
    <Routes>
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <PublicSite />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
