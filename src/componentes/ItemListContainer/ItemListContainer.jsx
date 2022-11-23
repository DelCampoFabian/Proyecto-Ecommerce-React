import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebaseConfig';
import ItemList from './ItemList';
import RingLoader from "react-spinners/RingLoader"

const ItemListContainer = () => {
    const [items, setItem] = useState([]);
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const collectionProd = collection(db, "productos");
        const ref = categoryId ? query(collectionProd, where("categoria" , "==" , categoryId)) : collectionProd
            getDocs(ref)
            .then((resp) => {
            const categoryFirestore = resp.docs.map((prod)=>{
                    return  ({
                        id: prod.id,
                        ...prod.data()
                        })
                });
                setItem(categoryFirestore)
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }
        , [categoryId])
    
    if(loading){
        return(
            <div className='loading__container'>
                <RingLoader size={150} color={"#0F81B1"}/>
            </div>
        )
    }

    return (
        <>
            <ItemList items={items}/>
        </>

    )
}

export default ItemListContainer