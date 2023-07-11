import React from 'react';
import '../styles/calentamientos.css';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Calentamientos() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
      }, []);
  return (
    <div id='primary'>
    <article>
        <header className='header-article'>
             <h1 className='h1-header'>Calentamientos</h1>
            <p>El calentamiento antes de iniciar un entrenamiento es de suma importancia debido a sus numerosos beneficios para el cuerpo. Esta fase inicial de actividad física suave y progresiva tiene el propósito de preparar al organismo de manera adecuada para el ejercicio que está por venir. Durante el calentamiento, el flujo sanguíneo aumenta, lo que mejora la oxigenación de los músculos y tejidos, preparándolos para un rendimiento óptimo. Además, el calentamiento incrementa la temperatura corporal, lo que facilita la elasticidad y flexibilidad muscular, reduciendo así el riesgo de lesiones. <b>¡Debemos calentar para no lesionarnos!</b></p>
        </header>
        <div className='info-container'>
             <h1 className='h1-article'>1- Calentamiento para espalda:</h1>
             <p>Este podría ser un buen calentamiento antes de una sesión de entrenamiento de espalda.</p>
             <div>
             <ReactPlayer
             url={require('../videos/CalentamientoEspalda.mp4')}
             width='100%'
             height='80%'
             controls
             volume='0.1'
             muted
             playing= 'true'
             />
             </div>

             <h1 className='h1-article'>2- Calentamiento para hombros y pecho:</h1>
             <p>Calentamiento que podría realizarse tanto para hombros (principalmente) y para antes de arrancar a hacer pecho debido a que como sabemos, a la hora de hacer un press banca o cualquier otro press involucramos los hombros y lo ideal sería que los hagamos entrar en calor.</p>
             <div>
             <ReactPlayer
             url={require('../videos/CalentamientoHombros.mp4')}
             width='100%'
             height='80%'
             controls
             volume='0.1'
             muted
             playing= 'true'
             />
             </div>

             <h1 className='h1-article'>3- Calentamiento y movilidad articular para piernas:</h1>
             <p>El calentamiento de piernas es uno de los más importantes ya que por lo general lo hacemos mal o muy rápido, es importante tomarnos nuestro tiempo en realizarlo y sobre todo cuando vamos a hacer un ejercicio que involucre varios músculos como por ejemplo la sentadilla la cual es esencial activar el core como se observa en el segundo video.</p>
             <div>
             <ReactPlayer
             url={require('../videos/CalentamientoPiernas.mp4')}
             width='100%'
             height='80%'
             controls
             volume='0.1'
             muted
             playing= 'true'
             />
             </div>
             <div>
             <ReactPlayer
             url={require('../videos/CalentamientoLumbar.mp4')}
             width='100%'
             height='80%'
             controls
             volume='0.1'
             muted
             playing= 'true'
             />
             </div>
             <p>Y en el caso de tener problemas en las rodillas una buena movilidad articular podría mejorar tu sesión de entrenamiento.</p>
             <div>
             <ReactPlayer
             url={require('../videos/CalentamientoRodillas.mp4')}
             width='100%'
             height='80%'
             controls
             volume='0.1'
             muted
             playing= 'true'
             />
             </div>
        </div>
    </article>

</div>
  )
}
