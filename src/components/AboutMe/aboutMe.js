/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Col, Row,Container } from 'react-bootstrap'


import PrimaryButton from "../../components/Button/Button";

const aboutMe = ({profile}) => {
    console.log(profile);
    return (
        <Container fluid>
            <div>
                <Col xs={6}>
                    <img src={profile.avatar}/>
                    <PrimaryButton>Upload Photo</PrimaryButton>
                </Col>
                <Col xs={6}>
                    <Row>
                        <h3>Name: {profile.fullName}</h3>
                        <p>Phone Number: {profile.noHandphone}</p>
                        <p>Email: {profile.email}</p>
                    </Row>
                </Col>
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        <h4>Location: {profile.location}</h4>
                    </Col>
                    <Col xs={6}>
                        <h4>Province: {profile.province}</h4>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        <h4>City: {profile.state}</h4>
                    </Col>
                    <Col xs={6}>
                        <h4>Zip Code: {profile.zip_code}</h4>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <h4>
                        Address: {profile.address}
                    </h4>
                </Row>
            </div>
            <PrimaryButton>Edit Profile</PrimaryButton>
        </Container>
    )
}

export default aboutMe;
//put edit profile here