/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

import {
  button,
  itemDetails,
  paymentDetails,
  container,
  quantity
} from "./ShoppingCart.styles";

const stripePromise = loadStripe("pk_test_51HUN7sAjKylxkZ24d0YxRuxiDVNFIoEAsNmyg8WFxzcExHz1cPsfdouNHOsw3E9SJQpQ19rG2TFByvkQ3MNzAXey00DUfRySaY");

const ShoppingCart = () => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useState({
    loading: false,
    error: null,
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setData(cart);
  }, [])

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(data));
  }, [data]);

  if (data === null) {
    Swal.fire({
      imageUrl: 'https://thumbs.gfycat.com/AccurateAgreeableDairycow.webp',
      title: 'You dont have any purchases',
      text: 'this page will be redirected automatically',
      timer: 3000,
      showConfirmButton: false,
      timerProgressBar: true,
    }).then(function () {
      window.location.replace('/')
    })
  }

  const handleChange = (e, id) => {
    const { value } = e.target;

    setData((prev) =>
      prev.map((item) => {
        if (item._id !== id) {
          return item;
        }
        return { ...item, quantity: parseInt(value) };
      })
    );
  }

  const handleClick = async (event) => {
    // Call your backend to create the Checkout session.
    dispatch({ type: 'setLoading', payload: { loading: true } });
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: data.map(item => (
        {
          price: item.stripe,
          quantity: item.quantity
        })),
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/cart`,
    });
    if (error) {
      dispatch({ type: 'setError', payload: { error } });
      dispatch({ type: 'setLoading', payload: { loading: false } });
    }
  };

  let itemPriceX = data.map((item) => {
    return item.price * item.quantity;
  });

  console.log(itemPriceX);

  // let totalPrice = itemPriceX.reduce((a, b) => a + b);


  return (
    <Container css={container}>
      <Col xs={7} css={itemDetails}>
        <div>
          {data.map((item) => (
            <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <Col xs={7}>
                <h6>{item.productName}</h6>
              </Col>
              <Col xs={2} css={quantity}>
                <input
                  key={item._id}
                  type="number"
                  placeholder="qty"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleChange(e, item._id)}
                />
              </Col>
              <Col xs={3}>
                <h6>Rp. {item.price * item.quantity}</h6>
              </Col>
            </Row>
          ))}
          {/* {data.map((item) => (
            <div key={item.id}>{item.productName}</div>
          ))} */}
        </div>
        <div>
          <p className="text-primary">
            <i class="fas fa-info-circle mr-1"></i>
          Do not delay the purchase, adding items to your cart does not mean booking them.
          </p>
        </div>
      </Col>

      <Col xs={4} css={paymentDetails}>
        <Row>
          <Col>
            <h6>Total Price:</h6>
          </Col>
        </Row>
        <div css={button} onClick={handleClick} disabled={state.loading}>
          <Button>Checkout Now</Button>
        </div>
      </Col>
    </Container>
  );
}

export default ShoppingCart;
