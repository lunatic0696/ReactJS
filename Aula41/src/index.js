import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

/*
ANTIGO/DEPRECATED
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/