import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function EmployeeInfo() {
    const [userDetials, setUserDetails] = useState()
    const params = useParams();
    console.log(params.userId)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then(res => setUserDetails(res.data) )
        .catch(err => console.log(err))
    },[])
  return (
    <div> EmployeeInfo :{params.userId}
        {!userDetials && <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt="loading" /> }
        {userDetials &&  <div> 
                <h1> {userDetials.id}. {userDetials.name} </h1>
                <h2> {userDetials.username}, {userDetials.email} </h2>
             </div> }
     </div>
  )
}

export default EmployeeInfo