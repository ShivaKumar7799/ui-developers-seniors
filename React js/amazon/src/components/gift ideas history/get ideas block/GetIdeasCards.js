import React from 'react'
import './GetIdeasCards.css'

function GetIdeasCards(props) {
  const {image,name,noOfRatings,price,deliveryDate,deliveryType,amazonFulfiled} = props
  return (
    <div>
        <div id='getIdeasCardsContainer' >
            <img src={image} alt = "one plus" />
            <p id='productName' > {name} </p>
            <p><span>@</span> <span>{noOfRatings}</span></p>
            <p> <strong> {price} </strong> </p>
            {deliveryDate &&  <p>Get it by <b> {deliveryDate} </b> </p>}
            <p> {deliveryType && "FREE Delivery over ₹499."} </p>
            <p> {amazonFulfiled && "Fulfilled by Amazon." } </p>
        </div>
    </div>
  )
}

export default GetIdeasCards