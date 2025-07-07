
import React, { useEffect, useRef } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SurveyPage from './pages/SurveyPage/SurveyPage';
import CartPage from './pages/CartPage/CartPage';
import { useFilter } from './context/FilterContext';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const { initializeFilters } = useFilter();

  const processedLocationKey = useRef(null);

  useEffect(() => {
    if (location.state && location.state.category && processedLocationKey.current !== location.key) {
      initializeFilters({ category: location.state.category });
      processedLocationKey.current = location.key;
      window.history.replaceState({}, document.title);
    }
  }, [location.key, initializeFilters]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppContent;
