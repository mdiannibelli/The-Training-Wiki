import React from 'react';
import '../../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Gemelos() {
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
        
        </div>

        <div className='contenedor-ejercicios'>
            {/* tiitle */}
            <div className='muscle-title'>
                <h1>Gemelos</h1>
            </div>

            {/* exercises */}

            <div className='ejercicio'>
                <h2>Máquina de gemelos</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-calf-raise-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Póngase cómodo en la máquina y luego coloque la parte inferior de los muslos debajo de la palanca acolchada. Coloque los dedos de los pies y las puntas de los pies sobre los reposapiés.</li>
                    <li>Evite que el peso se deslice hacia adelante agarrando las manijas y suelte la barra de seguridad. Baja el peso hasta que tus pantorrillas estén extendidas.</li>
                    <li>Empuje los talones hacia arriba para levantar la palanca acolchada y mantener la posición contraída, luego baje lentamente hasta la posición inicial. Repetir.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Elevaciones de pantorillas con barra</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedia</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-calf-raises-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-calf-raises-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Coloca la barra en tu espalda.</li>
                    <li>Comience con los pies apoyados en el suelo.</li>
                    <li>Extienda los talones hacia arriba mientras mantiene las rodillas estacionarias y haga una pausa en la posición contraída.</li>
                    <li>Regrese lentamente a la posición inicial. Repetir.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Gemelos en Smith</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Smithmachine-calf-raise-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Smithmachine-calf-raise-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Coloca la barra en tu espalda.</li>
                    <li>Comience con los pies apoyados en el suelo.</li>
                    <li>Extienda los talones hacia arriba mientras mantiene las rodillas estacionarias y haga una pausa en la posición contraída.</li>
                    <li>Regrese lentamente a la posición inicial. Repetir.</li>
  
                </ol>
            </div>

        </div>
    </>
  )
}