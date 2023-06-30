import React from 'react'
import './Banner.css'

function Banner({image,title}) {

  return (
    <div className='banner-card-container' >
        <img height="100px" width = "100px" src={image} alt='banner-card' />
        <p>{title}</p>
    </div>
  )
}

export default Banner