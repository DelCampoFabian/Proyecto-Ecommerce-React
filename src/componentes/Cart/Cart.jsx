import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart , removeProduct, clear, totalPrice } = useContext(CartContext)
    
    if(cart.length === 0){
        return (
            <div className='text-center cart__sinProd'>
            <h1>No tiene ningun producto en su carrito. Por favor, ingrese un producto </h1>
            <Link className="generic-button mt-3" to="/">Inicio</Link>
            </div>
        )
    }
   
    return (
        <main className='main__cart'>
            <div className='cart__container'>
                {
                    cart.map((prod) => {
                        return (
                            <div key={prod.id} className="prod__container">
                                <img className="prod__container-img" src={prod.image} alt={prod.nombre}  />
                                <h5 className="prod__container-nombre">{prod.nombre}</h5>
                                <p className="prod__container-precio">Precio: ${prod.precio} </p>
                                <p className="prod__container-stock">Cantidad: {prod.cantidad}</p>
                                <button onClick={() => removeProduct(prod.id)} className='prod__container-delete'>Eliminar producto</button>
                            </div>      
                        )
                    })
                }
                <button className='cart__clear' onClick={clear}>Eliminar carrito</button>
            </div>
            <div className='resumen__compra'>   
                <h4 className="resumen__titulo">Terminar compra</h4>
                <p className="resumen__precio">Precio total: ${totalPrice()}</p>
                <p className="resumen__envio">Envio Gratis</p>
                <button className='generic-button'><Link className="fin__compra" to="/checkout"> Finalizar compra</Link></button>
            </div>
        </main>
    )
}

export default Cart