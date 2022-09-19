import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({children}) => {
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

    const cartTotal = () => { //Me había olvidado de agregar al Provider del Contexto, la función cartTotal. Es por esa razón que la llamaba desde el otro lado y me decía que no lo reconocía.
        return cart.reduce((total, item) => total+=item.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;