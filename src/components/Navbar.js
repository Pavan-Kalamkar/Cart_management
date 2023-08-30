import React from 'react'
import './style.css'

export default function Navbar(props) {
  return (
    <>
    <nav className="nav-bar">
      <div className='title'>
        <p>
            Products Cart Management
        </p>
      </div>
      <div className='nav-links'>
          <li><div className ='small-badge'>{props.totalQuantity}</div><a href="www.google.com">All Products</a></li>
      </div>
    </nav>
    </>
  );
}
