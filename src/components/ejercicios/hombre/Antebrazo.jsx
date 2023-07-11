import React from 'react'
import '../../../styles/musculos.css'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

export default function Antebrazo() {
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
        <div className='btn-group-sex'>
            <div className='input-container'>
                <input className="js-sex-option" type="radio" name="sexchooser" id="sexchoosermale" value="male" onClick={() =>handleSex("male")} defaultChecked/> 
                <label htmlFor='sexchoosermale'>Hombre</label>
            </div>

            <div className='input-container'>
            <input className="js-sex-option" type="radio" name="sexchooser" id="sexchooserfemale" value="female" onClick={() =>handleSex("female")} /> 
                    <label htmlFor='sexchooserfemale'>Mujer</label>
            </div>
        </div>
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
        <h1>Antebrazo</h1>
        </div>
        <div className='ejercicio'>
        <h2>Curl de muñeca con mancuerna</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wrist-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-dumbbell-wrist-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Agarra la mancuerna con la palma de la mano hacia arriba y el antebrazo apoyado contra el banco.</li>
            <li>Lentamente doble su muñeca hacia arriba en un movimiento semicircular.</li>
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
            <li>Agarra las mancuernas con un agarre prono. Puedes hacer este ejercicio sin pulgar si te resulta más cómodo en las muñecas.</li>
            <li>Flexiona los codos hasta que tus bíceps toquen tus antebrazos. Trate de no dejar que sus codos se muevan hacia afuera.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl supino con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
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
            <li>Tome un agarre doble por encima del ancho de los hombros. Flexione los codos mientras los mantiene metidos.</li>
            <li>Flexiona hasta que tu antebrazo presione tu bíceps. Luego extienda completamente los codos en la parte inferior de cada repetición.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl de muñeca con barra</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Principiante</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-wrist-curl-front_j9uRhfT.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-wrist-curl-side_v5A0kZk.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Tome una barra recta con un agarre supino.</li>
            <li>Arrodíllate junto a un banco plano y coloca los antebrazos en el banco con las muñecas justo fuera del banco.</li>
            <li>Deje que la barra tire hacia abajo de sus muñecas hasta que estén extendidas.</li>
            <li>Dobla la barra hasta que tus muñecas estén completamente flexionadas y regresa a la posición inicial.</li>
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Curl de muñeca con barra detrás de la espalda</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-behind-the-back-wrist-curl-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-barbell-behind-the-back-wrist-curl-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese derecho y sostenga la barra detrás de usted con un agarre en pronación con las manos y los pies separados al ancho de los hombros.</li>
            <li>Enrolle lentamente las muñecas con un movimiento semicircular hacia arriba.</li>
            <li>Sostenga la barra en el vértice del movimiento y luego baje lentamente la barra hasta la posición inicial.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Extensión de muñeca con pesas rusas</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: </h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-wrist-extension-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-kettlebell-wrist-extension-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese derecho con una pesa rusa en ambas manos frente a su pelvis, con los antebrazos hacia adentro.</li>
            <li>Flexione la muñeca hacia arriba hasta que las muñecas estén completamente extendidas.</li>
            <li>Baje a la posición inicial y repita.</li>
  
        </ol>
        </div>

        <div className='ejercicio'>
        <h2>Plate Pinch Grip Farmer's Carry</h2>
        <hr className='bar-separate'/>
        <h3>Dificultad: Intermedia</h3>
        <div className='image-exercise'>
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-plate-pinch-grip-farmers-carry-front.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
            <ReactPlayer
            url={'https://media.musclewiki.com/media/uploads/videos/branded/male-plate-pinch-grip-farmers-carry-side.mp4#t=0.1'}
            width='100%'
            height='100%'
            volume='0.1'
            muted
            playing= 'true'
            controls
            />
        </div>
        <ol className='instrucciones-ejercicio'>
            <li>Párese erguido sosteniendo dos discos en cada mano con un agarre de pellizco.</li>
            <li>Camine la distancia o el tiempo deseado.</li>
  
        </ol>
        </div>

    </div>
    </>
  )
}