/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import { head, mainOne, mainBody } from "./Approve.styles";

const ApproveRequest = () => {

    let userData = JSON.parse(localStorage.getItem("user"))

    const [statusRequest, setStatusRequest] = useState([]);
    const [, setErrorMessage] = useState();

    useEffect(() => {
        const url = `http://localhost:8000/formRequest/all/${userData.idUser._id}`;
        axios
            .get(url)
            .then(function (result) {
                console.log(result.data);
                setStatusRequest(result.data.filterReq);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
            });
    }, [setErrorMessage]);

    return (
        <div>
            <div css={head}>
                <h2>Approve Request</h2>
            </div>
            <div>
                {statusRequest.map((e) => (
                    <div key={statusRequest}>
                        <Card>
                            <Card.Header>
                                <b>{e.idPet.petName}</b> - <span>{e.idPet.idBreed.breedName}</span>
                            </Card.Header>
                            <Card.Body css={mainBody}>
                                <Row>
                                    <Col css={mainOne}>
                                        <img
                                            src={e.idPet.image}
                                            alt="mberrrr"
                                            style={{
                                                objectFit: "cover",
                                                height: "200px",
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <p>Name : {e.idPet.petName}</p>
                                        <p>Breed : {e.idPet.idBreed.breedName}</p>
                                        <p>Age : {e.idPet.age}</p>
                                        <p>Size : {e.idPet.size}</p>
                                    </Col>
                                    <Col>
                                        <p>Weight : {e.idPet.weight}</p>
                                        <p>Gender : {e.idPet.gender}</p>
                                        <br />
                                        <h5>Status: {e.status}</h5>
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

export default ApproveRequest;
