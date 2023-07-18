import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault();
        alert("login successful")
        navigate("/about")
    }
  return (
    <div>
        <form onSubmit={handleLogin} >
            <div>
                <label>UserName :</label>
                <input type="text" />
            </div>
            <div>
                <label>password :</label>
                <input type="password" />
            </div>
            <input type='submit' value="Login" />
        </form>
    </div>
  )
}

export default Login