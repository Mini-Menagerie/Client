/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Col, Row, Container, Form } from 'react-bootstrap'
import axios from "axios"
import ReactFilestack from 'filestack-react';

import PrimaryButton from "../Button/Button";
import { useState, useEffect } from 'react';

import {
    upload,
    uploadPhoto
} from './EditProfile.styles'


const EditProfile = ({edit, handleClose}) => {

    console.log(edit);

    const [user, setUser] = useState([]);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        noHandphone:"",
        state: "",
        province: "",
        zipcode: "",
        country: "",
        detailAddress: "",
        avatar: ""
    });


    let userData = JSON.parse(localStorage.getItem("user")) //key di local storage

    
    const fetchProfile = async () => {
        let response = await axios.get(
            `http://localhost:8000/users/${userData.idUser}` //if let id=userData.id then ${id}, id(account), idUser(users)
        ); //endpoint
        console.log(response);
        setUser(response.data.result);
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
                `http://localhost:8000/users/${userData.idUser}`, form
            )
            .then((result) => 
            console.log(result))
            // .then(() => window.location.reload())
        )
        .catch((error) =>
        console.log(error))
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div>
            <Form onSubmit={handleEditProfile}>
                <Form.Row>
                <ReactFilestack
                    apikey={"AugqfuGzTQouENQs5OOe2z"}
                    customRender={({ onPick }) => (
                        <div css={uploadPhoto}>
                        <PrimaryButton css={upload} onClick={onPick}>Upload Photo</PrimaryButton>
                        </div>
                    )}
                   onSuccess= {(res) => setForm({
                       ...form,
                    avatar: res.filesUploaded[0].url
                   })}
                    />
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Name:
                            </Form.Label>
                                <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser !==undefined && edit.idUser.fullName} value={form.fullName} name="fullName" onChange={handleChange}/>
                                </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Email:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.email} value={edit.email}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Phone Number:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser.noHandphone} value={form.noHandphone} name="noHandphone" onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Location:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser.country} value={form.country} name="country" onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Province:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser.province} value={form.province} name="province" onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                City:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser.state} value={form.state} name="state" onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Zip Code:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser.zip_code} value={form.zip_code} name="zip_code" onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="4">
                                Address:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder={edit.idUser.detailAddress} value={form.detailAddress} name="detailAddress" onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                        {/* <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Location:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder={edit.idUser.country} value={form.country} name="country" onChange={handleChange}/>
                            </Col>
                        </Form.Group> */}
                </Form.Row>
                <PrimaryButton type="submit" onClick={()=> {handleClose()}}>Submit</PrimaryButton>
            </Form>
        </div>
    )

}

export default EditProfile;