import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../../assets/images/avatar.png';
import { Link as LinkRouter } from 'react-router-dom';

function Header() {
    return (

        <div className='box'>
            <div className='image'><img src={avatar} alt="logo" /></div>
            <ul class="nav justify-content-center lista">

                <li class="nav-item">
                    <a class="nav-link" href="/">Info</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/proyectos">Proyectos</a><i class="bi bi-info-circle"></i>
                </li>
                <li class="nav-item">
                           <LinkRouter to="/contacto">Contacto</LinkRouter>
                </li>
            </ul>
        </div>
    )
}
export default Header;