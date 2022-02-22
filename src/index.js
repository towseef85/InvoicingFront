import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './Routers';
import 'antd/dist/antd.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {ApiContextProvider} from './context/ApiContext'

ReactDOM.render(
  <React.StrictMode>
    <ApiContextProvider>
   <Router>
    <Routers/>
    </Router>
    </ApiContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
