import React from 'react';
import '../styles/porque-no-noto-cambios.css';
import { useEffect } from 'react';

export default function PorqueNoNotoCambios() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
  }, []);
  return (
    <div id='primary'>
    <article>
        <header className='header-article'>
             <h1 className='h1-header'>¿Por qué no noto cambios?</h1>
            <p className='p-header'>A continuación veremos algunas posibles razones, presta atención</p>
        </header>
        <div className='info-container'>
             <h1 className='h1-article'>Falta de tiempo</h1>
             <p> Los cambios físicos suelen ser graduales y requieren tiempo y consistencia. Si llevas poco tiempo realizando una rutina de ejercicio o siguiendo una dieta, es posible que aún no hayas tenido suficiente tiempo para notar cambios significativos en tu cuerpo. Es importante tener paciencia y ser constante en tus esfuerzos.</p>
             <h1 className='h1-article'>Expectativas poco realistas</h1>
             <p>Es posible que tus expectativas sobre los cambios físicos sean demasiado altas o poco realistas. No todos experimentan cambios de la misma manera ni al mismo ritmo. Además, los cambios físicos dependen de diversos factores, como la genética, el metabolismo y la composición corporal inicial. Es importante establecer metas alcanzables y realistas.</p>
            <h1 className='h1-article'>Falta de variedad o intensidad en tu entrenamiento</h1>
            <p>Si realizas siempre el mismo tipo de ejercicio o no incrementas gradualmente la intensidad de tu entrenamiento, tu cuerpo puede adaptarse y estancarse en un punto. Trata de variar tus rutinas de ejercicio, incluyendo diferentes tipos de entrenamiento (aeróbico, fuerza, flexibilidad) y desafiar a tu cuerpo con nuevas actividades o incrementando la carga de trabajo progresivamente.</p>
            <h1 className='h1-article'>Desajuste en la alimentación</h1>
            <p>Los cambios físicos también están influenciados por la alimentación. Si estás llevando una dieta poco equilibrada o no estás consumiendo suficientes nutrientes para satisfacer tus necesidades, es posible que no veas cambios significativos en tu físico. Considera evaluar tus hábitos alimenticios y asegúrate de estar obteniendo los nutrientes necesarios para apoyar tus metas físicas.</p>
            <h1 className='h1-article'>Otros factores de estilo de vida</h1>
            <p>Factores como el estrés, la falta de sueño adecuado y un estilo de vida sedentario pueden afectar tus resultados físicos. El estrés crónico puede influir en el metabolismo y la composición corporal. Además, el descanso adecuado es fundamental para la recuperación muscular y el progreso físico. Asegúrate de descansar lo suficiente y mantener un estilo de vida equilibrado.</p>
            
            <p><b>Si has considerado estos aspectos y aún no ves cambios en tu físico a pesar de tus esfuerzos consistentes, puede ser útil consultar con un profesional de la salud o un entrenador personal para obtener orientación adicional y evaluar tu situación específica.</b></p>
        </div>
    </article>

</div>
  )
}
