import "./User.css";
import React from 'react';

function User(props) {
  const { avatarImage, userUrl, name, login } = props;

  return (
    <a href={userUrl} target="_blank">
      <div className="Container">
        <img src={avatarImage} alt="user"  /> 
        <div className="Content">
          <h3>{name||login}</h3>
        </div>
      </div>
    </a>
  )
}

export default User;
