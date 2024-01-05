import React from 'react';
import '../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Glúteos() {
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
                <h1>Glúteos</h1>
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
                <h2>Hipthrust con barra</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzada</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-hip-thrust-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-hip-thrust-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Siéntate en el suelo con un banco detrás de ti. Coloque la barra sobre sus piernas, justo por encima de sus caderas.</li>
                    <li>Inclínese hacia atrás contra el banco de modo que sus hombros descansen sobre él, estire los brazos hacia ambos lados usando el banco como apoyo.</li>
                    <li>Levante el peso impulsando los pies y extendiendo las caderas hacia arriba. Soporta el peso con los hombros y los pies.</li>
                    <li>Extiéndete lentamente lo más que puedas y luego regresa lentamente a la posición inicial.</li>
  
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
                <h2>Peso Muerto Rumano con mancuernas</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzado</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-romanian-deadlift-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-romanian-deadlift-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Párese con una postura a la altura de los hombros. Empuje su trasero hacia atrás dejando sus rodillas MAYORMENTE extendidas.</li>
                    <li>Deberías sentir un estiramiento en los isquiotibiales. Cuando sientas el estiramiento, empuja las caderas hacia adelante para completar la repetición.</li>
                    <li>No empujes las caderas completamente hacia adelante. Esto hiperextenderá su columna. Simplemente vaya a una posición de pie normal.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Buen día</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzado</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-low-bar-good-morning-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Barbell-barbell-low-bar-good-morning-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Coloque la barra entre sus trapecios y deltoides posteriores. Tire de los omóplatos hacia atrás para darle a la barra un estante donde sentarse.</li>
                    <li>Empuja las caderas hacia atrás hasta que sientas un estiramiento en los isquiotibiales. Esto significa que se está acercando al final de su rango de movimiento sin curvar la columna.</li>
                    <li>Cuando sientas el estiramiento empuja tus caderas hacia adelante hasta que estés en posición de pie.</li>
  
                </ol>
            </div>

            <div className='ejercicio'>
                <h2>Búlgaras con mancuerna</h2>
                <hr className='bar-separate'/>
                <h3>Dificultad: Avanzado</h3>
                <div className='image-exercise'>
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-bulgarian-split-squat-front.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                    <ReactPlayer
                        url={'https://media.musclewiki.com/media/uploads/videos/branded/male-Dumbbells-dumbbell-bulgarian-split-squat-side.mp4#t=0.1'}
                        width='100%'
                        height='100%'
                        volume='0.1'
                        muted
                        playing= 'true'
                        controls
                        />
                </div>
                <ol className='instrucciones-ejercicio'>
                    <li>Busque una caja o banco que esté aproximadamente a la altura de las rodillas o unos centímetros más abajo. (Cuanto más baja sea la casilla, menor será el requisito de movilidad).</li>
                    <li>Puedes colocar los dedos de los pies o la parte superior del pie sobre la caja. Apunte el pie delantero hacia adelante o ligeramente hacia afuera y rompa las rodillas y las caderas simultáneamente.</li>
                    <li>Trate de que su pierna delantera alcance una profundidad paralela (tendón de la corva paralelo al suelo) o más bajo.</li>
                    <li>Cuanto más adelantado esté el pie delantero, mayor será el rango de movimiento en las caderas. Cuanto más atrás esté el pie delantero, mayor será el ROM en las rodillas.</li>
  
                </ol>
            </div>

    </div>
    </>
  )
}