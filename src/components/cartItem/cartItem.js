/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row } from 'react-bootstrap';

import { cartItem, productName, productQuantity, cartImage } from "./cartItem.styles";

const CartProduct = ({ data }) => {
    console.log(data);
    return (
        <div>
            {data.map((value) => {
                let totalItemPrice = value.price * value.quantity

                return (
                    <Row css={cartItem}>
                        <Col xs={3}>
                            <img src={value.image[0].image} css={cartImage} />
                        </Col>
                        <Col xs={6} css={productName}>
                            <div>
                                <h5>{value.productName}</h5>
                                <p>{value.quantity} PCS</p>
                            </div>
                            <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i class="fas fa-trash-alt mr-1"></i> Remove item </a>
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
