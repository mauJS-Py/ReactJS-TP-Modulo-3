import { addDoc, collection } from "firebase/firestore"
import React, { useState } from "react"
import database from "../../config/firebase"
import './CreateProductScreen.css'


const CreateProductScreen = () => {
    let initial_state_form = {
        title: "",
        color: "",
        price: 0,
        discount: 0,
        img: null
    }

    const [form_state, setFormState] = useState(initial_state_form)
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        let field = event.target.name
        let new_value = event.target.value

        if(field === 'img') {
            setFormState(
                (prev_state) => {
                    return {
                        ...prev_state,
                        'img': event.target.files[0]
                    }
                }
            )
        } else {
            setFormState(
                (prev_state) => {
                    return {
                        ...prev_state,
                        [field]: new_value
                    }
                }
            )
        }
    }

    const uploadImgToImgBB = async (img_file) => {
        let API_KEY_IMGBB = "7a198b7c6582694ef003bc4d8f136aba"
        const form_data = new FormData()
        form_data.append('image', img_file)

        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`,
            {
                method: 'POST',
                body: form_data
            }
        )
        const data = await response.json()

        return data.data.url
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        let today = new Date()

        const url_img = await uploadImgToImgBB(form_state.img)

        const collection_ref = collection(database, 'products')
        await addDoc(
            collection_ref,
            {
                title: form_state.title,
                color: form_state.color,
                price: form_state.price,
                discount: form_state.discount,
                img: url_img,
                date: today.toLocaleString()
            }
        )
        setFormState(initial_state_form)
        setLoading(false)
        alert("Producto añadido")
    }

    return (
        <div className='caja_paginas'>
          <div className='div_centrar'>
              <div className='caja_home ancho_login'>
                <h2>Añadir un producto</h2>
                <div className='caja_formulario'>
                    <form className='formulario_sesion' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className='label_sesion texto_izquierda'>Título (medida)</label>
                            <input
                                type="text"
                                name='title'
                                id='title'
                                className='input_sesion' 
                                placeholder='Ej. 102 × 62 × 2 cm'
                                value={form_state.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="color" className='label_sesion texto_izquierda'>Color</label>
                            <input
                                type="text"
                                name='color'
                                id='color'
                                className='input_sesion' 
                                placeholder='Ej. Orcollano'
                                value={form_state.color}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="caja_precio_descuento">
                            <div className="caja_precio">
                                <label htmlFor="price" className='label_sesion texto_izquierda'>Precio</label>
                                <input
                                    type="number"
                                    name='price'
                                    id='price'
                                    className='input_sesion' 
                                    placeholder='250000'
                                    min={0}
                                    value={form_state.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="caja_descuento">
                                <label htmlFor="discount" className='label_sesion texto_izquierda'>Descuento</label>
                                <input
                                    type="number"
                                    name='discount'
                                    id='discount'
                                    className='input_sesion' 
                                    placeholder='10'
                                    min={0}
                                    max={99}
                                    value={form_state.discount}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="img" className='label_sesion texto_izquierda'>Imagen</label>
                            <input
                                type="file"
                                id='img'
                                name='img'
                                onChange={handleChange}
                                className="examinar_archivos"
                            />
                        </div>
                        <br />
                        <button
                            type="submit"
                            className='boton_sesion'
                            disabled={loading}
                        >
                            {loading ? "Procesando..." : 'Añadir producto'}
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProductScreen