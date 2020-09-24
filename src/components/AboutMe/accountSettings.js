/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Form } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom'

import PrimaryButton from "../../components/Button/Button";

const AccountSettings = ({ account, props }) => {
    // const [profile, setProfile] = useState(false)
    //onclick={props.handleEditProfile} di icon, onChange={handleEditProfile}
    return (
        <Container fluid>
            <div>
                <Col xs={4}>
                    <img src={account.avatar} alt="avatar" />
                </Col>
                <Col xs={8}>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control
                                disabled
                                placeholder={account.fullName}
                            />
                            <i class="fas fa-edit"></i>
                        </Form.Group>
                    </Row>
                </Col>
                <PrimaryButton>Submit Changes</PrimaryButton>
            </div>
        </Container>
    );
};

export default AccountSettings;
