import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = (item, quantity )=> {  
        const newCart = cart.filter (prod => prod.id !== item.id);
        newCart.push({...item, cantidad: quantity});
        setCart(newCart)
    }
    const clear = () => setCart([])
    
    const removeProduct = (id) => setCart(cart.filter(item => item.id !== id)) 

    const isInCart = (id) => cart.find(item => (item.id === id) ? true : false)

    const units = () => {
      let count = 0
      const copy = [...cart]
      copy.forEach((prod)=> count += prod.cantidad)
      return count 
    }
    
    const totalPrice = () => {
      let total = 0
      const copy = [...cart]
      copy.forEach((prod)=> {
        total += prod.precio * prod.cantidad
      })
      return total
    }
    
  return (
    <CartContext.Provider value={{addToCart, clear, removeProduct, isInCart, cart , units, totalPrice}}>
        {children}
    </CartContext.Provider>
  )
    
  
}

export default CartProvider