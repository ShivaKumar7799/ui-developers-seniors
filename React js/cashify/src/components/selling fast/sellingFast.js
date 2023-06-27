import React from 'react'
import './sellingFast.css'
import SellingCards from './selling Fast Cards/SellingCards'

function SellingFast() {
  return (
    <div>
        <h3>SellingFast</h3>
        <div className='selling_cards_container' >
            <SellingCards />
            <SellingCards />
            <SellingCards />
            <SellingCards />
            <SellingCards />
            <SellingCards />
            <SellingCards />
            <SellingCards />
        </div>
    </div>
  )
}

export default SellingFast