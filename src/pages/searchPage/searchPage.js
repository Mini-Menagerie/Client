/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactFilestack from 'filestack-react';

import { Card, FormControl, Row, Col, Dropdown} from 'react-bootstrap';

import {
  wrapperCover, img, 
  whitecolor, card, margin, search, sortby, title,
  widthButton,  result, petsAvailable, displaying,
} from './searchPage.styles'



const SearchPage = () => {
  const [searchPet, setSearchPet] = useState([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();

  useEffect (() => {
    const url='http://localhost:8000/pet';
    axios.get(url)
    .then(function(response) {
      console.log(response.data.result)
     setSearchPet(response.data.result);
      setLoading(false)
    })
    .catch(function(error) {
      setError(true);
      console.log(error.messsage)
      setErrorMessage(error.message)
      setLoading(false);
    });
  },[]);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};
     

    return (
        <div>
            <div css={wrapperCover}>
                <div css={margin}>
                    <h1 css={whitecolor}>Looking For Something Specific?</h1>
                    <Card css={card}>
                        <FormControl type="text" placeholder="e.g Animal Name" className="mr-sm-2" >
                          </FormControl>                  
                    </Card>
                </div>
                <div></div>
            </div>
            <div css={search}>
              <Card css={search}>
                <Row>
                    <Col>
                        <div className="nameSearch" css={ sortby}>
                          Search Result for ""
                        </div>
                    </Col>
                    <Col>
                        <div className="sortBy">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" css={sortby}>
                              Sort By:
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Alphabetical Order</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Newest to Oldest</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Oldest to Newest</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Nearest Location</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                    </Col>      
                </Row>              
             </Card>
            </div>
           <Card css={result}>
                <h5 css={displaying}>Displaying 9 out of 120 results </h5>
                                           
                <div css={petsAvailable}>
                      {loading ? (
                        <div className="lds-circle"><div></div></div>
                      ) : (
                          error ? (
                            <div>{errorMessage}</div>
                          ) : (
                              searchPet.map((item) => (
                                <Card style={{ width: '18rem' }}>
                                <Card.Img css={img} variant="top" src={item.image}/>
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
                      )
                      }
                  </div>
                
                      <Row className="justify-content-md-center">
                          <Dropdown.Toggle variant="light" id="dropdown-basic" css={widthButton}>
                              Show More Result
                          </Dropdown.Toggle>
                      </Row>                 
           </Card>
            
           
        </div>
    );
};

export default SearchPage;