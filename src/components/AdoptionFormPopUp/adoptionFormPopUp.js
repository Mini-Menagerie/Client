/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Container, Row, Col, Dropdown, Jumbotron } from "react-bootstrap";
import axios from "axios";

import AdoptionForm from "../../pages/AdoptionForm/AdoptionForm";

const FormPopUp = ({ data }) => {
    return (
        <Container fluid>
            <div>
                <h1>Form Submission</h1>
            </div>
            <div>
                <Col>
                    <Row>
                        <p>1. Duration working outside of your home:</p>
                    </Row>
                    <Row>
                        <p>2. Do you own or rent your home:</p>
                    </Row>
                    <Row>
                        <p>3. Do you have other pets:</p>
                    </Row>
                    <Row>
                        <p>5. Have you ever given up a pet for adoption:</p>
                    </Row>
                    <Row>
                        <p>6. Are there children living in the house:</p>
                    </Row>
                    <Row>
                        <p>7. Do you keep your pets in a cage:</p>
                    </Row>
                    <Row>
                        <p>8. What is your monthly income?</p>
                    </Row>
                    <Row>
                        <p>
                            9. Finally, tell us why you'd like to adopt this
                            pet:
                        </p>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <input
                            onChange={(event) =>
                                setWorkingDuration(event.target.value)
                            }
                        />
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                    <Row>
                        <p></p>
                    </Row>
                </Col>
            </div>
        </Container>
    );
};

export default FormPopUp;
