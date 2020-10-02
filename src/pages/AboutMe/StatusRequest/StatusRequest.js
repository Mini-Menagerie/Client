/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import axios from "../../../helpers/axios";
import { useState, useEffect } from "react";
import {
    head,
    // statusInfo,
    mainOne,
    mainBody,
} from "./StatusRequest.styles";
import PrimaryButton from "../../../components/Button/Button";

const StatusRequest = () => {
    const [statusRequest, setStatusRequest] = useState([]);
    const [, setErrorMessage] = useState();
    const [petForAdopt, setPetForAdopt] = useState()

    const getDataForm = async () => {
        const userData = await JSON.parse(localStorage.getItem("user"));
        const url = `formRequest/all/${userData.idUser._id}`;
        let datas = await axios.get(url)
        console.log(datas);
        let results = datas.data.filterReq
        setStatusRequest(results)
        return results
    };

    const getIdPetForAdoption = async () => {
        let user = await getDataForm()
        let result = await axios.get(`petUpForAdoption`);
        let data = result.data.result;
        let idPetFromUserForm = user[0] !== undefined && user[0].idPet._id
        let filterData = data.filter(item => item.idPet._id === idPetFromUserForm)
        let resultData = filterData[0] !== undefined && filterData[0]._id
        setPetForAdopt(filterData[0] !== undefined && filterData[0]._id)
        return resultData
    }

    const newAdoptionTransaction = async () => {
        let data = await getIdPetForAdoption()
        console.log(data);
        let adoptTrans = await axios.post("listAdoptionTransaction/create", {
                idPetUpForAdoption: data,
                petName: statusRequest[0].idPet.petName,
                petCategory: statusRequest[0].idPet.idBreed.idCategoryPet.categoryName,
                breed: statusRequest[0].idPet.idBreed.breedName,
                ownerPetName: statusRequest[0].idPet.idUser.fullName,
                adopterPetName: statusRequest[0].idUser.fullName ,
                status: "COMPLETED",
            }
        );
        if (adoptTrans.status === 200) {
            console.log("success to create a new adoption transaction");
            console.log(adoptTrans);
        }
    };
    const handleSubmitTrans = (event) => {
        event.preventDefault();
        newAdoptionTransaction();
    };

    useEffect(() => {
        getDataForm();
        getIdPetForAdoption()
        
    }, []);
    console.log(statusRequest);

  

    if (statusRequest.length > 0) {
        return (
            <div>
                <div css={head}>
                    <h2>Adoption Status Request</h2>
                </div>
                <br />
                <div>
                    {statusRequest.map((e) => (
                        <div key={statusRequest}>
                            <Card>
                                <Card.Header>
                                    <b>
                                        {e.idPet !== undefined &&
                                            e.idPet.petName}
                                    </b>{" "}
                                    -{" "}
                                    <span>
                                        {e.idPet !== undefined &&
                                            e.idPet.idBreed.breedName}
                                    </span>
                                </Card.Header>
                                <Card.Body css={mainBody}>
                                    <Row>
                                        <Col css={mainOne}>
                                            <img
                                                src={e.idPet.image}
                                                alt="brokenimage"
                                                style={{
                                                    height: "200px",
                                                }}
                                            />
                                        </Col>
                                        <Col>
                                            <p>
                                                Name :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.petName}
                                            </p>
                                            <p>
                                                Breed :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.idBreed.breedName}
                                            </p>
                                            <p>
                                                Age :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.age}
                                            </p>
                                            <p>
                                                Size :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.size}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Weight :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.weight}
                                            </p>
                                            <p>
                                                Gender :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.gender}
                                            </p>
                                            <br />
                                            {e.status !== "Approval" ? (
                                                <h5>Status: {e.status}</h5>
                                            ) : (
                                                <div>
                                                    <h5>Status: {e.status}</h5>{" "}
                                                    <br />
                                                    <PrimaryButton
                                                        onClick={
                                                            handleSubmitTrans
                                                        }
                                                    >
                                                        Complete
                                                    </PrimaryButton>
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else if (statusRequest.length === 0) {
        return (
            <div>
                <div css={head}>
                    <h2>Adoption Status Request</h2>
                </div>
                <br />
                <h1 style={{ textAlign: "center" }}>Blank Data</h1>
            </div>
        );
    }
};

export default StatusRequest;
