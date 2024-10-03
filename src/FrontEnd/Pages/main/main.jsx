import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '../app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<App />} />
        <Route path="/" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);