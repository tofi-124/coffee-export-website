import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated to use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
