import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import pic from './images/iphone.jpg';
import pic2 from './images/oneplus.jpg';
import Price from './components/price';



function App() {
  
  let Products = [
    {
      price:51999,
      name:"Apple iphone 12 Pro (64GB) ",
      quantity:0,
      image:pic
    }
    ,
    {
      price:28000,
      name:"Oneplus nord 2 5G (8GB RAM ,128GB Storage)",
      quantity:0,
      image:pic2
    }
  ]

  // creating useState hooks 
  let [ productsList, setproductList ] = useState(Products);
  let [ totalAmount, setTotalAmount ] = useState(0);
  let [ totalQuantity, setQuantity ] = useState(0);


//Function for Quantity increment 
let IncrementQuantity = (index,list) =>{   

    let newProducts = [...productsList];
    let newTotalAmount = totalAmount;  
    let newtotalQuantity = totalQuantity;
    newProducts[index].quantity++;
    newTotalAmount += newProducts[index].price;

    if(list.length==1){
      newtotalQuantity=newProducts[index].quantity;
    }
    else{
    newtotalQuantity =list.reduce((ele1,ele2)=>{
      return ele1.quantity+ele2.quantity;
    })
  }

    setproductList(newProducts);
    setTotalAmount(newTotalAmount);
    setQuantity(newtotalQuantity);
};


// Function for quantity decrement 
let DecrementQuantity =(index,list)=> {
    let newProducts = [...productsList];
    let newTotalAmount = totalAmount;  
    let newtotalQuantity = totalQuantity;

    if(newProducts[index].quantity>0)
    {
    newProducts[index].quantity--;
    newTotalAmount -= newProducts[index].price;
    }
  
    if(list.length==1){
    newtotalQuantity=newProducts[index].quantity;
    }
    else
    {
      newtotalQuantity =list.reduce((ele1,ele2)=>{
        return ele1.quantity+ele2.quantity;
      });
    }
    setproductList(newProducts);
    setTotalAmount(newTotalAmount);
    setQuantity(newtotalQuantity);
}


// Function for reset Everything
const resetQuantity =()=>{
    let newProducts = [...productsList];
    newProducts.map((productele)=>{
      return productele.quantity = 0;
    })
    setproductList(newProducts);
    setTotalAmount(0);
    setQuantity(0);
}

//Function for remove Products
const removeProduct = (index)=>{
  let newProducts = [...productsList];
  let newTotalAmount = totalAmount;   
  let newtotalQuantity = totalQuantity;

  newTotalAmount -= newProducts[index].quantity * newProducts[index].price; 
  newtotalQuantity -= newProducts[index].quantity;
  newProducts.splice(index,1);
  setproductList(newProducts);
  setTotalAmount(newTotalAmount); 
  setQuantity(newtotalQuantity);
}

 
  return (
  <>
  <Navbar  totalQuantity ={ totalQuantity }/>
        <div className="main">
        <div className="product-list"> 
        <ProductList product = { productsList }  IncrementQuantity = { IncrementQuantity } 
        DecrementQuantity = { DecrementQuantity} 
        removeProduct = { removeProduct }/>
        </div>
        <div className="price">
        <Price totalAmount = { totalAmount } resetQuantity = { resetQuantity } totalQuantity ={ totalQuantity } />
        </div> 
        </div>
  </>
);

}

export default App;
