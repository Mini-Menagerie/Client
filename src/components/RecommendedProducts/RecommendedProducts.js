/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';

import { container, row_quantity, button, info_col, description_col, info_row, info_name, info_quantity } from './RecommendedProduct.styles'

import ProductCard from '../ProductCard/ProductCard'

const RecommendedProducts = props => {
    const [products, setProducts] = useState([])
    const [currentProduct] = useState(1);
    const [productsPerPage] = useState(4);

    useEffect(() => {
        const getProducts = async () => {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/product`)
            setProducts(response.data.result)
            // setLoading(false);
        }
        getProducts();
    }, [])

    //get current products
    const indexOfLastProduct = currentProduct * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

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
