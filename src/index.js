import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

reportWebVitals();
