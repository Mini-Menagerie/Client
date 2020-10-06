/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import DetailSection from "./DetailSection/DetailSection";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import CardPet from "../../components/CardPet/CardPet";
import { container, container_animal_list } from "./PetsDetail.styles";

import {
    shopText, buyNecessities, dogfood2, dogfood1,
    profits, goToShop, shop
} from '../LandingPage/LandingPage.styles'
import dogfood from "../../assets/dogfood.png";

const PetsDetail = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [details, setDetails] = useState({});
    const [, setProduct] = useState([]);
    const [petCards, setPetCards] = useState([]);
    const [user, setUser] = useState({});

    let { id } = useParams();
    localStorage.setItem("selectedPet", id);

    const fetchDetails = async () => {
        const url = `http://localhost:8000/pet/${id}`;
        axios
            .get(url)
            .then(function (response) {
                setDetails(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    };

    const fetchProduct = () => {
        const url = "http://localhost:8000/product";
        axios
            .get(url)
            .then(function (response) {
                const limit = response.data.result.slice(0, 4);
                setProduct(limit);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    const fetchUser = () => {
        const idUser = details.idUser !== undefined && details.idUser._id;
        const url = `http://localhost:8000/users/${idUser}`;
        axios
            .get(url)
            .then(function (response) {
                setUser(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    const url = () => {
        const url = "http://localhost:8000/pet";
        axios
            .get(url)
            .then(function (response) {
                const limit = response.data.result.slice(0, 4);
                setPetCards(limit);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDetails();
        fetchProduct();
        fetchUser();
        url();

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Container css={container} style={{maxWidth:"70%"}}>
                <DetailSection petDetails={details} user={user} />
            </Container>
            <Container style={{maxWidth: "80%", marginBottom:"50px"}}>
            <div css={shopText}>
                <h1 css={buyNecessities}>
                    <img src={dogfood} css={dogfood1} alt="icon" />
                    &nbsp;&nbsp;&nbsp; Buy Necessities For Your New Friend
                    &nbsp;&nbsp;&nbsp;
                    <img src={dogfood} css={dogfood2} alt="icon" />
                </h1>
                <p css={profits}>
                    100% of profits goes to selected animal shelter,<br></br>
                    help out a friend.
                </p>
            </div>
            <div css={goToShop}>
                <h5><Link to="/shop" >Go To Shop &#62;</Link></h5>
            </div>
            <div css={shop} className="shop">
                {loading ? (
                    <div className="lds-circle">
                        <div></div>
                    </div>
                ) : error ? (
                    <div>{errorMessage}</div>
                ) : (
                    <RecommendedProducts />
                )}
            </div>
            </Container>
            {/* <Container style={{justifyContent:"center", maxWidth:"100%", textAlign:"center"}}>
                <h1>Get Necessities For Your New Best Friend</h1>
                <RecommendedProducts />
            </Container> */}
            <Container css={container_animal_list}>
                <h1>Pets Available Near You</h1>
                <CardPet petCards={petCards} />
            </Container>
        </div>
    );
};

export default PetsDetail;
