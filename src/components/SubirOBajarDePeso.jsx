import React from 'react';
import '../styles/porque-no-noto-cambios.css';
import { useEffect } from 'react';

export default function SubirOBajarDePeso() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
  }, []);
  return (
    <div id='primary'>
    <article>
        <header className='header-article'>
             <h1 className='h1-header'>Subir o Bajar de peso</h1>
            <p className='p-header'>A continuación veremos algunos factores por los cuales no logras subir o bajar de peso</p>
        </header>
        <div className='info-container'>
             <h1 className='h1-article'>Desequilibrio calórico</h1>
             <p>Para subir o bajar de peso, es necesario tener un equilibrio calórico adecuado. Si estás tratando de subir de peso y no lo logras, es posible que no estés consumiendo suficientes calorías para crear un excedente energético. Por otro lado, si estás tratando de bajar de peso y no ves resultados, puede ser que no estés creando un déficit calórico adecuado. Es importante asegurarte de que tu ingesta de calorías esté ajustada según tus objetivos específicos.</p>
             <h1 className='h1-article'>Selección de alimentos</h1>
             <p>La calidad de los alimentos que consumes también es importante. Si estás tratando de subir de peso, es recomendable enfocarte en alimentos ricos en nutrientes y calorías, como proteínas magras, carbohidratos complejos y grasas saludables. Por otro lado, si estás tratando de bajar de peso, es importante elegir alimentos nutritivos y bajos en calorías, como frutas, verduras, proteínas magras y granos integrales.</p>
            <h1 className='h1-article'>Factores hormonales o metabólicos</h1>
            <p>Algunas personas pueden tener desequilibrios hormonales o metabólicos que dificultan el proceso de subir o bajar de peso. Si sospechas que esto podría ser un problema, es recomendable consultar a un médico o endocrinólogo para una evaluación más detallada.</p>
            <h1 className='h1-article'>Niveles de actividad física</h1>
            <p>Tu nivel de actividad física puede influir en tu capacidad para subir o bajar de peso. Si estás tratando de subir de peso y no ves resultados, puede ser que tu actividad física esté quemando demasiadas calorías. Por otro lado, si estás tratando de bajar de peso y no ves resultados, es posible que necesites aumentar la cantidad o la intensidad de tu actividad física para crear un mayor déficit calórico.</p>
            <h1 className='h1-article'>Factores genéticos</h1>
            <p>La genética también puede desempeñar un papel en tu capacidad para subir o bajar de peso. Algunas personas tienen una mayor predisposición genética a tener dificultades para modificar su peso corporal. Aunque los factores genéticos no pueden cambiarse, aún es posible lograr cambios saludables en el peso a través de la alimentación y el ejercicio adecuados.</p>
           
           <p><b>Recuerda que cada persona es única y los resultados pueden variar. Si estás teniendo dificultades para subir o bajar de peso, considera buscar la ayuda de un profesional de la salud, como un dietista nutricionista o un entrenador personal, quienes pueden proporcionarte un enfoque personalizado y brindarte el apoyo necesario para alcanzar tus objetivos.</b></p>
        </div>
    </article>

</div>
  )
}
