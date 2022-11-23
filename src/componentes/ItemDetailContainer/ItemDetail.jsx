import React from 'react'
import ItemCount from '../ItemCount.jsx/ItemCount';
import imagenUno from '../../assets/img/cabal.jpg';
import imagenDos from '../../assets/img/visa.jpg';
import imagenTres from '../../assets/img/macro.jpg';
import imagenCuatro from '../../assets/img/santander.jpg';
import imagenCinco from '../../assets/img/mastercard.jpg';
import {FaTruck, FaStoreAlt} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';


const ItemDetail = ({detail}) => {
    const [toCart , setToCart] = useState(false)
    const {addToCart} = useContext(CartContext)
    const onAdd = (quantity) => {
        setToCart(true)
        addToCart(detail, quantity)
    };

  return (
    <div className='detail__container'>
        <div className='detail__img'>
            <img src={detail.image} alt={detail.nombre} />
        </div>
        <div className='detail__text'>
            <h4 className='detail__text-marca'>{detail.marca}</h4>
            <h4 className='detail__text-nombre'>{detail.nombre}</h4>
            <h4 className='detail__text-precio'>Precio: ${detail.precio}.-</h4>
            <h4 className='detail__text-pagos'>Medios de pago</h4>
            <div className='pagos__container'>
                <img src={imagenUno} alt="Cabal" />
                <img src={imagenDos} alt="Visa" />
                <img src={imagenTres} alt="Macro" />
                <img src={imagenCuatro} alt="santander" />
                <img src={imagenCinco} alt="master card" />
            </div>
            <h4 className='detail__text-unidades'>Unidades:</h4>
            <div className='span__container'>
            {
                toCart ?  <Link to="/cart" className='generic-link'>Ir al carrito</Link> : <><span><ItemCount onAdd={onAdd} stock={detail.stock} initial={1} /></span>
                <span className='span__stock'>Stock: {detail.stock} </span></>
            }
            </div>
            <p className='detail__text-envio'><i><FaTruck/> </i> Envio GRATIS a todo el pais!</p>
            <p className='detail__text-envio'><i><FaStoreAlt/></i> Retiro Gratis en sucursal</p>
        </div>
    </div>
  )
}

export default ItemDetail