import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import UserInfo from './UserInfo';
import Project from './project';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserInfo} />
      <Route path="/project" component={Project} />
    </div>
  );
}

export default App;
