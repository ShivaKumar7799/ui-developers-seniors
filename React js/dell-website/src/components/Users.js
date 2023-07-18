import React, { useEffect, useState } from "react";
import axios from "axios";
import "./users.css";
import UserList from "./userList";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Users Information</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>City</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>

        {/* {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td> {user.name} </td>
            <td> {user.email} </td>
            <td> {user.website} </td>
            <td> {user.company.name} </td>
            <td> {user.address.city} </td>
          </tr>
        ))} */}

        {users.map((user,index) => <UserList key={index} user={user} />  )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
