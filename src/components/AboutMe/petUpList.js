/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Modal, Table } from "react-bootstrap";

import { useState, useEffect } from "react";
import CardPet from "../CardPet/CardPet";

import PrimaryButton from "../Button/Button";
import {
    rowMargin,
    containerWrapper,
    avatar,
    rowMargin2,
    editProfile,
    first,
    welcomeText,
} from "./aboutMeTab.styles";
import axios from "axios";


const ListPetUp = ({ profile }) => {
    console.log(profile);
    let userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    return (
        <Container fluid css={containerWrapper}>
            <CardPet/>
        </Container>
    );
};

export default ListPetUp;
//put edit profile here
