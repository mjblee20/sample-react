import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to='/design'>design</Link>
      <Link to='/projects'>projects</Link>
      <Link to='/algorithms'>algorithms</Link>
    </div>
  );
}

export default Home;
