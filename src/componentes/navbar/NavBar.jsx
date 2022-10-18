import React from 'react'
import CartWidget from './CartWidget'
import {VscThreeBars} from 'react-icons/vsc'


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar__container">
            <div className="container-fluid">
                <a className="navbar-brand nav__titulo mx-2" href="index.html">Zaurkent</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='boton__bars'><i>{<VscThreeBars/>}</i></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-5">
                            <a className="nav__link" href="index.html" aria-current="page">Celulares</a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav__link" href="index.html">Accesorios</a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav__link" href="index.html" ><CartWidget /></a>
                        </li>
                        <li className="nav-item mx-5">
                            <a className="nav__link" href="index.html" >Nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar