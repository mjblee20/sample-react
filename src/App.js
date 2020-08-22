import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
