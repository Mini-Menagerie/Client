/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Form } from "react-bootstrap";
import axios from "axios";
import ReactFilestack from "filestack-react";

import PrimaryButton from "../Button/Button";
import { useState, useEffect } from "react";

import { upload, uploadPhoto, fs } from "./EditProfile.styles";

const AddAdoption = ({ edit, handleClose }) => {
    console.log(edit);

    const [user, setUser] = useState([]);
    const [form, setForm] = useState({
        petName: "",
        CategoryName: "",
        breedName: "",
        country: "",
        province: "",
        city: "",
        postalCode: "",
        detailAddress: "",
        image: "",
        fee:"",
    });
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };
    const handleFilter = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };


    return (
        <div>
            <Form >
                <Form.Row>
                    <div css={fs}>
                        <ReactFilestack
                            apikey={"AugqfuGzTQouENQs5OOe2z"}
                            customRender={({ onPick }) => (
                                <div css={uploadPhoto}>
                                    <PrimaryButton
                                        style={{ margin: "10px 40%" }}
                                        css={upload}
                                        onClick={onPick}
                                    >
                                        Upload Photo
                                    </PrimaryButton>
                                </div>
                            )}
                            onSuccess={(res) =>
                                setForm({
                                    ...form,
                                    image: res.filesUploaded[0].url,
                                })
                            }
                        />
                    </div>
                    <Row style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label column sm="5">
                                        Pet Name:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder=" Pet Name"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={form.petName}
                                            name="Pet Name"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label column sm="5">
                                        Fee:
                        </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Rp. "
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={form.fee}
                                            name="Fee"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label column sm="5">
                                        Category Pet:
                                    </Form.Label>
                                    <Col sm="7">
                                    <Form.Control
                                        style={{ width: "350px" }}
                                        onChange={handleFilter}
                                        onClick=''
                                        as="select"
                                        defaultValue="Category Pet"
                                    >
                                        <option value="dog-asc">
                                            Dog
                                        </option>
                                        <option value="cat-asc">
                                            Cat
                                        </option>                                        
                                    </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label column sm="5">
                                        Breeds:
                        </Form.Label>
                                    <Col sm="7">
                                    <Form.Control
                                        style={{ width: "350px" }}
                                        onChange={handleFilter}
                                        onClick=''
                                        as="select"
                                        defaultValue="Breeds"
                                    >
                                        <option value="Breeds-asc">
                                            Siberian
                                        </option>
                                        <option value="Breeds-asc">
                                            Himalayan
                                        </option>                                        
                                    </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", justifyContent: "space-between" }}>
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label column sm="5">
                                        Country:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Country"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={form.country}
                                            name="Country"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label column sm="5">
                                        City:
                                     </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="City"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={form.city}
                                            name="City"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} >
                            <Form.Label column sm="5">
                                Adress:
                                     </Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    Placeholder="Adress"
                                    style={{ width: "735px", height: "60px" }}
                                    type="text"
                                    value={form.petName}
                                    name="Breeds"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Row>
                </Form.Row>
                <PrimaryButton
                    style={{ margin: "0 40%" }}
                    type="submit"
                    onClick={() => {
                        handleClose();
                    }}
                >
                    Submit
                </PrimaryButton>
            </Form>
        </div>
    );
};

export default AddAdoption;
