import React from 'react'
import CartWidget from './CartWidget'
import {VscThreeBars} from 'react-icons/vsc'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar__container">
            <div className="container-fluid">
                <Link className="navbar-brand nav__titulo mx-2" to="/">Zaurkent</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='boton__bars'><i>{<VscThreeBars/>}</i></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-5">
                            <Link className="nav__link" to="/categoria/Celulares" aria-current="page">Celulares</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav__link" to="/categoria/Accesorios">Accesorios</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav__link" to="/cart" ><CartWidget /></Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav__link" to="/" >Nosotros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar