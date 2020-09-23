/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
    Dropdown,
    Modal,
    Button,
    Navbar,
    Nav,
    Row,
    Container,
    Col,
    Form,
    Badge,
} from "react-bootstrap";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

import Logo from "../../assets/logo-mini-menagerie.png";
import {
    imageStyles,
    shopButton,
    breedsButton,
    formSearch,
    searchText,
    searchButton,
    cart,
    modalBodyStyles,
    bodyTitleStyles,
    wrapperButtonStyles,
    buttonLoginStyles,
    rowFormSignUp,
} from "./Header.styles";

const Header = () => {
    const productCart = useSelector((state) => state.addToCart);
    const [show, setShow] = useState(false);
    const [handleForm, setHandleForm] = useState(false);
    const [loginModal, setHandleLoginModal] = useState(false);
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    let user = JSON.parse(localStorage.getItem('user'))
    let loggedUser = ''
    if(user){
        loggedUser = user.email
    }
    console.log(user);

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (event) => {
        event.preventDefault()
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
    }

    const logout = async (event) => {
        event.preventDefault();
        localStorage.clear()
        window.location.reload()
    }

    const handleLoginSubmit = async(event) => {
        event.preventDefault()
        try {
            const user = await axios.post('http://localhost:8000/userAccount/login', formLogin)
            if(user.status === 200){
                alert('welcome')
                // console.log(user);
                localStorage.setItem('menagerie', user.data.token)
                localStorage.setItem('user', JSON.stringify(user.data.user))
                setShow(false)
            } 
        } catch(error){
            if(error.message === "Request failed with status code 400") {
                alert('password salah')
                setShow(false)

            }
        }

    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const history = useHistory()
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(form);
        try {
            const user = await axios.post('http://localhost:8000/userAccount/register', form)
            if(user.status === 200){
                alert('Register success')
                setShow(false)
            } 
        } catch(error){
            if(error.message === "Request failed with status code 400") {
                alert('email sudah terdaftar')
                setShow(false)

            }
        }
    }
      

    const handleClose = () => {
        setShow(false);
        setHandleForm(false);
        setHandleLoginModal(false);
    };
    const handleShow = () => setShow(true);

    const handleGoogleLogin = () => {
        const urlGoogleLogin = "http://localhost:8000/auth/google";
        window.location.replace(urlGoogleLogin);
    };

    const handleFacebookLogin = () => {
        const urlFacebookLogin = "http://localhost:8000/auth/facebook";
        window.location.replace(urlFacebookLogin);
    };

    const handleShowFormSignUp = () => {
        setHandleForm(true);
    };

    const handleLoginModal = () => {
        setHandleLoginModal(true);
    };

    const handleSignUpModal = () => {
        setHandleLoginModal(false);
    };

    const redirect = (event) => {
        event.preventDefault()
        window.location.href = 'http://localhost:3000/checkout'
    }
    
    if(user === null) {
        return (
            <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img src={Logo} css={imageStyles} alt="Mini Menagerie" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    style={{ width: "100%" }}
                >
                    <Nav className="mr-auto">
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                                css={breedsButton}
                            >
                                Breeds
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/all-breeds">
                                    Dog Breeds
                                </Dropdown.Item>
                                <Dropdown.Item href="/all-breeds">
                                    Cat Breeds
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div css={shopButton}>
                            <a href="/shop">Shop</a>
                        </div>
                    </Nav>
                    <div>
                        <form css={formSearch}>
                            <input
                                type="text"
                                css={searchText}
                                placeholder="Search your future best friend"
                                style={{ maxWidth: "100%" }}
                            ></input>
                            <button type="submit" css={searchButton}>
                                <i className="fas fa-search"></i>
                            </button>
                            <Button type="submit" onClick={redirect} css={cart}>
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                <Badge pill variant="danger">
                                    {productCart.cart !== undefined &&
                                        productCart.cart.length}
                                </Badge>
                            </Button>
                        </form>

                    </div>
                        <div>
                            <Button variant="light" onClick={handleShow}>
                                Sign Up
                            </Button>
                            <Button variant="light" onClick={handleShow}>
                                Log In
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body css={modalBodyStyles}>
                        {loginModal ? (
                            <div>
                                <h2 css={bodyTitleStyles}>Sign In</h2>
                                <Container>
                                    <Form onSubmit={handleLoginSubmit}>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={handleLogin}
                                                    value={formLogin.email}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={handleLogin}
                                                    value={formLogin.password}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Button type="submit" variant="primary" block>
                                                    Log In
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button onClick={handleLoginModal}>
                                                    Forgot password?
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <p>Or login with</p>
                                    <div css={wrapperButtonStyles}>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleGoogleLogin}
                                        >
                                            Sig in with Google
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleFacebookLogin}
                                        >
                                            Sign in with Facebook
                                        </Button>
                                        <p css={buttonLoginStyles}>
                                            Need an account?
                                            <Button onClick={handleSignUpModal}>
                                                Sign Up
                                            </Button>
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        ) : (
                                <div>
                                    <h2 css={bodyTitleStyles}>Sign Up</h2>
                                    <p>Create an Account</p>
                                    {handleForm ? (
                                        <Container>
                                            <Form onSubmit={handleSubmit}>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Full Name"
                                                            name="fullName"
                                                            value={form.fullName}
                                                            onChange={handleInputChange}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Email"
                                                            name="email"
                                                            value={form.email}
                                                            onChange={handleInputChange}
    
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            name="password"
                                                            value={form.password}
                                                            onChange={handleInputChange}
    
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Button type="submit" variant="primary" block>
                                                            Sign Up
                                                    </Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p css={buttonLoginStyles}>
                                                            Already have an account?
                                                        <Button
                                                                onClick={
                                                                    handleLoginModal
                                                                }
                                                            >
                                                                Log In
                                                        </Button>
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Container>
                                    ) : (
                                            <div css={wrapperButtonStyles}>
                                                <Button
                                                    css={buttonLoginStyles}
                                                    variant="primary"
                                                    onClick={handleGoogleLogin}
                                                >
                                                    Signup with Google
                                        </Button>
                                                <Button
                                                    css={buttonLoginStyles}
                                                    variant="primary"
                                                    onClick={handleFacebookLogin}
                                                >
                                                    Signup with Facebook
                                        </Button>
                                                <Button
                                                    css={buttonLoginStyles}
                                                    variant="primary"
                                                    onClick={handleShowFormSignUp}
                                                >
                                                    Signup with Email
                                        </Button>
                                                <p css={buttonLoginStyles}>
                                                    Already have an account?
                                            <Button onClick={handleLoginModal}>
                                                        Log In
                                            </Button>
                                                </p>
                                            </div>
                                        )}
                                </div>
                            )}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    } else if(user !== null){
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">
                        <img src={Logo} css={imageStyles} alt="Mini Menagerie" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="success"
                                    id="dropdown-basic"
                                    css={breedsButton}
                                >
                                    Breeds
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        Dog Breeds
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Cat Breeds
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div css={shopButton}>
                                <a href="/shop">Shop</a>
                            </div>
                        </Nav>
                        <div>
                            <form css={formSearch}>
                                <input
                                    type="text"
                                    css={searchText}
                                    placeholder="Search your future best friend"
                                ></input>
                                <button type="submit" css={searchButton}>
                                    <i className="fas fa-search"></i>
                                </button>
                                <Button type="submit" onClick={redirect} css={cart}>
                                <i className="fas fa-shopping-cart fa-lg"></i>
                                <Badge pill variant="danger">
                                    {productCart.cart !== undefined &&
                                        productCart.cart.length}
                                </Badge>
                            </Button>
                            </form>
                        </div>
                        <div>
                            {loggedUser}
                            <Button onClick={logout} style={{marginLeft: '10px', backgroundColor:'#22891a', color: 'white'}}>
                                Log Out
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body css={modalBodyStyles}>
                        {loginModal ? (
                            <div>
                                <h2 css={bodyTitleStyles}>Sign In</h2>
                                <Container>
                                    <Form onSubmit={handleLoginSubmit}>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    onChange={handleLogin}
                                                    value={formLogin.email}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={handleLogin}
                                                    value={formLogin.password}
                                                />
                                            </Col>
                                        </Row>
                                        <Row css={rowFormSignUp}>
                                            <Col>
                                                <Button type="submit" variant="primary" block>
                                                    Log In
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button onClick={handleLoginModal}>
                                                    Forgot password?
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <p>Or login with</p>
                                    <div css={wrapperButtonStyles}>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleGoogleLogin}
                                        >
                                            Sig in with Google
                                        </Button>
                                        <Button
                                            css={buttonLoginStyles}
                                            variant="primary"
                                            onClick={handleFacebookLogin}
                                        >
                                            Sign in with Facebook
                                        </Button>
                                        <p css={buttonLoginStyles}>
                                            Need an account?
                                            <Button onClick={handleSignUpModal}>
                                                Sign Up
                                            </Button>
                                        </p>
                                    </div>
                                </Container>
                            </div>
                        ) : (
                                <div>
                                    <h2 css={bodyTitleStyles}>Sign Up</h2>
                                    <p>Create an Account</p>
                                    {handleForm ? (
                                        <Container>
                                            <Form onSubmit={handleSubmit}>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Full Name"
                                                            name="fullName"
                                                            value={form.fullName}
                                                            onChange={handleInputChange}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Email"
                                                            name="email"
                                                            value={form.email}
                                                            onChange={handleInputChange}
    
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Password"
                                                            name="password"
                                                            value={form.password}
                                                            onChange={handleInputChange}
    
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row css={rowFormSignUp}>
                                                    <Col>
                                                        <Button type="submit" variant="primary" block>
                                                            Sign Up
                                                    </Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p css={buttonLoginStyles}>
                                                            Already have an account?
                                                        <Button
                                                                onClick={
                                                                    handleLoginModal
                                                                }
                                                            >
                                                                Log In
                                                        </Button>
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Container>
                                    ) : (
                                            <div css={wrapperButtonStyles}>
                                                <Button
                                                    css={buttonLoginStyles}
                                                    variant="primary"
                                                    onClick={handleGoogleLogin}
                                                >
                                                    Signup with Google
                                        </Button>
                                                <Button
                                                    css={buttonLoginStyles}
                                                    variant="primary"
                                                    onClick={handleFacebookLogin}
                                                >
                                                    Signup with Facebook
                                        </Button>
                                                <Button
                                                    css={buttonLoginStyles}
                                                    variant="primary"
                                                    onClick={handleShowFormSignUp}
                                                >
                                                    Signup with Email
                                        </Button>
                                                <p css={buttonLoginStyles}>
                                                    Already have an account?
                                            <Button onClick={handleLoginModal}>
                                                        Log In
                                            </Button>
                                                </p>
                                            </div>
                                        )}
                                </div>
                            )}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
    
};

export default Header;
