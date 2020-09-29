/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import { head, mainOne, mainBody, border, carbodyT } from "./Approve.styles";
import FormPopUp from "../../../components/AdoptionFormPopUp/adoptionFormPopUp";

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
                            <Card.Body css={carbodyT}>
                              <h5 css={border}>Adopter Data</h5><br/>
                            </Card.Body>
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
                                        <p>Full Name : {e.idPet.petName}</p>
                                        <p>Email : {e.idPet.idBreed.breedName}</p>
                                        <p>Gender : {e.idPet.age}</p>
                                        <p>Country : {e.idPet.size}</p>
                                    </Col>
                                    <Col>
                                        <p>Province : {e.idPet.weight}</p>
                                        <p>City : {e.idPet.gender}</p>
                                        <p>Zip Code : {e.idPet.gender}</p>
                                        <p>Address : {e.idPet.gender}</p>
                                        <br />
                                        <FormPopUp />
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
