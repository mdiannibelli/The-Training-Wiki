import React from 'react'
import  '../styles/index.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
  }, []);
  return (
    <div id='primary'>
        <article>
            <header className='header-article'>
                 <h1 className='h1-header'>¡Bienvenido a The Traininng Wiki!</h1>
            </header>
            <div className='info-container'>
                <p>Somos la wiki más actualizada en cuanto a contenido Fitness. Nuestro objetivo es que puedas encontrar toda la información que necesites para alcanzar tus objetivos de la manera más organizada y rápida posible.</p>
                 <h1 className='h1-article'>Índice</h1>
                <ul className='list-guide'>
                  <li><NavLink className='links' to='/primeros-pasos'>Primeros pasos</NavLink></li>
                  <p>Antes de arrancar a vivir el Fitness.</p>

                  <li><NavLink className='links' to='/perder-grasa'>Pérdida de grasa</NavLink></li>
                  <p>Todo lo que necesitas saber para bajar tu porcentaje de grasa.</p>

                  <li><NavLink className='links' to='/ganancia-muscular'>Ganancia muscular</NavLink></li>
                  <p>Todo lo que necesitas saber para aumentar tu masa muscular.</p>

                  <li><NavLink className='links' to='/tips'>Tips</NavLink></li>
                  <p>Consejos que podrían servirte para mejorar tu progreso y rendimiento.</p>

                  <li><NavLink className='links' to='/calentamientos'>Calentamientos</NavLink></li>
                  <p>Fundamental para antes de arrancar a ejercitarte.</p>

                  <li><NavLink className='links' to='/ejercicios'>Ejercicios</NavLink></li>
                  <p>Podrás aprender acerca de nuevos ejercicios con sus respectivas técnicas y explicaciones.</p>

                  <li><NavLink className='links' to='/preguntas-comunes'>Preguntas Comunes</NavLink></li>
                  <p>Apartado donde respondemos preguntas más frecuentes.</p>

                </ul>
            </div>
        </article>

    </div>
  )
}
