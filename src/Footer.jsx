import React from 'react'
import './header.css'

export default function Footer() {
  return (
    <div className='footer-react nav-react'>
        <div className='logo-react'>
            <span>LOGO</span>
        </div>
        <div>
            <h3>Contactanos</h3>
            <ul>
                <li><a href="#">Telefono: 959 998 999</a></li>
                <li><a href="#">Dirección: calle ejemplo del pilar</a></li>
                <li><a href="#">Correo: ejemplo@gmail.com.pe</a></li>
            </ul>
        </div>
        <div>
            <h3>Redes Sociales</h3>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </div>
    </div>
  )
}
