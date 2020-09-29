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
import { detail_section_col } from "./DetailSection/DetailSection.styles";

const PetsDetail = (props) => {
    const [, setLoading] = useState(true);
    const [, setError] = useState(false);
    const [, setErrorMessage] = useState();
    const [details, setDetails] = useState({});
    const [ ,setProduct] = useState([]);
    const [petCards, setPetCards] = useState([]);
    const [user, setUser] = useState({});
    // const [email, setEmail] = useState({});
  

    let { id } = useParams();
    localStorage.setItem('selectedPet', id)

    // let userLogin = JSON.parse(localStorage.getItem("user"));

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

    //  const userEmail = () => {
    //     const url = `http://localhost:8000/userAccount/${userLogin.id}`;
    //     axios
    //         .get(url)
    //         .then(function (response) {
    //             setEmail(response.data.result);
    //             console.log(response.data.result);
    //             setLoading(false);
    //         })
    //         .catch(function (error) {
    //             console.log(error.message);
    //             setErrorMessage(error.message);
    //             setLoading(false)            });
    // };

    const fetchUser = () => {
        const idUser = details.idUser!==undefined && details.idUser._id
        const url =`http://localhost:8000/users/${idUser}`
        axios.get(url)
        .then(function (response) {
            setUser(response.data.result)
            console.log(response.data.result);
            setLoading(false)
        })
        .catch(function(error) {
            console.log(error.message);
            setErrorMessage(error.message);
            setLoading(false)
        })
    }

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
        // userEmail();


    }, []);

    return (
        <div>
            <Container css={container}>
                <DetailSection petDetails={details} user={user}/>
            </Container>
            <Container css={container}>
                <h1>Get Necessities For Your New Best Friend</h1>
                <RecommendedProducts />
            </Container>
            <Container css={container_animal_list}>
                <h1>Pets Available Near You</h1>
                <CardPet petCards={petCards} />
            </Container>
        </div>
    );
};

export default PetsDetail;
