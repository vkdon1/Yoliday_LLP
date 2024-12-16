import React, { useEffect, useState } from "react";
import { loadCart } from "./Save"; // Import the loadCart function

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart data when the component mounts
  useEffect(() => {
    const cartData = loadCart();
    setCart(cartData); // Set the loaded cart data to state
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>By {item.author}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
