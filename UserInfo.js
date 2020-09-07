import React from 'react';
import './App.css';

function UserInfo() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let user = params.get('username');
  return (
    <p>Thank you for submitting a response, {user}!</p>
  );
}

export default UserInfo;
