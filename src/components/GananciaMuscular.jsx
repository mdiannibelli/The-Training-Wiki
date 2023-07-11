import React from 'react'
import '../styles/preguntas-comunes.css';
import { useEffect } from 'react';

export default function GananciaMuscular() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
      }, []);
  return (
    <div id='primary'>
    <article>
        <header className='header-article'>
             <h1 className='h1-header'>Cómo ganar masa muscular de manera efectiva</h1>
        </header>
        <div className='info-container'>
            <p>El desarrollo de masa muscular es un objetivo común entre aquellos que desean fortalecer su cuerpo y mejorar su apariencia física. Para lograrlo, se requiere un enfoque estratégico y efectivo. Es posible que sea uno de los procesos mas dificiles de realizar ya que requieren de mucho tiempo y sobre todo ser constante. Aquí te mostraremos las mejores prácticas y técnicas que te guiarán en tu viaje hacia un cuerpo más musculoso y resistente.</p>
             <h1 className='h1-article'>1- Calorías y macronutrientes adecuados</h1>
            <p>Para ganar masa muscular, es necesario consumir un exceso de calorías para respaldar el crecimiento muscular. Calcula tu requerimiento calórico diario y aumenta tu ingesta calórica en aproximadamente un 10-20% por encima de ese nivel. Además, asegúrate de obtener suficientes proteínas, ya que son fundamentales para el crecimiento muscular. Incorpora fuentes de proteínas magras, como carnes blancas, pescado, huevos, legumbres y lácteos.</p>
             <h1 className='h1-article'>2- Planifica tus comidas</h1>
            <p>Organiza tus comidas de manera que incluyan una combinación equilibrada de proteínas, carbohidratos y grasas saludables. Distribuye tus calorías a lo largo del día, consumiendo de 4 a 6 comidas pequeñas y frecuentes para mantener un suministro constante de nutrientes a tus músculos.</p>
             <h1 className='h1-article'>3- Entrenamiento de fuerza progresivo</h1>
            <p>El entrenamiento de fuerza es esencial para estimular el crecimiento muscular. Diseña un programa de entrenamiento que incluya ejercicios compuestos, como sentadillas, press de banca, remo y peso muerto. Incrementa gradualmente la carga y la intensidad de tus entrenamientos para desafiar constantemente tus músculos y promover su crecimiento.</p>
             <h1 className='h1-article'>4- Enfócate en la técnica y la progresión</h1>
            <p>Asegúrate de realizar los ejercicios con una técnica adecuada para evitar lesiones y maximizar los resultados. Además, sigue una progresión gradual en tus rutinas, aumentando el peso o la dificultad de los ejercicios a medida que tu fuerza y resistencia mejoren.</p>
             <h1 className='h1-article'>5- Descanso y recuperación</h1>
            <p>El descanso adecuado es esencial para el crecimiento muscular. Permite que tus músculos se recuperen entre sesiones de entrenamiento y asegúrate de dormir lo suficiente cada noche. También puedes considerar días de descanso activo, donde realices actividades de menor intensidad, como caminar o estiramientos.</p>
             <h1 className='h1-article'>6- Suplementación</h1>
            <p>Si bien la suplementación no es esencial, algunos suplementos pueden ayudar a respaldar tus objetivos de ganancia muscular. Los suplementos como la proteína en polvo, la creatina y los aminoácidos de cadena ramificada (BCAA) pueden ser beneficiosos. Sin embargo, consulta con un profesional de la salud antes de comenzar a tomar cualquier suplemento.</p>
             <h1 className='h1-article'>7- Mantén la constancia y la paciencia</h1>
            <p>Ganar masa muscular es un proceso gradual que requiere tiempo y dedicación. Mantén una actitud constante y persevera incluso cuando los resultados no sean inmediatos. Recuerda que la consistencia y la paciencia son clave para alcanzar tus objetivos de ganancia muscular.</p>
        </div>
    </article>

</div>
  )
}
