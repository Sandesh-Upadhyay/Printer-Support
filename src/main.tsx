import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import PrinterSupportSystem from './components/PrinterSupportSystem';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <App />
            </>
          }
        />
        <Route path="/printer-support-system" element={<PrinterSupportSystem />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
