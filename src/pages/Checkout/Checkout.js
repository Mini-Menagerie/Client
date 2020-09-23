/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Button, Row, Col } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import {
    topLeft,
    listCheckoutProduct,
    listCheckoutDetails,
    button
} from "./Checkout.styles";
import CartProduct from "../../components/cartItem/cartItem";

const Checkout = () => {

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://x6nw5.sse.codesandbox.io/checkout",
            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    const productCart = useSelector(state => state.addToCart)

    const [product] = useState({
        name: "Tesla Roadster",
        price: 64998.67,
        description: "Cool car"
    });

    console.log(productCart, 'product cart')
    const [user,] = useState({
        fullName: "Ridho Abdul Majid",
        detailAdress: "Citayam",
        noHandphone: "087882252815",
    });
    // const [cart,] = useState([
    //     {
    //         image:
    //             "https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg",
    //         productName: "ROYAL CANIN KITTEN",
    //         quantity: 2,
    //         price: 100000,
    //     },
    //     {
    //         image:
    //             "https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg",
    //         productName: "ROYAL CANIN ADULT",
    //         quantity: 3,
    //         price: 100000,
    //     },
    //     {
    //         image:
    //             "https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg",
    //         productName: "ROYAL CANIN ADULT",
    //         quantity: 3,
    //         price: 100000,
    //     },
    // ]);

    const cart = JSON.parse(localStorage.getItem('cartProduct'))
    let initialValue = 0;

    const price = cart.map((item) => {
        return item.price * item.quantity;
    });
    const hitung = (accumulator, item) => {
        return accumulator + item;
    };
    const getQty = cart.map((item) => {
        return item.quantity;
    });
    const qty = getQty.reduce(hitung, initialValue);
    let t = price.reduce((a, b) => a + b);

    let cartProduct = JSON.parse(localStorage.getItem('cartProduct'))
    return (
        <Container>
            <div css={topLeft}>
                <h3>Checkout</h3>
                <h5>Shipping Address :</h5>
                <h6>{user.fullName}</h6>
                <h6>{user.detailAdress}</h6>
                <h6>{user.noHandphone}</h6>
                <Button variant="primary">
                    Enter A Different Address
                </Button>{" "}
            </div>

            <div>
                <p>{cartProduct[0].productName}</p>
            </div>

            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Col xs={7} css={listCheckoutProduct}>
                    <CartProduct data={cart} />
                </Col>
                <Col xs={4} css={listCheckoutDetails}>
                    <Col>
                        <Row style={{ marginBottom: '15px' }}>
                            <h5 style={{ fontWeight: '600' }}>Payment Details</h5>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <Col xs={7} style={{ paddingLeft: '0px' }}>
                                <p>Subtotal (${cartProduct.length} items):</p>
                            </Col>
                            <Col xs={5}>
                                <p>Rp. {t}</p>
                            </Col>
                        </Row>
                        <Row style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <Col xs={7} style={{ paddingLeft: '0px' }}>
                                <p>Shipping Fee:</p>
                            </Col>
                            <Col xs={5}>
                                <p>Rp. 12000</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs={7} style={{ paddingLeft: '0px' }}>
                                <p style={{ fontWeight: '600' }}>Total:</p>
                            </Col>
                            <Col xs={5}>
                                <p style={{ fontWeight: '600' }}>Rp {t + 12000}</p>
                            </Col>
                        </Row>
                        <div css={button}>
                            <StripeCheckout
                                name="Mini Menagerie Co."
                                description="Necessities For Your New Friend"
                                locale="id"
                                stripeKey="pk_test_51HUN7sAjKylxkZ24xTuIpYu3NQco33z811UgWTi4ihOvCKIf435HdOw9sGOrii2xvAo3wrrKkl4UHdOx9XJSFJP000su8RU6tk"
                                token={handleToken}
                                currency="IDR"
                                amount={(t + 12000)*100}
                                billingAddress
                                shippingAddress
                            />
                            {/* <Button variant="primary">Buy Now</Button> */}
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
