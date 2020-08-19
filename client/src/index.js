import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
, document.getElementById('root'));
