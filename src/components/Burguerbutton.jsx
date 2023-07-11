import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/burguer.css';
export default function BurguerButton() {
    useEffect(() =>{ /* cada vez que nuestro componente burguerbutton se renderice este useEffect se ejecutara */
        const menu = document.querySelector('.hamburger');
        if(menu) {
            menu.addEventListener('click', toggleMenu, false);
        }
    })
    function toggleMenu (event) {
        this.classList.toggle('is-active');
        document.querySelector( ".menuppal" ).classList.toggle("is_active");
        event.preventDefault();
      }
  return (
    <div id='container'>
        <div className='hamburger'>
	<div className='_layer -top'></div>
	<div className='_layer -mid'></div>
	<div className='_layer -bottom'></div>
</div>
<nav className='menuppal'>
    <ul>
      <li><NavLink className='nav-item' to='/index'>INDEX</NavLink></li>
        <li><NavLink className='nav-item' to='/tips'>TIPS</NavLink></li>
        <li><NavLink className='nav-item' to='/preguntas-comunes'>PREGUNTAS COMUNES</NavLink></li>
        <li><NavLink className='nav-item' to='/perder-grasa'>PERDER GRASA</NavLink></li>
        <li><NavLink className='nav-item' to='/ganancia-muscular'>GANANCIA MUSCULAR</NavLink></li>
        <li><NavLink className='nav-item' to='/calentamientos'>CALENTAMIENTOS</NavLink></li>
        <li><NavLink className='nav-item' to='/ejercicios'>EJERCICIOS</NavLink></li>
        <li><NavLink className='nav-item' to='/rutinas'>RUTINAS</NavLink></li>
    </ul>
  </nav>
    </div>
  )
}
