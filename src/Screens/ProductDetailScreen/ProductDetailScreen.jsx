import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../services/productService'
import './ProductDetailScreen.css'
import BotonComprar from '../../Components/BotonComprar/BotonComprar'

const ProductDetailScreen = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {product_id} = useParams()

    const getProductDetail = async () => {
        setLoading(true)
        setTimeout(
            async () => {
                const product_detail_response = await getProductById({product_id})
                if(product_detail_response) {
                    setProduct(product_detail_response)
                }
                else {
                    setError('Error al obtener producto')
                }
                setLoading(false)
            },
            1000
        )
    }

    useEffect(
        () => {
            getProductDetail()
        },
        []
    )

    let content

    if (loading) {
        content = <span>Cargando...</span>
    } else if(!loading && !product) {
        content = <span>Producto no encontrado...</span>
    }
    else {
        const final_price = (product.price / 100) * (100 - product.discount)
        content = 
        <div>
            <h3 className='titulo_seccion'>Mesada de {product.title}</h3>
            <div className='caja_detalles_titulo'>
                <div>
                    <div className='caja_product_detail'>
                        <div>
                            <h5 className='titulo_pd margin_arriba'>Medida</h5>
                            <span className='detalles_data'>{product.title}</span>
                        </div>
                        <div>
                            <h5 className='titulo_pd'>Fecha de carga</h5>
                            <span className='detalles_data'>{product.date}</span>
                        </div>
                        <div>
                            <h5 className='titulo_pd'>Descripción</h5>
                            <span className='detalles_data'>Mesada de mármol en color {product.color}</span>
                        </div>
                        <div>
                            <div>
                            <h5 className='titulo_pd'>Precio final</h5>
                            </div>
                            <div className='caja_precio_boton'>
                                <span className='detalles_data sin_bordes padding_abajo'>$ {final_price}</span>
                            </div>
                        </div>
                        <div className='caja_boton_comprar'>
                            <BotonComprar/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    }

    return (
        <div className='caja_paginas'>
            {content}
        </div>
    )
}

export default ProductDetailScreen