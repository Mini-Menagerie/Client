/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Col, Form, Button, Row } from 'react-bootstrap';

import PrimaryButton from '../../components/Button/Button'
import {
    adoptionForm,
    coverImages,
    cover,
    form,
    formTitle,
    adoptionWrapper,
    adoptionTitle,
    formInput,
    personalData,
    tellUs,
    formSpacing,
    buttonPlacement
} from './AdoptionForm.styles'
import rabbit from '../../assets/rabbitCover.png'
import dog from '../../assets/dogCover.png'
import cat from '../../assets/catCover.png'
import hamster from '../../assets/hamsterCover.png'
import bird from '../../assets/birdCover.png'

const AdoptionForm = () => {
    return(
        <div css={adoptionWrapper}>
            <div css={adoptionTitle}>
                <h1>
                    Hello There!
                </h1>
                <h4>
                    Please Fill Out the Form Below to Continue the Adoption Process
                </h4>
            </div>
            <div css={adoptionForm}>
                <div css={cover}>
                    <div><img src={dog} css={coverImages} alt="dog"></img></div>
                    <div><img src={cat} css={coverImages} alt="cat"></img></div>
                    <div><img src={rabbit} css={coverImages} alt="rabbit"></img></div>
                    <div><img src={bird} css={coverImages} alt="bird"></img></div>
                    <div><img src={hamster} css={coverImages} alt="hamster"></img></div>
                </div>
                <div css={form}>
                    <div>
                        <h2 css={formTitle}>PET ADOPTION FORM</h2>
                    </div>
                    <div css={formInput}>
                    <h3 css={personalData}>PERSONAL DATA</h3>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control placeholder="Full Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Aceh</option>
                                <option>Bali</option>
                                <option>Bangka Belitung</option>
                                <option>Central Java</option>
                                <option>Central Sulawesi</option>
                                <option>East Java</option>
                                <option>Eash Kalimantan</option>
                                <option>Special Capital Region of Jakarta</option>
                                <option>Lampung</option>
                                <option>Papua</option>
                                <option>Riau</option>
                                <option>Special Region of Yogyakarta</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control placeholder="Student" />
                        </Form.Group>
                    </Form>

                    <h3 css={tellUs}>TELL US A BIT ABOUT YOU!</h3>

                    <Form>
                        <fieldset>
                            <Form.Group as={Row} css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                1. Duration of working outside of your home:
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="<6 hours"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="6-10 hours"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                label=">10 hours"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                2. Do you own or rent your home?
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="Own"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="Rent"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                3. Do You Have Other Pets?
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1" css={formSpacing}>
                                <Form.Label>4. If yes, what pets do you own?</Form.Label>
                                <Form.Control placeholder="Large Dogs, Cats, Reptiles..." />
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                5. Do You Tend to Keep Your Pets in a Cage?
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                label="Sometimes"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                6. What is Your Monthly Income? <br></br>
                                (This is to check Pet Maintenance costs)
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="< Rp. 5.000.000 IDR"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="Rp. 5.000.000 IDR - Rp. 10.000.000 IDR"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                label="> Rp. 10.000.000 IDR"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1" css={formSpacing}>
                                <Form.Label>7. Finally, Tell Us Why You'd Like To Adopt this Pet!</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="I'd Like To Adopt This Pet Because..."/>
                            </Form.Group>

                            <div css={buttonPlacement}>
                                 <PrimaryButton css={buttonPlacement}>Submit Form</PrimaryButton>
                            </div>
                        </fieldset>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdoptionForm;