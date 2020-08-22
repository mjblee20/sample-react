import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {/* Homepage */}
        </Route>
        <Route path='/design'>{/* CSS playground */}</Route>
        <Route path='/algorithms'>{/*  */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
