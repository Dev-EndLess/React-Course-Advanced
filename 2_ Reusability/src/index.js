import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactChildren from './React-Children';
import HOCs from './HOCs'
import RenderProps from './Render-Props';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReactChildren/> */}
    {/* <HOCs/> */}
    {/* <RenderProps/> */}
    <App />
  </React.StrictMode>
);
