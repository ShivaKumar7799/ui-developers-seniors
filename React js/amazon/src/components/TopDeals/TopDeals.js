import React from 'react'
import './TopDeals.css'
function TopDeals(props) {
  return (
    <div id='topDealsContainer' >
        <img src={props.image} alt = "one plus"  />
    </div>
  )
}

export default TopDeals