import React from "react";
import { Link } from "react-router-dom";
import Carrito from "../Images/carrito.png"



const CartWidget = () => {
    let styles = {
        Height: 25,
        width: 25,
        margin: 20
    };
    return(
            
            <Link to={"/carrito"}><li><img src={Carrito} style={styles} alt="" /></li></Link>
    );
};


export default CartWidget;