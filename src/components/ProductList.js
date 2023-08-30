import React from 'react'
import Product from './Product'

export default function ProductList(props) {

  return (
     props.product.length >0?

     props.product.map((element,i) => {
     return <Product product2 = { element }  key={i} IncrementQuantity = { props.IncrementQuantity } index = {i}  DecrementQuantity = { props.DecrementQuantity } 
     removeProduct = { props.removeProduct } List={props.product}
     />
    })
    : <div className="noproducts">
       <h2>No Products Added !</h2>
      </div>

  )

}

