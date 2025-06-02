import React, { useState } from 'react'
import './BotonComprar.css'

const ESTADOS_DISPONIBLES = {
    NO_COMPRADO: 'no_comprado',
    COMPRADO: 'comprado',
    PROCESANDO: 'procesando'
}

const BotonComprar = () => {
    const [isBought, setIsBought] = useState(ESTADOS_DISPONIBLES.NO_COMPRADO)

    const handleClickBuyButton = () =>{
        setIsBought(ESTADOS_DISPONIBLES.PROCESANDO),
        setTimeout (
            () => {
                setIsBought(ESTADOS_DISPONIBLES.COMPRADO)
                alert("¡Gracias por tu compra!")
            },
            500
        )        
    }

    let boton_comprar

    if(isBought === ESTADOS_DISPONIBLES.COMPRADO){
        boton_comprar = <button className='boton_comprado' disabled>Comprado</button>
    }
    else if(isBought === ESTADOS_DISPONIBLES.PROCESANDO){
        boton_comprar = <button className='boton_procesando' disabled>Procesando...</button>
    }
    else{
        boton_comprar = <button className='boton_comprar' onClick={handleClickBuyButton}>Comprar</button>
    }

    return (
        <div className='caja_boton_comprar'>
            {boton_comprar}     
        </div>
    )
}

export default BotonComprar
