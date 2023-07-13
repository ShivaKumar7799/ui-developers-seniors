import React, { useEffect, useState } from 'react'
import GetIdeasCards from './get ideas block/GetIdeasCards'
import './getIdeas.css'

function GetIdeas() {
    const [getIdeasProducts, setIdeasProducts] = useState([])
    useEffect(() => {
        fetch("https://64a7ab7bdca581464b848b99.mockapi.io/getIdeas")
        .then(result => result.json())
        .then((result) => {
            setIdeasProducts(result)
        } )
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <h2>Gift ideas inspired by your shopping historyShow more</h2>
        <div id='getIdeasCardsBlock' >
            {getIdeasProducts.map((product,index) => <GetIdeasCards image = {product.image} name = {product.name} noOfRatings = {product.noOfRatings} price = {product.price} deliveryDate = {product.deliveryDate} deliveryType = {product.deliveryType} amazonFulfiled = {product.amazonFulfiled}  /> )}
            {/* <GetIdeasCards  />
            <GetIdeasCards />
            <GetIdeasCards />
            <GetIdeasCards />
            <GetIdeasCards />
            <GetIdeasCards />
            <GetIdeasCards /> */}
        </div>
    </div>
  )
}

export default GetIdeas