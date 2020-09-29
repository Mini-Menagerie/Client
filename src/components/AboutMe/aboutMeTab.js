/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Modal, Table } from "react-bootstrap";

import { useState, useEffect } from "react";

import PrimaryButton from "../Button/Button";
import {
    rowMargin,
    containerWrapper,
    avatar,
    editProfile,
    first,
    welcomeText,
} from "./aboutMeTab.styles";
import axios from "axios";
import EditProfile from "./EditProfile";

const AboutMeTab = ({ profile }) => {
    console.log(profile);
    let userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid css={containerWrapper}>
            <div>
                <h1 css={welcomeText}>
                    Welcome,{" "}
                    {profile.idUser !== undefined && profile.idUser.fullName}!{" "}
                </h1>
            </div>
            <div css={first}>
                <Modal
                    show={show}
                    centered
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Dialog size="lg" id="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-body modal-md">
                            <EditProfile
                                edit={profile}
                                handleClose={handleClose}
                            />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal>

                <Row css={rowMargin}>
                    <Col xs={6}>
                        <img
                            css={avatar}
                            src={
                                profile.idUser !== undefined &&
                                profile.idUser.avatar
                            }
                            alt="avatar"
                        />
                    </Col>
                    <Col xs={6}>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Name:</b></td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.fullName}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Email:</b></td>
                                    <td>{profile.email}</td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Phone Number:</b></td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.noHandphone}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Location:</b></td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.country}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Location:</b></td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.province}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>City:</b></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Zip Code:</b></td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.zip_code}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td><b>Address:</b></td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.detailAddress}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <PrimaryButton css={editProfile} onClick={handleShow}>
                Edit Profile
            </PrimaryButton>
        </Container>
    );
};

export default AboutMeTab;
//put edit profile here
