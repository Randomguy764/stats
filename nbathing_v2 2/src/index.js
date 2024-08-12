import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import to include `createRoot`
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
