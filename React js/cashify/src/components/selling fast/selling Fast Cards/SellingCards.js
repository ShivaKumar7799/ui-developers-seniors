import React from 'react'
import './SellingCards.css'

function SellingCards() {
  return (
    <div className='selling_card_container' >
        <div>
            <img height="200px" width="200px" src= "https://s3no.cashify.in/cashify/product/img/xxhdpi/0731f6ac-35dc.jpg?p=es3sq&s=es" alt="oppo" />
        </div>
        <div>
            <h4>OPPO Reno8 5G-Refurbushed</h4>
        </div>
        <div>
            <p> <span> $20,799 </span> &nbsp; &nbsp; <del>38999</del> </p>
        </div>
        <div>
            <p>Save $18,200</p>
        </div>
        <div>
            <button>Lower Price Ever</button>
        </div>
        
    </div>
  )
}

export default SellingCards