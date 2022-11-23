import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import RingLoader from "react-spinners/RingLoader"
import { db } from '../../services/firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState ({}) 
    const {detailId} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(()=> {
        const collectionProd = collection(db, "productos");
        const ref = doc(collectionProd, detailId)
        getDoc(ref)
        .then(res => setDetail({id: res.id,...res.data()}))
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
      
    },[detailId])

    if (loading) {
        return (
            <div className='loading__container'>
                <RingLoader size={150} color={"#0F81B1"}/>
            </div>   
        )
    }

    return (       
         <ItemDetail detail = {detail} />
    )
}

export default ItemDetailContainer