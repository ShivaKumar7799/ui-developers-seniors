import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserList({user}) {
    const navigate = useNavigate()
    const userMoreInfo = (id) => {
        navigate(`/users/${id}`)
    }
  return (
         <tr>
            <td>{user.id}</td>
            <td> {user.name} </td>
            <td> {user.email} </td>
            <td> {user.website} </td>
            <td> {user.company.name} </td>
            <td> {user.address.city} </td>
            <td onClick={() => userMoreInfo(user.id)} > =&gt; </td>
          </tr>
  )
}

export default UserList