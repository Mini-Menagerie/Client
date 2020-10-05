/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Formik, Form } from "formik";
import { useParams, Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
    Card,
    Button,
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup,
    Container,
} from "react-bootstrap";

import {
    wrapperCover,
    widthButton,
    collections,
    centertext,
    filter,
    buttonGroup,
    card,
} from "./BreedByCategory.styles";

const BreedByCategory = () => {
    const [collection, setCollection] = useState([]);
    const [breed, setBreed] = useState([]);
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
        // const url = `${process.env.REACT_APP_API_URL}/pet/category/${category}`;
        // const url = `${process.env.REACT_APP_API_URL}/petdata/collection/${collection}`;
        const url = `${process.env.REACT_APP_API_URL}/petCollection`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        setCollection(result.result);
    };

    const fetchBreed = async () => {
        const url = `${process.env.REACT_APP_API_URL}/pet/category/${category}`;
        const response = await fetch(url);

        const result = await response.json();
        function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject = {};

            for (var i in originalArray) {
                lookupObject[originalArray[i]["idBreed"][prop]] =
                    originalArray[i];
            }

            for (i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
            return newArray;
        }

        var uniqueArray = removeDuplicates(result.result, "_id");

        setBreed(uniqueArray);
    };

    useEffect(() => {
        fetchCollection();
        fetchBreed();

        //eslint-disable-next-line
    }, []);   
    return (
        <div>
            <div css={wrapperCover}>
                <div></div>
            </div>
            <div css={collections}>
                <h2 css={centertext}>Search Our Collection</h2>
                <Carousel responsive={responsive} infinite={true}>
                    {collection.length > 0 &&
                        collection.map((item) => {
                            return (
                                <Col key={item._id}>
                                    <Link
                                        // to={`/all-breeds/category/${category}/${item.idBreed.breedName}`}
                                        to={`petdetail?search=${item.idCollections}`}
                                    >
                                        <Card>
                                            {/* <Card.Img
                                                variant="top"
                                                src={item.image[0]}
                                                style={{
                                                    objectFit: "cover",
                                                    height: "350px",
                                                }}
                                            /> */}
                                            <Card.Title css={centertext}>
                                                {item.collectionName}
                                            </Card.Title>
                                        </Card>
                                    </Link>
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
                <Container fluid>
                    <Row>
                        {breed.length > 0 &&
                            breed.map((item) => {
                                return (
                                    <Col
                                        xs={12}
                                        md={4}
                                        key={item._id}
                                        css={card}
                                    >
                                        <Link
                                            to={`/all-breeds/category/${category}/${item.idBreed.breedName}`}
                                        >
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
                                                    {item.idBreed.breedName}
                                                </Card.Title>
                                            </Card>
                                        </Link>
                                    </Col>
                                );
                            })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BreedByCategory;
