import React from 'react';
import '../../styles/musculos.css'

import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function EspaldaMedia() {
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
            <NavLink className='links' to='/ejercicios/pecho'><button className='section-button'>Pecho</button></NavLink>
                <NavLink className='links' to='/ejercicios/hombro'><button className='section-button'>Hombro</button></NavLink>
                <NavLink className='links' to='/ejercicios/bicep'><button className='section-button'>Bicep</button></NavLink>
                <NavLink className='links' to='/ejercicios/tricep'><button className='section-button'>Tricep</button></NavLink>
                <NavLink className='links' to='/ejercicios/antebrazo'><button className='section-button'>Antebrazo</button></NavLink>
                <NavLink className='links' to='/ejercicios/trapecios'><button className='section-button'>Trapecios</button></NavLink>
                <NavLink className='links' to='/ejercicios/espalda-media'><button className='section-button'>Espalda media</button></NavLink>
                <NavLink className='links' to='/ejercicios/dorsales'><button className='section-button'>Dorsales</button></NavLink>
                <NavLink className='links' to='/ejercicios/espalda-baja'><button className='section-button'>Espalda Baja</button></NavLink>
                <NavLink className='links' to='/ejercicios/abdomen'><button className='section-button'>Abdomen</button></NavLink>
                <NavLink className='links' to='/ejercicios/cuádriceps'><button className='section-button'>Cuádriceps</button></NavLink>
                <NavLink className='links' to='/ejercicios/isquiotibiales'><button className='section-button'>Isquiotibiales</button></NavLink>
                <NavLink className='links' to='/ejercicios/gemelos'><button className='section-button'>Gemelos</button></NavLink>
                <NavLink className='links' to='/ejercicios/glúteos'><button className='section-button'>Glúteos</button></NavLink>
            </div>
        </div>
        
        </div>

        <div className='contenedor-ejercicios'>
            {/* tiitle */}
            <div className='muscle-title'>
                <h1>Espalda media</h1>
            </div>

            {/* exercises */}

            <div className='ejercicio'>
                <h2>Dominadas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzado</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pullup-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Sujete la barra con un agarre por encima de la cabeza, con los brazos y los hombros completamente extendidos.</li>
                    <li>Levanta tu cuerpo hasta que tu barbilla esté por encima de la barra.</li>
                    <li>Baje su cuerpo de regreso a la posición inicial.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Peso Muerto</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzado</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-deadlift-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-deadlift-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Párese con la parte media del pie debajo de la barra y agarre la barra con las manos, aproximadamente a la altura de los hombros.</li>
                    <li>Doble las rodillas y luego levante la barra enderezando la espalda. Es importante mantener la espalda recta.</li>
                    <li>Párese en toda su altura y sostenga.</li>
                    <li>Baja la barra hasta el suelo doblando las rodillas y manteniendo la espalda recta.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Remo Unilateral Con Mancuerna</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-row-unilateral-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-row-unilateral-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Apoye su brazo libre contra algo estable (banco, caja). Alterne su postura de modo que la pierna del lado del brazo que trabaja quede hacia atrás.</li>
                    <li>Intenta que tu torso quede paralelo al suelo. Eso ampliará su rango de movimiento.</li>
                    <li>Deje que su brazo cuelgue libremente y luego tire del codo hacia atrás. Imagina que tienes una pelota de tenis en tu axila y apriétala en cada repetición.</li>
  
                </ol>
            </div>
            
            <div className='ejercicio'>
                <h2>Remo Invertido</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-reverse-row-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Colóquese debajo de una barra horizontal fija y agarre la barra con un agarre amplio por encima de la cabeza.</li>
                    <li>Tire de su cuerpo hacia la barra.</li>
                    <li>Regresa a la posición inicial, con los brazos completamente extendidos. Repetir.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Remo en polea baja</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-cable-row-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-seated-cable-row-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Siéntese con la espalda recta sobre la máquina y agarre las manijas.</li>
                    <li>Tire de las manijas hacia atrás con los brazos. Tus piernas y torso deben estar en un ángulo de 90°. Saca tu pecho.</li>
                    <li>Tire de las manijas hacia su cuerpo hasta que sus manos queden al lado de su abdomen.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Remo unilateral con barra</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedio</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-landmine-row-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-landmine-row-side.mp4#t=0.11'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Coloque una barra en una mina terrestre o en un rincón de una habitación y párese frente a ella con los pies separados a la altura de los hombros.</li>
                    <li>Sujete el extremo de la barra con un agarre neutral, manteniendo los brazos rectos y los hombros relajados.</li>
                    <li>Doble las caderas y las rodillas para bajar el torso hasta que quede casi paralelo al suelo.</li>
                    <li>Tire de la barra hacia su pecho, apretando los omóplatos mientras rema el peso hacia arriba.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Remo con mancuernas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedio</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-row-bilateral-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-row-bilateral-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Agarre ambas mancuernas y gire hacia adelante a la altura de las caderas. Asegúrate de mantener la espalda plana.</li>
                    <li>Cuanto más cerca esté el torso del paralelo al suelo, mayor será el rango de movimiento en el hombro. Cuanto mejores sean los resultados que obtendrás del ejercicio.</li>
                    <li>Deje que sus brazos cuelguen libremente y luego tire de la articulación del codo hacia el techo.</li>
                    
  
                </ol>
            </div>
        </div>
    </>
  )
}
