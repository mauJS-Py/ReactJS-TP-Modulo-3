import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Sesión activa')
    }
    return (
        <div className='caja_formulario'>
            <form className='formulario_sesion' onSubmit={handleSubmit}>
                <div>
                    <label className='label_sesion texto_izquierda' htmlFor="usuario">Usuario</label>
                    <input className='input_sesion' type="text" id='usuario' name='ingresoUsuario' placeholder='Nombre de usuario o e-mail' />
                </div>
                <div>
                    <label className='label_sesion texto_izquierda' htmlFor="password">Contraseña</label>
                    <input className='input_sesion' type="password" id='password' name='ingresoPassword' placeholder='********' />
                </div>
                <div>
                    <input className='boton_sesion' type="submit" value="Ingresar"/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm