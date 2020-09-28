import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
    // const location = useLocation();
    // const sessionId = location.search.replace('?session_id=', '');

    const removeItem = () => localStorage.removeItem("cartProduct")

    useEffect(() => { 
        removeItem();
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