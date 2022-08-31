import React from "react";
import Carrito from "../Images/carrito.png"



const CartWidget = () => {
    let styles = {
        Height: 25,
        width: 25,
        margin: 20
    };
    return(
            
            <a href=""><li><img src={Carrito} style={styles} alt="" /></li></a>
    );
};


export default CartWidget;