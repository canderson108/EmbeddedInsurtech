
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import SolutionsPage from './pages/SolutionsPage';
import Developers from './pages/Developers';
import Ecosystem from './pages/Ecosystem';
import StrategyDeck from './pages/StrategyDeck';
import InsightSoftware from './pages/partners/InsightSoftware';
import RealPage from './pages/partners/RealPage';
import RentRedi from './pages/partners/RentRedi';
import DoorLoop from './pages/partners/DoorLoop';
import AppFolio from './pages/partners/AppFolio';
import EcommerceDetail from './pages/products/EcommerceDetail';
import FintechDetail from './pages/products/FintechDetail';
import SaaSDetail from './pages/products/SaaSDetail';
import TravelDetail from './pages/products/TravelDetail';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import Compliance from './pages/legal/Compliance';
import Security from './pages/legal/Security';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/strategy" element={<StrategyDeck />} />
            <Route path="/products/ecommerce" element={<EcommerceDetail />} />
            <Route path="/products/fintech" element={<FintechDetail />} />
            <Route path="/products/saas" element={<SaaSDetail />} />
            <Route path="/products/travel" element={<TravelDetail />} />
            <Route path="/partners/insightsoftware" element={<InsightSoftware />} />
            <Route path="/partners/realpage" element={<RealPage />} />
            <Route path="/partners/rentredi" element={<RentRedi />} />
            <Route path="/partners/doorloop" element={<DoorLoop />} />
            <Route path="/partners/appfolio" element={<AppFolio />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
