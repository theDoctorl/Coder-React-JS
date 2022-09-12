import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {products} from "../Productos/Products";






const ItemDetailContainer = () =>{
    
    const [item, setItem] = useState({});
    useEffect(()=>{
        
            const getProduct = () =>
            new Promise((resolve, reject)=>{
                const product = products.find((prod)=>prod.id === 1);
                setTimeout(() => {
                    resolve(product)
                }, 600);
            });
            getProduct()
            .then((info)=>{
                setItem(info);
            })
            .catch((Error)=>{
                console.log(Error);
            });
    }, []);    

    return(
            <div>
                <ItemDetail item={item} />
            </div>
    );

};

export default ItemDetailContainer;