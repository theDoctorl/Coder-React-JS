import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../Productos/Products";






const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    useEffect(() => {
        let idVar = "";
        if (id === "1") {
            idVar = "1"
        } else if (id === "2") {
            idVar = "2"
        } else if (id === "3") {
            idVar = "3"
        } else if (id === "4") {
            idVar = "4"
        } else if (id === "5") {
            idVar = "5"
        } else if (id === "6") {
            idVar = "6"
        }

        const getProduct = () =>
            new Promise((resolve, reject) => {
                const product = products.find(prod => prod.id === idVar);
                setTimeout(() => {
                    resolve(product)
                }, 600);
            });
        getProduct()
            .then((info) => {
                setItem(info);
            })
            .catch((Error) => {
                console.log(Error);
            });
    }, [id]);

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );

};

export default ItemDetailContainer;





