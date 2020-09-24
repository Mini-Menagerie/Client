/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import {
    detail_section_col,
    detail_section_col_left_first_row,
    detail_section_col_left_second_row,
    row_line,
    detail_section_col_right,
    detail_section_col_right_button,
    location,
    rowMargin3
} from "./DetailSection.styles";
import ColoredLine from "../../../components/ColoredLine";
import PrimaryButton from "../../../components/Button/Button";

const DetailSection = ({ petDetails, user }) => {
    const history = useHistory();
    console.log(petDetails);
    console.log(user, "user");
    const handleClick = () => {
        history.push(`/adoption-form`);
    };
    console.log(petDetails);
    return (
        <Row>
            <Col xs={8} css={detail_section_col}>
                <Row css={detail_section_col_left_first_row}>
                    <img
                        src={petDetails.image}
                        style={{ width: "710px", marginBottom: "30px" }}
                        alt="pet_image"
                    />
                    <h1>{petDetails.petName}</h1>
                    <h1>$ {petDetails.fee}</h1>
                </Row>
                <Row css={detail_section_col_left_second_row}>
                    <p>
                        {petDetails.idBreed !== undefined &&
                            petDetails.idBreed.breedName}
                    </p>
                    <h5>&bull;</h5>
                    <p>{petDetails.location}</p>
                </Row>
                <Row css={row_line}>
                    <ColoredLine color="#000" />
                </Row>
                <Row css={detail_section_col_left_second_row}>
                    <p>{petDetails.gender}</p>
                    <h5>&bull;</h5>
                    <p>{petDetails.age} Years Old</p>
                    <h5>&bull;</h5>
                    <p>{petDetails.size}</p>
                </Row>
                <Row css={row_line}>
                    <ColoredLine color="#000" />
                </Row>
                <Row>
                    <h2>About</h2>
                </Row>
                <Row>
                    <p>{petDetails.about}</p>
                </Row>
            </Col>
            <Col xs={4} css={detail_section_col}>
                <h1>
                    {petDetails.idUser !== undefined &&
                        petDetails.idUser.fullName}
                </h1>
                <h5>Pet Location</h5>
                <Row>
                    <iframe
                        scrolling="no"
                        title="map"
                        marginheight="0"
                        marginwidth="0"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=%20marina%20bay+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="400"
                        height="200"
                        frameborder="0"
                    ></iframe>{" "}
                    <script
                        type="text/javascript"
                        src="script.js?id=9daa310da0fcf7860fb39c3f74182bf2930d64f3"
                    ></script>
                </Row>
                <Row css={location}>
                    <Col xs={12}>
                        <Row css={rowMargin3}>
                            <i class="fas fa-map-marker-alt fa-2x">&nbsp; &nbsp;</i>
                            <p>{petDetails.location} / {petDetails.idUser !==undefined && petDetails.idUser.detailAddress}</p>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row css={rowMargin3}>
                            <i class="fas fa-envelope-open-text fa-2x">&nbsp; &nbsp;</i>
                            <p>{petDetails.idUser !== undefined && petDetails.idUser.email}</p>
                        </Row>
                    </Col>
                    <Col xs={12} css={detail_section_col_right_button}>
                        <PrimaryButton onClick={() => handleClick()}>
                            Ask for Adoption
                        </PrimaryButton>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default DetailSection;
