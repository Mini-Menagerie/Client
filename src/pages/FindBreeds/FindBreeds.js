/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, Button, FormControl, Row, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';

import {
  wrapperCover,
  whitecolor, card, margin, buttoncard, marginbutton,
  widthButton, collections, centertext, filter, buttonGroup
} from './FindBreeds.styles'

const FindBreeds = () => {
    const [radioValue, setRadioValue] = useState('');
    const [radiooValue, setRadiooValue] = useState('');
    const [radioooValue, setRadioooValue] = useState('');

    const radios = [
        { name: 'Small', value: '1' },
        { name: 'Medium', value: '2' },
        { name: 'Large', value: '3' },
        { name: 'Extra Large', value: '4' },
    ];
    const radioss = [
        { name: 'Low', value: '5' },
        { name: 'Moderate', value: '6' },
        { name: 'Hight', value: '7' },
    ];
    const radiosss = [
        { name: 'Ascending Order', value: '7' },
        { name: 'Descending Order', value: '8' },
    ];

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div>
            <div css={wrapperCover}>
                <div css={margin}>
                    <h1 css={whitecolor}>Let Us Help You</h1>
                    <Card css={card}>
                        <h2 css={whitecolor}>Find The Best Breeds For You</h2>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <div css={buttoncard}>
                            <Button variant="light" css={marginbutton}>By Collection</Button>
                            <Button variant="light" css={widthButton}>By Filter</Button>
                        </div>
                    </Card>
                </div>
                <div></div>
            </div>
            <div css={collections}>
                <h2 css={centertext}>Search Our Collections</h2>
                <Carousel responsive={responsive}>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                </Carousel>
            </div>
            <div css={filter}>
                <h2 css={centertext}>Filter Breeds</h2>
                <p css={centertext}>Size</p>
                <div css={buttonGroup}>
                    <ButtonGroup toggle css={widthButton}>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="success"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                        {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <p css={centertext}>Activity Level</p>
                <div css={buttonGroup} className="justify-content-md-center">
                    <ButtonGroup toggle css={widthButton}>
                        {radioss.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="success"
                            name="radio"
                            value={radio.value}
                            checked={radiooValue === radio.value}
                            onChange={(e) => setRadiooValue(e.currentTarget.value)}
                        >
                        {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <p css={centertext}>Find By Alphabetical Order</p>
                <div css={buttonGroup}>
                    <ButtonGroup toggle css={widthButton}>
                        {radiosss.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="success"
                            name="radio"
                            value={radio.value}
                            checked={radioooValue === radio.value}
                            onChange={(e) => setRadioooValue(e.currentTarget.value)}
                        >
                        {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <Row className="justify-content-md-center">
                    <Button variant="success">Filter Result</Button>
                </Row>
            </div>
            <div css={collections}>
                <Row>
                    <Col xs={6} md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                </Row><br/><br/>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                            <Card.Title css={centertext}>Small Cat</Card.Title>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <a href="/">Show More</a>
                </Row>
            </div>
        </div>
    );
};

export default FindBreeds;