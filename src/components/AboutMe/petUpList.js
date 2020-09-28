/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Card, } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useState, useEffect } from "react";


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
    const handleShow = () => setShow(true);

   
   

    return (
        <Container css={container}>
          <PrimaryButton onClick={handleShow}>
                              Pet Up for adoption
          </PrimaryButton>
             <Row>
            
                <Col md={3} css={margin}>
                    <Card css={petImage}  >
                        <Card.Img variant="top"  />
                        <Card.Body>
                            <Card.Title>
                                <h4>
                                    <b></b>
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
//put edit profile here
