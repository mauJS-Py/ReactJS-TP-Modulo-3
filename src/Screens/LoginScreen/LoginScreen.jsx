import React from 'react'
import { Link } from 'react-router-dom'
import './LoginScreen.css'
import LoginForm from '../../Components/LoginForm/LoginForm'

const LoginScreen = () => {
  return (
    <div className='caja_paginas'>
      <div className='div_centrar'>
        <div className='caja_home ancho_login'>
          <h1 className='titulo_logo'><span className='titulo_logo_solo_am'>am</span>-Mármol</h1>
          <br />
          <h3 className='subtitulo'>¡Iniciá sesión y aprovechá todas nuestras ofertas!</h3>
          <LoginForm/>
          <h4 className='subtitulo'><Link to={'/register'} className='registrate'>REGISTRATE</Link> si no tenés usuario</h4>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen