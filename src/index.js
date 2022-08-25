import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppLifecycle from './AppLifecycle';
import AppPureComponents from './AppPureComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPureComponents />
  </React.StrictMode>
);

reportWebVitals();
