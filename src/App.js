import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Design from './pages/design';
import Projects from './pages/projects';
import Algo from './pages/algorithms';

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
        <Route path='/algorithms'>
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
