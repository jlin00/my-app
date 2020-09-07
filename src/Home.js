import React from 'react';
import './App.css';

function Home() {
  return(
    <div>
      <h2>Login</h2>
      <form action="/users">
        <label for="username">Username:</label><br />
        <input type="text" id="username" name="username" /><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
