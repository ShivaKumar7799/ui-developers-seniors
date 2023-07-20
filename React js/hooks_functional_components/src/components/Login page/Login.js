import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppMainContext } from '../../App';

function Login() {
    // const [userName, setUserName] = useState("");
    const {userName, setUserName} = useContext(AppMainContext)
    const navigate = useNavigate()
    const gotoHomePage = () => {
        navigate("/")
    }
  return (
    <div>
        <input type='text' value={userName} onChange={(event) => setUserName(event.target.value)} />
        <button onClick={gotoHomePage} >Login</button>
    </div>
  )
}

export default Login