/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Card, Col, Row } from 'react-bootstrap';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { head, statusInfo, listInfo, mainOne, mainBody } from './StatusRequest.styles'

const StatusRequest = () => {
    const [statusRequest, setStatusRequest] = useState([]);
    const [errorMessage, setErrorMessage] = useState();
    useEffect(() => {
        const url = 'http://localhost:8000/petUpForAdoption';
        axios.get(url)
        .then(function (result) {
          console.log(result.data.result)
          setStatusRequest(result.data.result);
        })
        .catch(function(error) {
          console.log(error.message)
          setErrorMessage(error.message)
        });
    }, []);
    
    return (
        <div>
            <div css={head}>
                <h2>Adoption Status Request</h2>
            </div>
            <div css={statusInfo}>
                <div>All Request</div>
                <div>Approved</div>
                <div>Denied</div>
                <div>Waiting For Approval</div>
            </div>
            <div css={listInfo}>
                {statusRequest.map(e => (
                    <div key={statusRequest}>
                    <Card>
                        <Card.Header><b>{e.idPet.petName}</b> - <span></span></Card.Header>
                        <Card.Body css={mainBody}>
                            <Row>
                                <Col css={mainOne}>
                                  <img src={e.idPet.image} alt='mberrrr'/>
                                </Col>
                                <Col>
                                    <p>Name : {e.idPet.petName}</p>
                                    <p>Breed : </p>
                                    <p>Color : </p>
                                    <p>Age : {e.idPet.age}</p>
                                    <p>Size : {e.idPet.size}</p>
                                </Col>
                                <Col>
                                  <p>Weight : {e.idPet.weight}</p>
                                  <p>Gender : {e.idPet.gender}</p>
                                  <p>PetId : {e.idPet._id}</p><br/>
                                  <h5>Status:{e.status}</h5>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card><br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatusRequest;