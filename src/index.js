import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Index.css';
import App from './App';
import NoPage from './Pages/NoPage';
import Layout from './Components/Layout';
import HeadPhones from './Pages/HeadPhones';
import Speakers from './Pages/Speakers';
import EarPhones from './Pages/EarPhones';
import ProductDetail from './Pages/ProductDetail';
import CheckOut from './Pages/CheckOut';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function Index() {

  // Scroll to top on route change
  const ScrollToTop = (props) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path="home" element={<App />} />
          <Route path="headphones" element={<HeadPhones />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<EarPhones />} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

