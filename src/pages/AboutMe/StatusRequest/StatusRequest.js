/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import {
    head,
    // statusInfo,
    mainOne,
    mainBody,
} from "./StatusRequest.styles";

const StatusRequest = () => {
    
    let userData = JSON.parse(localStorage.getItem("user"))

    const [statusRequest, setStatusRequest] = useState([]);
    const [, setErrorMessage] = useState();

    useEffect(() => {
        const url = `http://localhost:8000/formRequest/all/${userData.idUser._id}`;
        axios
            .get(url)
            .then(function (result) {
                console.log(result.data.filterReq);
                setStatusRequest(result.data.filterReq);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
            });
    }, [setErrorMessage]);

    return (
        <div>
            <div css={head}>
                <h2>Adoption Status Request</h2>
            </div><br />
            <div>
                {statusRequest.map((e) => (
                    <div key={statusRequest}>
                        <Card>
                            <Card.Header>
                                <b>{e.idPet!== undefined && e.idPet.petName}</b> - <span>{e.idBreed !== undefined && e.idBreed.breedName}</span>
                            </Card.Header>
                            <Card.Body css={mainBody}>
                                <Row>
                                    <Col css={mainOne}>
                                        <img
                                            src={e.idPet !== undefined && e.idPet.image}
                                            alt="broken-image"
                                            style={{
                                                objectFit: "cover",
                                                height: "200px",
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <p>Name : {e.idPet !== undefined && e.idPet.petName}</p>
                                        <p>Breed : {e.idPet !== undefined && e.idPet.idBreed.breedName}</p>
                                        <p>Age : {e.idPet !== undefined && e.idPet.age}</p>
                                        <p>Size : {e.idPet !== undefined && e.idPet.size}</p>
                                    </Col>
                                    <Col>
                                        <p>Weight : {e.idPet !== undefined && e.idPet.weight}</p>
                                        <p>Gender : {e.idPet !== undefined && e.idPet.gender}</p>
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

export default StatusRequest;