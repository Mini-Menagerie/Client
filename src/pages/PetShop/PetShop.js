/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Pagination } from 'react-bootstrap';
import axios from 'axios'

import ProductListCard from '../../components/ProductListCard/ProductListCard';
import {
    container, head_bg, caption_filter, row_pagination
} from './PetShop.styles'
import head_bg_img from '../../assets/bg-shop.jpg'

const PetShop = () => {
    const [product, setProduct] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let url = 'http://localhost:8000/product'
        axios.get(url)
            .then(
                (response) => {
                    console.log(response.data.result);
                    setIsLoaded(true);
                    setProduct(response.data.result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [])

return (
    <div>
        {/* Head Background */}
        <Container fluid css={container}>
            <Row>
                <img css={head_bg} src={head_bg_img} alt="banner" />
            </Row>
        </Container>
        {/* End of Head Background */}

        {/* Product List */}
        <Container>
            <Row>
                <Col xs={10} css={caption_filter}>
                    <p>(1-9 of {product.length} results)</p>
                    <p>Sort by</p>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridFilter">
                        <Form.Control as="select" defaultValue="Newest">
                            <option>Newest</option>
                            <option>Price (High to Low)</option>
                            <option>Price (Low to High)</option>
                            <option>Best Selling</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <div>
                <ProductListCard data={product} />
            </div>

            <Row css={row_pagination}>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Row>
        </Container>
        {/* End of Product List */}
    </div>
);

}

export default PetShop;