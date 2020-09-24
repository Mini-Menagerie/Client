/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container } from "react-bootstrap";
import ReactFilestack from "filestack-react";

import PrimaryButton from "../Button/Button";
import {
    rowMargin,
    containerWrapper,
    welcomeText,
    avatar,
    rowMargin2,
    editProfile,
} from "./aboutMeTab.styles";

const AboutMeTab = ({ profile }) => {
    console.log(profile.userId);
    return (
        <Container fluid css={containerWrapper}>
            <div>
                <h1 css={welcomeText}>Welcome,</h1>
            </div>
            <div>
                <Row css={rowMargin}>
                    <Col xs={6}>
                        <img
                            css={avatar}
                            src={
                                profile.userId !== undefined &&
                                profile.userId.avatar
                            }
                            alt="avatar"
                        />
                        <ReactFilestack
                            apikey={"AugqfuGzTQouENQs5OOe2z"}
                            customRender={({ onPick }) => (
                                <div>
                                    <PrimaryButton
                                        css={rowMargin2}
                                        onClick={onPick}
                                    >
                                        Upload Photo
                                    </PrimaryButton>
                                </div>
                            )}
                            onSuccess={(res) => console.log(res)}
                        />
                    </Col>
                    <Col xs={6}>
                        <p>Name: </p>
                        <p>Phone Number: </p>
                        <p>Email: </p>
                    </Col>
                </Row>
                {/* <Col xs={6}>
                    <img src={profile.avatar}/>
                    <ReactFilestack
                    apikey={"AugqfuGzTQouENQs5OOe2z"}
                    customRender={({ onPick }) => (
                        <div>
                        <PrimaryButton onClick={onPick}>Upload Photo</PrimaryButton>
                        </div>
                    )}
                    onSuccess={(res) => console.log(res)}
                    />
                    
                </Col>
                <Col xs={6}>
                        <p>Name: {profile.fullName}</p>
                        <p>Phone Number: {profile.noHandphone}</p>
                        <p>Email: {profile.email}</p>
                </Col> */}
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        <p>Location: </p>
                    </Col>
                    <Col xs={6}>
                        <p>Province: </p>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xs={6}>
                        <p>City:</p>
                    </Col>
                    <Col xs={6}>
                        <p>Zip Code:</p>
                    </Col>
                </Row>
            </div>
            <div>
                <p>Address:</p>
            </div>
            <PrimaryButton css={editProfile}>Edit Profile</PrimaryButton>
        </Container>
    );
};

export default AboutMeTab;
//put edit profile here