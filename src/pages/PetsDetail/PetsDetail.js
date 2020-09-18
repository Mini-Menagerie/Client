/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Container, Row, Col, Card } from 'react-bootstrap';


import CarouselSection from './CarouselSection/CarouselSection';
import DetailSection from './DetailSection/DetailSection';
import ProductListCard from '../../components/ProductListCard/ProductListCard';
import AnimalListCard from '../../components/AnimalListCard/AnimalListCard';

import {
    container, container_animal_list
} from './PetsDetail.styles'
import logo from '../../assets/logo-mini-menagerie.png'

const data_carousel = [
    {
        image: "https://dummyimage.com/2000x500/007aeb/4196e5",
        caption: "Praesent mauris sapien, tempus nec libero vitae, tempor hendrerit ipsum."
    },
    {
        image: "https://dummyimage.com/2000x500/96622e/4196e5",
        caption: "Nunc ac euismod felis. Pellentesque habitant morbi tristique senectus et."
    },
    {
        image: "https://dummyimage.com/2000x500/7a446b/4196e5",
        caption: "Quisque in lacus dictum quam elementum tempor a ut eros."
    }
]

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

const animal_data = [
    {
        image: "https://dummyimage.com/200/000000/fff",
        name: "Doggy",
        age: 5,
        breed: "Bulldog"
    },
    {
        image: "https://dummyimage.com/200/000000/fff",
        name: "Catty",
        age: 2,
        breed: "Persian"
    },
    {
        image: "https://dummyimage.com/200/000000/fff",
        name: "Gukguk",
        age: 3,
        breed: "Chihuahua"
    }
]

const PetsDetail = () => {
    return (
        <div>
            {/* Carousel Section */}
            <Container fluid css={container}>
                <CarouselSection data={data_carousel} />
            </Container>
            {/* End of Carousel Section */}

            {/* Detail Section */}
            <Container css={container}>
                <DetailSection />
            </Container>
            {/* End of Detail Section */}

            {/* Product List Section */}
            <Container css={container}>
                <ProductListCard data={product_data} />
            </Container>
            {/* End of Product List Section */}

            {/* Animal List Section */}
            <Container css={container_animal_list}>
                <h1>Pet Available for Adoption Nearby</h1>
                <Row>
                    <Col xs={8}>
                        <AnimalListCard data={animal_data} />
                    </Col>
                    <Col xs={4}>
                        <Card style={{ width: '200px', padding: '20px', height: "295px", justifyContent: "center" }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Text style={{ fontSize: '12px', textAlign: 'center' }}>400 more pet available on Mini Menagerie </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* End of Animal List Section */}
        </div>
    );
}

export default PetsDetail;