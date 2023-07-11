import React, { useState } from 'react'
import GetIdeasCards from './get ideas block/GetIdeasCards'
import './getIdeas.css'

function GetIdeas() {
    const [getIdeasProducts, setIdeasProducts] = useState([
        {
            image : "https://images-eu.ssl-images-amazon.com/images/I/613SAOPmLeL._AC_UL160_SR160,160_.jpg",
            name : "OnePlus 11R 5G(Galactic Silver, 16GBRam, 256 GB Storage)",
            rating : 4,
            noOfRatings : 4412,
            price : "44999.00",
            deliveryDate : "Thursday, July 13",
            deliveryType : true,
            amazonFulfiled : true
        },
        {
            image : "https://images-eu.ssl-images-amazon.com/images/I/819bwF7gjfL._AC_UL160_SR160,160_.jpg",
            name : "realme narzo 50i Prime (Mint Green 4GB RAM+64GB Storage) Octa-core Processor |5000 mAh Batteryrealme narzo 50i Prime (Mint Green 4GB RAM+64GB Storage) Octa-core Processor |5000 mAh Battery",
            rating : 4,
            noOfRatings : 5263,
            price : "7499.00",
            deliveryDate : "Thursday, July 13",
            deliveryType : true,
            amazonFulfiled : true
        },
        {
            image : "https://images-eu.ssl-images-amazon.com/images/I/51RYK5fVaTL._AC_UL160_SR160,160_.jpg",
            name : "Dove Cream Beauty Bathing Bar With ¼ Moisturizing Cream To Give You Softer, Smoother Skin, 100 G (Buy 4 Get 1 Free)Dove Cream Beauty Bathing Bar With ¼ Moisturizing Cream To Give You Softer, Smoother Skin, 100 G",
            rating : 5,
            noOfRatings : 14747,
            price : "250.00 - 580.00 ",
            deliveryDate : "",
            deliveryType : false,
            amazonFulfiled : false
        },
    ])
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