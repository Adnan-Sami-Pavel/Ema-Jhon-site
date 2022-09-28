import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";
const Products = (props) => {
  const { img, name, price, seller, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="rating">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>

        <p>
          <small>Seller Name: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button onClick={() => props.addToCart(props.product)}>
        <p> Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Products;
