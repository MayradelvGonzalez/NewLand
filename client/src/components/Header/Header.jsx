import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div>
            <ul class="nav justify-content-center box">
                {/* <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Portfolio</a>
  </li> */}
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