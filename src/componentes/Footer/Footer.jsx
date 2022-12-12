import React from 'react'
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className='footer row text-center align-items-center'>
            <div className='footer__title-container col-12 col-md-6 col-lg-3'>
                <h3>Zaurkent</h3>
            </div>
            <div className='footer__soporte-container col-12 col-md-6 col-lg-3'>
                <h5>Soporte</h5>
                <ul>
                    <li>Terminos de servicio</li>
                    <li>Condiciones de uso</li>
                    <li>Politica de privacidad</li>
                    <li>Centro de ayuda</li>
                    <li>Status</li>
                </ul>
            </div>
            <div className='footer__redes-container col-12 align-self-start col-md-6 col-lg-3'>
                <h5>Redes</h5>
                <ul>
                    <li><i><BsInstagram /></i> Instagram</li>
                    <li><i><BsFacebook /></i> Facebook</li>
                    <li><i><BsTwitter /></i> Twitter</li>
                </ul>
            </div>
            <div className='footer__compania-container col-12 col-md-6 col-lg-3'>
                <h5>Compañia</h5>
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Preguntas frecuentes</li>
                    <li>Contacto</li>
                    <li>Planes</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer