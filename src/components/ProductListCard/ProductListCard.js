/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Card, Button } from 'react-bootstrap'

import { product_list } from './ProductListCard.styles'

const ProductListCard = ({ data }) => {
    return (
        <div css={product_list}>
            {
                data.map(value => {
                    return (
                        <Card style={{ width: '18rem', marginBottom: '10px' }}>
                            <Card.Img variant="top" src={value.image} />
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>{value.about}</Card.Text>
                                <Card.Text>Rp. {value.price}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default ProductListCard;