import React from "react";
import "./CartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItems = (props) => {
    const { name, image, price } = props.product;
    // console.log(props.product);
    return (
        <div className="cart-items">
            <div className="cart-img-container">
                <img src={image} alt={name} />
            </div>

            <span className="cart-prod-name">{name}</span>
            <span className="cart-prod-price">${price}</span>
            <button onClick={() => props.deleteItem(props.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default CartItems;
