/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import {container} from './ShoppingCart.styles'

const ShoppingCart = () => {
    const productCart = useSelector(state => state.addToCart)
    let cartProduct = JSON.parse(localStorage.getItem('cartProduct'))
    return (
        <Container css={container}>
            <h5>Cart ({cartProduct.length} items)</h5>
            <Col xs={8}>
            <p>{cartProduct[0].productName}</p>
            <p>{cartProduct[0].quantity}</p>
            </Col>
            <Col xs={4}>
            <h1>Total Amount</h1>
            </Col>
        </Container>
    )
}

export default ShoppingCart

