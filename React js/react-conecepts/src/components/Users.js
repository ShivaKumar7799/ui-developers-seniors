import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then((resp) => setUsers(resp) ).catch((err) => console.log(err) )
    },[])
  return (
    <div>
        {users.map((user,index) => <div>
              <h1> {user.id}. {user.name} </h1>
              <h2> {user.username} - {user.website} </h2>
              <h2> Email : {user.email} </h2>
              <div> 
                <h3>Address :</h3>
                <address>
                    {user.address.street}, {user.address.city}
                </address>    
             </div>
             </div> )}
    </div>
  )
}

export default Users