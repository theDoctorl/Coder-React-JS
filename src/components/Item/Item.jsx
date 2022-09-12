import React from "react";




const Item = ({nombre, imagen, precio}) => {

    let styles = {
        width:200,
        height:200
    }

    return (
        
            <div className="card">
                <img src={imagen} className="card-img-top" style={styles} alt={nombre} />
                    <div className="card-body">
                        <h5 className="card-title text-center" >{nombre}</h5>
                        <p className="card-text text-center">${precio}</p>
                    </div>
            </div>
        
    );

};

export default Item;