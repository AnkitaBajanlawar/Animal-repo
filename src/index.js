import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JSONServerBookApp from './JSONServerBookApp';
import { Provider } from './context/books';
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
    <JSONServerBookApp />
    </Provider>
  </React.StrictMode>
);

