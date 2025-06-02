import React from 'react'
import './RegisterScreen.css'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

const RegisterScreen = () => {
  return (
    <div className='caja_paginas'>
    <div className='div_centrar'>
      <div className='caja_home ancho_registro'>
        <h1 className='titulo_logo'><span className='titulo_logo_solo_am'>am</span>-Mármol</h1>
        <br />
        <h3 className='subtitulo'>Registro de usuario</h3>
        <RegisterForm/>
      </div>
    </div>
  </div>
  )
}

export default RegisterScreen