import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total = total + product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="Cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Total Shipping: ${shipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      <button>
        <p></p>
      </button>
      <button>
        <p></p>
      </button>
    </div>
  );
};

export default Cart;
