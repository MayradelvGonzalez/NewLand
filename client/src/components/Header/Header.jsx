import React from 'react';
import './header.css';

function Header() {
    return (

        <div className="box">   <h2>Soy el Header</h2>
            <ul className='lista'>
                <a href="/Info"><li>Info</li></a>
                <a href="/proyectos"> <li>Opciones</li></a>
                <a href="/contacto">  <li> Contacto</li></a>
            </ul>
        </div>
    )
}
export default Header;