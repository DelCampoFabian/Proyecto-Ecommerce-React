import React from 'react'
import CartWidget from './CartWidget'
import {VscThreeBars} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'


const NavBar = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const catCollection= collection(db, "categorias")
        getDocs(catCollection)
        .then((resp) => {
        const secciones = resp.docs.map((prod)=>{
                return  ({
                    id: prod.id,
                    ...prod.data()
                    })
            });
            setCategory(secciones)
        })
    }, [])
    
    return (
        <nav className="navbar navbar-expand-lg navbar__container">
            <div className="container-fluid">
                <Link className="navbar-brand nav__titulo mx-2" to="/">Zaurkent</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='boton__bars'><i>{<VscThreeBars/>}</i></span>
                </button>
                <div className="collapse navbar-collapse d-flex-md justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            category.map((cat) => {
                                return (
                                    <li key={cat.id} className="nav-item mx-5">
                                        <Link className="nav__link" to={`/categoria/${cat.path}`} aria-current="page">{cat.titulo}</Link>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item mx-5">
                            <Link className="nav__link" to="/cart" ><CartWidget /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar