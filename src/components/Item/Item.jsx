import React from "react";
import { Link } from "react-router-dom";



const Item = ({item}) => {

const styles = {
    height:320, 
    weight: 250
}

    return (

        <div className="card shadow p-3 mb-5 bg-body rounded" >
            <Link to={`/detalle/` + item.id}><img src={item.imagenID} className="card-img-top" style={styles} alt={item.imagenID} /></Link>
            <div className="card-body">
                <h5 className="card-title text-center" >{item.nombre}</h5>
                <p className="card-text text-center">${item.precio}</p>
            </div>
        </div>

    );

};

export default Item;