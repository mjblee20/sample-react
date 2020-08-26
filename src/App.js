import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pages/design'>{/* CSS playground */}</Route>
        <Route path='/pages/algorithms'>{/*  */}</Route>
        <Route path='/pages/projects'></Route>
      </Switch>
    </Router>
  );
}

export default App;
