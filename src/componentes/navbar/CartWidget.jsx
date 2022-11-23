import React from 'react';
import { useContext } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md'
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
  const {units} = useContext(CartContext)
  
  return (
    <span className='icon__cart'><MdOutlineShoppingCart/><span className='icon__units'>{units()}</span></span>
  )
}

export default CartWidget