import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, cantidad:cantidad}]);            
        }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => { 
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, cartTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;