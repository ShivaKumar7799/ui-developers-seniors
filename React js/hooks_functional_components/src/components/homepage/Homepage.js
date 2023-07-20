import React from 'react'
import DisplayUser from './DisplayUser'

function Homepage({userName}) {
    console.log("homepage is rendered")
  return (
    <div>Homepage - <DisplayUser userName={userName} /> </div>
  )
}

export default Homepage