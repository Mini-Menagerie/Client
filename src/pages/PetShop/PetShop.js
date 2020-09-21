/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios'

import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard/ProductCard';
import {
    container, head_bg, caption_filter
} from './PetShop.styles'
import head_bg_img from '../../assets/bg-shop.jpg'

const PetShop = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentProduct, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        let url = 'http://localhost:8000/product'
        const getProducts = async () => {
            setLoading(true);
            const response = await axios.get(url)
            console.log(response.data.result);
            setProducts(response.data.result)
            setLoading(false);
        }

        getProducts();
    }, [])

    //get current products
    const indexOfLastProduct = currentProduct * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

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
            <Container css={container}>
                <Row>
                    <Col xs={10} css={caption_filter}>
                        <p>(1-9 of {products.length} results)</p>
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
            </Container>

            <Container css={container}>
                <Row>
                    <ProductCard products={currentProducts} loading={loading} />
                </Row>
            </Container>

            <div>
                <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
            </div>
            {/* End of Product List */}
        </div>
    );

}

export default PetShop;