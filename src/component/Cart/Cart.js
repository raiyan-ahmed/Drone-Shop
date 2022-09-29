import React from "react";
import CartItems from "../CartItems/CartItems";
import "./Cart.css";

const Cart = (props) => {
    let total = 0;
    const cart = props.cart;
    const cartKeys = props.cartKeys;
    for (const id of cartKeys) {
        if (cart[id]) {
            total += cart[id].price;
        }
    }
    // console.log(props);
    return (
        <div>
            <h2>Cart Summary</h2>
            <p>Added items: {cartKeys.length} </p>
            {cartKeys.map((id) => {
                if (cart[id]) {
                    return (
                        <CartItems
                            key={id}
                            product={cart[id]}
                            id={id}
                            deleteItem={props.deleteItem}
                        ></CartItems>
                    );
                }
            })}
            <p>Total Cost: ${total}</p>
            <button onClick={props.clearCart}>Choose Again</button>
            <button onClick={props.randomCart}>Choose One</button>
        </div>
    );
};

export default Cart;
