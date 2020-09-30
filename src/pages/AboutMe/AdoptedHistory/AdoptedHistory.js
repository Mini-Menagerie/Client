/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import { head, listInfo, mainOne, dated, desc } from "./AdoptedHistory.styles";

const AdoptedHistory = () => {
    const [adoptedHistory, setAdoptedHistory] = useState([]);
    const [, setErrorMessage] = useState();

    useEffect(() => {
        const url = "http://localhost:8000/listAdoptionTransaction";
        axios
            .get(url)
            .then(function (result) {
                setAdoptedHistory(result.data.result);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
            });
    }, [setErrorMessage]);

    return (
        <div>
            <div css={head}>
                <h2>Adopted Pet History</h2>
            </div>
            <div css={listInfo}>
                {adoptedHistory.map((e) => (
                    <div key={e._id}>
                        <Card>
                            <Card.Header className="text-center">
                                <b>{e.idPetUpForAdoption.status}</b>
                            </Card.Header>
                            <Card.Body>
                                <div css={dated}>
                                    <span>{e.createdAt}</span>
                                </div>
                                <Row>
                                    <Col xs={6} css={mainOne}>
                                        <img src="" alt="mberrrr" />
                                    </Col>
                                    <Col css={desc}>
                                        <div>
                                            <b>{e.petName}</b> -{" "}
                                            <span>{e.breed}</span>
                                            <p>
                                                Adoption Fee : Rp.
                                                {e.idPetUpForAdoption.fee}
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

export default AdoptedHistory;
