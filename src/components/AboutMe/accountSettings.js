/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios"


import PrimaryButton from "../../components/Button/Button";
import {
    margin,
    changePassword,
    boxes
} from './accountSettings.styles'

const AccountSettings = ({ account }) => {
    console.log(account);

    const [user, setUser] = useState([]);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    let userData = JSON.parse(localStorage.getItem("user"))

    const fetchData = async (event) => {
        let response = await axios.get(
            `http://localhost:8000/userAccount/${userData.id}` //if let id=userData.id then ${id}
        ); //endpoint
        console.log(response);
        setForm({
            email: response.data.result.email,
            password: response.data.result.password

        })
    };

    const handleEditAccount = async (event) => {
        event.preventDefault();
        return (
            axios.put(
                `http://localhost:8000/userAccount/${userData.id}`, form
            )
            .then(() => window.location.reload())
        )
    }

    useEffect(() => {
        fetchData();
    })
    console.log();

    return (
        <Container fluid css={margin}>
            <div>
                <Col xs={8}>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Email: {form.email}</Form.Label>
                        </Form.Group>
                    </Row>
                    <Row>
                        <h5>Change Email:</h5>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                                <Form.Control
                                    placeholder="New Email"
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <PrimaryButton>Update Email</PrimaryButton>
                    </Row>
                    <Row css={changePassword}>
                        <h5>Change Password:</h5>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                                <Form.Control
                                    placeholder="Current Password"
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                                <Form.Control
                                    placeholder="New Password"
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                                <Form.Control
                                    placeholder="Confirm Password"
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <PrimaryButton type="submit" onSubmit={handleEditAccount}>Update Password</PrimaryButton>
                    </Row>
                </Col>
            </div>
        </Container>
    );
};

export default AccountSettings;
