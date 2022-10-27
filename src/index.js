import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';



ReactDOM.render(
  
<React.StrictMode>
  <Router>
    <App/>
  </Router>
  </React.StrictMode>, document.getElementById('root')
);

// npm i react-router-dom we have to install 