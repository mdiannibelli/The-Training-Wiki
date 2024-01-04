import React from 'react';
import '../../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Cuádriceps() {
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
                <h1>Cuádriceps</h1>
            </div>

            {/* exercises */}

            <div className='ejercicio'>
                <h2>Sentadilla con barra</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzada</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-squat-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-squat-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Párese con los pies separados a la altura de los hombros. Mantenga el arco natural de la espalda, apretando los omóplatos y levantando el pecho.</li>
                    <li>Agarre la barra sobre sus hombros y apóyela en la parte superior de su espalda. Destrabe la barra estirando las piernas y dé un paso atrás.</li>
                    <li>Doble las rodillas mientras baja el peso sin alterar la forma de la espalda hasta que las caderas queden por debajo de las rodillas.</li>
                    <li>Levanta la barra de nuevo a la posición inicial, levántala con las piernas y exhala en la parte superior.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Prensa 45°</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzada</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-press-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-leg-press-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Coloque las piernas sobre la plataforma con los pies al ancho de los hombros.</li>
                    <li>Libera el peso y extiende las piernas por completo, sin bloquear las rodillas.</li>
                    <li>Baje el peso hasta que sus piernas formen un ángulo de 90° (pero NO permita que su trasero y su espalda baja se levanten de la almohadilla. Esto colocará su espalda baja en una posición redondeada, lo cual es muy peligroso).</li>
                    <li>Levante el peso de nuevo a la posición inicial.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Estocadas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-forward-lunges-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Bodyweight-forward-lunges-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Da un paso adelante con una pierna.</li>
                    <li>Baje el cuerpo hasta que la rodilla trasera casi toque el suelo.</li>
                    <li>Asegúrese de permanecer erguido y de que la rodilla delantera permanezca por encima del pie delantero.</li>
                    <li>Empuja el suelo con el pie delantero hasta volver a la posición inicial. Cambia de pierna.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Sentadilla Globet</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-goblet-squat-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Sostenga el peso metido en la parte superior del pecho, manteniendo los codos hacia adentro. Sus pies deben ser un poco más anchos que el ancho de los hombros.</li>
                    <li>Húndete en cuclillas, manteniendo los codos dentro de la trayectoria de las rodillas.</li>
                    <li>Empuja con los talones mientras mantienes el pecho erguido y regresa a la posición inicial.</li>
  
                </ol>
            </div>
        </div>
    </>
  )
}