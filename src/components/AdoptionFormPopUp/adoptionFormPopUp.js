/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Col, Modal, Table } from "react-bootstrap";
import PrimaryButton from '../Button/Button'
import {useState} from "react";

import {wrapperStyles} from './adoptionFormPopup.styles'

const FormPopUp = () => {

    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
        <Button onClick={() => setLgShow(true)}>Request Data Form</Button>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Form Request
                </Modal.Title>
            </Modal.Header>
            <Modal.Body css={wrapperStyles}>
                <div>
                    <h1>Form Submission</h1>
                </div>
                <div>
                    <Col xs={12}>
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
                            <div>
                                <span>
                                    <PrimaryButton>Approve</PrimaryButton>
                                </span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    <PrimaryButton>Deny</PrimaryButton>
                                </span>
                            </div>
                        </Table>
                    </Col>
                </div>
            </Modal.Body>
        </Modal>
        </div>
    );
};

export default FormPopUp;
