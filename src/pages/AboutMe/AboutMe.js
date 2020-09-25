/** @jsx jsx */
import { jsx } from "@emotion/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
// import { useParams } from "react-router-dom";

import AboutMeTab from "../../components/AboutMe/aboutMeTab";
import { containerWrapper, marginSet } from "./AboutMe.styles";
import Swal from 'sweetalert';
// import AccountSettings from "../../components/AboutMe/accountSettings";

const AllProfile = () => {
    const [, setLoading] = useState(true);
    const [aboutMe, setAboutMe] = useState([]);
    const [key, setKey] = useState("home");

    // const handleEditProfile = async (e) => {
    //   let result = await axios.put(`http://localhost:8000/users/${id}`)
    //   setAboutMe(e.target.value)
    //put add a pet pop up in pet up for adoption

    let userLogin = JSON.parse(localStorage.getItem("user"));
    let token = JSON.parse(localStorage.getItem("menagerie"));

    const profile = async () => {
        const url = `http://localhost:8000/userAccount/${userLogin.id}`;
        await axios
            .get(url)
            .then(function (response) {
                setAboutMe(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    };

    useEffect(() => {
        if(userLogin == null || token == null) {
            Swal({
                title: "Gagal!",
                text: "Silahkan login dahulu!",
                icon: "warning",
            });
            window.location.replace("/");
        }
        profile();

        //eslint-disable-next-line
    }, []);

    return (
        <Container fluid css={containerWrapper}>
            <div css={marginSet}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="home" title="About Me">
                        <AboutMeTab profile={aboutMe} />
                    </Tab>
                    <Tab eventKey="profile" title="Account Settings">
                        {/* <AccountSettings/> */}
                    </Tab>
                    <Tab eventKey="contact" title="Pets Up For Adoption">
                        test 3
                    </Tab>
                </Tabs>
            </div>
        </Container>
    );
};

export default AllProfile;
