import React from 'react'
import '../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Bicep() {
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
       {/*  <div className='btn-group-sex'>
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

        {/* CONTENEDORES DE CADA MÚSCULO CON FUNCIÓN DE SELECTOR */}¨
    </div>
    
    <div className='contenedor-ejercicios'>
        <div className='muscle-title'>
        <h1>Bicep</h1>
        </div>
        <div className='ejercicio'>
        <h2>Curl de biceps con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Tras un agarre al ancho de hombros, doblar la barra hacia adelante mientras contrae los bíceps mientras exhala.</li>
            <li>Continúe el movimiento hasta que sus bíceps estén completamente contraídos y la barra esté al nivel de los hombros.</li>
            <li>Mantén la posición contraída por un segundo y aprieta los bíceps con fuerza.</li>
            <li>Lentamente baje el peso a la posición inicial.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Dominadas con agarre supino</h2>
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
            <li>Agarre la barra separada a la anchura de los hombros con un agarre supino (las palmas hacia usted).</li>
            <li>Con el cuerpo colgando y los brazos completamente extendidos, levántese hasta que la barbilla pase la barra.</li>
            <li>Vuelva lentamente a la posición inicial. Repetir.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese derecho con una mancuerna en cada mano con el brazo extendido.</li>
            <li>Levanta ambas mancuernas y gire el antebrazo hasta que esté vertical y la palma de la mano mire hacia el hombro.</li>
            <li>Baje a la posición inicial y repita el movimiento.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl martillo con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-hammer-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-hammer-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Sujeta las mancuernas con un agarre neutro (pulgares hacia el techo).</li>
            <li>Lentamente levante la mancuerna hasta la altura del pecho</li>
            <li>Vuelve a la posición inicial y repite.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl supino con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-reverse-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-reverse-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Agarra las mancuernas con un agarre prono.</li>
            <li>Flexiona los codos hasta que tus bíceps toquen tus antebrazos. Trate de no dejar que sus codos se muevan hacia afuera.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl supino con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: </h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-reverse-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-reverse-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
        <li>Agarra la barra con un agarre prono.</li>
        <li>Flexiona los codos hasta que tus bíceps toquen tus antebrazos. Trate de no dejar que sus codos se muevan hacia afuera.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl de bicep en polea</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-hammer-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-hammer-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Utilice un accesorio de mango para la polea. La polea debe colocarse hasta el fondo de la máquina.</li>
            <li>De espaldas a la máquina de cable. Coloque su brazo por detras del hombro, es decir estirado hacia la polea.</li>
            <li>Flexiona el codo y extiende sin mover el brazo de lugar, evitar balanceos.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl concentrado sentado</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-concentration-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-concentration-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Sentado en una silla con las piernas separadas, apoya el brazo contra el muslo y sujeta la pesa con el brazo extendido hacia el suelo.</li>
            <li>Doblando el brazo por el codo, levante la pesa hasta que la palma de la mano mire hacia el hombro.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl concentrado en banco unilateral</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-preacher-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-preacher-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese detrás de un banco, con el pecho inclinado sobre el borde del banco.</li>
            <li>Con un brazo apoyado en el banco, sostenga la pesa, doblando el brazo por el codo.</li>
            <li>Baje el brazo usando el banco como guía, manteniendo el antebrazo derecho.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl martillo en banco inclinado</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-hammer-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-hammer-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Sujeta las mancuernas con un agarre neutro sentado en un banco inclinado.</li>
            <li>Lentamente levante la mancuerna hasta la altura del pecho y baje para regresar a la posicion inicial.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Spider Curl con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-single-arm-spider-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-single-arm-spider-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en un banco inclinado o de curl de predicador.</li>
            <li>Deje que sus brazos cuelguen libremente del borde del banco.</li>
            <li>Flexione completamente el codo y extiéndalo completamente en cada repetición.</li>
          
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl de biceps en banco inclinado</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-zottman-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-zottman-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en un banco inclinado con las palmas de las manos hacia adelante.</li>
            <li>Flexiona los codos hasta que tus antebrazos toquen tus bíceps.</li>
            <li>Cuando llegue a la parte superior del movimiento, baje las mancuernas lentamente, no es necesario girar tal como se muestra en el video.</li>
          
        </ol>
        </div>
    </div>
    </>
  )
}