import React from 'react'
import '../styles/preguntas-comunes.css'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function PreguntasComunes() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
  }, []);
  return (
    <div id='primary'>
    <article>
        <header className='header-article'>
             <h1 className='h1-header'>Preguntas Comunes:</h1>
            <p className='p-header'>Aquí podrás ver 10 preguntas generales y típicas que solemos encontrar en el mundo fitness</p>
        </header>
        <div className='info-container'>
             <h1 className='h1-article'>1- ¿Por qué no noto cambios?</h1>
             <p>Hay varias razones por las cuales podrías no estar notando cambios en tu físico, y estas pueden variar dependiendo de tus circunstancias individuales. Presiona <NavLink className='links' to='/preguntas-comunes/porque-no-noto-cambios'>aquí</NavLink> para ver algunas posibles explicaciones:</p>
             <h1 className='h1-article'>2 - No estoy logrando subir o bajar de peso</h1>
             <p>La dificultad para subir o bajar de peso puede estar relacionada con varios factores. Clickeando <NavLink className='links' to='/preguntas-comunes/subir-o-bajar-de-peso'>aquí</NavLink> hay algunas posibles explicaciones</p>
             <h1 className='h1-article'>3- ¿Se puede perder grasa y ganar músculo a la vez?</h1>
             <p>Sí, es posible ganar músculo y perder grasa al mismo tiempo, aunque es un proceso que puede ser más desafiante que enfocarse únicamente en uno de los dos objetivos, en caso de una persona principiante es posible. Esto se conoce como recomposición corporal.</p>
             <h1 className='h1-article'>4- ¿Cómo hacer para tener una dieta saludable?</h1>
             <p>Para tener una dieta saludable, es importante seguir algunos principios básicos.</p>
             <p>- Consumir una variedad de alimentos: Incluye una amplia gama de alimentos en tu dieta para asegurarte de obtener una variedad de nutrientes esenciales. Incluye frutas, verduras, granos enteros, proteínas magras, lácteos bajos en grasa o alternativas vegetales y grasas saludables.</p>
             <p>- Equilibrar los macronutrientes: Asegúrate de incluir todos los macronutrientes en tu dieta de manera equilibrada. Esto implica obtener suficientes carbohidratos para obtener energía, proteínas para el crecimiento y reparación de tejidos y grasas saludables para diversas funciones corporales.</p>
             <p>- Controlar las porciones: Mantén un equilibrio adecuado en tus porciones para evitar comer en exceso. Aprende a reconocer las porciones adecuadas y escucha las señales de hambre y saciedad de tu cuerpo.</p>
             <p>- Limitar el consumo de azúcares añadidos y alimentos procesados: Reduce la ingesta de alimentos y bebidas que contengan altos niveles de azúcares añadidos, como refrescos, dulces, pasteles y alimentos procesados. Opta por fuentes naturales de azúcares, como frutas frescas.</p>
             <p>- Aumentar la ingesta de fibra: La fibra es importante para la salud digestiva y ayuda a mantenernos satisfechos por más tiempo. Aumenta la ingesta de alimentos ricos en fibra, como frutas, verduras, legumbres, granos enteros y frutos secos.</p>
             <p>- Hidratarse adecuadamente: Bebe suficiente agua a lo largo del día para mantener tu cuerpo hidratado. Limita el consumo de bebidas azucaradas y alcohólicas.</p>
             <p>- Limitar el consumo de sodio: Reduce la cantidad de sodio en tu dieta limitando la ingesta de alimentos procesados, enlatados y comidas rápidas. Opta por condimentar tus comidas con hierbas y especias en lugar de sal.</p>
             <h1 className='h1-article'>5- ¿Debo levantar pesas si estoy tratando de perder peso?</h1>
             <p>Por supuesto. El levantamiento ayuda a ahorrar músculo mientras se come un déficit. Esto tiene la doble ventaja de reducir la grasa corporal más rápido y brindarle un punto de partida más sólido una vez que comience a aumentar el volumen.</p>
             <h1 className='h1-article'>6- ¿Cómo distingo entre dolor muscular o dolor por lesión?</h1>
             <p>Probablemente se trate de un dolor muscular si el dolor apareció 24-48 horas después de su entrenamiento, si siente más como un dolor general en un músculo en particular y si disminuye en el transcurso de días. Por el contrario se trata de una lesión cuando por lo general el dolor comenzó en medio del entrenamiento, es agudo y lcoalizado, y dura más de cuatro días.</p>
             <h1 className='h1-article'>7- ¿Cuál es el mejor rango de repeticiones para el crecimiento/hipertrofia muscular?</h1>
             <p>El rango de repeticiones óptimo para el crecimiento y la hipertrofia muscular puede variar dependiendo de varios factores, como la experiencia del individuo, el tipo de ejercicio y la respuesta individual al entrenamiento. Sin embargo, generalmente se considera que el rango de repeticiones de 6 a 12 es efectivo para estimular el crecimiento muscular.    </p>
             <h1 className='h1-article'>8- ¿Debo entrenar siempre al fallo?</h1>
             <p>Es probable que no sea necesario entrenar para completar el fallo para maximizar el crecimiento, es probable que pueda dejar un par de repeticiones en la cámara de reserva, mejor conocido como RIR (Repetitions in Reserve). Desafortunadamente, las personas no son muy buenas para saber qué tan cerca están del fallo, recomendamos que trabajen cerca de un rango de repeticiones.</p>
             <h1 className='h1-article'>9- ¿El cardio perjudica las ganancias musculares?</h1>
             <p>Está comprobado que el hacer cardio puede resultar hasta beneficioso después de un entrenamiento de hipertrofia ya que mejora nuestro nivel cardiovascular del cuerpo. Aunque tenemos que tener en cuenta que al agregar cardio, al igual que cualquier otro ejercicio adicional, utilizará más calorías y requerirá que coma más alimentos para mantener el excedente de calorías necesario para desarrollar músculo.</p>
             <h1 className='h1-article'>10- ¿Levantar pesas impide el crecimiento?</h1>
             <p>Levantar pesas con la forma adecuada mientras se mantiene una dieta saludable no impedirá su crecimiento. De hecho, el levantamiento de pesas tiene muchos beneficios para los jóvenes, incluida una mayor fuerza para los deportes y una mayor autoestima.</p>
        </div>
    </article>

</div>
  )
}
