import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthManager } from './context/AuthConext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthManager>
        <App />
      </AuthManager>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals.render();