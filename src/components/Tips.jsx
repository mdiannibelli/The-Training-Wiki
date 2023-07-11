import React from 'react'
import '../styles/tips.css';
import { useEffect } from 'react';

export default function Tips() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
  }, []);
  return (
    <div id='primary'>
    <article>
        <header className='header-article'>
             <h1 className='h1-header'>Tips:</h1>
            <p className='p-header'>Nuestros consejos podrán ayudarte a mejorar tu progreso y rendimiento, ¡presta mucha atención!</p>
        </header>
        <div className='info-container'>
             <h1 className='h1-article'>Índice</h1>
             <p>Nuestros consejos podrán ayudarte a mejorar tu progreso y rendimiento, ¡presta mucha atención!</p>
           <ul>
            <li>Establece objetivos realistas y alcanzables</li>
            <p>Es importante que definas objetivos claros y alcanzables para que puedas medir tu progreso y sentirte motivado a seguir adelante. Los objetivos deben ser específicos, medibles, alcanzables, relevantes y limitados en el tiempo.</p>
            <li>Empieza poco a poco</li>
            <p>Si eres nuevo dentro del mundo fitness debes tomartelo con mucha calma, comienza poco a poco para evitar lesiones. Empieza con un programa de ejercicio suave e incrementa la intensidad y la duración a medida que te sientas más cómodo.</p>           
            <li>Tu entrenamiento debe ser flexible</li>
            <p>La variedad es clave para mantener la disciplina y evitar el estancamiento. Intercambia diferentes tipos de ejercicios, intenta realizar ejercicios que gustes hacerlos y siempre usando la técnica correcta.</p>
            <li>Haz ejercicio regularmente</li>
            <p>Para obtener resultados, debes hacer ejercicio con regularidad. Intenta realizar actividad física de forma consistente y con una frecuencia adecuada para tu nivel de condición física. Los resultados no llegan en poco tiempo, debes ser constante.</p>
            <li>Mantén una alimentación saludable</li>
            <p>En algunos casos una dieta sería lo ideal para un estilo de vida fitness, aunque no siempre es así ya que es suficiente con consumir alimentos nutritivos y balanceados que incluyan proteínas magras, grasas saludables, carbohidratos, frutas, verduras y granos enteros.</p>
            <li>Descansa adecuadamente</li>
            <p>El descanso es crucial para la recuperación y la regeneración muscular. Este factor es muy importante ya que aquí es cuando el músculo se repara de las sesiones de entrenamiento y crece. Duerme al menos 7 horas al día y asegúrate de descansar adecuadamente entre sesiones de entrenamiento.</p>
            <li>Encuentra un compañero de entrenamiento</li>
            <p>A veces necesitamos que al principio un compañero de entrenamiento sea quien nos ayude a mantenernos enfocados y a seguir adelante, siempre y cuando este no sea una distracción durante nuestro entrenamiento.</p>
            <li>Mantén un registro de tu progreso</li>
            <p>Lleva un registro de tu progreso para que puedas ver cuánto has avanzado y cuánto te queda por avanzar. Esto te mantendrá motivado y te ayudará a hacer ajustes en tu programa de entrenamiento si es necesario. Cuando hablamos de registros nos referimos a fotos y videos de nuestro físico como también de nuestras técnicas a la hora de realizar un ejercicio y sobre todo ir anotando los pesos que manejamos para realizar una sobrecarga progresiva.</p>
            <li>Consulta con un profesional</li>
            <p>Si tienes dudas o inquietudes sobre tu programa de ejercicio o nutrición, consulta con un profesional de la salud o del deporte. Ellos pueden ayudarte a establecer objetivos realistas y a crear un plan de entrenamiento adecuado para tus necesidades.</p>
            <li>Sé paciente y perseverante</li>
            <p>El fitness es un proceso y no sucede de la noche a la mañana. Sé paciente, perseverante y mantén una actitud positiva para obtener los resultados deseados.</p>           
           </ul>
        </div>
    </article>

</div>
  )
}
