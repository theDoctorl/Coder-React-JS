import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/itemList";
import Loading from "../Cargando/Cargando.jsx";
import {getDocs, collection, getFirestore, query, where } from "firebase/firestore";




const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'Products');
        const ref = categoryName
        ? query(itemsCollection, where('categoria', '==', categoryName))
        : itemsCollection;

        getDocs(ref).then((responde)=>{
           const products = responde.docs.map((prod)=>{
            if (responde.size > 0) {
                setLoading(false);
            }    
            return{
                    
                    id: prod.id,
                    ...prod.data()
                };
            });
            setItems(products)
        });

    }, [categoryName]) 

    return(
            <div className="container">
                {loading ? <Loading /> : <ItemList items={items} />}  
            </div>
    );

};

export default ItemListContainer;