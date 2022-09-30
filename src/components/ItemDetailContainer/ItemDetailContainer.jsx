import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getDoc, doc, collection, getFirestore,} from "firebase/firestore";






const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Products");
        const ref = doc(itemsCollection, id)

        getDoc(ref).then((res)=>{
            setItem({
                id: res.id,
                ...res.data()
            })
        })
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );

};

export default ItemDetailContainer;





