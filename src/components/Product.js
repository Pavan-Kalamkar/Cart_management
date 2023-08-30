import React from 'react'


export default function Product(props) {
  return (

    <div className="product-container">
        <div className="product-info">
            <img className="images img-fluid" src = {props.product2.image}  alt='img' />
            <div className="spec">
            <h2> { props.product2.name }</h2>
            <p> ₹ {props.product2.price}.00 </p>
            <button className="remove-btn" onClick={()=>{props.removeProduct(props.index)}}>
            Remove
            </button>
            </div>
        </div>

        <div className="buttons-container">
                <div className="btn-container" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary buttons "

                 onClick={()=>{ props.DecrementQuantity(props.index,props.List)}}>
                 - </button>

                <button type="button" className="btn buttons"> { props.product2.quantity } </button>
                <button type="button" className="btn btn-primary buttons"

                 onClick={ () =>{ props.IncrementQuantity(props.index,props.List)}}>
                 + </button>
                </div>
        </div>

        {/* <div className="total-container">
         <h2> Total Amount : { props.product2.quantity*props.product2.price } Rs </h2>
        </div>
       
       <div className="remove-container">
       <button className="btn btn-danger" onClick={()=>{props.removeProduct(props.index)}}>
        Remove
        </button>
       </div>
        */}
        
    </div>
  )
}
