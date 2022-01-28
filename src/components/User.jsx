import "./User.css";
import React from 'react';

function User() {
  return (
    <a href="https://www.github.com" target="_blank">
      <div className="Container">
        <img src="/twitter.png" alt="user"  /> 
        <div className="Content">
          <h3>Name</h3>
        </div>
      </div>
    </a>
  )
}

export default User;
