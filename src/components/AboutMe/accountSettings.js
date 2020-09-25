/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios"
import { EmojiFoodBeverageTwoTone } from "@material-ui/icons";


import PrimaryButton from "../../components/Button/Button";
import {
    margin,
    changePassword,
    boxes
} from './accountSettings.styles'

const AccountSettings = ({ account }) => {

    const [email, setEmail] = useState();
    const [password,setPassword] = useState({
        passwordLama: "",
        passwordBaru: ""
    });
    const [form, setForm] = useState({
        email: ""
    });

    let userData = JSON.parse(localStorage.getItem("user"))

    const fetchData = async () => {
        let response = await axios.get(
            `http://localhost:8000/userAccount/${userData.id}` //if let id=userData.id then ${id}
        ); //endpoint
            setEmail(response.data.result.email)
        // setForm({
        //     email: response.data.result.email,
        //     password: response.data.result.password

        // })
    };

    const handleEditAccount = async (event) => {
        event.preventDefault();
        return (
            axios.put(
                `http://localhost:8000/userAccountEmail/${userData.id}`, form
            )
            // .then(result => console.log(result))
            .then(result => setEmail(result.data.result.email))
            .then(() => window.location.reload())
            .catch(err => console.log(err))
        )
    }

    const handleEditPassword = async (event) => {
        event.preventDefault();
        return (
            axios.put(
                `http://localhost:8000/userAccountPassword/${userData.id}`, form
            )
            .then(result => setPassword(result.data.result.password))
            .then(() => window.location.reload())
            .catch(err => console.log(err))
        )
    }

    const handleConfirmOldPassword = (event) => {
        if(event.target.value !== password.passwordLama) {
            alert("Wrong Current Password")
        } else {
            handleConfirmNewPassword()
            //lanjut ke (handleconfirmNewPassword)
        }
    }

    // handleConfirmOldPassword = () => {
    //     await bcrypt.compare(currentPassword, )
    // if(!handleConfirmOldPassword){
    //     alert("Wrong Current Password")
    // } else {

    // }}

   const handleConfirmNewPassword = (event) => {
        if(event.target.value !== password.passwordBaru) {
            alert("Passwords Don't Match")
        } 
    }

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        fetchData();
    })

    return (
        <Container fluid css={margin}>
            <div>
                <Col xs={8}>
                <Form onSubmit={handleEditAccount}>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Email: {email}</Form.Label>
                        </Form.Group>
                    </Row>
                    <Row>
                        <h5>Change Email:</h5>
                    </Row>
                    <Row>
                        <Form.Group controlId="formGridAddress1">
                                <Form.Control 
                                    placeholder="New Email" name="email" value={form.email} onChange={handleChange}
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <PrimaryButton type="submit">Update Email</PrimaryButton>
                    </Row>
                </Form>
                <Form onSubmit={handleEditPassword}>
                    <Row css={changePassword}>
                        <h5>Change Password:</h5>
                    </Row>
                    <Row>
                        <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    placeholder="Current Password" name="passwordLama" onChange={handleConfirmOldPassword}
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    placeholder="New Password" name="passwordBaru"
                                />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    placeholder="Confirm Password" name="confirmNewPassword" value={form.password} onChange={handleChange}
                                    />
                        </Form.Group>
                    </Row>
                    <Row>
                        <PrimaryButton type="submit">Update Password</PrimaryButton>
                    </Row>
                    </Form>
                </Col>
            </div>
        </Container>
    );
};

export default AccountSettings;
