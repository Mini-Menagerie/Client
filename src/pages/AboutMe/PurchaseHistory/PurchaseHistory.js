/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row, Container, Accordion } from "react-bootstrap";
import { useState, useEffect } from "react";
import format from 'date-fns/format'
import axios from '../../../helpers/axios';

import ColoredLine from '../../../components/ColoredLine'
import { head, listInfo, mainOne, dated, desc } from "./PurchaseHistory.styles";

const PurchaseHistory = () => {
    const [purchaseHistory, setPurchaseHistory] = useState([]);
    // const [, setErrorMessage] = useState();

    const getTransactionDetails = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const url = `transactionDetails/history/${user.idUser._id}`

        const response = await axios.get(url)
        setPurchaseHistory(response.data.filterHistory)
    }
    useEffect(() => {
        getTransactionDetails()
    }, [])

    // let date = '2020-09-29T08:16:26.224Z'
    let parseXdate = format(new Date('2020-09-29T08:16:26.224Z'), 'dd MMMM yyyy')
    console.log(parseXdate);


    return (
        <Container>
            <Row css={head}>
                <h2>History Purchase</h2>
            </Row>
            {/* <Row>
                <Accordion style={{ width: '100%' }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">123</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row> */}

            <Row >
                {purchaseHistory.map(value => (
                    <Accordion style={{ width: '100%', marginBottom: '10px' }}>
                        <Card>
                            <Row style={{ display: 'flex' }}>
                                <Col style={{ paddingRight: '0px' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{ width: '100%' }}>{value.idTransaction !== null && value.idTransaction !== undefined && value.idTransaction._id}</Accordion.Toggle>
                                </Col>
                                <Col style={{ textAlign: 'right', paddingLeft: '0px' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{ width: '100%' }}>{format(new Date(value.idTransaction !== null && value.idTransaction !== undefined && value.idTransaction.createdAt), 'HH:mm, dd MMMM yyyy')}</Accordion.Toggle>
                                </Col>
                            </Row>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {value.idProduct.map(value => (
                                        <Row>
                                            <Col xs={10}>
                                                <h6>{value.productName}</h6>
                                            </Col>
                                            <Col xs={2}>
                                                <h6>Rp. {value.price}</h6>
                                            </Col>
                                            <ColoredLine />
                                        </Row>
                                    ))}
                                    <Row>
                                        <Col xs={10}>
                                            <h6 style={{ textAlign: 'right', fontWeight: '600' }}>Total: </h6>
                                        </Col>
                                        <Col xs={2}>
                                            <h6 style={{ fontWeight: '600' }}>Rp. {value.idTransaction !== null && value.idTransaction !== undefined && value.idTransaction.totalPrice}</h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))}
            </Row>

            {/* <div css={listInfo}>
                {purchaseHistory.map((value) => (
                    <div key={value._id}>
                        <Card>
                            <Card.Body>
                                <div css={dated}>
                                    <span>{value.createdAt}</span>
                                </div>
                                <Row>
                                    <Col xs={6} css={mainOne}>
                                        <img src={value.idProduct.image !== undefined && value.idProduct.image[0].image} alt="product" />
                                    </Col>
                                    <Col css={desc}>
                                        <div>
                                            <b>{value.idProduct.productName}</b> -{" "}
                                            <span>{value.idProduct.categories}</span>
                                            <p>
                                                IDR
                                                {value.idTransaction !== null && value.idTransaction !== undefined && value.idTransaction.totalPrice}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div> */}
        </Container>
    );
};

export default PurchaseHistory;
