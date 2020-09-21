/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col, Button } from 'react-bootstrap';

import { container, row_quantity, button, info_col, description_col, info_row, info_name, info_quantity } from './ProductDetail.styles'
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductDetail = props => {
    let { id } = useParams()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])
    const [productImage, setProductImage] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/product/${id}`)
            setProduct(response.data.result)
            setProductImage(response.data.result.image[0].image);
            // setLoading(false);
        }

        getProduct();


        const getProducts = async () => {
            // setLoading(true);
            const response = await axios.get(`http://localhost:8000/product`)
            setProducts(response.data.result)
            // setLoading(false);
        }
        getProducts();
    }, [])

    return (
        <div>
            <Container css={container}>
                <Row>
                    <Col>
                        <Row css={info_row}>
                            <Col>
                                <img src={productImage} alt="product_image" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={9} css={info_col}>
                                <Row css={info_name}>
                                    <h4>{product.productName}</h4>
                                    <p>by Mini Menagerie</p>
                                </Row>
                                <Row></Row>
                                <Row><p>IDR {product.price}</p></Row>
                                <Row>{product.stock} pcs</Row>
                                <Row css={row_quantity}>
                                    <Col xs={2} css={info_quantity}><input type="number" id="quantity" placeholder="1" name="quantity" min="1" max="5" /></Col>
                                    <Col><div css={button}><Button>Add to Cart</Button></div></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <h4>Product Details</h4>
                            <Row>
                                <Col>
                                    <h6>Description</h6>
                                </Col>
                                <Col xs={9} css={description_col}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Quisque molestie consectetur lacus, vitae rutrum sem tincidunt ut.
                                        Praesent at eleifend diam, ut tincidunt libero. Nam ultrices maximus sem non scelerisque.
                                        Etiam vehicula vitae arcu viverra consectetur. Aliquam sed ligula fringilla, placerat ipsum eu, malesuada arcu.
                                    </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>Also Get</h1>
                <ProductCard products={products} />
            </Container>
        </div>
    )
}

export default ProductDetail
