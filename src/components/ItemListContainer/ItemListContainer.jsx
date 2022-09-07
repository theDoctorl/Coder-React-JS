import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import imagen from "../Images/CamisetasArgentina/Arg-86.webp";
import imagen2 from "../Images/CamisetasArgentina/Arg-93.webp";
import imagen3 from "../Images/CamisetasArgentina/ARG-94.webp";
import imagen4 from "../Images/CamisetasArgentina/Arg-Sub20.webp";
import ItemList from "../ItemList/itemList";




const ItemListContainer = () =>{


    


    const [items, setItems] = useState([]);
    useEffect(()=>{
        const productos =[
            {"id": 1,   "nombre": "Camiseta retro Argentina. Temporada `86", "precio": 10000, "imagen": imagen},
            {"id": 2,  "nombre": "Camiseta retro Argentina. Temporada `93", "precio": 9500, "imagen": imagen2},
            {"id": 3,  "nombre": "Camiseta retro Argentina. Temporada `94", "precio": 6300, "imagen": imagen3 },
            {"id": 4,  "nombre": "Camiseta retro Argentina. Temporada `Sub 20", "precio": 6300, "imagen": imagen4 }         
        ];
            const promesa = new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(productos)
                }, 2000);
            });
            promesa.then((respuesta)=>{
                setItems(respuesta);
            });
    }, []);    

    return(
            <div className="container">
                <ItemList items={items} />
            </div>
    );

};

export default ItemListContainer;