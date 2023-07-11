import './App.css';
import NavBar from './components/Navbar'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Index from './components/Index';
import Tips from './components/Tips';
import PreguntasComunes from './components/PreguntasComunes';
import PorqueNoNotoCambios from './components/PorqueNoNotoCambios';
import SubirOBajarDePeso from './components/SubirOBajarDePeso';
import PerderGrasa from './components/PerderGrasa';
import GananciaMuscular from './components/GananciaMuscular';
import { useEffect } from 'react';
import Calentamientos from './components/Calentamientos';
import Nosotros from './components/Nosotros';
import PorqueDecidiCrearEsteSitioWeb from './components/PorqueDecidiCrearEsteSitioWeb';
import Form from './components/Form';
import Ejercicios from './components/Ejercicios';
import Abdomen from './components/ejercicios/hombre/Abdomen';
import Antebrazo from './components/ejercicios/hombre/Antebrazo';
import Bicep from './components/ejercicios/hombre/Bicep';
import Cuádriceps from './components/ejercicios/hombre/Cuádriceps';
import Dorsales from './components/ejercicios/hombre/Dorsales';
import EspaldaBaja from './components/ejercicios/hombre/EspaldaBaja';
import EspaldaMedia from './components/ejercicios/hombre/EspaldaMedia';
import Gemelos from './components/ejercicios/hombre/Gemelos';
import Glúteos from './components/ejercicios/hombre/Glúteos';
import Hombro from './components/ejercicios/hombre/Hombro';
import Isquiotibiales from './components/ejercicios/hombre/Isquiotibiales';
import Pecho from './components/ejercicios/hombre/Pecho';
import Trapecios from './components/ejercicios/hombre/Trapecios';
import Tricep from './components/ejercicios/hombre/Tricep';

function App() {
  useEffect(() => {
  window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
}, []);

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/index' element={<Index/>}/>
        <Route path='/tips' element={<Tips/>}/>
        <Route path='/preguntas-comunes' element={<PreguntasComunes/>}/>
        <Route path='/preguntas-comunes/porque-no-noto-cambios' element={<PorqueNoNotoCambios/>}/>
        <Route path='/preguntas-comunes/subir-o-bajar-de-peso' element={<SubirOBajarDePeso/>}/>
        <Route path='/perder-grasa' element={<PerderGrasa/>}/>
        <Route path='/ganancia-muscular' element={<GananciaMuscular/>}/>
        <Route path='/calentamientos' element={<Calentamientos/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/porque-decidi-crear-este-sitio-web' element={<PorqueDecidiCrearEsteSitioWeb/>}/>
        <Route path='/formulario' element={<Form/>}/>
        <Route path='/ejercicios' element={<Ejercicios/>}/>
        <Route path='/ejercicios/hombre/pecho' element={<Pecho/>}/>
        <Route path='/ejercicios/hombre/hombro' element={<Hombro/>}/>
        <Route path='/ejercicios/hombre/bicep' element={<Bicep/>}/>
        <Route path='/ejercicios/hombre/tricep' element={<Tricep/>}/>
        <Route path='/ejercicios/hombre/antebrazo' element={<Antebrazo/>}/>
        <Route path='/ejercicios/hombre/trapecios' element={<Trapecios/>}/>
        <Route path='/ejercicios/hombre/espalda-media' element={<EspaldaMedia/>}/>
        <Route path='/ejercicios/hombre/dorsales' element={<Dorsales/>}/>
        <Route path='/ejercicios/hombre/espalda-baja' element={<EspaldaBaja/>}/>
        <Route path='/ejercicios/hombre/abdomen' element={<Abdomen/>}/>
        <Route path='/ejercicios/hombre/cuádriceps' element={<Cuádriceps/>}/>
        <Route path='/ejercicios/hombre/isquiotibiales' element={<Isquiotibiales/>}/>
        <Route path='/ejercicios/hombre/gemelos' element={<Gemelos/>}/>
        <Route path='/ejercicios/hombre/glúteos' element={<Glúteos/>}/>
      </Routes>
      <Footer/>
    
    </BrowserRouter>

    
  );
}

export default App;
