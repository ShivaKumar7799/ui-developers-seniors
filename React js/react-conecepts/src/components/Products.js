import React, { useEffect, useState } from 'react'

function Products() {
    const [productItems, setProductItems] = useState([])
    useEffect(() => {
        fetch("https://64a7ab7bdca581464b848b99.mockapi.io/products").then(resp => resp.json()).then(resp => setProductItems(resp))
    },[])
  return (
    <div>
        {productItems.map((product,index) => <div> 
               <h1> {index + 1}. {product.name} </h1>
               <p>Price : {product.price} - {product.flipkartAssured ? "true" : "false" } {product.specifications}
                
               </p>
             </div> )}
    </div>
  )
}

export default Products