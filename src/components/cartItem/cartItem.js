/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row } from "react-bootstrap";

import {
    cartItem,
    productName,
    productQuantity,
    cartImage,
} from "./cartItem.styles";

const removeProduct = (event) => {
    event.preventDefault()
    localStorage.removeItem('cartProduct')
}

const CartProduct = ({ data }) => {
    return (
        <div>
            {data.map((value) => {
                let totalItemPrice = value.price * value.quantity;

                return (
                    <Row css={cartItem}>
                        <Col xs={3}>
                            <img
                                src={value.image[0].image}
                                css={cartImage}
                                alt="cart_image"
                            />
                        </Col>
                        <Col xs={6} css={productName}>
                            <div>
                                <h5>{value.productName}</h5>
                                <p>{value.quantity} PCS</p>
                            </div>
<<<<<<< HEAD
                            <a href="#" type="button" className="card-link-secondary small text-uppercase mr-3" onClick={removeProduct}><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
=======
                            <a
                                href="#!"
                                type="button"
                                className="card-link-secondary small text-uppercase mr-3"
                            >
                                <i class="fas fa-trash-alt mr-1"></i> Remove
                                item{" "}
                            </a>
>>>>>>> a8e1f9997077a30dc412c6d2bdaa93b6ffa77906
                        </Col>
                        <Col xs={3} css={productQuantity}>
                            <h5>Rp {totalItemPrice}</h5>
                        </Col>
                    </Row>
                );
            })}
        </div>
    );
};
export default CartProduct;
