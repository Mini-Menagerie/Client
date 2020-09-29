/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Form } from "react-bootstrap";
import axios from "../../helpers/axios";
import ReactFilestack from "filestack-react";

import PrimaryButton from "../Button/Button";
import { useState, useEffect } from "react";

import { upload, uploadPhoto, fs } from "./EditProfile.styles";

const AddAdoption = ({ edit, handleClose }) => {
    const [formPet, setFormPet] = useState({
        idCategoryPet: "",
        idBreed: "",
        idUser: "",
        petName: "",
        gender: "",
        age: "",
        weight: "",
        size: "",
        location: "",
        about: "",
        image: "",
        fee: "",
    });


    let userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData);

    const [petCategory, setPetCategory] = useState([]);
    const [breed, setBreed] = useState([]);

    const getCategory = async () => {
        let category = await axios.get("categoryPet");
        if (category.status === 200) {
            let categoryPet = category.data.result.map((item) => {
                let dataCategory = {
                    id: item._id,
                    categoryName: item.categoryName,
                };
                return dataCategory;
            });
            setPetCategory(categoryPet);
        }
    };
  
    const getBreed = async () => {
        let breeds = await axios.get("breed");
        let dataBreeds = breeds.data.result.map((item) => {
            let tes = {
                id: item.idCategoryPet._id,
                idBreed: item._id,
                categoryName: item.idCategoryPet.categoryName,
                breedName: item.breedName,
            };
            return tes;
        });
        setBreed(dataBreeds);
    };
    const getUser = async () => {
        let dataUser = await JSON.parse(localStorage.getItem("user"));
        let idUser = dataUser.idUser._id;
        return idUser;
    };

    const addNewPet = async (event) => {
        event.preventDefault()
        let idUser = await getUser()
        const newPet = await axios.post('pet/create', {
            idCategoryPet: formPet.idCategoryPet,
            idBreed: formPet.idBreed,
            idUser: idUser,
            petName: formPet.petName,
            gender: formPet.gender,
            age: formPet.age,
            weight: formPet.weight,
            size: formPet.size,
            location: formPet.location,
            about: formPet.about,
            image: formPet.image,
            fee: formPet.fee
        })
        if(newPet.status === 200){
            const newPetForAdoption = await axios.post('petUpForAdoption/create', {
                idUser: idUser,
                idPet: newPet.data.result._id,
                fee: formPet.fee,
                status: "Available"
            })
            if(newPetForAdoption.status === 200){
                alert('Success')
                console.log(newPetForAdoption);
            }
        }
    };

    const handleChange = (event) => {
        setFormPet({
            ...formPet,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        getCategory();
        getBreed();
        getUser();
    }, []);
    

    return (
        <div>
            <Form onSubmit={addNewPet}>
                <Form.Row>
                    <div css={fs}>
                        <ReactFilestack
                            apikey={"AugqfuGzTQouENQs5OOe2z"}
                            customRender={({ onPick }) => (
                                <div css={uploadPhoto}>
                                    <PrimaryButton
                                        style={{ margin: "10px 40%" }}
                                        css={upload}
                                        onClick={onPick}
                                    >
                                        Upload Photo
                                    </PrimaryButton>
                                </div>
                            )}
                            onSuccess={(res) =>
                                setFormPet({
                                    ...formPet,
                                    image: res.filesUploaded[0].url,
                                })
                            }
                        />
                    </div>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Pet Name:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder=" Pet Name"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.petName}
                                            name="petName"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Fee:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Rp. "
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.fee}
                                            name="fee"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Category Pet:
                                    </Form.Label>
                                    
                                        <Col sm="7">
                                            <Form.Control
                                                style={{ width: "350px" }}
                                                onChange={handleChange}
                                                name="idCategoryPet"
                                                onClick=""
                                                as="select"
                                                defaultValue="Category Pet"
                                            >{petCategory.map(item => {
                                               return <option value={item.id}>{item.categoryName}</option>
                                            })}
                                            </Form.Control>
                                        </Col>
                                    
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Breeds:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            style={{ width: "350px" }}
                                            onChange={handleChange}
                                            onClick=""
                                            as="select"
                                            defaultValue="idBreed"
                                            name="idBreed"
                                        > 

                                         {
                                            breed.filter(item => {
                                                return item.id === formPet.idCategoryPet
                                            }).map(items => {
                                                return <option value={items.idBreed}>{items.breedName}</option>
                                            })   
                                        }
                                         
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Location:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Location"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.location}
                                            name="location"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Gender:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Gender"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.gender}
                                            name="gender"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Age :
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Age"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.age}
                                            name="age"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Weight :
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Weight"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.weight}
                                            name="weight"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>

                            <Form.Label column sm="5">
                                Size :
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    placeholder="Size"
                                    style={{ width: "735px", height: "60px" }}
                                    type="text"
                                    value={formPet.size}
                                    name="size"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label column sm="5">

                                About :
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    placeholder="About"
                                    style={{ width: "735px", height: "60px" }}
                                    type="text"
                                    value={formPet.about}
                                    name="about"
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label column sm="5">
                                Email :
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    type="email"
                                    placeholder={userData.email}
                                    value={userData.email}
                                    disabled
                                />
                            </Col>
                        </Form.Group>               
                    </Row>
                </Form.Row>
                <PrimaryButton
                    style={{ margin: "0 40%" }}
                    type="submit"
                    onClick={() => {
                        handleClose();
                    }}
                >
                    Submit
                </PrimaryButton>
            </Form>
        </div>
    );
};

export default AddAdoption;
