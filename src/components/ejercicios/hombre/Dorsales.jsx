import React from 'react';
import '../../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Dorsales() {
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
                <h1>Dorsales</h1>
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
                <h2>Chin Ups</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedia</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-chinup-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Agarre la barra a la altura de los hombros con un agarre supinado (con las palmas hacia usted).</li>
                    <li>Con el cuerpo colgando y los brazos completamente extendidos, levántese hasta que la barbilla pase la barra.</li>
                    <li>Regrese lentamente a la posición inicial. Repetir.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Remo Unilateral con mancuerna</h2>
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
                <h2>Pull Over</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedia</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-pullover-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-pullover-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Puedes usar cualquier archivo adjunto. El cable debe colocarse hasta la parte superior de la máquina.</li>
                    <li>Toma tu archivo adjunto y camina unos pasos hacia atrás. Empuja tu trasero hacia donde estás inclinándote un poco hacia adelante.</li>
                    <li>Inicia el movimiento con los hombros y no con los codos. Imagínese intentar pasar el accesorio a través de sus muslos en la parte inferior.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Remo con barra horizontal</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedia</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bent-over-row-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Agarre una barra con un agarre en pronación o supinación a la altura de los hombros.</li>
                    <li>Inclínese hacia adelante a la altura de las caderas mientras mantiene la espalda plana.</li>
                    <li>Tire del peso hacia la parte superior del abdomen.</li>
                    <li>Baja el peso de forma controlada y repite.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Dorsalera al pecho</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-pulldown-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-pulldown-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Agarre la barra con las palmas hacia adelante, sus manos deben estar espaciadas a una distancia mayor que el ancho de los hombros.</li>
                    <li>Mientras tienes ambos brazos extendidos frente a ti sosteniendo la barra, lleva el torso hacia atrás unos 30 grados mientras sacas el pecho.</li>
                    <li>Tire de la barra hacia abajo hasta aproximadamente el nivel de la barbilla o un poco más abajo con un movimiento suave mientras aprieta los omóplatos.</li>
                    <li>Después de un segundo de apretar, levante lentamente la barra hasta la posición inicial cuando los brazos estén completamente extendidos.</li>
  
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
                <h2>Remo con mancuernas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedia</h3>
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
