/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Container, Col } from "react-bootstrap";

import { container } from "./ShoppingCart.styles";

const ShoppingCart = () => {
    let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));
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
    );
};

export default ShoppingCart;
