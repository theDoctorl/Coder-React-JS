import {React, useContext} from "react";
import {CartContext} from '../Context/Context';


const Carrito = () =>{
    const {cart, clear} = useContext(CartContext);
    return(
        <div>
            <h2>Carrito</h2>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.title}</h3>
                    <button onClick={() => clear(producto.id)}>
                        Delete
                    </button>
                </div>
            ))}
            <button onClick={clear}>Delete all</button>
        </div>

    );
};

export default Carrito;
