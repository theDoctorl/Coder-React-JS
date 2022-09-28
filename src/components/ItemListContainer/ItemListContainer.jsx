import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";
import {getDocs, collection, getFirestore, query, where } from "firebase/firestore";




const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "products");
        const ref = categoryName
        ? query(itemsCollection, where('category', '==', categoryName))
        : itemsCollection


        getDocs(ref).then((responde)=>{
           const products = responde.docs.map((prod)=>{

                return{
                    id: prod.id,
                    ...prod.data()
                }
            });
            setItems(products)
        });

    }, [categoryName]) 

    return(
            <div className="container">
                <ItemList items={items} />
            </div>
    );

};

export default ItemListContainer;