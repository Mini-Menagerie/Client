/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import format from "date-fns/format";
import axios from "../../../helpers/axios";

import { head, mainOne, dated, desc, listInfo } from "./AdoptedHistory.styles";

const AdoptedHistory = () => {
    const [adoptedHistory, setAdoptedHistory] = useState([]);
    const [, setErrorMessage] = useState();

    const getListAdoption = async () => {
        const userData = await JSON.parse(localStorage.getItem("user"));
        const url = `listAdoptionTransaction/history/${userData.idUser._id}`;
        axios
            .get(url)
            .then(function (result) {
                setAdoptedHistory(result.data.filterReq);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
            });
    }

    useEffect(() => {
        getListAdoption()
    }, []);
    console.log(adoptedHistory);
    return (
        <div>
            <div css={head}>
                <h3>Adopted Pet History</h3>
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
                                    <span>
                                        {format(new Date(e.updatedAt), "HH:mm, dd MMMM yyyy")}
                                    </span>
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
                                            <p>Owner Pet : {e.ownerPetName}</p>
                                            <p>Adopter Pet : {e.adopterPetName}</p>
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
