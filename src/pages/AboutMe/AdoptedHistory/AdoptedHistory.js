/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import { head, listInfo, mainOne, dated, desc } from "./AdoptedHistory.styles";

const AdoptedHistory = () => {
    const [adoptedHistory, setAdoptedHistory] = useState([]);
    const [, setErrorMessage] = useState();
    let userData = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        const url = `http://localhost:8000/listAdoptionTransaction/history/${userData.idUser._id}`;
        axios
            .get(url)
            .then(function (result) {
                setAdoptedHistory(result.data.filterReq);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
            });
    }, [setErrorMessage]);
    console.log(adoptedHistory);

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
                                <b>{e.status}</b>
                            </Card.Header>
                            <Card.Body>
                                <div css={dated}>
                                    <span>{e.updatedAt}</span>
                                </div>
                                <Row>
                                    <Col xs={6} css={mainOne}>
                                        <img src={e.idPetUpForAdoption !== null && e.idPetUpForAdoption.idPet.image} alt="mberrrr" />
                                    </Col>
                                    <Col css={desc}>
                                        <div>
                                            <b>{e.petName}</b> -{" "}
                                            <span>{e.breed}</span>
                                            <p>
                                                Adoption Fee : Rp.
                                            <b>{e.idPetUpForAdoption !== null && e.idPetUpForAdoption.fee}</b>
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
