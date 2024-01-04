import React from 'react'
import '../../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Tricep() {
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
    
    <div className='contenedor-ejercicios'>
        <div className='muscle-title'>
        <h1>Tricep</h1>
        </div>
        <div className='ejercicio'>
        <h2>Press banca con agarre cerrado</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-close-grip-bench-press-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-close-grip-bench-press-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en el banco con los pies en el suelo. Con un agarre estrecho en la barra, estire los brazos.</li>
            <li>Baje la barra a la mitad inferior del pecho</li>
            <li>Levanta lentamente la barra hasta un poco antes de bloquear los codos con el fin de cuidar nuestras articulaciones.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Triceps en polea</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pushdown-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pushdown-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Utiliza el agarre que se ve en el video y el cable debe colocarse completamente en la parte superior de la máquina</li>
            <li>Asegúrate de mantener la parte superior del brazo pegada a tu cuerpo. Extiende tus codos hasta que sientas que tus tríceps se contraen.</li>
            <li>Puedes mantener un segundo cuando termines de extender por completo tus brazos para obtener mayor estímulo.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press francés con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-skullcrusher-front_hgKANkM.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-skullcrusher-side_bgn7Uzz.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en un banco con los puños extendidos hacia el techo y con un agarre neutro.</li>
            <li>Lleva las mancuernas hacia el techo y flexiona tus codos hasta que ambas manos lleguen a la altura de la oreja y vuelva a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Fondos en banco</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-tricep-dips-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-tricep-dips-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Sujete el borde del banco con las manos, mantenga los pies juntos y las piernas rectas.</li>
            <li>Baje su cuerpo hacia abajo flexionando los codos y regrese a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press francés en polea</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-overhead-tricep-extension-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-overhead-tricep-extension-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Coloque el agarre que se observa en el video. El cable debe llegar hasta la parte inferior de la máquina. Ubíquese de espaldas a la máquina.</li>
            <li>Apunte los codos hacia el techo.</li>
            <li>A partir de ahí, extiende los codos hasta que los puños apunten directamente hacia el techo.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Flexiones en diamante</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-diamond-pushup-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-diamond-pushup-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Coloque los dedos índice y pulgar de modo que se toquen, formando un diamante.</li>
            <li>Use una posición de flexión estándar y baje el pecho hacia las manos manteniendo los codos pegados al cuerpo</li>
            <li>Deténgase justo antes de que su pecho toque el suelo, luego empuje hacia atrás hasta la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Triceps en polea con agarre en V</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-push-downs-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-push-downs-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Coloque en la polea el agarre en V que se observa el video, la polea deberá estar ubicada en la parte superior de la máquina.</li>
            <li>Párese derecho con una leve inclinación hacia adelante y con los codos pegados al cuerpo baje sus brazos hasta que estén completamente extendidos.</li>
            <li>Se aconseja hacer una pausa cuando esté en la posición contraída del movimiento para obtener un mayor estímulo.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Fondos</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-dips-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Sostenga su cuerpo con los brazos bloqueados, es decir brazos extendidos por completo.</li>
            <li>Baje su cuerpo lentamente extendiendo sus codos y vuelva a levantar su cuerpo hasta la posición inicial</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press francés con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-laying-tricep-extensions-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-laying-tricep-extensions-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en un banco plano mientras sostiene una barra con un agarre al ancho de los hombros.</li>
            <li>Extienda completamente los codos hasta que la barra esté directamente sobre su pecho.</li>
            <li>Comience a flexionar los codos y permita que la barra llegue hasta tocar su frente y vuelva a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Triceps en poleas cruzado</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Avanzada</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-cross-push-down-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-cross-push-down-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Ubicar ambas poleas a una altura superior o media y no es necesario utilizar un agarre para realizar el ejercicio.</li>
            <li>Deberá agarrar ambas poleas de forma cruzada y dar 2 o 3 pasos atrás e inclinarse levemente hacia adelante.</li>
            <li>Manteniendo los codos pegados al cuerpo y hacia atrás extender los codos hasta que los brazos queden extendidos por completo y luego regrese a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Extensión de triceps trasnuca</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-skullcrusher-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-skullcrusher-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Se puede utilizar una barra recta o una cuerda. El cable debe colocarse hasta la parte superior de la máquina.</li>
            <li>Aléjese de la máquina con los codos hacia arriba y el accesorio justo detrás de la cabeza.</li>
            <li>Extiende los codos hasta que sientas una contracción en los tríceps y luego flexiona los codos de regreso a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press francés parado con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Avanzada</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-extension-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-overhead-extension-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Tenga cuidado al colocar la barra por encima de la cabeza. Extienda sus brazos hacia el techo mientras agarra la barra</li>
            <li>Flexione ambos codos con mucho cuidado hasta bajar a la altura de la nuca y vuelva a subir para regresar a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press francés trasnuca con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-overhead-tricep-extension-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-overhead-tricep-extension-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Siéntate en el banco y sujeta una mancuerna con ambas manos. Levanta la mancuerna por encima de la cabeza con los brazos extendidos, sosteniendo el peso con las palmas de las manos.</li>
            <li>Mantenga los codos adentro mientras baja el peso por detrás de la cabeza y luego regrese a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Patada de triceps con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-tricep-kickback-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-tricep-kickback-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Comience parándose con los pies separados al ancho de los hombros y sosteniendo una mancuerna en una mano.</li>
            <li>Doble la cintura y coloque la mano opuesta sobre la rodilla o una superficie para apoyarse.</li>
            <li>Desde esta posición inicial, extiende el brazo hacia atrás para que la mancuerna quede detrás de tu cuerpo.</li>
            <li>Asegúrate de mantener tu codo quieto y cerca de tu cuerpo durante todo el movimiento.</li>
            <li>CONSEJO: Prueba realizar este ejercicio en una polea ya que notarás mayor tensión en la parte excéntrica del ejercicio.</li>
        </ol>
        </div>
    </div>
    </>
  )
}