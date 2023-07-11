import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/form.css';
import { Formik } from 'formik';
/* npm install formik --save  */
export default function Form() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la ventana al principio cuando la ubicación cambie
      }, []);
      const [formularioEnviado, setFormularioEnviado] = useState(false);
  return (
    <>
    <Formik 
        initialValues={{
            nombre: '',
            email: '',
            mensaje: ''
        }}
        validate={(valores) => {
            let errores = {
            };
            /* Validacion nombre */
            if(!valores.nombre) {
                errores.nombre = 'Por favor ingresa un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre = 'El nombre solo puede contener letras y espacio'
            }
            /* Validacion email */
            if(!valores.email) {
                errores.email = 'Por favor ingrese su email'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errores.email = 'El email no es válido'
            }

            return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
            resetForm();
            /* console.log(valores);
            console.log("formulario enviado"); */
            setFormularioEnviado(true);
            setTimeout(() => setFormularioEnviado(false), 6000)
        }}
    >
        {({values , errors, touched, handleSubmit, handleChange, handleBlur}) => (
            <form className='formulario' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text" 
                    id='nombre' 
                    name='nombre' 
                    placeholder='Maikel Mooor' 
                    value={values.nombre}
                    onChange={handleChange} /* funcion de formik para cambiar el value, ya que sin esta no nos dejara escribir en el input */
                    onBlur={handleBlur} /* al tocar una entrada y luego desenfocarla en oblur se actualizará a true, ejecturá la validacion al desenfocar el input */
                    />
                    {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    placeholder='maikelmoor@gmail.com' 
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="mensaje">Mensaje</label>
                    <input 
                    type="text" 
                    id='mensaje' 
                    name='mensaje' 
                    placeholder='Escribe tu mensaje aquí' 
                    value={values.mensaje} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>

                <button type='submit'>Enviar</button>
                {formularioEnviado && <p className='exito'>Formulario enviado correctamente</p>}
            </form>
        )}
    </Formik>
    </>
  )
}
