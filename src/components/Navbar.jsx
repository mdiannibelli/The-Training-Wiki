import React, { useState } from 'react';
import  '../styles/navbar.css';
import Navlogo from '../assets/imgs/logo/logo white white png.png';
import { NavLink } from 'react-router-dom';
import Burguerbutton from './Burguerbutton';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked); /* cuando esta a true lo pasa a false y viceversa */
  }
  return (
    <>
    <div className='header-container'>
    <div className='header'>
    <NavLink to='/'><img className='logo' alt="trainingLogo" src={Navlogo}/></NavLink>
    <ul className={`header-nav ${clicked ? 'active' : ''}`}>
        <li><NavLink className='nav-item' to='/index'>INDEX</NavLink></li>
        <li><NavLink className='nav-item' to='/tips'>TIPS</NavLink></li>
        <li><NavLink className='nav-item' to='/preguntas-comunes'>PREGUNTAS COMUNES</NavLink></li>
        <li><NavLink className='nav-item' to='/perder-grasa'>PERDER GRASA</NavLink></li>
        <li><NavLink className='nav-item' to='/ganancia-muscular'>GANANCIA MUSCULAR</NavLink></li>
        <li><NavLink className='nav-item' to='/calentamientos'>CALENTAMIENTOS</NavLink></li>
        <li><NavLink className='nav-item' to='/ejercicios'>EJERCICIOS</NavLink></li>
    </ul>
    </div>
  </div>
 { <div className='burguerbtn'>
    <Burguerbutton clicked={clicked} handleClick={handleClick}/>
  </div>}
</>
  )
}
