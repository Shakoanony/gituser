import {useState, useEffect} from 'react'

import "./UsersList.css";
import User from './User';

function UsersList() {
  const [users, setUsers] = useState([])
  
  // saitis renderisas gaushvebs mxolod ertxel
  useEffect(() => {
    // moakvs imformacia gitbidan da tvirtavs use tastze
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(result => {
        setUsers(result)
      })

    }, [])
 
  return (
    <div className='usersWrapper'>

      {/* თუ users არსებობს მაშინ mapით გამოაქვს კომპონენტები */}
      {/* mapi midis users arraystan da gamoakvs <User/> ramdeni 
      elementic aris usershi da acvdis users ifnormacias */}
      {users && users.map((user)=> {
        const { id, avatar_url, html_url, name, login } = user;

        return (
          <User 
            key={id}
            avatarImage={ avatar_url } 
            userUrl={ html_url } 
            name={ name } 
            login={ login }
          />
        )
      })}

    </div>
  )
}

export default UsersList;
  