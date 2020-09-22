/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import axios from "axios";

import { Card, FormControl, Row, Col, Form, Dropdown } from "react-bootstrap";

import {
    wrapperCover,
    img,
    whitecolor,
    card,
    margin,
    sortby,
    title,
    widthButton,
    result,
    petsAvailable,
    displaying,
} from "./searchPage.styles";

const SearchPage = () => {
    const [searchPet, setSearchPet] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const handleChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };

    const handleFilter = (event) => {
        console.log(event.target.value);
        setFilter(event.target.value);
    };

    const getFilter = () => {
        const url = `http://localhost:8000/pet/filter/?variable=${filter}`;
        axios
            .get(url)
            .then(function (response) {
                setSearchPet(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    const getSearch = () => {
        const url = `http://localhost:8000/pet/search/?variable=${search}`;
        axios
            .get(url)
            .then(function (response) {
                setSearchPet(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };
    useEffect(() => {
        const url = "http://localhost:8000/pet";
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data.result);
                setSearchPet(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                console.log(error.messsage);
                setErrorMessage(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div css={wrapperCover}>
                <div css={margin}>
                    <h1 css={whitecolor}>Looking For Something Specific?</h1>
                    <Card css={card}>
                        <FormControl
                            onChange={handleChange}
                            onKeyUp={getSearch}
                            name="search"
                            value={search}
                            type="text"
                            placeholder="e.g Animal Name"
                            className="mr-sm-2"
                        ></FormControl>
                    </Card>
                </div>
                <div></div>
            </div>
            <div css={sortby}>
                <Card css={sortby}>
                    <Row>
                        <Col css={sortby}>
                            <div className="nameSearch" css={sortby}>
                                Search Result for {search}
                            </div>
                        </Col>
                        <Col>
                            <div className="sortBy" css={sortby}>
                                <Form.Group as={Col} controlId="formGridFilter">
                                    Sort By:
                                    <Form.Control
                                        onChange={handleFilter}
                                        onClick={getFilter}
                                        as="select"
                                        defaultValue="Location"
                                    >
                                        <option value="location-asc">
                                            Location
                                        </option>
                                        <option value="gender-asc">
                                            Gender
                                        </option>
                                        <option value="name-asc">
                                            Alphabet
                                        </option>
                                        <option value="age-asc">
                                            Oldest to Newest
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <Card css={result}>
                <h5 css={displaying}>Displaying 9 out of 120 results </h5>

                <div css={petsAvailable}>
                    {loading ? (
                        <div className="lds-circle">
                            <div></div>
                        </div>
                    ) : error ? (
                        <div>{errorMessage}</div>
                    ) : (
                        searchPet.map((item) => (
                            <Card style={{ width: "18rem" }}>
                                <Card.Img
                                    css={img}
                                    variant="top"
                                    src={item.image}
                                />
                                <Card.Body>
                                    <Card.Title css={title}>
                                        {item.petName}
                                    </Card.Title>
                                    <Card.Text>
                                        {item.gender}, {item.age} Years Old
                                    </Card.Text>
                                    <Card.Text>{item.about}</Card.Text>
                                    <Card.Text>{item.location}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </div>

                <Row className="justify-content-md-center">
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-basic"
                        css={widthButton}
                    >
                        Show More Result
                    </Dropdown.Toggle>
                </Row>
            </Card>
        </div>
    );
};

export default SearchPage;
