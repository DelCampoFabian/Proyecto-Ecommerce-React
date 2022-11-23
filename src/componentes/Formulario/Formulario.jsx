import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import { CartContext } from '../../CartContext/CartContext'

const Formulario = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [valEmail, setValEmail] = useState("")
    const [dni, setDni] = useState("")
    const [address, setAddress] = useState("")
    const [tel, setTel] = useState("")
    const [orderId, setOrderId] = useState("")

    const { cart, totalPrice, clear } = useContext(CartContext);

    const total = totalPrice()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === valEmail){
            const ticket = {
                cliente: {
                    name,
                    dni,
                    address,
                    tel,
                    email
                },
                cart,
                total, 
                date: serverTimestamp()
            }
        const orderCollection = collection(db, "orders") 
            
        addDoc(orderCollection, ticket)
        .then((res)=> {
            clear()
            setOrderId(res.id);
        })
        .catch((error)=> console.log(error))
        }else{
            alert(`Fallo la validacion del Email: \n ${email} --  ${valEmail}`)
        }
    }
    const handleName = (e) => setName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleValEmail = (e) =>setValEmail (e.target.value)
    const handleDni = (e) => setDni(e.target.value)
    const handleAddress = (e) => setAddress(e.target.value)
    const handleTel = (e) => setTel(e.target.value)

    if (orderId){
        return(
            <div className='fin__compra-container'>
                <h1>Compra finalizada con exito</h1>
                <span>Codigo de seguimiento: {orderId}</span>
            </div>
        )
    }
  
    return (
    <div className='fin__compra-container'>  
        <h1>Finalizar compra</h1>
        <form onSubmit={handleSubmit} className="form__compra" >
            <input onChange={handleName} type="text" placeholder='NOMBRE Y APELLIDO'/>
            <input onChange={handleDni} type="text" placeholder='DNI' />
            <input onChange={handleTel} type="text" placeholder='TELEFONO'/>
            <input onChange={handleEmail} type="email" placeholder='CORREO'/>
            <input onChange={handleValEmail} type="email" placeholder='VALIDAR CORREO'/>
            <input onChange={handleAddress} type="text" placeholder='DIRECCION'/>
            <input className='generic-button' type="submit" value="Comprar" />
            <Link to="/cart" className='prod__container-back'> Cancelar </Link>
        </form>
    </div>
  )
}

export default Formulario