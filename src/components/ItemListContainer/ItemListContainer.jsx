import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";
import {products} from "../Productos/Products";




const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    const {genero} = useParams();

    useEffect(()=>{

            let casaca = "";
            if(genero==="europa"){
                casaca = "europa"
            }else if(genero==="argentina"){
                casaca="argentina"
            };
            const promesa = new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(products)
                }, 500);
            });
            promesa.then((respuesta)=>{
                const arrayProductos = respuesta.filter(prod=>prod.category===casaca)
                setItems(arrayProductos);
            });
    }, [genero]);    

    return(
            <div className="container">
                <ItemList items={items} />
            </div>
    );

};

export default ItemListContainer;