import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import cesto from "../Images/trash3.svg";
import carrito from "../Images/basket.svg";

const Carrito = () => {
    const {cart, removeItem, clear, cartTotal, cartSuma} = useContext(CartContext);

    return (
        <div className="container">
            {cartTotal() > 0 ?
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan={"5"} className="text-end">
                                <Link onClick={() => {clear()}}>
                                    <button className="btn fondo_rojo" title="Vaciar Carrito">Vaciar Carrito <img src={cesto} alt="Vaciar Carrito" width="16" /></button>
                                </Link>
                            </td>
                        </tr>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="text-start"><img src={"images/" + item.imagen} alt={item.nombre} title={item.nombre} width="120" /></td>
                                <td className="text-start align-middle">{item.nombre}</td>
                                <td className="text-end align-middle">{item.cantidad} x ${item.precio}</td>
                                <td className="text-end align-middle">${item.cantidad * item.precio}</td>
                                <td className="text-end align-middle">
                                    <Link onClick={() => {removeItem(item.id)}}><img src={cesto} alt="Eliminar Producto" title="Eliminar Producto" width="24" /></Link>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} className="text-end fw-bold">Total a Pagar</td>
                            <td className="text-end fw-bold">${cartSuma()}</td>
                            <td className="text-end">
                                <Link to={"/checkout"} title="Finalizar Compra">
                                    <button className="btn fondo_naranja">Finalizar Compra <img src={carrito} alt="Finalizar Compra" width="16" /></button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            : <div className="alert alert-danger text-center" role="alert">No se encontraron Productos!</div>}
        </div>
    )
}

export default Carrito;
