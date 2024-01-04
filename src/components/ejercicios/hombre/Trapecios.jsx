import React from 'react'
import '../../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Trapecios() {
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
        <h1>Trapecios</h1>
        </div>

        <div className='ejercicio'>
        <h2>Encogimiento de hombros sentado con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-shrug-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-seated-shrug-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Siéntese en un banco con mancuernas en ambas manos, con las palmas hacia el cuerpo y la espalda recta.</li>
            <li>Eleve los hombros y mantenga la posición contraída en el vértice del movimiento.</li>
            <li>Baje lentamente los hombros a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Encogimiento de hombros de espalda con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-silverback-shrug-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-silverback-shrug-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese con los pies separados al ancho de los hombros sosteniendo la barra con ambas manos al frente, justo pasando el ancho de los hombros.</li>
            <li>Inclínese hacia adelante a la altura de las caderas con una ligera flexión de las rodillas, manteniendo la espalda recta.</li>
            <li>Engancha tus omóplatos, como si estuvieras tratando de tocarlos y luego suelte el encogimiento de hombros.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Encogimiento de hombros con mancuernas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-shrug-front_8g0TOxX.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-shrug-side_vS2pKIC.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Ponte de pie con dos mancuernas. Levanta los omóplatos. Dar un apretón de un segundo en la parte superior.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Remo vertical con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Avanzada</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-upright-row-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-upright-row-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Tome un agarre doble por encima de la cabeza aproximadamente al ancho de los hombros.</li>
            <li>Tire de los codos hacia arriba del techo. Trate de llevar la barra al nivel de la barbilla o un poco más arriba.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Encogimientos de hombros en máquina Smith</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-standing-smith-machine-shrugs-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-standing-smith-machine-shrugs-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Coloque la barra más abajo para que cuando la sujete sus brazos estén completamente extendidos y su espalda esté recta.</li>
            <li>Agarre al ancho de los hombros, levante la barra con los hombros y haga una pausa en la posición contraída.</li>
            <li>Baje lentamente la barra a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Encogimiento de hombros inclinado con pesas rusas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-incline-shrug-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-incline-shrug-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Apoyado en la parte trasera del banco, con los pies bien apoyados en el suelo y los brazos colgando a los lados.</li>
            <li>Sosteniendo la pesa rusa con ambas manos, enganche los omóplatos, como si estuviera tratando de tocarlos. Suelta el encogimiento de hombros.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Encogimiento de hombros en polea</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-shrug-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-shrug-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Ubique ambas poleas hasta abajo del todo y coloque un agarre de manija.</li>
            <li>Tome ambas manijas y asegúrese de estar centrado en la máquina. Deje que sus brazos cuelguen libremente.</li>
            <li>Tire de los omóplatos hacia arriba y hacia las orejas. Deje que sus omóplatos vuelvan a la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Remo vertical con cable</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Avanzada</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-upright-row-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-cable-upright-row-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Use un accesorio de barra con el cable colocado en la parte inferior de la máquina.</li>
            <li>Tire de los codos hacia el techo hasta que el accesorio quede justo debajo de la barbilla y luego extiéndalos hasta que los codos estén completamente extendidos.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Encogimiento de hombros con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-shrug-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-shrug-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Comience parándose con los pies separados al ancho de las caderas, con una barra frente a usted.</li>
            <li>Agáchese y tome la barra con un agarre por encima de la cabeza, con las manos un poco más separadas que el ancho de los hombros. Mantén la espalda recta y los hombros hacia abajo mientras sujetas la barra.</li>
            <li>Párate derecho, levanta la barra del suelo y tira de ella hacia tus caderas. Mantenga los codos cerca de su cuerpo y los hombros hacia abajo mientras hace esto.</li>
            <li>Una vez que la barra esté en tus caderas, levanta los hombros lo más alto que puedas, manteniendo la posición por un momento.</li>
        </ol>
        </div>
    </div>
    </>
  )
}