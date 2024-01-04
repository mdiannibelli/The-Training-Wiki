import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/ejercicios.css'
import Pecho from './ejercicios/hombre/Pecho';
import { NavLink } from 'react-router-dom';

export default function Ejercicios() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
      }, []);

      /* selector */
      const [selectedSex, setSelectedSex] = useState("male");

      function handleSex(option) {
        setSelectedSex(option)
      }
  return (
    <>
    <div className='container-menu'>
        {/* <div className='btn-group-sex'>
            <div className='input-container'>
                <input className="js-sex-option" type="radio" name="sexchooser" id="sexchoosermale" value="male" onClick={() =>handleSex("male")} defaultChecked/> 
                <label htmlFor='sexchoosermale'>Hombre</label>
            </div>

            <div className='input-container'>
            <input className="js-sex-option" type="radio" name="sexchooser" id="sexchooserfemale" value="female" onClick={() =>handleSex("female")} /> 
                    <label htmlFor='sexchooserfemale'>Mujer</label>
            </div>
        </div> */}
        <div className='main-nav'>
            <div className='section-menu'>
            <NavLink className='links' to='/ejercicios/hombre/pecho'><button className='section-button'>Pecho</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/hombro'><button className='section-button'>Hombro</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/bicep'><button className='section-button'>Bicep</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/tricep'><button className='section-button'>Tricep</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/antebrazo'><button className='section-button'>Antebrazo</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/trapecios'><button className='section-button'>Trapecios</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/espalda-media'><button className='section-button'>Espalda media</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/dorsales'><button className='section-button'>Dorsales</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/espalda-baja'><button className='section-button'>Espalda Baja</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/abdomen'><button className='section-button'>Abdomen</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/cuádriceps'><button className='section-button'>Cuádriceps</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/isquiotibiales'><button className='section-button'>Isquiotibiales</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/gemelos'><button className='section-button'>Gemelos</button></NavLink>
            <NavLink className='links' to='/ejercicios/hombre/glúteos'><button className='section-button'>Glúteos</button></NavLink>
            </div>
        </div>

        {/* CONTENEDORES DE CADA MÚSCULO CON FUNCIÓN DE SELECTOR */}¨
    </div>
        {/* <Pecho/> */}
    </>
  )
}
