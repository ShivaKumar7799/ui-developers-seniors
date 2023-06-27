import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div id='navBar_container' >
        <div className='navbar_left_block' >
            <img height="80px" width="200px" src='data:image/png;base64,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' alt='logo' />
            <div id='navbar_image_container' >
                <input type='text' />
                <img height="20px" width="20px" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt='search' />
            </div>
        </div>
        <div className='navbar_right_block' >
            <select>
                <option>Guorgoan</option>
                <option>Benguluru</option>
                <option>Hyd</option>
                <option>Mumbai</option>
            </select>
            <button>Login</button>
        </div>
    </div>
  )
}

export default NavBar