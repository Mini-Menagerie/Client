/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown, Card, Jumbotron, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactFilestack from 'filestack-react';

import PrimaryButton from '../../components/Button/Button'
import {
  wrapperCover,
  h2,
  p,
  linkTo,
  enterLocation,
  underCoverSearch,
  dogCatButton,
  otherPets,
  dropdownMenu,
  breedsLogo,
  petsAvailableText,
  petsAvailable,
  howToAdopt,
  letterIcon,
  informationIcons,
  jumbotron,
  iconText,
  iconContainer,
  howToAdoptContainer,
  arrowIcon,
  shop,
  shopText,
  dogfood1,
  dogfood2,
  buyNecessities,
  profits,
  title,
  choices,
  goToShop,
  colStyles,
} from './LandingPage.styles'

import fish from '../../assets/fish.png'
import hamster from '../../assets/hamster.png'
import horse from '../../assets/horse.png'
import rabbit from '../../assets/rabbit.png'
import sheep from '../../assets/sheep.png'
import bird from '../../assets/bird.png'
import searchpets from '../../assets/searchpets.png'
import form from '../../assets/form.png'
import wait from '../../assets/wait.png'
import letter from '../../assets/letter.png'
import arrow from '../../assets/arrow.png'
import dogfood from '../../assets/dogfood.png'

import CardPet from '../../components/CardPet/CardPet'


const LandingPage = () => {
  const [categoryPet, setCategoryPet] = useState ([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();
  const [product, setProduct] = useState([]);
  const [petCards, setPetCards] = useState([])


  function handleClick(id) {
    window.location.replace(`/pets-detail/${id}`)

    console.log(`${id} clicked`);
  }

  // const fetchPet = () => {
  //   const url ='http://localhost:8000/pet';
  //   axios.get(url)
  //   .then(function(response) {
  //     const limit = response.data.result.slice(0, 4) //limit item display
  //    setCategoryPet(limit)
  //     setLoading(false)
  //   })
  //   .catch(function(error) {
  //     setError(true);
  //     console.log(error.messsage)
  //     setErrorMessage(error.message)
  //     setLoading(false);
  //   });
  // }

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
    // fetchPet();
    fetchProduct();
    url();
  },[]);


  
  return (
    <div>
      <div css={wrapperCover}>
        <h2 css={h2}>Provide For Those Who Needs It.</h2>
        <p css = {p}>Save A Live Today</p>
        <Link to="/all-pets" css={linkTo}><PrimaryButton type="submit">Start Searching</PrimaryButton></Link>
      </div>
        <Container css={underCoverSearch}>
          <Row>
            <Col md={3} css={colStyles}><input type="text" css={enterLocation} placeholder="Enter Province or State"></input></Col>
            <Col md={3} css={colStyles}><button css={dogCatButton}><i class="fas fa-bone"></i>&nbsp;&nbsp;&nbsp;Find Dog Breed</button></Col>
            <Col md={3} css={colStyles}><button css={dogCatButton}><i class="fas fa-paw"></i>&nbsp;&nbsp;&nbsp;Find Cat Breed</button></Col>
            <Col md={3} css={colStyles}>
              <Dropdown>
                <Dropdown.Toggle css={otherPets}>
                  Find Other Pet
                </Dropdown.Toggle>
                <Dropdown.Menu css={dropdownMenu}>
                  <Dropdown.Item href="#/action-1" css={breedsLogo}>
                    <img src={rabbit} css={breedsLogo} alt="Pet" />
                    &nbsp;
                    Rabbit
                </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" css={breedsLogo}>
                    <img src={hamster} css={breedsLogo}></img>
                    &nbsp;
                    Small & Furry
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" css={breedsLogo}>
                    <img src={bird} css={breedsLogo} alt="pet"></img>
                    &nbsp;
                    Birds
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" css={breedsLogo}>
                    <img src={fish} css={breedsLogo} alt="pet"></img>
                    &nbsp;
                    Scales & Fins
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" css={breedsLogo}>
                    <img src={horse} css={breedsLogo} alt="pet"></img>
                    &nbsp;
                    Horse
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" css={breedsLogo}>
                    <img src={sheep} css={breedsLogo} alt="pet"></img>
                    &nbsp;
                    Barnyard
                </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <div css={petsAvailableText}>
          <h2>
            Pets Available for Adoption Near You
          </h2>
        </div>
      <div css={petsAvailable}>
      <CardPet petCards={petCards} onClick={() => handleClick(url._id)}/>
          {/* {loading ? (
            <div className="lds-circle"><div></div></div>
          ) : (
              error ? (
                <div>{errorMessage}</div>
              ) : (
                  categoryPet.map((item) => (
                    <Card style={{ width: '18rem' }}  onClick={() => handleClick(item._id)}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title css={title}>{item.petName}</Card.Title>
                      <Card.Text>
                       {item.gender}, {item.age} Years Old
                      </Card.Text>
                      <Card.Text>
                       {item.about}
                      </Card.Text>
                      <Card.Text>
                       {item.location}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              )
          ) */}
          
      </div>
      <div css={howToAdoptContainer}>
        <div className="HowToAdopt">
          <h2 css={howToAdopt}>How To Adopt
          &nbsp;
          <img src={letter} css={letterIcon} alt="cover"></img>
          </h2>
        </div>
          <div className="icons" css={iconContainer}>
              <div className="searchpets">
                <Jumbotron css={jumbotron}>
                  <img src={searchpets}  css={informationIcons}></img>
                  <h4 css={iconText}>Search For Your <br></br>Future Best Friend</h4>
                </Jumbotron>
              </div>
              <img src={arrow} css={arrowIcon}></img>
              <div className="form">
                  <Jumbotron css={jumbotron}>
                    <img src={form} css={informationIcons}></img>
                    <h4 css={iconText}>Fill Out Adoption Form</h4>
                  </Jumbotron>
              </div>
              <img src={arrow} css={arrowIcon}></img>
              <div className="wait">
                  <Jumbotron css={jumbotron}>
                    <img src={wait} css={informationIcons}></img>
                    <h4 css={iconText}>Wait For Approval</h4>
                  </Jumbotron>
              </div>
          </div>
      </div>
      <div css={shopText}>
          <h1 css={buyNecessities}><img src={dogfood} css={dogfood1}/>
          &nbsp;&nbsp;&nbsp;
          Buy Necessities For Your New Friend
          &nbsp;&nbsp;&nbsp;
          <img src={dogfood} css={dogfood2}/></h1>
          <p css={profits}>
            100% of profits goes to selected animal shelter,<br></br>
            help out a friend.
          </p>
      </div>
      <div css={goToShop}>
      <Link to="/shop">Go To Shop &#62;</Link>

      </div>
      <div css={shop} className="shop">
          {loading ? (
            <div className="lds-circle"><div></div></div>
          ) : (
              error ? (
                <div>{errorMessage}</div>
              ) : (
                  product.map((item) => (
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title css={title}>{item.productName}</Card.Title>
                        <Card.Text css ={choices}>
                          More Choices Available
                        </Card.Text>
                        <Card.Text>
                          Rp. {item.price}
                        </Card.Text>
                        <PrimaryButton type="submit">Add To Cart</PrimaryButton>
                      </Card.Body>
                  </Card>
                ))
              )
          )
          }
      </div>
    </div>
  );
}

export default LandingPage;