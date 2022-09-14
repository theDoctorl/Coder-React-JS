import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
 
    let styles = {
        width:250,
        height:250
    }
    return (
        <div className="container">
            <div className="card">
                <img src={item.imagen} className="card-img-top" style={styles} alt={item.nombre} />
                <div className="card-body">
                    <h5 className="card-title " >{item.nombre}</h5>
                    <h5 className="card-title " >{item.descripcion}</h5>
                    <p className="card-text ">${item.precio}</p>
                </div>
                <ItemCount />
            </div>
        </div>

    );
};

export default ItemDetail;