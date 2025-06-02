import React from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Registro exitoso')
    }
  return (
    <div className='caja_formulario ancho_caja_formulario'>
        <form className='formulario_sesion' onSubmit={handleSubmit}>
            <div>
                <div className='display_inlineblock'>
                    <label className='label_sesion texto_izquierda' htmlFor="nombre">Nombre/s</label>
                    <input className='input_sesion' type="text" id='nombre' name='nombreRegistro' placeholder='Ej. Lucas' />
                </div>
                <span className='input_distancia'></span>
                <div className='display_inlineblock'>
                    <label className='label_sesion texto_izquierda' htmlFor="apellido">Apellido/s</label>
                    <input className='input_sesion' type="text" id='apellido' name='apellidoRegistro' placeholder='Guzmán' />
                </div>
            </div>
            <div>
                <label className='label_sesion texto_izquierda' htmlFor="email">E-mail</label>
                <input className='input_sesion' type="email" id='email' name='emailRegistro' placeholder='lucasguzman@mail.com' />
            </div>
            <div>
                <label className='label_sesion texto_izquierda' htmlFor="telefono">Teléfono</label>
                <input className='input_sesion' type="text" id='telefono' name='telefonoRegistro' placeholder='15-1111-5555' />
            </div>
            <div>
                <label className='label_sesion texto_izquierda' htmlFor="pass">Contraseña</label>
                <div className='input_password'>
                    <input className='input_sesion sin_margen' type="password" id="pass" name='passwordRegistro' placeholder='********' />
                    <i class="bi bi-eye icono"></i>
                </div>
            </div>
            <div>
                <label className='label_sesion texto_izquierda' htmlFor="pass2">Repetir contraseña</label>
                <div className='input_password'>
                    <input className='input_sesion sin_margen' type="password" id="pass2" name='passwordRegistro2' placeholder='********' />
                    <i class="bi bi-eye icono"></i>
                </div>
            </div>
            <div>
                <input className='boton_sesion' type="submit" value="Registrarse"/>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm