import React from 'react'


export default function Price(props) {

  return (
    <>
    <div className="price-container">
        <div className="price-details">
           <span>Price Details</span>
        </div>

      <div className="total-price">
        <div className="prices">
           <h2>Price <p>({props.totalQuantity} itmes)</p></h2>
           <p>₹ { props.totalAmount }</p>
        </div>
         
        <div className="prices">
           <h2>Total Amount</h2>
           <p>₹ { props.totalAmount }</p>
        </div>
        </div>

        <div className="payment">
            <div className='price-btns'>
            <button type="button" className="btn btn-danger buttonsf"  onClick={()=>{props.resetQuantity()}} >Reset</button>
            </div>

            <div className='price-btns'>
            <button type="button" className="btn btn-success buttonsf btnclr">Buy Now</button>
            </div>

        </div>
</div>
</>
  )
}
