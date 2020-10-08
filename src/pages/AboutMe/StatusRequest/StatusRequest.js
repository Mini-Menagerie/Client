/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Button, Row } from "react-bootstrap";
import axios from "../../../helpers/axios";
import { useState, useEffect } from "react";
import {
    head,
    mainBody,
    buttonPayNow
} from "./StatusRequest.styles";

const StatusRequest = () => {
    const [statusRequest, setStatusRequest] = useState([]);
    const [state] = useState({
        loading: false,
        error: null,
    });
    const [adoption, setAdoption] = useState([]); // petUpforAdoption
    const [adopter, setAdopter] = useState([]); // formRequest
    const [idPetF, setIdPetF] = useState();

    const getDataForm = async () => {
        const userData = await JSON.parse(localStorage.getItem("user"));
        const url = `formRequest/all/${userData.idUser._id}`;
        let datas = await axios.get(url)
        let results = datas.data.filterReq
        let filtered = datas.data.filterReq.filter(e => e.status !== "COMPLETED")
        setStatusRequest(results !== undefined && filtered)
        return results
    };

    const handleCheckout = (item) => {
        localStorage.setItem("adoptform", JSON.stringify(item))
        window.location.replace("/adoptcart")
    }

    const getUserLogin = () => {
        let userLogin = JSON.parse(localStorage.getItem("user")); // 5f6b721abd00722311964574
        let idUser = userLogin.idUser._id;
        return idUser;
    };

    const getPetUpForAdopt = async () => {
        let idUser = await getUserLogin();
        let pets = await axios.get("petUpForAdoption");
        console.log(pets);
        if (pets.status === 200) {
            let filteredPets = await pets.data.result.filter((item) => {
                return item.idPet !== null && item.idPet.idUser._id === idUser
            });
            setAdoption(filteredPets);
        }
    };

    const getAdopter = async () => {
        const dataPet = await JSON.parse(localStorage.getItem("petsA"));
        let idPet =
            dataPet !== null &&
            dataPet.map((item) => {
                return item.idPet._id;
            });
        if (idPet.length > 0) {
            idPet = idPet[0];
        }
        return idPet; //5f729d64ecc1bc0dd6318de9
    };

    const selectedPet = () => {
        const data = localStorage.getItem('selectedPet')
        return data
    }

    const getDataAdopter = async () => {
        let idPetAdopter = await selectedPet();

        const adopter = await axios.get("formRequest");
        if (adopter.status === 200) {
            let filteredAdopter = adopter.data.result.filter(
                (item) => item.idPet !== null && item.idPet._id === idPetAdopter
            );
           let idPetForAdoption = filteredAdopter[filteredAdopter.length - 1]._id
           setIdPetF(idPetForAdoption)
           setAdopter(filteredAdopter[filteredAdopter.length - 1])
           return idPetForAdoption
        }
    };

    const newAdoptionTransaction = async () => {
        let idPetF = await getDataAdopter()
        await axios.post("listAdoptionTransaction/create", {
            idPetUpForAdoption: idPetF,
            idUser: adopter.idUser._id,
            petName: adopter.idPet.petName,
            petCategory: adopter.idPet.idCategoryPet,
            breed: adopter.idPet.idBreed.breedName,
            ownerPetName: adopter.idPet.idUser.fullName,
            adopterPetName: adopter.idUser.fullName,
            status: "Completed",
        }
        );
        await axios.post("listAdoptionTransaction/create", {
            idPetUpForAdoption: idPetF,
            idUser: adopter.idUser._id,
            petName: adopter.idPet.petName,
            petCategory: adopter.idPet.idCategoryPet,
            breed: adopter.idPet.idBreed.breedName,
            ownerPetName: adopter.idPet.idUser.fullName,
            adopterPetName: adopter.idUser.fullName,
            status: "Completed"
        }
        );
    };

    const multipleUpdate = () => {
        axios.put(`petUpForAdoption/${idPetF}`, {
            status: "Completed",
        });
        axios.put(`formRequest/${adopter._id}`, {
            status: "Completed",
        });
    }

    const handleSubmitTrans = (event) => {
        event.preventDefault();
        newAdoptionTransaction();
        multipleUpdate();
        window.location.reload();
    };

    // const getIdPetForAdoption = async () => {
    //     let user = await getDataForm()
    //     let result = await axios.get(`petUpForAdoption`);
    //     let data = result.data.result;
    //     let idPetFromUserForm = user[0] !== undefined && user[0].idPet._id
    //     let filterData = data.filter(item => item.idPet._id === idPetFromUserForm)
    //     let resultData = filterData[0] !== undefined && filterData[0]._id
    //     setPetForAdopt(filterData[0] !== undefined && filterData[0]._id)
    //     return resultData
    // }

    useEffect(() => {
        getDataForm();
        getUserLogin();
        getPetUpForAdopt();
        getAdopter();
        getDataAdopter();

        //eslint-disable-next-line
    }, []);
console.log(adopter);
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
                                        <Col>
                                            <img
                                                src={e.idPet.image[0]}
                                                alt="brokenimage"
                                                style={{
                                                    height: "200px",
                                                    backgroundSize: "cover",
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
                                            <p>
                                                Fee:{"Rp "}
                                                {e.idPet !== undefined && e.idPet.fee}
                                            </p>
                                            <br />
                                            {e.status === "Waiting for Payment" ? (
                                                <div>
                                                    <h5>Status: {e.status}</h5>{" "}
                                                    <br />
                                                    <div css={buttonPayNow}
                                                        onClick={() => handleCheckout(e)}
                                                        disabled={state.loading}>
                                                        <Button>Checkout Now</Button>
                                                    </div>
                                                </div>
                                            ) :
                                                e.status === "Payment Fee is Complete" ? (
                                                    <div>
                                                        <h5>Status: {e.status}</h5>{" "}
                                                        <br />
                                                        <div css={buttonPayNow}
                                                            onClick={handleSubmitTrans}
                                                            disabled={state.loading}>
                                                            <Button>Complete Adoption</Button>
                                                        </div>
                                                    </div>
                                                ) :
                                                    (
                                                        <div>
                                                            <h5>Status: {e.status}</h5>
                                                            <br />
                                                            {/* <div css={buttonPayNow}
                                                                // onClick={handlePayment}
                                                                disabled={state.loading}>
                                                                <Button>Complete</Button>
                                                            </div> */}
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
