import React from 'react';
import App from './App';

// import { Router, Route} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path="/message/:messageId" component={App} />
    </Switch>
  </Router>
);

export default Root;
