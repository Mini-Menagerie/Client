/** @jsx jsx */
import { jsx } from '@emotion/core'

import { Card, Button, FormControl, Row, Col } from 'react-bootstrap';

import {
  wrapperCover,
  whitecolor,
  card, margin, buttoncard, buttoncardd, collections, centertext
} from './FindBreeds.styles'

const FindBreeds = () => {
    return (
        <div>
            <div css={wrapperCover}>
                <div css={margin}>
                    <h2 css={whitecolor}>Let Us Help You</h2>
                    <Card css={card}>
                        <h2 css={whitecolor}>Find The Best Breeds For You</h2>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <div css={buttoncard}>
                            <Button variant="light" css={buttoncardd}>By Collection</Button>
                            <Button variant="light" css={buttoncardd}>By Filter</Button>
                        </div>
                    </Card>
                </div>
                <div></div>
            </div>
            <div css={collections}>
                <h2 css={centertext}>Search Our Collections</h2>
            </div>
            <div>
                <h2>Filter Breeds</h2>
                <p>Size</p>
                <p>Activity Level</p>
                <p>Fins By Alphabetical Order</p>
                <Button variant="light">Filter Result</Button>
            </div>
        </div>
    );
};

export default FindBreeds;