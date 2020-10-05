/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useParams, Link } from "react-router-dom";

import {
    Card,
    Button,
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";

import {
    wrapperCover,
    widthButton,
    collections,
    centertext,
    filter,
    buttonGroup,
    card,
} from "./PetByBreed.styles";

const PetByBreed = () => {
    const [collection, setCollection] = useState([]);
    const { category, breed } = useParams();

    const size = [
        { name: "Small", value: "Small" },
        { name: "Medium", value: "Medium" },
        { name: "Large", value: "Large" },
        { name: "Extra Large", value: "ExtraLarge" },
    ];
    const gender = [
        { name: "Female", value: "Female" },
        { name: "Male", value: "Male" },
    ];
    const alphabet = [
        { name: "Ascending Order", value: "asc" },
        { name: "Descending Order", value: "desc" },
    ];

    const fetchCollection = async () => {
        const url = `${process.env.REACT_APP_API_URL}/petdetail/?category=${category}&search=${breed}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        setCollection(result.data);
    };

    useEffect(() => {
        fetchCollection();

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <div css={wrapperCover}>
                <div></div>
            </div>
            <Formik
                initialValues={{ size: "", gender: "", alphabet: "" }}
                onSubmit={async (values) => {
                    const url = `${process.env.REACT_APP_API_URL}/pet/breed/${category}/${breed}/filter?size=${values.size}&gender=${values.gender}&alphabet=${values.alphabet}`;
                    const response = await fetch(url);
                    const result = await response.json();

                    setCollection(result.result);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div css={filter}>
                        <h2 css={centertext}>Filter By Breed</h2>
                        <p css={centertext}>By Size</p>
                        <Form>
                            <div css={buttonGroup}>
                                <ToggleButtonGroup
                                    css={widthButton}
                                    name="size"
                                    type="radio"
                                    value={values.size}
                                >
                                    {size.map((radio, idx) => {
                                        return (
                                            <ToggleButton
                                                key={idx}
                                                onChange={handleChange}
                                                value={radio.value}
                                                variant="success"
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        );
                                    })}
                                </ToggleButtonGroup>
                            </div>
                            <p css={centertext}>By Gender</p>
                            <div
                                css={buttonGroup}
                                className="justify-content-md-center"
                            >
                                <ToggleButtonGroup
                                    css={widthButton}
                                    name="gender"
                                    type="radio"
                                    value={values.gender}
                                >
                                    {gender.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            variant="success"
                                            value={radio.value}
                                            onChange={handleChange}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                            <p css={centertext}>Find By Alphabetical Order</p>
                            <div css={buttonGroup}>
                                <ToggleButtonGroup
                                    css={widthButton}
                                    name="alphabet"
                                    type="radio"
                                    value={values.gender}
                                >
                                    {alphabet.map((radio, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            variant="success"
                                            name="alphabet"
                                            value={radio.value}
                                            onChange={handleChange}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                            <Row className="justify-content-center">
                                <Button type="submit" variant="success">
                                    Filter Result
                                </Button>
                            </Row>
                        </Form>
                    </div>
                )}
            </Formik>
            <div css={collections}>
                <Row>
                    {collection.length > 0 &&
                        collection.map((item) => {
                            return (
                                <Col xs={12} md={4} key={item._id} css={card}>
                                    <Link
                                        to={`/pets-detail/${
                                            item.id !== undefined
                                                ? item.id
                                                : item._id
                                        }`}
                                    >
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={item.image[0]}
                                                style={{
                                                    objectFit: "cover",
                                                    height: "200px",
                                                }}
                                            />
                                            <Card.Title css={centertext}>
                                                {item.petName}
                                            </Card.Title>
                                            <Card.Text css={centertext}>
                                                {item.breed}
                                                <br />
                                                {item.gender}, {item.age} Years
                                                Old
                                                <br />
                                                {item.location}
                                            </Card.Text>
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })}
                </Row>
            </div>
        </div>
    );
};

export default PetByBreed;
