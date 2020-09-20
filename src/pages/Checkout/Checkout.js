/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useState} from 'react'
import {Container, Button, Form} from 'react-bootstrap'

import {topLeft,itemHead, itemLeft, itemRight, detailRight} from './Checkout.styles';
import CartProduct from '../../components/cartItem/cartItem';

const Checkout = () => {

    const [user, setUser] = useState({
        fullName: 'Ridho Abdul Majid',
        detailAdress: 'Citayam',
        noHandphone: '087882252815'
    })
    const [cart, setCart] = useState([{
        image: "https://img-a.udemycdn.com/course/750x422/147028_d030_9.jpg",
        productName: "ROYAL CANIN KITTEN",
        quantity: 2,
        price: 100000
    }])
    let initialValue=0;

    const totalPrice = cart.map(item => {
        return item.quantity * item.price
    })
    const hitung = (accumulator, item) => {
        return accumulator + item;
      };
    const getQty = cart.map(item => {
        return item.quantity
    })
    const qty = getQty.reduce(hitung, initialValue)
    return(
        <Container>
            <div css={topLeft}>
            <h3>Checkout</h3>
            <h5>Shipping Address :</h5>

            <h6>{user.fullName}</h6>
            <h6>{user.detailAdress}</h6>
            <h6>{user.noHandphone}</h6>

            <Button variant="primary">Enter A Different Address</Button>{' '}
            </div>

            <div css={itemHead}>
                <div css={itemLeft}>
                    <div>
                        <CartProduct data={cart} />
                    </div>
                    <div style={{width: '300px'}}>
                    <Form>
                    <Form.Group>
                        <Form.Label>Choose Shipment</Form.Label>
                        <Form.Control as="select">
                            <option>JNE (Rp.12.000 IDR)</option>
                        </Form.Control>
                    </Form.Group>
                </Form> 
                    </div>

                </div>
                   
                <div css={itemRight}>
                    <div css={detailRight}>
                        <h5>Chekout Display</h5>
                        <h6>{`Subtotal (${qty} items): Rp.${totalPrice}`}</h6>
                        <h6>Shipping Fee : Rp.12.000</h6>

                        <Button variant="primary">Pick Payment Methods</Button>{' '}                        
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Checkout;
