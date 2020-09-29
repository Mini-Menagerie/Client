/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "../../../helpers/axios";

import { head, mainOne, mainBody, border, carbodyT } from "./Approve.styles";
import FormPopUp from "../../../components/AdoptionFormPopUp/adoptionFormPopUp";

const ApproveRequest = () => {
    const [adoption, setAdoption] = useState([]); // petUpforAdoption
    const [adopter, setAdopter] = useState([]); // formRequest
    
    const getUserLogin = () => {
        let userLogin = JSON.parse(localStorage.getItem('user')); // 5f6b721abd00722311964574
        let idUser = userLogin.idUser._id;
        return idUser
    }

    const getPetUpForAdopt = async () => {
        let idUser = await getUserLogin()
        let pets = await axios.get('petUpForAdoption')
        if(pets.status === 200){
            let filteredPets = pets.data.result.filter(item => {
                return item.idUser._id === idUser
            })
            console.log(filteredPets);
            setAdoption(filteredPets);
            localStorage.setItem('pets', JSON.stringify(filteredPets))
        }
    }
    const getAdopter = async () => {
        const dataPet = await JSON.parse(localStorage.getItem('pets'))
        let idPet = dataPet !== null && dataPet.map(item => {
            return item.idPet._id
        })
        if(idPet.length > 0){
            idPet = idPet[0]
        }
        return idPet //5f729d64ecc1bc0dd6318de9
    }
    const getDataAdopter = async () => {
        let idPetAdopter = await getAdopter()

        const adopter = await axios.get('formRequest')
        if(adopter.status === 200){
            let filteredAdopter = adopter.data.result.filter(item => item.idPet._id === idPetAdopter)
            setAdopter(filteredAdopter)
        }
    }

    useEffect(() => {
        getUserLogin()
        getPetUpForAdopt()
        getAdopter()
        getDataAdopter()
    }, [])
    console.log(adopter);
    return (
        <div>
            <div>
            <div css={head}>
                <h2>Approve Request</h2>
            </div>
                {adopter.map((e) => (
                    <div key={adopter}>
                        <Card>
                            <Card.Header>
                                <b>Adopter Data</b> 
                            </Card.Header>
                            <Card.Body css={mainBody}>
                                <Row>
                                    <Col css={mainOne}>
                                        <img
                                            src={e.idUser.avatar}
                                            alt="mberrrr"
                                            style={{
                                                objectFit: "cover",
                                                height: "200px",
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <p>Full Name : {e.idUser.fullName}</p>
                                        <p>Email : Email ngga ada di ID user</p>
                                        <p>Gender : Gender ngga ada di user</p>
                                        <p>Country : Indonesia </p>
                                    </Col>
                                    <Col>
                                        <p>Province : {e.idUser.province}</p>
                                        <p>City : {e.idUser.state}</p>
                                        <p>Zip Code : {e.idUser.zip_code}</p>
                                        <p>Address : {e.idUser.detailAddress}</p>
                                        <br />
                                        <FormPopUp data={adopter} />
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card>
                            <div css={border}>
                                <b>{e.idPet.petName}</b> - <span>{e.idPet.idBreed.breedName}</span>
                            </div>
                            <Card.Body css={mainBody}>
                                <Row>
                                    <Col css={mainOne}>
                                        <img
                                            src={e.idPet.image}
                                            alt="mberrrr"
                                            style={{
                                                objectFit: "cover",
                                                height: "200px",
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <p>Name : {e.idPet.petName}</p>
                                        <p>Breed : {e.idPet.idBreed.breedName}</p>
                                        <p>Age : {e.idPet.age}</p>
                                        <p>Size : {e.idPet.size}</p>
                                    </Col>
                                    <Col>
                                        <p>Weight : {e.idPet.weight}</p>
                                        <p>Gender : {e.idPet.gender}</p>
                                        <br />
                                        <h5>Status: {e.status}</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>

           
            <div>
                {adopter.map((e) => (
                    <div key={adopter}>
                        
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApproveRequest;
