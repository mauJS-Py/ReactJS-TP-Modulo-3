import React, { useEffect, useState } from "react";
import './ProductList.css'
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/productService";


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getProductList = async () => {
        setLoading(true)

        setTimeout(
            async () => {
                const products_list_response = await getProducts()
                if (products_list_response) {
                    setProducts(products_list_response)
                } else
                {
                    setError("Error al obtener productos")
                }
                setLoading(false)
            },
            1000
        )
    }

    useEffect(
        () => {
            getProductList()
        },
        []
    )


    const componentes = products.map(
        (product) => {
            return <ProductCard {...product} key={product.id} />
        }
    )

    let content

    if (loading) {
        content = <span>Cargando...</span>
    } else
    {
        if (error) {
            content = <span>{error}</span>
        } else
        {
            content = componentes
        }

    }

    return (
        <div className="caja_paginas">
            <h2>Mesadas de Mármol</h2>
            <br />
            {content}
        </div>
    )
}

export default ProductList