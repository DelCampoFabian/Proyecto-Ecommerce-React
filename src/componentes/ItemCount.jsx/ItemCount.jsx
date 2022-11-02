import React, { useState } from 'react'
import { MdArrowLeft } from "react-icons/md"
import { MdArrowRight } from "react-icons/md"



const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        (count < stock) ? setCount(count + 1) : setCount(count)
    }
    const restar = () => {
        (count > initial) ? setCount(count - 1) : setCount(count)
    }


    return (
        <div className='count__container'>
            <div className='count__container-cant'>
                <button className='count' onClick={restar}><i><MdArrowLeft /></i></button>
                <span className='count__total'>{count}</span>
                <button className="count" onClick={sumar}><i><MdArrowRight /></i></button>
            </div>
            <div>
                <button className='generic-button' onClick={() => onAdd(count)}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount