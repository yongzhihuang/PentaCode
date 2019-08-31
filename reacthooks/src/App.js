import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Items in your cart: {cartItems.toString()}</p>
        <button
          onClick={()=>{
            setCartItems([...cartItems, 'apple'])
          }}
        >Add to Cart
        </button>
      </header>
    </div>
  );
}
