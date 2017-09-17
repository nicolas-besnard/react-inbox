import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path="/message/:messageId" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
