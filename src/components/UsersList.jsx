import {useState, useEffect} from 'react'

import "./UsersList.css";
import User from './User';

function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {

    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(result => {
        setUsers(result)
      })

    }, [])

  return (
    <div className='usersWrapper'>

      {users.map((user)=> {
        const { avatar_url, html_url, name, login } = user;

        return (
          <User 
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
  