/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Card, Button } from 'react-bootstrap'

import { product_list, card, card_img, product_name } from './ProductListCard.styles'

const ProductListCard = ({ data }) => {
    return (
        <div css={product_list}>
            {
                data.map((value) => {
                    return (
                        <Card style={{ width: '15rem', marginBottom: '15px' }}>
                            <div style={{padding: '10px'}}>
                                <Card.Img css={card_img} variant="top" src={value.image[0].image} />
                            </div>
                            <Card.Body>
                                <p css={product_name}>{value.productName}</p>
                                <Card.Text>Rp {value.price}</Card.Text>
                                <Card.Text>{value.stock} Pcs</Card.Text>
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