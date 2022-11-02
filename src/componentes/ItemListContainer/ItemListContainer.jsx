import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../Productos/Productos';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [items, setItem] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(productos)
                }, 500);
            })
        };
        (categoryId) ? getProduct().then(resp => setItem(resp.filter(item => item.categoria === categoryId ))) : getProduct().then(respuesta => setItem(respuesta))



    }, [categoryId])

    

    return (
        <>
            <ItemList items={items}/>
        </>

    )
}

export default ItemListContainer