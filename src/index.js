import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import NavBar from "./NavBar";
import Footer from "./components/Footer";

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
    {/*<Footer />*/}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
