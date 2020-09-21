/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';

import ProductCard from '../ProductCard/ProductCard'

const RecommendedProducts = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/product`)
            setProducts(response.data.result)
            // setLoading(false);
        }
        getProducts();
    }, [])

    // Shuffle array
    const shuffled = products.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    const currentProducts = shuffled.slice(0, 4);


    return (
        <div>
            <Container>
                <h1>Also Get</h1>
                <ProductCard products={currentProducts} />
            </Container>
        </div>
    )
}

export default RecommendedProducts
