import React from 'react';
import './Styles/Index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';

import App from './App';
import NoPage from './Pages/NoPage';

import Layout from './Components/Layout';
import HeadPhones from './Pages/HeadPhones';
import Speakers from './Pages/Speakers';
import EarPhones from './Pages/EarPhones';
import CheckOut from './Pages/CheckOut';

import XX99MARKII from './Pages/Products/XX99MARKII';
import XX99MARKI from './Pages/Products/XX99MARKI';
import XX59 from './Pages/Products/XX59';
import ZX9 from './Pages/Products/ZX9';
import ZX7 from './Pages/Products/ZX7';
import YX1 from './Pages/Products/YX1';


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

          <Route path="XX99MARKII" element={<XX99MARKII />} />
          <Route path="XX99MARKI" element={<XX99MARKI />} />
          <Route path="XX59" element={<XX59 />} />
          <Route path="ZX9" element={<ZX9 />} />
          <Route path="ZX7" element={<ZX7 />} />
          <Route path="YX1" element={<YX1 />} />

          <Route path="checkout" element={<CheckOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);

