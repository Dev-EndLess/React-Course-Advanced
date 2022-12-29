import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AppPages from './AppPages';
import AppChallenge from './AppChallenge';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      {/* <AppPages /> */}
      <AppChallenge />
    </Router>,
  </React.StrictMode>
);
