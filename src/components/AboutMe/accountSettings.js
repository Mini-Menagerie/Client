/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Col, Row, Container, Form } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

import PrimaryButton from "../../components/Button/Button";

const accountSettings = ({account, props}) => {
    console.log(account);

    const [profile, setProfile] = useState(false)

    return (
        <Container fluid>
            <div>
                <Col xs={4}>
                <img src={account.avatar}/>
                </Col>
                <Col xs={8}>
                    <Row>
                    <Form.Group controlId="formGridAddress1">
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control disabled
                                    placeholder={user.fullName}
                                />
                                <i class="fas fa-edit" onclick={props.handleEditProfile}></i>
                            </Form.Group>
                    </Row>
                </Col>
                <PrimaryButton onChange={handleEditProfile}>Submit Changes</PrimaryButton>
            </div>
        </Container>
    )
}

export default accountSettings;