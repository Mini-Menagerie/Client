/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import { head, listInfo, mainOne, dated, desc } from "./PurchaseHistory.styles";

const PurchaseHistory = () => {
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    const [, setErrorMessage] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        const url = `http://localhost:8000/transactionDetails/history/${user.idUser._id}`;
        axios
            .get(url)
            .then(function (result) {
                setPurchaseHistory(result.data.result);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
            });
    }, [setErrorMessage]);

    return (
        <div>
            <div css={head}>
                <h2>Purchase History</h2>
            </div>
            <div css={listInfo}>
                {purchaseHistory.map((e) => (
                    <div key={e._id}>
                        <Card>
                            <Card.Body>
                                <div css={dated}>
                                    <span>{e.createdAt}</span>
                                </div>
                                <Row>
                                    <Col xs={6} css={mainOne}>
                                        <img
                                            src={e.idProduct.image[0].image}
                                            alt="mberrrr"
                                        />
                                    </Col>
                                    <Col css={desc}>
                                        <div>
                                            <b>{e.idProduct.productName}</b> -{" "}
                                            <span>
                                                {e.idProduct.categories}
                                            </span>
                                            <p>
                                                Adoption Fee : Rp.
                                                {e.idTransaction.totalPrice}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchaseHistory;
