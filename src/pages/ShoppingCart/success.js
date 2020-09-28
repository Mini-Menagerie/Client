import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import axios from '../../helpers/axios'

const Success = () => {
    // const location = useLocation();
    // const sessionId = location.search.replace('?session_id=', '');
    const [transactionId, setTransactionId] = useState("")
    const userData = JSON.parse(localStorage.getItem("user"));
    const [data, setData] = useState([]);

    const getTotalPrice = localStorage.getItem('totalPrice')
    const removeItem = () => localStorage.removeItem("cartProduct")

    // const createTransaction = () => {
    //     return axios.post("transaction/create", {
    //         idUser: userData.idUser._id,
    //         totalPrice: getTotalPrice
    //     });
    // };

    // const getTransaction = () => {
    //     return axios.get("transaction");
    // }
    const Transaction = async () => {
        const setTransaction = await axios.post("transaction/create", {
            idUser: userData.idUser._id,
            totalPrice: getTotalPrice
        });
        let id = userData.idUser._id
        const getTransaction = await axios.get("transaction");
        let result = await getTransaction.data.result;
        let trans = result.filter(item => ( item.idUser._id === id))
        let latestTrans = trans[trans.length -1]
        console.log(latestTrans);
        console.log(latestTrans._id);
        setTransactionId(latestTrans._id);
        let cartProduct = JSON.parse(localStorage.getItem('cartProduct'))
        setTimeout(() => {
            console.log(transactionId);
             axios.post("transactionDetails/create", {
                idTransaction: transactionId,
                idProduct: cartProduct._id
            })
            
        }, 4000);

    }

    const TransactionDetails = async () => {
    }
    // const map = getTransaction.map(item => (item._id))
    // console.log(map);

    useEffect(() => {
        // createTransaction();
        // getTransaction();
        Transaction();
        const cart = JSON.parse(localStorage.getItem("cartProduct")) || [];
        setData(cart);
    }, [])


    return (
        <div>

            {/* <div className="sr-main">
                <header className="sr-header">
                    <div className="sr-header__logo"></div>
                </header>
                <div className="sr-payment-summary completed-view">
                    <h1>Your payment succeeded</h1>
                    <h4>Checkout Session ID:</h4>
                </div>
                <div className="sr-section completed-view">
                    <div className="sr-callout">
                        <pre>{sessionId}</pre>
                    </div>
                    <Link to="/">Back to Homepage</Link>
                </div>
            </div> */}

            <div className="jumbotron text-center">
                <h1 className="display-3">Your payment succeeded</h1>
                <p className="lead"><strong>Please check your email</strong> for invoice</p>
                <hr />
                <p>
                    Having trouble? <a href="#">Contact us</a>
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
                </p>
            </div>
        </div>


    );
};

export default Success;