/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

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
} from "./BreedByCategory.styles";

const BreedByCategory = () => {
    const [collection, setCollection] = useState([]);
    const [allCollection, setAllCollection] = useState([]);
    const { category } = useParams();

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

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const fetchCollection = async () => {
        const url = `${process.env.REACT_APP_API_URL}/pet/category/${category}`;
        const response = await fetch(url);
        const result = await response.json();

        setAllCollection(result.result);
        setCollection(result.result);
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
            <div css={collections}>
                <h2 css={centertext}>Search Our Collections</h2>
                <Carousel responsive={responsive} infinite={true}>
                    {allCollection.length > 0 &&
                        allCollection.map((item) => {
                            return (
                                <Col key={item._id}>
                                    <a href="/pets-detail/:id">
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={item.image[0]}
                                                style={{
                                                    objectFit: "cover",
                                                    height: "350px",
                                                }}
                                            />
                                            <Card.Title css={centertext}>
                                                {item.petName}
                                            </Card.Title>
                                        </Card>
                                    </a>
                                </Col>
                            );
                        })}
                </Carousel>
            </div>
            <Formik
                initialValues={{ size: "", gender: "", alphabet: "" }}
                onSubmit={async (values) => {
                    const url = `${process.env.REACT_APP_API_URL}/pet/breed/${category}/filter?size=${values.size}&gender=${values.gender}&alphabet=${values.alphabet}`;
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
                            <h2 css={centertext}>Filter Breeds</h2>
                            <p css={centertext}>Size</p>
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
                                <p css={centertext}>Gender</p>
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
                                <Row className="justify-content-md-center">
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
                                <Col xs={6} md={4} key={item._id}>
                                    <a href="/pets-detail/:id">
                                        <Card>
                                            <Card.Img
                                                variant="top"
                                                src={item.image[0]}
                                                style={{
                                                    objectFit: "cover",
                                                    height: "350px",
                                                }}
                                            />
                                            <Card.Title css={centertext}>
                                                {item.petName}
                                            </Card.Title>
                                        </Card>
                                    </a>
                                </Col>
                            );
                        })}
                </Row>
            </div>
        </div>
    );
};

export default BreedByCategory;
