/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailSection from "./DetailSection/DetailSection";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import CardPet from "../../components/CardPet/CardPet";
import { container, container_animal_list } from "./PetsDetail.styles";
// import logo from "../../assets/logo-mini-menagerie.png";
// import Axios from "axios";

const PetsDetail = (props) => {
    // let id = props.match.params
    // const [carousel, setCarousel] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [details, setDetails] = useState({});
    const [, setProduct] = useState([]);
    const [petCards, setPetCards] = useState([]);

    // function handleClick(id) {
    //     window.location.replace(`/pets-detail/${id}`);
    // }

    const fetchCarousel = () => {
        const url = "http://localhost:8000/";
        axios
            .get(url)
            .then(function (response) {
                // setCarousel(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                console.log(errorMessage);
                setLoading(false);
            });
    };

    let { id } = useParams();

    const fetchDetails = async () => {
        const url = `http://localhost:8000/pet/${id}`;
        axios
            .get(url)
            .then(function (response) {
                console.log(response);

                setDetails(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(errorMessage);
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
                console.log(error.messsage);
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
                console.log(error.messsage);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCarousel();
        fetchDetails();
        fetchProduct();
        url();

        // eslint-disable-next-line
    }, []);
    console.log(details, "details");
    return (
        <div>
            {/* Carousel Section */}
            {/* <Container fluid css={container}>
                <CarouselSection carousel={carousel} />
            </Container> */}
            {/* End of Carousel Section */}

            {/* Detail Section */}
            <Container css={container}>
                <DetailSection petDetails={details} />
            </Container>
            {/* End of Detail Section */}

            {/* Product List Section */}
            <Container css={container}>
                <h1>Get Necessities For Your New Best Friend</h1>
                <RecommendedProducts />
            </Container>
            {/* End of Product List Section */}

            {/* Animal List Section */}
            <Container css={container_animal_list}>
                <h1>Pets Available Near You</h1>
                <CardPet petCards={petCards} />
            </Container>
            {/* End of Animal List Section */}
        </div>
    );
};

export default PetsDetail;
