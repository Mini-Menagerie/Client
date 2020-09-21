/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, Button, FormControl, Row, Col, ToggleButton, ButtonGroup, Dropdown} from 'react-bootstrap';

import {
  wrapperCover,
  whitecolor, card, margin, buttoncard, marginbutton, search, sortby,
  widthButton, collections, centertext, filter, buttonGroup, result,
} from './searchPage.styles'

const SearchPage = () => {
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
                <h5 style={{fontWeight: "700"}, {fontSize: "30px"}}>Displaying 9 out of 120 results </h5>
                <div css={collections}>
                <Card>
                    <Carousel responsive={responsive}>                    
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />                            
                            </Card>                                     
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />                            
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            </Card>                    
                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            </Card>                    
                    </Carousel>
                    <Card.Title css={centertext}>Small Cat</Card.Title>
                    <Card.Title css={centertext}>Small Cat</Card.Title>
                    <Card.Title css={centertext}>Small Cat</Card.Title>
                </Card>
                      <Row className="justify-content-md-center">
                          <Dropdown.Toggle variant="light" id="dropdown-basic" css={widthButton}>
                              Show More Result
                          </Dropdown.Toggle>
                      </Row>
                  </div>
           </Card>
            
           
        </div>
    );
};

export default SearchPage;