/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react';
import axios from 'axios';


import { Card, FormControl, Row, Col, Dropdown} from 'react-bootstrap';

import {
  wrapperCover, img, 
  whitecolor, card, margin, search, sortby, title,
  widthButton,  result, petsAvailable, displaying,
} from '../searchPage.styles'



const SearchByGender = () => {
  const [searchFemale, setSearchFemale] = useState([]);
  const [searchMale, setSearchMale] = useState([]);
  // const [search, setSearch] = useState("")
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (false);
  const [errorMessage, setErrorMessage] = useState ();

  

  useEffect (() => {
    const url='http://localhost:8000/petgender/gender?=female';
    axios.get(url)
    .then(function(response) {
      console.log(response.data.result)
     setSearchFemale(response.data.result);
      setLoading(false)
    })
    .catch(function(error) {
      setError(true);
      console.log(error.messsage)
      setErrorMessage(error.message)
      setLoading(false);
    });
  },[]);
  console.log(searchFemale);

  useEffect (() => {
    const url='http://localhost:8000/petgender/gender?=male';
    axios.get(url)
    .then(function(response) {
      console.log(response.data.result)
     setSearchMale(response.data.result);
      setLoading(false)
    })
    .catch(function(error) {
      setError(true);
      console.log(error.messsage)
      setErrorMessage(error.message)
      setLoading(false);
    });
  },[]);
  console.log(searchFMale);
  // kalau searchnya gender looping setBygender
  // let setByGender = searchPet.filter(pet => {
  //   return pet.gender.toLowerCase() === search 
  // })
  
  return (   
         <Card css={result}>
              <h5 css={displaying}>Displaying {searchFemale.length} </h5>                                         
              <div css={petsAvailable}>
                    {loading ? (
                      <div className="lds-circle"><div></div></div>
                    ) : (
                        error ? (
                          <div>{errorMessage}</div>
                        ) : (
                          
                            searchFemale.map((item) => (
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
                <h5 css={displaying}>Displaying {searchMale.length} </h5>                                         
              <div css={petsAvailable}>
                    {loading ? (
                      <div className="lds-circle"><div></div></div>
                    ) : (
                        error ? (
                          <div>{errorMessage}</div>
                        ) : (
                          
                            searchMale.map((item) => (
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
          
         
   
  )
}
    


export default SearchByGender;