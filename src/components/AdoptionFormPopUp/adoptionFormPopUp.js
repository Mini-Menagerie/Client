/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Container, Row, Col, Dropdown, Jumbotron } from "react-bootstrap";
import axios from "axios";

import AdoptionForm from "../../pages/AdoptionForm/AdoptionForm";

const FormPopUp = ({ data }) => {
    return (
        <Container fluid>
            <div>
                <h1>Form Submission</h1>
            </div>
            <div>
            <Col xs={6}>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>1. Duration working outside of your home:</td>
                                    <td>
                                       {/* ENDPOINT */}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>2. Do You Own Or Rent Your Home:</td>
                                    <td> {/* ENDPOINT */}</td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td> 3. Have You Ever Given Pets Up For
                                        Adoption?</td>
                                    <td>
                                        {/* ENDPOINT */}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>4. Do You Have Small Children in the
                                        House?</td>
                                    <td>
                                        {/* ENDPOINT */}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>5. Do You Have Other Pets?</td>
                                    <td>
                                        {/* ENDPOINT */}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>6. Do You Tend to Keep Your Pets in a
                                        Cage?</td>
                                    <td>
                                        {/* ENDPOINT */}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>7. What is Your Monthly Income?</td>
                                    <td>
                                        {/* ENDPOINT */}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>8. Finally, Tell Us Why You'd Like To
                                        Adopt this Pet!</td>
                                    <td>
                                        {/* ENDPOINT */}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
            </div>
        </Container>
    );
};

export default FormPopUp;
