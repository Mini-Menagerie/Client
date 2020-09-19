/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Row, Col, Card } from 'react-bootstrap'

import {
    dataPet, margin
} from './CarPet.styles'

const CardPet = () => {

    const cards = [
        { img: 'https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title: 'Kamen Rider', boldText: 'Miniatur Pinscer', ageJenis: 'Female, 80 Years Old', location:'Osaka' },
        { img: 'https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title: 'Ultraman', boldText: 'Miniatur Pinscer', ageJenis: 'Female, 100 Years Old', location:'LA' },
        { img: 'https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title: 'Power Ranger', boldText: 'Miniatur Pinscer', ageJenis: 'Female, 20 Years Old', location:'Miami' },
        { img: 'https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', title: 'Superman', boldText: 'Miniatur Pinscer', ageJenis: 'Female, 1000 Years Old', location:'Crypton' },
    ];

    return (
        <Row>
            {cards.map((e) => (
                <Col md={4} css={margin}>
                    <Card>
                        <Card.Img variant="top" src={e.img} />
                        <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            <b>{e.boldText}</b><br/>
                            {e.ageJenis}<br/>
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