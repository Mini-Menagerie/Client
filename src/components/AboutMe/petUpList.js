/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Card, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useState, useEffect } from "react";
import AddAdoption from './AddAdoption';


import PrimaryButton from "../Button/Button";
import {
  container,
  dataPet,
  margin,
  petImage
} from "./petUpList.styles";
import axios from "axios";


const ListPetUp = ({ petUp }) => {
    console.log(petUp);
   

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
   

    return (
        <Container css={container}>
          <PrimaryButton onClick={handleShow}>
                              Add a Pet
          </PrimaryButton>
          <Modal
                    show={show}
                    centered
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Dialog size="lg" id="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Add a Pet</Modal.Title>
                        </Modal.Header>

                        <Modal.Body className="modal-body modal-md">
                            <AddAdoption
                                // edit={profile}
                                handleClose={handleClose}
                            />
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal>
             <Row>
            
                <Col md={3} css={margin}>
                    <Card css={petImage}  >
                        <Card.Img variant="top"  />
                        <Card.Body>
                            <Card.Title>
                                <h4>
                                    <b>aa</b>
                                </h4>
                            </Card.Title>
                            <Card.Text>
                               
                                <br />
                                 Years Old
                                <br />
                                
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            
        </Row>

            

        </Container>
    );
};

export default ListPetUp;
