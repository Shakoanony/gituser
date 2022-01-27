import "./User.css";
import React from 'react';

function User() {
  return (
    <div className="userWrapper">
      <div className='imgWrapper'>
        <img src="/twitter.png" alt="user" />
      </div>

      <h3 className='userName'>name</h3>
    </div>
  )
}

export default User;
