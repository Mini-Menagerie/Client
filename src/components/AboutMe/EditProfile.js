import { Col, Row, Container, Form } from 'react-bootstrap'
import axios from "axios"

import PrimaryButton from "../Button/Button";
import { useState } from 'react';

const EditProfile = ({edit}) => {

    const [user, setUser] = useState([]);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        state: "",
        province: "",
        zipcode: "",
        country: "",
        detailAddress: ""
    });

    const fetchProfile = async () => {
        let result = await axios.get(
            `http://localhost:8000/users/${id}`
        ); //endpoint
        setUser(result.data.result);
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
    })
    }

    const handleEditProfile = async (event) => {
        event.preventDefault();
        return (
            axios.put(
                `http://localhost:8000/users/${id}`, form
            )
        )
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Edit Profile</h1>
            <Form>
                <Form.Row>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Name:
                            </Form.Label>
                                <Col sm="10">
                                <Form.Control type="text" placeholder={edit.fullName} value={edit.fullname} onChange={handleChange}/>
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder={edit.email} value={edit.email}/>
                            </Col>
                        </Form.Group>
                </Form.Row>
                <PrimaryButton type="submit" onClick={handleEditProfile}>Submit</PrimaryButton>
            </Form>
        </div>
    )

}