/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


import CarouselSection from './CarouselSection/CarouselSection';
import DetailSection from './DetailSection/DetailSection';
import RecommendedProducts from '../../components/RecommendedProducts/RecommendedProducts'
import CardPet from '../../components/CardPet/CardPet'
import {
    container, container_animal_list
} from './PetsDetail.styles'
import logo from '../../assets/logo-mini-menagerie.png'
import Axios from 'axios';


// const data_carousel = [
//     {
//         image: "https://dummyimage.com/2000x500/007aeb/4196e5",
//         caption: "Praesent mauris sapien, tempus nec libero vitae, tempor hendrerit ipsum."
//     },
//     {
//         image: "https://dummyimage.com/2000x500/96622e/4196e5",
//         caption: "Nunc ac euismod felis. Pellentesque habitant morbi tristique senectus et."
//     },
//     {
//         image: "https://dummyimage.com/2000x500/7a446b/4196e5",
//         caption: "Quisque in lacus dictum quam elementum tempor a ut eros."
//     }
// ]

// const product_data = [
//     {
//         image: "https://dummyimage.com/286x180/b8a7b8/081285",
//         title: "Product name",
//         about: "Suspendisse iaculis consectetur tempor. Fusce porta elementum mauris quis ullamcorper",
//         price: 50000
//     },
//     {
//         image: "https://dummyimage.com/286x180/b8a7b8/081285",
//         title: "Product name",
//         about: "Suspendisse iaculis consectetur tempor. Fusce porta elementum mauris quis ullamcorper",
//         price: 50000
//     },
//     {
//         image: "https://dummyimage.com/286x180/b8a7b8/081285",
//         title: "Product name",
//         about: "Suspendisse iaculis consectetur tempor. Fusce porta elementum mauris quis ullamcorper",
//         price: 50000
//     }
// ]

// const animal_data = [
//     {
//         image: "https://dummyimage.com/200/000000/fff",
//         name: "Doggy",
//         age: 5,
//         breed: "Bulldog"
//     },
//     {
//         image: "https://dummyimage.com/200/000000/fff",
//         name: "Catty",
//         age: 2,
//         breed: "Persian"
//     },
//     {
//         image: "https://dummyimage.com/200/000000/fff",
//         name: "Gukguk",
//         age: 3,
//         breed: "Chihuahua"
//     }
// ]

const PetsDetail = props => {
    // let id = props.match.params
    // const [carousel, setCarousel] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [details, setDetails] = useState([]);
    const [product, setProduct] = useState([]);
    const [petCards, setPetCards] = useState([]);

    // function handleClick(id) {
    //     window.location.replace(`/pets-detail/${id}`)
    // }

        
    // const fetchCarousel = () => {
    //     const url='http://localhost:8000/'
    //     axios.get(url)
    //     .then(function(response) {
    //         setCarousel(response.data.result)
    //         setLoading(false)
    //     })
    //     .catch(function(error){
    //         setError(true);
    //         console.log(errorMessage);
    //         setLoading(false)
    //     })
    // }

    let {id} = useParams()

    const fetchDetails = async () => {

        const url= `http://localhost:8000/pet/${id}`
        axios.get(url)
        .then(function(response) {
            console.log(response);
            setDetails(response.data.result)
            setLoading(false)
        })
        .catch(function(error) {
            console.log(errorMessage);
            setLoading(false)
        })
    }

        const fetchProduct = () => {
        const url='http://localhost:8000/product';
        axios.get(url)
        .then(function(response) {
          const limit = response.data.result.slice(0, 4)
         setProduct(limit);
          setLoading(false)
        })
        .catch(function(error) {
          setError(true);
          console.log(error.messsage)
          setErrorMessage(error.message)
          setLoading(false);
        }); 
      }

      const url = () => {
        const url='http://localhost:8000/pet';
        axios.get(url)
        .then(function(response) {
          const limit = response.data.result.slice(0, 4)
         setPetCards(limit);
          setLoading(false)
        })
        .catch(function(error) {
          setError(true);
          console.log(error.messsage)
          setErrorMessage(error.message)
          setLoading(false);
        }); 
      }
    
    useEffect (() => {
        // fetchCarousel();
        fetchDetails();
        fetchProduct();
        url();
      },[]);

    return (
        <div>
            {/* Carousel Section */}
            {/* <Container fluid css={container}>
                <CarouselSection carousel={carousel} />
            </Container> */}
            {/* End of Carousel Section */}

            {/* Detail Section */}
            <Container css={container}>
                 <DetailSection  petDetails={details} />
            </Container>
            {/* End of Detail Section */}

            {/* Product List Section */}
            <Container css={container}>
                <RecommendedProducts/>
            </Container>
            {/* End of Product List Section */}

            {/* Animal List Section */}
            <Container css={container_animal_list}>
            <CardPet petCards={petCards}/>
            </Container>
            {/* End of Animal List Section */}
        </div>
    );
}

export default PetsDetail;