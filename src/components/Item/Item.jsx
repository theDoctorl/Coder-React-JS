import React from "react";
import { Link } from "react-router-dom";



const Item = ({item}) => {



    return (

        <div className="card" >
            <Link to={`/detalle/` + item.id}><img src={"../Images/" + item.imagen} className="card-img-top" alt={item.nombre} /></Link>
            <div className="card-body">
                <h5 className="card-title text-center" >{item.nombre}</h5>
                <p className="card-text text-center">${item.precio}</p>
            </div>
        </div>

    );

};

export default Item;