import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import BotonComprar from '../BotonComprar/BotonComprar'

const ProductCard = ({title, color, price, discount, img, id}) => {

    const final_price = (price / 100) * (100 - discount)

    return (
        <div className='card_caja'>
            <div>
                <img src={img} className='img_mesadas' alt={"Mesada " + color} />
            </div>
            <h3 className='titulo'>{color} - {title}</h3>
            <div className='caja_datos_arriba'>
                <div className='caja_precio_anterior'>
                    <span className='precio_real'>${price}</span>
                    <span>  </span>
                    <span className='descuento'>{discount}% OFF</span>
                </div>
                <div className='caja_detalles'>
                    <Link to={`/product/${id}`} className='ver_detalles'>Ver detalles</Link>
                </div>
            </div>
            <div className='caja_precio_final'>
                <span className='precio_final'>$ {final_price}</span>
                <BotonComprar/>
            </div>
        </div>
    )
}

export default ProductCard
