/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react';
import axios from 'axios';


import { Card, FormControl, Row, Col, Form, Dropdown} from 'react-bootstrap';

import {
  wrapperCover, img, 
  whitecolor, card, margin, search, sortby, title,
  widthButton,  result, petsAvailable, displaying,
} from './searchPage.styles'



const SearchPage = () => {
  const [searchPet, setSearchPet] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();

  const handleSubmit = (event) => {
    // setSearch(event.target.value)
  }
  const handleChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

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
  console.log(searchPet);
  // kalau searchnya gender looping setBygender
  let setByGender = searchPet.filter(pet => {
    return pet.gender.toLowerCase() === search 
  })
  
  if(search === ""){
    return (
      <div>
          <div css={wrapperCover}>
              <div css={margin}>
                  <h1 css={whitecolor}>Looking For Something Specific?</h1>
                  <Card css={card}>
                      <FormControl onChange={handleChange} name='search' value={search} type="text" placeholder="e.g Animal Name" className="mr-sm-2" >
                        </FormControl>                  
                  </Card>
              </div>
              <div></div>
          </div>
          <div css={ sortby}>
            <Card css={ sortby}>
              <Row>
                  <Col css={ sortby}>
                      <div className="nameSearch" css={ sortby}>
                        Search Result for ""
                        {/* <form onSubmit={handleSubmit}>
                        <input type="text" name="search" value={search} placeholder="Search" onChange={handleChange}></input>
                        </form> */}
                      </div>
                  </Col>
                  <Col>
                      <div className="sortBy" css={sortby}>
                      <Form.Group as={Col} controlId="formGridFilter" >Sort By:
                            <Form.Control as="select" defaultValue="Newest" >
                                <option>Location</option>
                                <option>Gender</option>
                                <option>Alphabet</option>
                                <option>Oldest to Newest</option>
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
  } else if(search === "Female" || "Male" || "female" || "male"){
    return (
      <div>
          <div css={wrapperCover}>
              <div css={margin}>
                  <h1 css={whitecolor}>Looking For Something Specific?</h1>
                  <Card css={card}>
                      <FormControl onChange={handleChange} name='search' value={search} type="text" placeholder="e.g Animal Name" className="mr-sm-2" >
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
                        {/* <form onSubmit={handleSubmit}>
                        <input type="text" name="search" value={search} placeholder="Search" onChange={handleChange}></input>
                        </form> */}
                      </div>
                  </Col>
                  <Col>
                      <div className="sortBy" css={sortby}>
                      <Form.Group as={Col} controlId="formGridFilter" >Sort By:
                            <Form.Control as="select" defaultValue="Newest" >
                                <option>Location</option>
                                <option>Gender</option>
                                <option>Alphabet</option>
                                <option>Oldest to Newest</option>
                            </Form.Control>
                        </Form.Group> 
                      </div>                      
                  </Col>   
              </Row>              
           </Card>
          </div>
         <Card css={result}>
              <h5 css={displaying}>Displaying result {setByGender.length} </h5>
                                         
              <div css={petsAvailable}>
                    {loading ? (
                      <div className="lds-circle"><div></div></div>
                    ) : (
                        error ? (
                          <div>{errorMessage}</div>
                        ) : (
                          
                          setByGender.map((item) => (
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
  }
  
    
};

export default SearchPage;