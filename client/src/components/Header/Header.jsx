import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (

        <div className='box'>
            <div className='image'><img src="/client/src/img/avatar.png" alt="logo" /></div>
            <ul class="nav justify-content-center lista">

                <li class="nav-item">
                    <a class="nav-link" href="/">Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/proyectos">Proyectos</a><i class="bi bi-info-circle"></i>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/contacto'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
export default Header;