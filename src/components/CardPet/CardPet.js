/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { margin, petImage } from "./CardPet.styles";

const CardPet = ({ petCards }) => {
    return (
        <Row>
            {petCards.map((e) => (
                <Col md={3} css={margin} key={`${e._id}`}>
                    <Link to={`/pet/${e._id}`}>
                        <Card css={petImage}>
                            <Card.Img variant="top" src={e.image} />
                            <Card.Body>
                                <Card.Title>
                                    <h4>
                                        <b>{e.petName}</b>
                                    </h4>
                                </Card.Title>
                                <Card.Text>
                                    {e.idBreed.breedName}
                                    <br />
                                    {e.gender}, {e.age} Years Old
                                    <br />
                                    {e.location}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default CardPet;
