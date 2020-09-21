/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {
    margin, petImage, cards
} from './CardPet.styles'

const CardPet = ({petCards}) => {
    console.log(petCards);
    const history = useHistory()

    function handleClick(id) {
        history.push(`/pets-detail/${id}`)
    
        console.log(`${id} clicked`);
      }

    return (
        <Row>
            {petCards.map((e) => (
                <Col md={3} css={margin}>
                    <Card css={cards} onClick={() => handleClick(e._id)}>
                        <Card.Img css={petImage} variant="top" src={e.image} />
                        <Card.Body>
                        <Card.Title><h4><b>{e.petName}</b></h4></Card.Title>
                        <Card.Text>
                            {e.idBreed.breedName}<br/>
                            {e.gender}, {e.age} Years Old<br/>
                            {e.location}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default CardPet