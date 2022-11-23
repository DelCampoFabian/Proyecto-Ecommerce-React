import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <div className='item__card col-10 col-sm-7 col-md-5 col-lg-3 col-xl-2' id={item.id}>
            <img className='img-fluid item__img' src={item.image} alt={item.nombre} />
            <h5 className='item__name'>{item.nombre}</h5>
            <span className='item__price'>Precio: $ {item.precio}.- Stock: {item.stock}</span>
            <Link className='item__detalle' to={`/detail/${item.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item