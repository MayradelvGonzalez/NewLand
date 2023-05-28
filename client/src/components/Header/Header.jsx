import React from 'react';
import './header.css';

function Header() {
    return (

        // <div className="box">   <h2>Soy el Header</h2>
        //     <ul className='lista'>
        //         <a href="/Info"><li>Info</li></a>
        //         <a href="/proyectos"> <li>Opciones</li></a>
        //         <a href="/contacto">  <li> Contacto</li><i class="bi bi-person-rolodex"></i></a>
        //     </ul>
        // </div>
<div>
<ul class="nav justify-content-center box">
  {/* <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Portfolio</a>
  </li> */}
  <li class="nav-item">
    <a class="nav-link" href="/">Info</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/proyectos">Proyectos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='/contacto'>Contact</a><i class="bi bi-person-rolodex"></i>
  </li>
</ul>
</div>
    )
}
export default Header;