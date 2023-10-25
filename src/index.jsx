import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from 'App.js';
import App from './App';
// import style
import './styles/style.css';
// import ''

const element = document.getElementById('root');
const root = createRoot(element);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );