import React from 'react'
import '../../styles/musculos.css'
import { useEffect} from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Pecho() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
      }, []);
       /* selector */
       /* const [selectedSex, setSelectedSex] = useState("male");

       function handleSex(option) {
         setSelectedSex(option)
       } */
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
        <h1>Pecho</h1>
        </div>
        <div className='ejercicio'>
        <h2>Press Banca Con Barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Avanzada</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-side_KciuhbB.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en el banco con los pies en el suelo. Con los brazos rectos desmonta la barra.</li>
            <li>Deberá hacer una retracción escapular antes de iniciar el movimiento.</li>
            <li>Baje la barra a la mitad de su pecho</li>
            <li>Levanta la barra hasta que hayas bloqueado los codos.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Flexión de brazo</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-pushup-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Coloque sus manos firmemente en el suelo, directamente debajo de los hombros.</li>
            <li>Aplane la espalda para que todo su cuerpo quede recto y baje lentamente el cuerpo</li>
            <li>Lleve los omóplatos hacia atrás y hacia abajo, manteniendo los codos pegados al cuerpo.</li>
            <li>Exhale mientras empuja hacia atrás a la posición inicial.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press inclinado con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front_q2q0T12.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-side_2HBfFN3.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en el banco inclinado con los pies en el suelo. Levanta las mancuernas hasta que tengas los brazos rectos.</li>
            <li>Baje las mancuernas a la mitad del pecho.</li>
            <li>Levanta las mancuernas hasta que hayas bloqueado los codos.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Aperturas en inclinado con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-chest-flys-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-chest-flys-side_em1D4Db.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en el banco y coloque los pies en el suelo.</li>
            <li>Comience el ejercicio con las mancuernas juntas sobre su pecho, los codos ligeramente doblados.</li>
            <li>Simultáneamente, baje los pesos a ambos lados.</li>
            <li>Haga una pausa cuando las pesas estén paralelas al banco, luego levante los brazos a la posición inicial.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press inclinado con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Avanzada</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-incline-bench-press-front_dogC7vG.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-incline-bench-press-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Coloque el banco entre 30 y 45 grados.</li>
            <li>Acuéstese en el banco con los pies en el suelo. Con los brazos rectos desmonta la barra.</li>
            <li>Baje la barra a la mitad de su pecho</li>
            <li>Levanta la barra (lentamente y de forma controlada) hasta que hayas bloqueado los codos.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Cruce de poleas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-chestpress-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-chestpress-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Utilice un accesorio de mango. Los cables deben ajustarse a la altura de los hombros.</li>
            <li>Acerque ambas asas a su pecho y asegúrese de estar en el centro del cruce de cables.</li>
            <li>Camina unos pasos hacia adelante. Luego presione el peso hacia adelante.</li>
            <li>A partir de ahí, debes flexionar y extender tanto los hombros como los codos simultáneamente.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Cruce de poleas (pec fly)</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pec-fly-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-pec-fly-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Use un juego de accesorios de mango hasta la parte inferior de la máquina.</li>
            <li>Acerque ambas poleas a su pecho y asegúrese de estar en el centro del cruce de cables.</li>
            <li>Camina unos pasos hacia adelante. Luego presione el peso hacia adelante.</li>
            <li>Tus hombros deben abducirse y aducirse horizontalmente mientras tus codos permanecen en una posición fija.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press banca con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bench-press-front_y8zKZJl.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-bench-press-side_rqe1iTe.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Comience recostándose en un banco con una mancuerna en cada mano, realice una retracción escapular.</li>
            <li>Sostenga las mancuernas al nivel del pecho con las palmas de las manos hacia adelante.</li>
            <li>Involucre su pecho y presione las mancuernas hacia arriba hasta que sus brazos estén extendidos casi por completos.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Press banca declinado con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-decline-bench-press-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-decline-bench-press-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Acuéstese en un banco declinado con ambos brazos extendidos frente a usted.</li>
            <li>Concentre su fuerza en el pecho y lleve sus brazos hacia arriba hasta extenderlos casi por completos.</li>
        </ol>
        </div>
    </div>
    </>
  )
}
