/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Container, Row, Col, Button } from 'react-bootstrap';

import { container, row_quantity } from './ProductDetail.styles'
import ProductListCard from '../../components/ProductListCard/ProductListCard'
import Gallery from '../../components/ImageGallery/ImageGallery'

const product_data = [
    {
        image: "https://dummyimage.com/286x180/b8a7b8/081285",
        title: "Product name",
        about: "Suspendisse iaculis consectetur tempor. Fusce porta elementum mauris quis ullamcorper",
        price: 50000
    },
    {
        image: "https://dummyimage.com/286x180/b8a7b8/081285",
        title: "Product name",
        about: "Suspendisse iaculis consectetur tempor. Fusce porta elementum mauris quis ullamcorper",
        price: 50000
    },
    {
        image: "https://dummyimage.com/286x180/b8a7b8/081285",
        title: "Product name",
        about: "Suspendisse iaculis consectetur tempor. Fusce porta elementum mauris quis ullamcorper",
        price: 50000
    }
]

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const ProductDetail = () => {
    return (
        <div>
            <Container>
                <Gallery/>
            </Container>
            <Container css={container}>
                <Row>
                    <Col xs={2}>
                        <h1>slider</h1>
                    </Col>
                    <Col xs={10}>
                        <Row>
                            <Col>
                                <h1>photo</h1>
                            </Col>
                            <Col>
                                <Row>Title</Row>
                                <Row>Price</Row>
                                <Row>Stock</Row>
                                <Row css={row_quantity}>
                                    <Col><input type="number" id="quantity" name="quantity" min="1" max="5" style={{ width: '90%', height: '100%' }} /></Col>
                                    <Col><Button variant="primary">Add to Cart</Button></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <h3>Product Details</h3>
                            <Row>
                                <Col>
                                    <p>Description</p>
                                </Col>
                                <Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus tempus, posuere urna ut, ultricies nibh. Nulla ornare elit id augue mattis, vulputate semper lorem sagittis.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Weight</p>
                                </Col>
                                <Col>
                                    <p>1kg</p>
                                </Col>
                                <Col>
                                    <p>Condition</p>
                                </Col>
                                <Col>
                                    <p>New</p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1>Also Get</h1>
                <ProductListCard data={product_data} />
            </Container>
        </div>
    );
}

export default ProductDetail;