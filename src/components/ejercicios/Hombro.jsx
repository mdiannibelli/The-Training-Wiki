import React from 'react'
import '../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Hombro() {
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
        <h1>Hombro</h1>
        </div>
        <div className='ejercicio'>
        <h2>Press militar con barra parado</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-front_wHKQjdY.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-press-side_1DIUbfS.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Tome un agarre más o menos al ancho de los hombros. Debe haber una línea recta desde el codo hasta el puño (antebrazos verticales).</li>
            <li>Tire el mentón hacia atrás y presione el peso hacia arriba extendiendo la articulación del codo y flexionando la articulación del hombro.</li>
            <li>Presiona hasta que tus codos estén extendidos y empuja tu cabeza ligeramente hacia adelante.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press militar con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-overhead-press-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Siéntate en un banco con respaldo. Coloca las mancuernas en la punta de las piernas, suba las mancuernas usando el impulso de sus piernas y colócalas a la altura de los hombros.</li>
            <li>Realiza una retraccion escapular.</li>
            <li>Levanta las mancuernas hacia arriba y haz una pausa en la posición contraída.</li>
            <li>Baje las pesas a la posición inicial.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Elevaciones laterales en polea</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-lateral-raise-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-lateral-raise-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Use un accesorio para la polea con el cable colocado hasta el fondo de la máquina.</li>
            <li>Debe abducir verticalmente el hombro levantando el brazo hacia un lado.</li>
            <li>Levanta hasta que tu codo esté a la altura de tu hombro y luego vuelve a la posición inicial.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Elevaciones frontales con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-front-raise-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-front-raise-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Tome dos mancuernas mientras está de pie con las mancuernas a su lado.</li>
            <li>Levanta las dos mancuernas con los codos completamente extendidos hasta que las mancuernas estén al nivel de los ojos.</li>
            <li>Baje las pesas de manera controlada a la posición inicial y repita.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Face pull</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-face-pull-front_i9CjsBg.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-machine-face-pull-side_LnzelQG.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Use una soga como agarre y colócala en la polea, tire del peso hacia usted mientras mantiene los brazos paralelos al suelo.</li>
            <li>Tire de las manos hacia atrás a ambos lados de la cabeza y mantenga la posición.</li>
            <li>Regrese lentamente el peso a la posición inicial y luego repetir.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Flexiones en picada</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pike-pushup-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pike-pushup-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Use un banco o un objeto para elevar los pies.</li>
            <li>Baje la cabeza hacia el suelo doblando los codos.</li>
            <li>Empuje a través de sus manos y regrese a la posición inicial de carpa.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Elevaciones laterales</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-lateral-raise-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-lateral-raise-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese derecho con mancuernas a cada lado.</li>
            <li>Levanta ambos brazos hacia los lados con una ligera flexión en el codo hasta que el codo este a la altura del hombro.</li>
            <li>No es necesario levantar las mancuernas de más como se observa en el video, el codo deberá a estar a la altura del hombro y no pasar de ella.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Elevaciones posteriores con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-rear-delt-fly-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-rear-delt-fly-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Con mancuernas en cada mano, doble las rodillas con los pies ligeramente arqueados. Arquee la espalda hacia adelante de forma que el pecho toque sus rodillas.</li>
            <li>Con los codos ligeramente flexionados, levante los brazos hasta el nivel de los hombros.</li>
            <li>Baje lentamente los brazos a la posición inicial para luego repetir el movimiento.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Aperturas posteriores en polea unilateral</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-rear-delt-fly-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-rear-delt-fly-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Use un accesorio de mango o agarre directamente del cable de la polea. El cable debe colocarse en la parte superior.</li>
            <li>Aléjese unos pasos con el cable.</li>
            <li>A partir de ahí, tus hombros deben abducir y aducir horizontalmente, mientras que tus codos permanecen en una posición fija.</li>
            <li>Deberá juntar su escapula (del brazo el cual esté agarrando la polea) de la espalda hacia atrás para lograr estimuar el hombro posterior.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Elevación frontal con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-front-raise-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/female-barbell-front-raise-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Ponte de pie con un agarre prono de la barra. Levanta los brazos hasta que tus puños estén a la altura de los ojos.</li>
            <li>Vuelve al inicio bajo control. Este ejercicio es propenso a utilizar el impulso cuando comienza a fatigarse, intenta evitarlo.</li>
        </ol>
        </div>
    </div>
    </>
  )
}
