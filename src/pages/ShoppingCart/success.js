import axios from '../../helpers/axios';
import React, { useEffect } from 'react';

const Success = () => {

    const getCart = () => {
        const cart = JSON.parse(localStorage.getItem('cartProduct'))
        let product = cart.map(item => {
            return item._id
        })
        console.log(product)
        return product
    }
    const getUser = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        const userId = user.idUser._id
        console.log(userId);
        return userId
    }
    const getTotalPrice = () => {
        const cart = JSON.parse(localStorage.getItem('cartProduct'))
        let totalPrice = cart.map(item => parseInt(item.price)).reduce((a, b) => a + b, 0)
        return totalPrice
    }
    const getIdTrans = () => {
        const id_trans = localStorage.getItem('id_trans');
        return id_trans
    }

    const addNewTransaction = async () => {
        let userId = await getUser()
        let totalPrice = await getTotalPrice()
        let newTrans = await axios.post('transaction/create', {
            idUser: userId,
            totalPrice: totalPrice
        })
        if (newTrans.status === 200) {
            console.log('success to add new transaction');
            localStorage.setItem('id_trans', newTrans.data.result._id)
        }
    }
    const addNewTransactionDetails = async () => {
        let product = await getCart()
        let idTrans = await getIdTrans()
        let newTransDetail = await axios.post('transactionDetails/create', {
            idTransaction: idTrans,
            idProduct: product
        })
        if (newTransDetail.status === 200) {
            console.log('succes to create transaction');
            localStorage.setItem('id_trans_details', newTransDetail.data.result._id)
            localStorage.removeItem('cartProduct')
            localStorage.removeItem('id_trans')
        }
    }
    useEffect(() => {
        getCart()
        getUser()
        getTotalPrice()
        getIdTrans()
        addNewTransaction()
        setTimeout(() => {
            addNewTransactionDetails()
        }, 5000);

    }, [addNewTransaction])


    return (
        <div>
            <div className="jumbotron text-center">
                <h1 className="display-3">Your payment succeeded</h1>
                <p className="lead"><strong>Please check your email</strong> for invoice</p>
                <hr />
                <p>
                    Having trouble? <a href="/">Contact us</a>
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
                </p>
            </div>
        </div>


    );
};

export default Success;