import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import HomePage from './pages/home';
import 'sanitize.css';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);