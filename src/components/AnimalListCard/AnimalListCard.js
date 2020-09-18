/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Card } from 'react-bootstrap'

import { animal_list, card_info } from './AnimalListCard.styles'

const AnimalListCard = ({ data }) => {
    return (
        <div css={animal_list}>
            {
                data.map(value => {
                    return (
                        <Card style={{ width: '200px'}}>
                            <Card.Img variant="top" src={value.image} />
                            <Card.Body>
                                <h5>{value.name}</h5>
                                <div css={card_info}>
                                    <Card.Text>{value.age}yo</Card.Text>
                                    <Card.Text>{value.breed}</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    );
}
export default AnimalListCard;