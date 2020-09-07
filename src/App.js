import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Project from './project';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/project" component={Project} />
    </div>
  );
}

export default App;
