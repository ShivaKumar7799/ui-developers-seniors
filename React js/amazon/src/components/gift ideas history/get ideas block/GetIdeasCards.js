import React from 'react'
import './GetIdeasCards.css'

function GetIdeasCards(props) {
  return (
    <div>
        <div id='getIdeasCardsContainer' >
            <img src={props.image} alt = "one plus" />
            <p id='productName' > {props.name} </p>
            <p><span>@</span> <span>{props.noOfRatings}</span></p>
            <p> <strong> {props.price} </strong> </p>
            {props.deliveryDate &&  <p>Get it by <b> {props.deliveryDate} </b> </p>}
            <p> {props.deliveryType && "FREE Delivery over ₹499."} </p>
            <p> {props.amazonFulfiled && "Fulfilled by Amazon." } </p>
        </div>
    </div>
  )
}

export default GetIdeasCards