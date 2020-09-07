import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import UserInfo from './UserInfo';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserInfo} />
    </div>
  );
}

export default App;
