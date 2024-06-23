import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='footer-react'>
        <div className='logo-react'>
            <span  >
                LOGO
            </span>
        </div>
        <nav >
            <ul className='nav-react'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contactos</a></li>
            </ul>
        </nav>
    </div>
  )
}
