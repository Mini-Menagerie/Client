/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Col, Form, Button, Row } from 'react-bootstrap';
import { useState } from 'react'
import axios from 'axios';

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
    const [fullname, setFullname] = useState() //save data
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address, setAddress1] = useState()
    const [city, setCity] = useState()
    const [province, setProvince] = useState()
    const [zip, setZip] = useState()
    const [occupation, setOccupation] = useState()
    const [workingDuration, setWorkingDuration] = useState()
    const [ownRent, setOwnRent] = useState()
    const [otherPets, setOtherPets] = useState()
    const [givenPets, setGivenPets] = useState()
    const [whatPets, setWhatPets] = useState()
    const [cage, setCage] = useState()
    const [income, setIncome] = useState()
    const [reason, setReason] = useState()
    const [children, setChildren] = useState()

    const handleFullName = (e) => { //get value from options and input
        setFullname(e.target.value)
        console.log(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
        console.log(e.target.value);
    }
    const handleOwnRent = (e) => {
        setOwnRent(e.target.value)
        console.log(e.target.value);
    }
    const handleAddress1 = (e) => {
        setAddress1(e.target.value)
        console.log(e.target.value);
    }
    const handleCity = (e) => {
        setCity(e.target.value)
        console.log(e.target.value);
    }
    const handleZip = (e) => {
        setZip(e.target.value)
        console.log(e.target.value);
    }
    const handleProvince = (e) => {
        setProvince(e.target.value)
        console.log(e.target.value);
    }
    const handleOccupation = (e) => {
        setOccupation(e.target.value)
        console.log(e.target.value);
    }
    const handleDuration = (e) => {
        console.log(e.target.value);
        setWorkingDuration(e.target.value)
    }
    const handleGivenPets = (e) => {
        setGivenPets(e.target.value)
        console.log(e.target.value);
    }
    const handleOtherPets = (e) => {
        setOtherPets(e.target.value)
        console.log(e.target.value);
    }
    const handleWhatPets = (e) => {
            setWhatPets(e.target.value)
            console.log(e.target.value);
        }
    const handleCage = (e) => {
        setCage(e.target.value)
        console.log(e.target.value);
    }
    const handleIncome = (e) => {
        setIncome(e.target.value)
        console.log(e.target.value);
    }
    const handleChildren = (e) => {
        setChildren(e.target.value)
        console.log(e.target.value);
    }
    const handleReason = (e) => {
        setReason(e.target.value)
        console.log(e.target.value);
    }

    const formSubmission = { //left is api property, right is your property ([take this], setblahblah)
        fullName: fullname,
        noHandhpone: phoneNumber,
        province: province,
        email:"chris@gmail.com",
        state: city,
        detailAddress: address,
        work: occupation,
        zip_code: zip,
        salary: income,
        workDuration: workingDuration,
        houseStatus: ownRent,
        otherPet: otherPets,
        hasGivenPet: givenPets,
        hasChildrenAtHouse: children,
        zip_code: zip,
        
    }
        const handleSubmit = (event) => {
          console.log(formSubmission)
            // axios.post(`http://localhost:8000/users/{$id}`, { formSubmission }) //endpoint
            //  .then(res => {
            //    console.log(res);
            //    console.log(res.data);
            //  })
        }

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
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onChange={handleFullName} placeholder="Full Name" />
                            </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control onChange={handleEmail} type="email" placeholder="chris@gamil.com" value="chris@gmail.com" disabled/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={handlePhoneNumber} placeholder="+628152368854" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleAddress1} placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={handleCity} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Province</Form.Label>
                            <Form.Control onChange={handleProvince} as="select" defaultValue="Choose...">
                                <option value="Aceh">Aceh</option>
                                <option value="Bali">Bali</option>
                                <option value="Bangka Belitung">Bangka Belitung</option>
                                <option value="Central Java">Central Java</option>
                                <option value="Central Sulawesi">Central Sulawesi</option>
                                <option value="East Java"> East Java</option>
                                <option value="East kalimantan">East Kalimantan</option>
                                <option value="Jakarta">Special Capital Region of Jakarta</option>
                                <option value="Lampung">Lampung</option>
                                <option value="Papua">Papua</option>
                                <option value="Riau">Riau</option>
                                <option value="Yogyakarta">Special Region of Yogyakarta</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control onChange={handleZip} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control onChange={handleOccupation} placeholder="Student" />
                        </Form.Group>
                   

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
                                name="<6 Hours"
                                id="formHorizontalRadios1"
                                value="<6 Hours"
                                checked={workingDuration === "<6 Hours"}
                                onChange={handleDuration}
                                />
                                <Form.Check
                                type="radio"
                                label="6-10 hours"
                                name="6-10 Hours"
                                id="formHorizontalRadios2"
                                value="6-10 Hours"
                                checked={workingDuration === "6-10 Hours"}
                                onChange={handleDuration}
                                />
                                <Form.Check
                                type="radio"
                                label=">10 hours"
                                name=">10 Hours"
                                id="formHorizontalRadios3"
                                value=">10 Hours"
                                checked={workingDuration === ">10 Hours"}
                                onChange={handleDuration}
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
                                name="own"
                                id="formHorizontalRadios1"
                                value="own"
                                checked={ownRent === "own"}
                                onChange={handleOwnRent}
                                />
                                <Form.Check
                                type="radio"
                                label="Rent"
                                name="rent"
                                id="formHorizontalRadios2"
                                value="rent"
                                checked={ownRent === "rent"}
                                onChange={handleOwnRent}
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                3. Have You Ever Given Pets Up For Adoption?
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name="yes"
                                id="formHorizontalRadios1"
                                value="yes"
                                checked={givenPets === "yes"}
                                onChange={handleGivenPets}
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="no"
                                id="formHorizontalRadios2"
                                value="no"
                                checked={givenPets === "no"}
                                onChange={handleGivenPets}
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                3. Do You Have Small Children in the House?
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name="yes"
                                id="formHorizontalRadios1"
                                value="yes"
                                checked={children === "yes"}
                                onChange={handleChildren}
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="no"
                                id="formHorizontalRadios2"
                                value="no"
                                checked={children === "no"}
                                onChange={handleChildren}
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
                                name="yes"
                                id="formHorizontalRadios1"
                                value="yes"
                                checked={otherPets === "yes"}
                                onChange={handleOtherPets}
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="no"
                                id="formHorizontalRadios2"
                                value="no"
                                checked={otherPets === "no"}
                                onChange={handleOtherPets}
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1" css={formSpacing}>
                                <Form.Label>4. If yes, what pets do you own?</Form.Label>
                                <Form.Control onChange={handleWhatPets} placeholder="Large Dogs, Cats, Reptiles..." />
                            </Form.Group>

                            <Form.Group as={Row}  css={formSpacing}>
                            <Form.Label as="legend" column sm={6}size="lg">
                                5. Do You Tend to Keep Your Pets in a Cage?
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Check
                                type="radio"
                                label="Yes"
                                name="yes"
                                id="formHorizontalRadios1"
                                value="yes"
                                checked={cage === "yes"}
                                onChange={handleCage}
                                />
                                <Form.Check
                                type="radio"
                                label="No"
                                name="no"
                                id="formHorizontalRadios2"
                                value="no"
                                checked={cage === "no"}
                                onChange={handleCage}
                                />
                                <Form.Check
                                type="radio"
                                label="Sometimes"
                                name="sometimes"
                                id="formHorizontalRadios2"
                                value="sometimes"
                                checked={cage === "sometimes"}
                                onChange={handleCage}
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
                                name="<5.000.000"
                                id="formHorizontalRadios1"
                                value="<5.000.000"
                                checked={income === "<5.000.000"}
                                onChange={handleIncome}
                                />
                                <Form.Check
                                type="radio"
                                label="Rp. 5.000.000 IDR - Rp. 10.000.000 IDR"
                                name="5.000.000-10.000.000"
                                id="formHorizontalRadios2"
                                value="5.000.000-10.000.000"
                                checked={income === "5.000.000-10.000.000"}
                                onChange={handleIncome}
                                />
                                <Form.Check
                                type="radio"
                                label="> Rp. 10.000.000 IDR"
                                name=">10.000.000"
                                id="formHorizontalRadios2"
                                value=">10.000.000"
                                checked={income === ">10.000.000"}
                                onChange={handleIncome}
                                />
                            </Col>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1" css={formSpacing}>
                                <Form.Label>7. Finally, Tell Us Why You'd Like To Adopt this Pet!</Form.Label>
                                <Form.Control onChange={handleReason} as="textarea" rows="3" placeholder="I'd Like To Adopt This Pet Because..."/>
                            </Form.Group>

                            <div css={buttonPlacement}>
                                 <PrimaryButton css={buttonPlacement}>Submit Form</PrimaryButton>
                            </div>
                        </fieldset>
                        </Form>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdoptionForm;