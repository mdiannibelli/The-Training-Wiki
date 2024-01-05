import React from 'react';
import '../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Abdomen() {
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
                <h1>Abdomen</h1>
            </div>

            {/* exercises */}

            <div className='ejercicio'>
                <h2>Plancha</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-side_GnZ2NZh.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-front_ZnMlFBF.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Comienza en posición de rodillas con las manos plantadas en el suelo.</li>
                    <li>Levanta las rodillas del suelo. Manténgase en esta posición con la espalda plana.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Despliegues de barra</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Intermedio</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-roll-outs-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-roll-outs-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Sostenga la barra con ambas manos y arrodíllese en el suelo con los pies en alto.</li>
                    <li>Gire lentamente la barra hacia adelante, estirando el cuerpo hasta alcanzar una posición recta.</li>
                    <li>Después de una pausa en la posición estirada, comience a regresar a la posición inicial. Este debe ser un movimiento lento y controlado.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Giro ruso con mancuernas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-russian-twist-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-russian-twist-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Siéntate en el suelo y flexiona las rodillas y las caderas en un ángulo de 90 grados.</li>
                    <li>Tus pies deben estar suspendidos del suelo. (Si te resulta muy difícil, empieza con los tacones en el suelo).</li>
                    <li>Gire la parte superior de la columna para involucrar los oblicuos.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Levantamiento de piernas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-leg-raises-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-leg-raises-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Acuéstese boca arriba con las palmas de los brazos hacia abajo a cada lado.</li>
                    <li>Mantén las piernas juntas y lo más rectas posible.</li>
                    <li>Levante lentamente las piernas hasta un ángulo de 90°, haga una pausa en esta posición o tan alto como pueda alcanzar las piernas y luego bájelas lentamente.</li>
                    <li>La duración de estos movimientos debe ser lenta para que no utilices el impulso, lo que te permitirá aprovechar al máximo el ejercicio.</li>
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Elevaciones de rodillas colgantes</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hanging-knee-raises-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hanging-knee-raises-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Agarra la barra y cuélgate, con el cuerpo quieto y las piernas estiradas.</li>
                    <li>Lleve lentamente las rodillas hacia el pecho.</li>
                    <li>Una vez que hayas levantado las rodillas lo más alto posible, baja las piernas y repite. La duración de estos movimientos debe ser lenta para que no utilices el impulso, lo que te permitirá aprovechar al máximo el ejercicio.</li>
                    <li>La duración de estos movimientos debe ser lenta para que no utilices el impulso, lo que te permitirá aprovechar al máximo el ejercicio.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Crunches</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-crunch-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-crunch-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Acuéstese boca arriba con las rodillas dobladas y los pies apoyados en el suelo, aproximadamente a un pie de la zona lumbar.</li>
                    <li>Coloque las yemas de los dedos en las sienes con las palmas hacia afuera.</li>
                    <li>Lleve el abdomen hacia la base de la columna para activar los músculos y luego levante la cabeza y los hombros del suelo. Vuelve a la posición inicial y repite.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Plancha</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-side_GnZ2NZh.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-front_ZnMlFBF.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Comienza en posición de rodillas con las manos plantadas en el suelo.</li>
                    <li>Levanta las rodillas del suelo. Manténgase en esta posición con la espalda plana.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Crunch abdominal en polea</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Principiante</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-kneeling-crunch-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Cables-cable-kneeling-crunch-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Utilice un accesorio de doble mango y coloque el cable hasta arriba.</li>
                    <li>Camine unos pasos hacia adelante y luego arrodíllese.</li>
                    <li>Empuja las caderas hacia atrás y flexiona los abdominales, luego empuja las caderas hacia adelante hasta la posición inicial.</li>
  
                </ol>
            </div>

        </div>
    </>
  )
}