import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Design from './pages/Design';
import Projects from './pages/Projects';
import Algo from './pages/Algorithms';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/sample-react'>
          <Home />
        </Route>
        <Route path='/design'>
          <Design />
        </Route>
        <Route path='/algo'>
          <Algo />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
