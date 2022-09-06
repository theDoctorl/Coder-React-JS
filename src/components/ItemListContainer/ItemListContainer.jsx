import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/itemList";




const ItemListContainer = () =>{


    


    const [items, setItems] = useState([]);
    useEffect(()=>{
        const productos =[
            {"id": 1,   "nombre": "Camiseta retro Argentina. Temporada `86", "precio": 10000, "imagen": "../../Images/CamisetasArgentina/Arg-86.webp"},
            {"id": 2,  "nombre": "Camiseta retro Argentina. Temporada `93", "precio": 9500, "imagen": "../Images/CamisetasArgentina/Arg-93.webp"},
            {"id": 3,  "nombre": "Camiseta retro Argentina. Temporada `94", "precio": 6300, "imagen": "../Images/CamisetasArgentina/Arg-94.webp"},
            {"id": 4,  "nombre": "Camiseta retro Argentina. Temporada `Sub 20", "precio": 6300, "imagen": "../Images/CamisetasArgentina/Arg-Sub20.webp"}         
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