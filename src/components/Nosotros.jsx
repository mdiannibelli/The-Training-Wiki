import React from 'react'
import { useEffect } from 'react';
import '../styles/nosotros.css';
import gymPhoto from '../assets/imgs/backgrounds/banner.6fee27339c0374683aa5.jpg';
import Navlogo from '../assets/imgs/logo/logo white white png.png';
export default function Nosotros() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
      }, []);
  return (
    <div style={{marginBottom:'20px'}}>
        <div className='loginBanner'>
            <img className='gymPhoto' src={gymPhoto} alt='gymphoto'></img>
        <h1 className='h1'>Nosotros</h1>
        <p className='p'>The Training Wiki es una plataforma online donde podrás encontrar información sobre entrenamiento y nutrición basado en la cienca para que puedas alcanzar tus metas. Buscamos superarnos día a día actualizando nuestro contenido con las últimas novedades de entrenamiento a nivel mundial para poder brindar el servicio con la mayor calidad posible. Nuestro trabajo es que cada uno que salga de este sitio resuelva sus carencias de información acerca de este estilo de vida denominado Fitness y pueda ampliar sus conocimientos.Tenemos la certeza de que cuando uno toma conciencia de por qué es importante entrenar y alimentarse bien, aprende a disfrutar del proceso, y se mete de lleno en este hermoso mundo. Transmitir nuestra pasión y transformar la realidad de muchos, es lo que nos inspiró para hacer este sitio web.</p>
        <img className='logoBanner' src={Navlogo} alt='logo'></img>
        </div>
    </div>
  )
}
