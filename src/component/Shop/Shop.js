import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [cartKeys, setCartKeys] = useState([]);
    // const [alert, setAlert] = useState(0);

    useEffect(() => {
        fetch("products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // function to add product to cart
    const handleAddToCart = (product) => {
        const newCart = { ...cart };
        let idCartProduct;
        // parseInt(cartKeys[cartKeys.length - 1]) + 1;
        if (cartKeys.length) {
            idCartProduct = parseInt(cartKeys[cartKeys.length - 1]) + 1;
        } else {
            idCartProduct = 1;
        }
        const newCartKeys = [...cartKeys, idCartProduct];
        if (product) {
            newCart[idCartProduct] = product;
        }
        setCart(newCart);
        setCartKeys(newCartKeys);
        // for optional
        // else {
        //     setAlert(1);
        // }
    };

    // function to clear the cart
    const clearCart = () => {
        setCart({});
        setCartKeys([]);
    };

    // function to choose a random product form the cart and update the cart with it
    const randomCart = () => {
        let product;
        let newCart = {};
        let newCartKey = 1;
        if (cartKeys.length) {
            product =
                cart[cartKeys[Math.floor(Math.random() * cartKeys.length)]];
            newCart[newCartKey] = product;
            setCart(newCart);
            setCartKeys([newCartKey]);
        }
        // console.log(newCart);
    };

    const deleteItem = (id) => {
        const newCart = { ...cart };
        delete newCart[id];
        const newCartKeys = cartKeys.filter((key) => key !== id);
        setCart(newCart);
        setCartKeys(newCartKeys);
    };
    // function to delete a product from the cart
    // const deleteItem = (index) => {
    //     const newCart = [...cart];
    //     const tempCart = newCart.filter((prod) => {
    //         return prod.id !== product.id;
    //     });
    //     setCart(tempCart);
    //     // console.log(cart);
    // };

    return (
        <div className="main-section">
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={Math.random() * 100000000 + product.id}
                        product={product}
                        cartClickHandler={handleAddToCart}
                    ></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    cartKeys={cartKeys}
                    clearCart={clearCart}
                    randomCart={randomCart}
                    deleteItem={deleteItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
