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
import Form from './components/Form';
import Ejercicios from './components/Ejercicios';
import Abdomen from './components/ejercicios/Abdomen';
import Antebrazo from './components/ejercicios/Antebrazo';
import Bicep from './components/ejercicios/Bicep';
import Cuádriceps from './components/ejercicios/Cuádriceps';
import Dorsales from './components/ejercicios/Dorsales';
import EspaldaBaja from './components/ejercicios/EspaldaBaja';
import EspaldaMedia from './components/ejercicios/EspaldaMedia';
import Gemelos from './components/ejercicios/Gemelos';
import Glúteos from './components/ejercicios/Glúteos';
import Hombro from './components/ejercicios/Hombro';
import Isquiotibiales from './components/ejercicios/Isquiotibiales';
import Pecho from './components/ejercicios/Pecho';
import Trapecios from './components/ejercicios/Trapecios';
import Tricep from './components/ejercicios/Tricep';

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
        <Route path='/formulario' element={<Form/>}/>
        <Route path='/ejercicios' element={<Ejercicios/>}/>
        <Route path='/ejercicios/pecho' element={<Pecho/>}/>
        <Route path='/ejercicios/hombro' element={<Hombro/>}/>
        <Route path='/ejercicios/bicep' element={<Bicep/>}/>
        <Route path='/ejercicios/tricep' element={<Tricep/>}/>
        <Route path='/ejercicios/antebrazo' element={<Antebrazo/>}/>
        <Route path='/ejercicios/trapecios' element={<Trapecios/>}/>
        <Route path='/ejercicios/espalda-media' element={<EspaldaMedia/>}/>
        <Route path='/ejercicios/dorsales' element={<Dorsales/>}/>
        <Route path='/ejercicios/espalda-baja' element={<EspaldaBaja/>}/>
        <Route path='/ejercicios/abdomen' element={<Abdomen/>}/>
        <Route path='/ejercicios/cuádriceps' element={<Cuádriceps/>}/>
        <Route path='/ejercicios/isquiotibiales' element={<Isquiotibiales/>}/>
        <Route path='/ejercicios/gemelos' element={<Gemelos/>}/>
        <Route path='/ejercicios/glúteos' element={<Glúteos/>}/>
      </Routes>
    {  <Footer/>}
    
    </BrowserRouter>

    
  );
}

export default App;
