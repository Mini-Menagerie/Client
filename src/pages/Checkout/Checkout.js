/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import {
    listCheckoutProduct,
    listCheckoutDetails,
    button,
    userDetails,
} from "./Checkout.styles";
import CartProduct from "../../components/cartItem/cartItem";

const Checkout = () => {
    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://x6nw5.sse.codesandbox.io/checkout",
            { token, cart }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    const productCart = useSelector((state) => state.addToCart);
    console.log(productCart, "product cart");

    const [user, setUser] = useState({});
    const userLogin = JSON.parse(localStorage.getItem("user"));

    const getUser = async () => {
        // setLoading(true);
        const response = await axios.get(
            `http://localhost:8000/userAccount/${userLogin.id}`
        );
        setUser(response.data.result);
        // setLoading(false);
    };
    
    useEffect(() => {
        getUser();

        //eslint-disable-next-line
    }, []);
    console.log(user);
    console.log(user.idUser);

    const cart = JSON.parse(localStorage.getItem("cartProduct"));
    // let initialValue = 0;

    const price = cart.map((item) => {
        return item.price * item.quantity;
    });
    // const hitung = (accumulator, item) => {
    //     return accumulator + item;
    // };
    // const getQty = cart.map((item) => {
    //     return item.quantity;
    // });
    // const qty = getQty.reduce(hitung, initialValue);
    let totalPrice = price.reduce((a, b) => a + b);

    let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));

    const storeAddress = (event) => {
        event.preventDefault();
    };
    return (
        <Container>
            <Row style={{ marginTop: "10px" }}>
                <h1>User Details</h1>
            </Row>
            <Row>
                <Col xs={7} css={userDetails}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={
                                        user.idUser !== undefined &&
                                        user.idUser.fullName
                                    }
                                    type="text"
                                    placeholder="Enter name"
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={
                                        user.email !== undefined && user.email
                                    }
                                    type="email"
                                    placeholder="Email"
                                    disabled
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Address" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group> */}

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <div css={button}>
                            <Button>Save Address</Button>
                        </div>
                    </Form>
                </Col>
                <Col></Col>
            </Row>

            <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col xs={7} css={listCheckoutProduct}>
                    <CartProduct data={cart} />
                    <p className="text-primary">
                        <i class="fas fa-info-circle mr-1"></i>Do not delay the
                        purchase, adding items to your cart does not mean
                        booking them.
                    </p>
                </Col>
                <Col xs={4} css={listCheckoutDetails}>
                    <Col>
                        <Row style={{ marginBottom: "15px" }}>
                            <h5 style={{ fontWeight: "600" }}>
                                Payment Details
                            </h5>
                        </Row>
                        <Row
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Col xs={7} style={{ paddingLeft: "0px" }}>
                                <p>Subtotal ({cartProduct.length} items):</p>
                            </Col>
                            <Col xs={5}>
                                <p>Rp. {totalPrice}</p>
                            </Col>
                        </Row>
                        <Row
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Col xs={7} style={{ paddingLeft: "0px" }}>
                                <p>Shipping Fee:</p>
                            </Col>
                            <Col xs={5}>
                                <p>Rp. 10000</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs={7} style={{ paddingLeft: "0px" }}>
                                <p style={{ fontWeight: "600" }}>Total:</p>
                            </Col>
                            <Col xs={5}>
                                <p style={{ fontWeight: "600" }}>
                                    Rp {totalPrice + 10000}
                                </p>
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
                                amount={(totalPrice + 10000) * 100}
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
