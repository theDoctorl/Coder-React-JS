import React from "react";


const ItemDetail = ({item}) => {
 
    let styles = {
        width:200,
        height:200
    }
    return (
        <div className="container">
            <div className="card">
                <img src={item.img} className="card-img-top" style={styles} alt={item.nombre} />
                <div className="card-body">
                    <h5 className="card-title text-center" >{item.nombre}</h5>
                    <h5 className="card-title text-center" >{item.descripcion}</h5>
                    <p className="card-text text-center">${item.precio}</p>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail;