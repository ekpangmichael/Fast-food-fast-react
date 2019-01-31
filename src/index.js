import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './assets/scss/base.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <div>
    <ToastContainer />
    <App />
  </div>,
  document.querySelector('#app')
);
