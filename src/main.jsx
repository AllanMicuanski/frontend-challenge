import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const rootElement = document.getElementById('root');
console.log(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
