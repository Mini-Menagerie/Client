/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import MoonLoader from "react-spinners/MoonLoader"

import { addToCart } from '../../redux/actions/addToCart'
import { card_img, product_name, loading_css, product_list, product_price } from './ProductCard.styles'
import { ActionButton } from '../Button/ActionButton'

const ProductCard = ({ products, loading, ...props }) => {
    console.log(props)
    if (loading) {
        return <div css={loading_css}><MoonLoader /></div>
    }
    return (
        <div css={product_list}>
            {
                products.map((value) => {
                    return (
                        <Card key={value._id} style={{ width: '16rem', marginBottom: '15px' }}>
                            <div style={{ padding: '10px' }}>
                                <a href={`/product/${value._id}`}>
                                    <Card.Img css={card_img} variant="top" src={value.image[0].image} />
                                </a>
                            </div>
                            <Card.Body>
                                <p css={product_name}>{value.productName}</p>
                                <p css={product_price}>Rp {value.price}</p>
                                {/* <p>{props.data.product.stock != undefined ?0: props.data.product.stock}</p> */}
                                <ActionButton onClick={() => props.addToCart(value._id)} />
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.addToCart);
    return {
        data: state.addToCart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
