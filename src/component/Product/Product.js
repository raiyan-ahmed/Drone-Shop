import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
    const { name, price, seller, image } = props.product;

    return (
        <div className="product-card">
            <div className="img-container">
                <img src={image} alt="drone with white background" />
            </div>
            <h3>{name}</h3>
            <p className="price">Price: {price}$</p>
            <p>Seller: {seller}</p>
            <button
                onClick={() => props.cartClickHandler(props.product)}
                className="add-to-cart-btn"
            >
                add to cart
                <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            </button>
        </div>
    );
};

export default Product;
