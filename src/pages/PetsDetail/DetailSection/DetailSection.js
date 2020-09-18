/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Button, Row, Col, Form } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import {
    detail_section_col,
    detail_section_col_left_first_row,
    detail_section_col_left_second_row,
    row_line,
    detail_section_col_right,
    detail_section_col_right_button
} from './DetailSection.styles'
import ColoredLine from '../../../components/ColoredLine';

const DetailSection = () => {
    return (
        <Row>
            <Col xs={8} css={detail_section_col}>
                <Row css={detail_section_col_left_first_row}>
                    <h1>Pet Name</h1>
                    <h1>$400</h1>
                </Row>
                <Row css={detail_section_col_left_second_row}>
                    <p>Breeds</p>
                    <h5>&bull;</h5>
                    <p>Pet location</p>
                </Row>
                <Row css={row_line}>
                    <ColoredLine color="#000" />
                </Row>
                <Row css={detail_section_col_left_second_row}>
                    <p>Gender</p>
                    <h5>&bull;</h5>
                    <p>Age</p>
                    <h5>&bull;</h5>
                    <p>Size</p>
                </Row>
                <Row css={row_line}>
                    <ColoredLine color="#000" />
                </Row>
                <Row>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor lectus, pulvinar sed gravida id, posuere vel mauris. Sed vehicula sem id lacinia porttitor. Fusce tempor quam risus, a luctus velit gravida eget. Integer nec laoreet orci. Praesent sit amet ipsum nec nisi faucibus semper in non lorem. Aliquam luctus sem quis interdum pellentesque. Aliquam et lobortis libero.
                    Vestibulum auctor erat et lorem mollis fermentum. Suspendisse maximus scelerisque nulla vel mattis. Sed quis lacinia tellus, in ornare est. Fusce et arcu sit amet massa ornare ultricies. Aenean lobortis nisl id est euismod, volutpat porta massa varius. Morbi accumsan tristique nunc, ut porta nunc porta eget. Ut sed nunc sapien. Sed ac ligula at mi volutpat auctor.</p>
                </Row>
            </Col>
            <Col xs={4} css={detail_section_col}>
                <h1>Giver Name</h1>
                <h5>Pet Location</h5>
                <Row>
                    <iframe scrolling="no" title="map" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=%20marina%20bay+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="400" height="200" frameborder="0"></iframe> <script type='text/javascript' src='script.js?id=9daa310da0fcf7860fb39c3f74182bf2930d64f3'></script>
                </Row>
                <Row>
                    <Col xs={12} css={detail_section_col_right}>
                        <h4><FaMapMarkerAlt /></h4>
                        <Form.Control placeholder="pet location" />
                    </Col>
                    <Col xs={12} css={detail_section_col_right}>
                        <h4><MdEmail /></h4>
                        <Form.Control placeholder="email" />
                    </Col>
                    <Col xs={12} css={detail_section_col_right_button}>
                        <Button variant="primary">Ask for Adoption</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default DetailSection;