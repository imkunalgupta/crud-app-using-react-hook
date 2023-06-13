import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditUser from './EditUser';

import './style.css';

ReactDOM.render(
  <Router>
    <Route path="/" exact>
      <App />
    </Route>
    <Route path="/edit/:id" component={EditUser} />
  </Router>,
  document.getElementById('root')
);
