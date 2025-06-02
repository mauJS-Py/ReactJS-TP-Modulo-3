import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const isActiveCallback = ({isActive}) => {
        if(isActive){
            return 'link link-seleccionado'
        }
        else {
            return 'link'
        }
    }

    return (
        <header>
            <nav className='caja_navbar'>
                <h2 className='logo'><span className='am'>am</span>-Mármol</h2>
                <div className='navbar_links'>
                    <NavLink to={'/'} className={isActiveCallback}>Home</NavLink>
                    <span className='navbar_links_separador'> | </span>
                    <NavLink to={'/login'} className={isActiveCallback}>Login</NavLink>
                    <span className='navbar_links_separador'> | </span>
                    <NavLink to={'/product/new'} className={isActiveCallback}>Añadir</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar