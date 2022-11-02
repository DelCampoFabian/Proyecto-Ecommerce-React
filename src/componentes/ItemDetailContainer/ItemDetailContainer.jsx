import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../Productos/Productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ({}) 
    const {detailId} = useParams()
    
    useEffect(()=> {
        const product = () => {
            return new Promise ((resolve)=> {
                setTimeout(() => {
                   resolve(productos) 
                }, 2000);
            })
          } 
          product().then((data)=>{
              setDetail(data.find((item) => item.id === parseInt(detailId)))
          })
    },[detailId])

    return (
        <ItemDetail detail = {detail} />
    )
}

export default ItemDetailContainer